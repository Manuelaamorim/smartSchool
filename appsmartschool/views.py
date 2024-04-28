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
    return render(request, 'appsmartschool/login_professor.html')

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

    try:
        # Supondo que UserAluno tem um campo 'user' que é uma ForeignKey para o User
        user_aluno = UserAluno.objects.get(user=request.user)
        dados = Dados_saude.objects.filter(user_aluno=user_aluno)
        if not dados:
            messages.error(request, 'Dados de saúde não cadastrados.')
    except UserAluno.DoesNotExist:
        messages.error(request, 'Aluno não cadastrado.', extra_tags='dados')
        dados = []

    return render(request, 'appsmartschool/dados_saude.html', {"dados": dados})

@login_required
def frequencia_alunos_visualizar(request):
    try:
        # Supondo que UserAluno tem um campo 'user' que é uma ForeignKey para o User
        user_aluno = UserAluno.objects.get(user=request.user)
        frequencias = Frequencia_Aluno.objects.filter(user_aluno=user_aluno)
        if not frequencias:
            messages.error(request, 'Frequência não cadastrada.')
    except UserAluno.DoesNotExist:
        messages.error(request, 'Aluno não cadastrado.')
        frequencias = []

    return render(request, 'appsmartschool/frequencia.html', {"frequencias": frequencias})


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
def contato_sucesso(request):
    return render(request, 'appsmartschool/contato_sucesso.html')

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
        horarios = HorarioAula.objects.filter(serie=aluno.serie)
        if not horarios:
            messages.error(request, "Não há horários cadastrados para sua série e turma.")
            return redirect('appsmartschool:home_aluno')
        return render(request, 'appsmartschool/horarios.html', {'horarios': horarios})
    except UserAluno.DoesNotExist:
        messages.error(request, "Perfil de aluno não encontrado.")
        return redirect('appsmartschool:tela_inicial')
    
@login_required
def visualiza_notas(request):
    try:
        aluno = UserAluno.objects.get(user=request.user)  # Pega o aluno logado
        notas = Notas.objects.filter(aluno=aluno)  # Filtra as notas pelo aluno
        if not notas:
            messages.error(request, "Não há notas cadastradas para este aluno.")
            return redirect('appsmartschool:home_aluno')
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
            professor = UserProfessor(user=user, nome=nome, matricula=matricula, cpf=cpf,
                                      data_de_nascimento=data_de_nascimento, telefone=telefone, email=email)
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
