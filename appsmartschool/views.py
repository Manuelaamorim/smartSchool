from sqlite3 import IntegrityError
from django.shortcuts import render, redirect
from django.contrib import messages
from .models import *
from django.http import HttpResponseRedirect
from django.http import HttpResponse
from django.shortcuts import render
from django.contrib.auth import authenticate, login
from django.contrib.auth.decorators import login_required
from django.contrib.auth.models import User
from django.contrib.auth import logout
from django.shortcuts import render, redirect, get_object_or_404
from django.http import JsonResponse
from django.contrib.auth.decorators import login_required
from .models import Turma, UserAluno

def tela_inicial(request):
    return render(request, 'appsmartschool/tela_inicial.html')

def login_aluno(request):
    context = {}  # Inicializa o contexto vazio
    if request.method == "POST":
        cpf = request.POST.get('username')
        senha = request.POST.get('password')
        
        # Verifica se um usuário com esse CPF existe em UserAluno
        try:
            user_aluno = UserAluno.objects.get(cpf=cpf)
            # Se o CPF existe, tenta autenticar com o usuário relacionado
            user = authenticate(request, username=user_aluno.user.username, password=senha)
            if user is not None:
                login(request, user)
                return redirect('appsmartschool:home_aluno')  # Certifique-se que a URL está correta
            else:
                # CPF existe, mas a senha está errada
                context['senha_error'] = True
        except UserAluno.DoesNotExist:
            # Nenhum UserAluno com este CPF
            context['cpf_error'] = True

    return render(request, 'appsmartschool/login_aluno.html', context)

def login_professor(request):
    context = {}  # Inicializa o contexto vazio
    if request.method == "POST":
        cpf = request.POST.get('username')
        senha = request.POST.get('password')
        
        # Verifica se um usuário com esse CPF existe em UserAluno
        try:
            user_professor = UserProfessor.objects.get(cpf=cpf)
            # Se o CPF existe, tenta autenticar com o usuário relacionado
            user = authenticate(request, username=user_professor.user.username, password=senha)
            if user is not None:
                login(request, user)
                return redirect('appsmartschool:home_professor')  # Certifique-se que a URL está correta
            else:
                # CPF existe, mas a senha está errada
                context['senha_error'] = True
        except UserProfessor.DoesNotExist:
            # Nenhum UserAluno com este CPF
            context['cpf_error'] = True

    return render(request, 'appsmartschool/login_professor.html', context)


def login_funcionario(request):
    context = {}  # Inicializa o contexto vazio
    if request.method == "POST":
        cpf = request.POST.get('username')
        senha = request.POST.get('password')
        
        # Verifica se um usuário com esse CPF existe em UserAluno
        try:
            user_funcionario = UserFuncionario.objects.get(cpf=cpf)
            # Se o CPF existe, tenta autenticar com o usuário relacionado
            user = authenticate(request, username=user_funcionario.user.username, password=senha)
            if user is not None:
                login(request, user)
                return redirect('appsmartschool:home_funcionario')  # Certifique-se que a URL está correta
            else:
                # CPF existe, mas a senha está errada
                context['senha_error'] = True
        except UserFuncionario.DoesNotExist:
            # Nenhum UserAluno com este CPF
            context['cpf_error'] = True

    return render(request, 'appsmartschool/login_funcionario.html', context)


@login_required
def dados_saude_visualizar(request):
    user = request.user
    aluno = get_object_or_404(UserAluno, user=user)
    context = {
        'nome': aluno.nome,
        'peso': aluno.peso,
        'altura': aluno.altura,
        'restricao_alimentar': aluno.restricao_alimentar,
        'tdah': aluno.tdah,
        'pcd': aluno.pcd
    }
    return render(request, 'appsmartschool/dados_saude.html', context)


