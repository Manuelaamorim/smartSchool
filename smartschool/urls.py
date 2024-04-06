# urls.py do Projeto Principal

from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),  # Isso permite acessar a área de administração com /admin/
    path('', include('appsmartschool.urls')),  
    path('accounts/', include('django.contrib.auth.urls')),# Isso inclui as URLs do app appsmartschool no projeto
]
