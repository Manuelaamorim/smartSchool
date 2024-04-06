from django import urls
from django.urls import path
from .views import login
from .views import dados_saude_visualizar
from .views import formulario_contato
from .views import frequencia_alunos_visualizar
from django.contrib import admin
from .views import home
from .views import contato_sucesso
from . import views
from .views import logout_view

app_name= 'appsmartschool'
urlpatterns = [
    path('', views.login_view, name='login'),
    path('dadossaude/', dados_saude_visualizar, name='dados-saude'),
    path('contato/', formulario_contato, name='formulario_contato'), 
    path('contato/sucesso/', contato_sucesso, name='contato_sucesso'),
    path('frequencia/', frequencia_alunos_visualizar, name='frequencia_aluno'), 
    path('home/', home, name = 'pagina_home'),
    path('logout/', logout_view, name='logout'),
]