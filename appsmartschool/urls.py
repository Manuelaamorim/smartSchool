from django import urls
from django.urls import path
from .views import login
from .views import dados_saude_visualizar
from .views import formulario_contato
from .views import frequencia_alunos_visualizar
from django.contrib import admin
from .views import home_aluno
from .views import home_funcionario
from .views import contato_sucesso
from .views import visualizar_horario
from . import views
from .views import logout_view
from .views import visualiza_notas
from .views import cadastro_disciplina

app_name= 'appsmartschool'
urlpatterns = [
    path('', views.tela_inicial, name='tela_inicial'),
    path('aluno/', views.login_aluno, name='login_aluno'),
    path('professor/', views.login_professor, name='login_professor'),
    path('funcionario/', views.login_funcionario, name='login_funcionario'),
    path('dadossaude/', dados_saude_visualizar, name='dados-saude'),
    path('contato/', formulario_contato, name='formulario_contato'), 
    path('contato/sucesso/', contato_sucesso, name='contato_sucesso'),
    path('frequencia/', frequencia_alunos_visualizar, name='frequencia_aluno'), 
    path('home_aluno/', home_aluno, name = 'home_aluno'),
    path('home_funcionario/', home_funcionario, name = 'home_funcionario'),
    path('logout/', logout_view, name='logout'),
    path('horario/', visualizar_horario, name='HorarioAula'),
    path('notas/', visualiza_notas, name='visualiza_notas'),
    path('cadastro_professor/', views.cadastro_professor, name='cadastro_professor'),
    path('cadastro_sucesso/', views.cadastro_sucesso, name='cadastro_sucesso'),
    path('cadastro_disciplina/', views.cadastro_disciplina, name='cadastro_disciplina'),
]