@login_required
def frequencia_alunos_visualizar(request):
    user_aluno = UserAluno.objects.get(user=request.user)
    disciplinas = Disciplina.objects.all()
    frequencia_dados = []

    for disciplina in disciplinas:
        total_aulas = Presenca.objects.filter(aluno=user_aluno, materia=disciplina).count()
        faltas = Presenca.objects.filter(aluno=user_aluno, materia=disciplina, presente=False).count()
        if total_aulas > 0:
            porcentagem_faltas = ((total_aulas - faltas) / total_aulas) * 100
        else:
            porcentagem_faltas = 100
        
        frequencia_dados.append({
            'disciplina': disciplina.nome,
            'total_aulas': total_aulas,
            'faltas': faltas,
            'porcentagem_faltas': porcentagem_faltas
        })

    try:
        user_aluno = UserAluno.objects.get(user=request.user)
        disciplinas = Disciplina.objects.all()
        if not disciplinas.exists():
            messages.error(request, 'Dados de saúde não cadastrados.')
    except UserAluno.DoesNotExist:
        messages.error(request, 'Aluno não cadastrado.', extra_tags='disciplinas')


    return render(request, 'appsmartschool/frequencia.html', {'frequencia_dados': frequencia_dados, 'user_aluno': user_aluno})




@login_required
def formulario_contato(request):
    if request.method == 'POST':
        nome = request.POST.get('nome')
        email = request.POST.get('email')
        telefone = request.POST.get('telefone')
        mensagem = request.POST.get('mensagem')

        MensagemContato.objects.create(nome=nome, email=email, telefone=telefone, mensagem=mensagem)

        # Após salvar os dados, redirecione para uma página de sucesso
        return redirect('appsmartschool:contato_sucesso')

    return render(request, 'appsmartschool/formulario_contato.html')

@login_required
def formulario_contato_prof(request):
    if request.method == 'POST':
        nome = request.POST.get('nome')
        email = request.POST.get('email')
        telefone = request.POST.get('telefone')
        mensagem = request.POST.get('mensagem')

        MensagemContato.objects.create(nome=nome, email=email, telefone=telefone, mensagem=mensagem)

        # Após salvar os dados, redirecione para uma página de sucesso
        return redirect('appsmartschool:contato_sucesso_prof')

    return render(request, 'appsmartschool/formulario_contato_prof.html')

@login_required
def contato_sucesso(request):
    return render(request, 'appsmartschool/contato_sucesso.html')

@login_required
def contato_sucesso_prof(request):
    return render(request, 'appsmartschool/contato_sucesso_prof.html')

@login_required
def home_aluno(request):
    return render(request, 'appsmartschool/home_aluno.html')

@login_required
def home_professor(request):
    return render(request, 'appsmartschool/home_professor.html')

@login_required
def home_funcionario(request):
    return render(request, 'appsmartschool/home_funcionario.html')

@login_required
def logout_view(request):
    logout(request)
    # Redireciona para a página de login, ou outra página que desejar
    return redirect('appsmartschool:tela_inicial')

@login_required
def visualizar_horario(request):
    try:
        aluno = UserAluno.objects.get(user=request.user)
        horarios = HorarioAula.objects.filter(serie=aluno.serie, turma=aluno.turma)
        if not horarios.exists():
            messages.error(request, "Não há horários cadastrados para sua série e turma.", extra_tags='horarios')
            return render(request, 'appsmartschool/horarios.html', {'aluno': aluno, 'horarios': horarios})
        return render(request, 'appsmartschool/horarios.html', {'aluno': aluno, 'horarios': horarios})
    except UserAluno.DoesNotExist:
        messages.error(request, "Aluno não encontrado.", extra_tags='horarios')
        return render(request, 'erro.html', {'mensagem': 'Aluno não encontrado.'})
    
