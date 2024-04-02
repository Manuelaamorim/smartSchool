from django.contrib import admin
from django.urls import path, include  # Adicionando "include" aos imports

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('appsmartschool.urls'))
]