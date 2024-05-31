from django import urls
from django.urls import path
from .views import *
from django.contrib import admin
from . import views


app_name= 'appsmartschool'
urlpatterns = [
    path('', views.tela_inicial, name='tela_inicial'),
    path('aluno/', views.login_aluno, name='login_aluno'),
    path('professor/', views.login_professor, name='login_professor'),
    path('funcionario/', views.login_funcionario, name='login_funcionario'),
    path('dadossaude/', views.dados_saude_visualizar, name='dados-saude'),
    path('contato_aluno/', formulario_contato_aluno, name='formulario_contato_aluno'),
    path('contato_prof/', formulario_contato_prof, name='formulario_contato_prof'), 
    path('contato/sucesso_aluno/', contato_sucesso_aluno, name='contato_sucesso_aluno'),
    path('contato/sucesso_prof/', contato_sucesso_prof, name='contato_sucesso_prof'),
    path('frequencia/', frequencia_alunos_visualizar, name='frequencia_aluno'), 
    path('home_aluno/', home_aluno, name = 'home_aluno'),
    path('home_professor/', home_professor, name = 'home_professor'),
    path('home_funcionario/', home_funcionario, name = 'home_funcionario'),
    path('logout/', logout_view, name='logout'),
    path('horario/', visualizar_horario, name='HorarioAula'),
    path('notas/', visualiza_notas, name='visualiza_notas'),
    path('cadastro_professor/', views.cadastro_professor, name='cadastro_professor'),
    path('cadastro_sucesso/', views.cadastro_sucesso, name='cadastro_sucesso'),
    path('cadastro_disciplina/', views.cadastro_disciplina, name='cadastro_disciplina'),
    path('cadastro_aluno/', views.cadastro_aluno, name='cadastro_aluno'),
    path('cadastro_turma/', views.cadastro_turma, name='cadastro_turma'),
    path('registrar_presenca/', views.registrar_presenca, name='registrar_presenca'),
    path('frequencia_sucesso/', registrar_presenca, name='frequencia_sucesso'),
    path('api/get-alunos/<int:turma_id>/', views.get_alunos_by_turma, name='get-alunos-by-turma'),
    path('registrar_notas/', views.registrar_notas, name='registrar_notas'),

]