@login_required
def visualiza_notas(request):
    try:
        aluno = UserAluno.objects.get(user=request.user)
        notas = Notas.objects.filter(aluno=aluno)
        if not notas.exists():  # Usa exists() para verificar se a queryset está vazia
            messages.error(request, "Não há notas cadastradas para este aluno.", extra_tags='notas')
            return render(request, 'appsmartschool/notas.html', {'aluno': aluno, 'notas': notas})  # Mantenha na mesma página
        return render(request, 'appsmartschool/notas.html', {'aluno': aluno, 'notas': notas})
    except UserAluno.DoesNotExist:
        messages.error(request, "Aluno não encontrado.", extra_tags='notas')
        return render(request, 'erro.html', {'mensagem': 'Aluno não encontrado.'})

@login_required  
def cadastro_professor(request):
    if request.method == 'POST':
        nome = request.POST.get('nome')
        matricula = request.POST.get('matricula')
        cpf = request.POST.get('cpf')
        data_de_nascimento = request.POST.get('data_de_nascimento')
        telefone = request.POST.get('telefone')
        email = request.POST.get('email')

        # Verificar se já existe um usuário com o mesmo CPF
        if User.objects.filter(username=cpf).exists():
            messages.error(request, 'Um usuário com este CPF já está cadastrado.')
            return render(request, 'appsmartschool/cadastro_professor.html')

        try:
            # Criar usuário Django usando CPF como nome de usuário e matrícula como senha
            user = User.objects.create_user(username=cpf, email=email, password=matricula)
            user.save()

            # Criar o UserProfessor
            professor = UserProfessor(user=user, nome=nome, matricula=matricula, cpf=cpf, data_de_nascimento=data_de_nascimento, telefone=telefone, email=email)
            professor.save()

            return redirect('appsmartschool:cadastro_sucesso')
        
        except IntegrityError:
            messages.error(request, 'Falha ao criar o usuário. CPF já utilizado.')
        except Exception as e:
            messages.error(request, f'Erro ao cadastrar professor: {e}')

    return render(request, 'appsmartschool/cadastro_professor.html')

@login_required
def cadastro_sucesso(request):
    return render(request, 'appsmartschool/cadastro_sucesso.html')

@login_required
def cadastro_disciplina(request):
    if request.method == 'POST':
        codigo = request.POST.get('codigo')
        nome = request.POST.get('nome')
        carga_horaria = request.POST.get('carga_horaria')
        ementa = request.POST.get('ementa')

        # Validação da carga horária
        if int(carga_horaria) > 200:
            messages.error(request, "A carga horária não deve exceder 200.")
            return render(request, 'appsmartschool/cadastro_disciplina.html')

        # Verifica se já existe uma disciplina com o mesmo código
        if Disciplina.objects.filter(codigo=codigo).exists():
            messages.error(request, "Uma disciplina com este código já está cadastrada.")
            return render(request, 'appsmartschool/cadastro_disciplina.html')

        # Verifica se já existe uma disciplina com o mesmo nome
        if Disciplina.objects.filter(nome=nome).exists():
            messages.error(request, "Uma disciplina com este nome já está cadastrada.")
            return render(request, 'appsmartschool/cadastro_disciplina.html')
        
        try:
            # Cria uma nova disciplina
            Disciplina.objects.create(codigo=codigo, nome=nome, carga_horaria=carga_horaria, ementa=ementa)
            return redirect('appsmartschool:cadastro_sucesso')
        except Exception as e:
            messages.error(request, f'Erro ao cadastrar disciplina: {e}')
            return render(request, 'appsmartschool/cadastro_disciplina.html')

    return render(request, 'appsmartschool/cadastro_disciplina.html')

