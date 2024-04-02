from django.contrib import admin

from .models import UserAluno
from .models import Dados_saude
from .models import MensagemContato

admin.site.register(UserAluno)
admin.site.register(Dados_saude)
admin.site.register(MensagemContato)

