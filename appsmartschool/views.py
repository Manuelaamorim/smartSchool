from django.shortcuts import render, redirect
from django.contrib import messages
from .models import UserAluno
from .models import Dados_saude
from .models import MensagemContato
from .models import Frequencia_Aluno
from django.http import HttpResponseRedirect
from django.http import HttpResponse
from django.shortcuts import render

def login(request):
    if request.method == 'POST':
        cpf = request.POST.get('cpf')
        matricula = request.POST.get('matricula')

        try:
            # Verifica se o usuário existe com base no CPF e na matrícula
            user = UserAluno.objects.get(cpf=cpf, matricula=matricula)
            # Se o usuário existe, redireciona para a página de sucesso
            return redirect('pagina_de_sucesso')  # Altere 'pagina_de_sucesso' para a sua página de sucesso
        except UserAluno.DoesNotExist:
            # Se o usuário não existe ou a matrícula está incorreta, exibe uma mensagem de erro
            messages.error(request, 'CPF ou matrícula incorretos.')
    return render(request, 'appsmartschool/login.html')

def dados_saude_visualizar(request):

    try:
        dados = Dados_saude.objects.all()
    except Dados_saude.DoesNotExist:
        messages.error(request, 'Dados de saúde não cadastrados.')

    return render(request, 'appsmartschool/dados_saude.html', {"dados":dados})
        #precisa criar um novo html?


def frequencia_alunos_visualizar(request):

    try:
        frequencia = Frequencia_Aluno.objects.all()
    except Frequencia_Aluno.DoesNotExist:
        messages.error(request, 'Frequência não cadastrada.')

    return render(request, 'appsmartschool/frequencia.html', {"frequencia": frequencia})


def formulario_contato(request):
    if request.method == 'POST':
        nome = request.POST.get('nome')
        email = request.POST.get('email')
        telefone = request.POST.get('telefone')
        mensagem = request.POST.get('mensagem')

        MensagemContato.objects.create(nome=nome, email=email, telefone=telefone, mensagem=mensagem)

        # Após salvar os dados, redirecione para uma página de sucesso
        return HttpResponseRedirect('/contato/sucesso/')

    return render(request, 'appsmartschool/formulario_contato.html')

def home(request):
    return render(request, 'appsmartschool/home.html')