@login_required
def cadastro_aluno(request):
    if request.method == 'POST':
        nome = request.POST.get('nome')
        matricula = request.POST.get('matricula')
        cpf = request.POST.get('cpf')
        data_de_nascimento = request.POST.get('data_de_nascimento')
        endereco = request.POST.get('endereco')
        serie = request.POST.get('serie')
        turma = request.POST.get('turma').upper()
        nome_responsavel = request.POST.get('nome_responsavel')
        cpf_responsavel = request.POST.get('cpf_responsavel')
        telefone = request.POST.get('telefone')
        email_responsavel = request.POST.get('email_responsavel')
        peso = request.POST.get('peso')
        altura = request.POST.get('altura')
        restricao_alimentar = request.POST.get('restricao_alimentar')
        tdah = request.POST.get('tdah')
        pcd = request.POST.get('pcd')

        # Verificar se já existe um usuário com o mesmo CPF
        if User.objects.filter(username=cpf).exists():
            messages.error(request, 'Um usuário com este CPF já está cadastrado.')
            return render(request, 'appsmartschool/cadastro_aluno.html')
        
        if not Turma.objects.filter(serie=serie, turma=turma).exists():
            messages.error(request, 'A combinação de Série e Turma não existe.')
            return render(request, 'appsmartschool/cadastro_aluno.html')
        

        try:
            # Criar usuário Django usando CPF como nome de usuário e matrícula como senha
            user = User.objects.create_user(username=cpf, password=matricula)
            user.save()

            # Criar o UserAluno
            aluno = UserAluno(user=user, nome=nome, matricula=matricula, cpf=cpf, data_de_nascimento=data_de_nascimento, endereco=endereco, serie=serie, nome_responsavel=nome_responsavel, cpf_responsavel=cpf_responsavel, telefone=telefone, email_responsavel = email_responsavel, peso=peso, altura=altura, restricao_alimentar=restricao_alimentar, tdah=tdah, pcd=pcd)
            aluno.save()

            return redirect('appsmartschool:cadastro_sucesso')
        
        except IntegrityError:
            messages.error(request, 'Falha ao criar o usuário. CPF já utilizado.')
        except Exception as e:
            messages.error(request, f'Erro ao cadastrar aluno: {e}')

    return render(request, 'appsmartschool/cadastro_aluno.html')


@login_required
def cadastro_turma(request):
    if request.method == 'POST':
        serie = request.POST.get('serie')
        turma = request.POST.get('turma').upper()
        materia_1 = request.POST.get('materia_1')
        codigo_materia_1 = request.POST.get('codigo_materia_1')
        materia_2 = request.POST.get('materia_2')
        codigo_materia_2 = request.POST.get('codigo_materia_2')
        materia_3 = request.POST.get('materia_3')
        codigo_materia_3 = request.POST.get('codigo_materia_3')
        materia_4 = request.POST.get('materia_4')
        codigo_materia_4 = request.POST.get('codigo_materia_4')
        docente = request.POST.get('docente')
        matricula_docente = request.POST.get('matricula_docente')

        if Turma.objects.filter(serie=serie, turma=turma).exists():
            messages.error(request, 'A turma já existe.')
            return render(request, 'appsmartschool/cadastro_turma.html')
        
        
        if Turma.objects.filter(codigo_materia_1=codigo_materia_1).exists():
            messages.error(request, 'Código da materia 1 já existe.')
            return render(request, 'appsmartschool/cadastro_turma.html')
        
        if Turma.objects.filter(codigo_materia_2=codigo_materia_2).exists():
            messages.error(request, 'Código da materia 2 já existe.')
            return render(request, 'appsmartschool/cadastro_turma.html')
        
        if Turma.objects.filter(codigo_materia_3=codigo_materia_3).exists():
            messages.error(request, 'Código da materia 3 já existe.')
            return render(request, 'appsmartschool/cadastro_turma.html')
        
        if Turma.objects.filter(codigo_materia_4=codigo_materia_4).exists():
            messages.error(request, 'Código da materia 4 já existe.')
            return render(request, 'appsmartschool/cadastro_turma.html')
        
        if Turma.objects.filter(docente=docente, matricula_docente=matricula_docente).exists():
            messages.error(request, 'O docente já esta cadastrado.')
            return render(request, 'appsmartschool/cadastro_turma.html')
        

        if not UserProfessor.objects.filter(nome=docente, matricula=matricula_docente).exists():
            messages.error(request, 'Docente não cadastrado.')
            return render(request, 'appsmartschool/cadastro_turma.html')

        if not Disciplina.objects.filter(nome=materia_1).exists():
            messages.error(request, 'Matéria 1 não cadastrada.')
            return render(request, 'appsmartschool/cadastro_turma.html')
        
        if not Disciplina.objects.filter(nome=materia_2).exists():
            messages.error(request, 'Matéria 2 não cadastrada.')
            return render(request, 'appsmartschool/cadastro_turma.html')
        
        if not Disciplina.objects.filter(nome=materia_3).exists():
            messages.error(request, 'Matéria 3 não cadastrada.')
            return render(request, 'appsmartschool/cadastro_turma.html')
        
        if not Disciplina.objects.filter(nome=materia_4).exists():
            messages.error(request, 'Matéria 4 não cadastrada.')
            return render(request, 'appsmartschool/cadastro_turma.html')
        
        if not Disciplina.objects.filter(codigo=codigo_materia_1).exists():
            messages.error(request, 'Código da materia 1 não cadastrado.')
            return render(request, 'appsmartschool/cadastro_turma.html')
        
        if not Disciplina.objects.filter(codigo=codigo_materia_2).exists():
            messages.error(request, 'Código da materia 2 não cadastrado.')
            return render(request, 'appsmartschool/cadastro_turma.html')
        
        if not Disciplina.objects.filter(codigo=codigo_materia_3).exists():
            messages.error(request, 'Código da materia 3 não cadastrado.')
            return render(request, 'appsmartschool/cadastro_turma.html')
        
        if not Disciplina.objects.filter(codigo=codigo_materia_4).exists():
            messages.error(request, 'Código da materia 4 não cadastrado.')
            return render(request, 'appsmartschool/cadastro_turma.html')

        try:
            serie_turma = Turma(serie=serie, turma=turma, materia_1=materia_1, materia_2=materia_2, materia_3=materia_3, materia_4=materia_4, codigo_materia_1=codigo_materia_1, codigo_materia_2=codigo_materia_2, codigo_materia_3=codigo_materia_3, codigo_materia_4=codigo_materia_4)
            serie_turma.save()

            messages.success(request, 'Turma cadastrada com sucesso!')
            return redirect('appsmartschool:cadastro_sucesso')
        
        except Exception as e:
            messages.error(request, f'Erro ao cadastrar Turma: {e}')
            return render(request, 'appsmartschool/cadastro_turma.html')

    return render(request, 'appsmartschool/cadastro_turma.html')


