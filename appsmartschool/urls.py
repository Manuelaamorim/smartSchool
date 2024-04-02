from django import urls
from django.urls import path
from .views import login
from .views import dados_saude_visualizar

app_name= 'appsmartschool'
urlpatterns = [
    path('auth/', login, name='login'),
    path('dadossaude/', dados_saude_visualizar, name='dados-saude'),
    # Certifique-se de adicionar outras URLs conforme necessário
]