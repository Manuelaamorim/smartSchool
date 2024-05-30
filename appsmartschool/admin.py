from django.contrib import admin
from .models import *

admin.site.register(UserAluno)
admin.site.register(UserProfessor)
admin.site.register(UserFuncionario)
admin.site.register(MensagemContato)
admin.site.register(Presenca)
admin.site.register(HorarioAula)
admin.site.register(Disciplina)
admin.site.register(Turma)

# Registro do modelo Notas
@admin.register(Notas)
class NotasAdmin(admin.ModelAdmin):
    list_display = ('aluno', 'disciplina', 'nota1', 'nota2', 'nota3', 'media')