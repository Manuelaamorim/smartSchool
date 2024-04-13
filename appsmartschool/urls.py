from django import urls
from django.urls import path
from .views import login
from .views import dados_saude_visualizar
from .views import formulario_contato
from .views import frequencia_alunos_visualizar
from django.contrib import admin
from .views import menu_aluno
from .views import menu_funcionario
from .views import contato_sucesso
from . import views
from .views import logout_view

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
    path('menu_aluno/', menu_aluno, name = 'menu_aluno'),
    path('menu_funcionario/', menu_funcionario, name = 'menu_funcionario'),
    path('logout/', logout_view, name='logout'),
]