from django.contrib import messages

@login_required
def registrar_presenca(request):
    disciplinas = Disciplina.objects.all()
    turmas = Turma.objects.all()
    alunos = []
    selected_turma_id = None

    if request.method == 'POST':
        data = request.POST.get('data')
        materia_id = request.POST.get('materia')
        selected_turma_id = request.POST.get('turma_id')
        
        if selected_turma_id:
            turma = Turma.objects.get(id=selected_turma_id)
            alunos = UserAluno.objects.filter(serie=turma.serie, turma=turma.turma)
            
            for aluno in alunos:
                # A chave para cada aluno determina se ele estava presente
                presente = request.POST.get('presenca_' + str(aluno.id), 'false') == 'true'
                Presenca.objects.create(
                    aluno=aluno,
                    data=data,
                    presente=presente,  # Verdadeiro se marcado, falso se não marcado
                    materia_id=materia_id
                )
            messages.success(request, "Presenças registradas com sucesso!")
            return redirect('appsmartschool:registrar_presenca')

    return render(request, 'appsmartschool/registrar_presenca.html', {
        'turmas': turmas, 
        'disciplinas': disciplinas, 
        'alunos': alunos,
        'selected_turma_id': selected_turma_id
    })



@login_required
def get_alunos_by_turma(request, turma_id):
    try:
        turma = Turma.objects.get(id=turma_id)
        alunos = UserAluno.objects.filter(serie=turma.serie, turma=turma.turma).values('id', 'nome')
        return JsonResponse(list(alunos), safe=False)
    except Turma.DoesNotExist:
        return JsonResponse({'error': 'Turma não encontrada'}, status=404)

