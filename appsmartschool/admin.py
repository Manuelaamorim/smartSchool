from django.contrib import admin

from .models import *


admin.site.register(UserAluno)
admin.site.register(UserProfessor)
admin.site.register(UserFuncionario)
admin.site.register(MensagemContato)
admin.site.register(Presenca)
admin.site.register(HorarioAula)
admin.site.register(Notas)
admin.site.register(Disciplina)
admin.site.register(Turma)