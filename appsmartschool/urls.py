from django.urls import path
from .views import login

urlpatterns = [
    path('auth/', login, name='login'),
    # Certifique-se de adicionar outras URLs conforme necessário
]