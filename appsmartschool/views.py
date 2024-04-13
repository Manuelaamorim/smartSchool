from django.shortcuts import render, redirect
from django.contrib import messages
from .models import UserAluno
from .models import UserProfessor
from .models import UserFuncionario
from .models import Dados_saude
from .models import MensagemContato
from .models import Frequencia_Aluno
from django.http import HttpResponseRedirect
from django.http import HttpResponse
from django.shortcuts import render
from django.contrib.auth import authenticate, login
from django.contrib.auth.decorators import login_required
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
                return redirect('appsmartschool:menu_aluno')  # Certifique-se que a URL está correta
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
                return redirect('appsmartschool:menu_funcionario')  # Certifique-se que a URL está correta
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
        messages.error(request, 'Aluno não cadastrado.')
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
def menu_aluno(request):
    return render(request, 'appsmartschool/menu_aluno.html')

@login_required
def menu_professor(request):
    return render(request, 'appsmartschool/menu_professor.html')

@login_required
def menu_funcionario(request):
    return render(request, 'appsmartschool/menu_funcionario.html')

@login_required
def logout_view(request):
    logout(request)
    # Redireciona para a página de login, ou outra página que desejar
    return redirect('appsmartschool:tela_inicial')
