from django.contrib import admin

from .models import UserAluno
from .models import UserProfessor
from .models import UserFuncionario
from .models import Dados_saude
from .models import MensagemContato
from .models import Frequencia_Aluno
from .models import HorarioAula
from .models import Notas
from .models import Disciplina

admin.site.register(UserAluno)
admin.site.register(UserProfessor)
admin.site.register(UserFuncionario)
admin.site.register(Dados_saude)
admin.site.register(MensagemContato)
admin.site.register(Frequencia_Aluno)
admin.site.register(HorarioAula)
admin.site.register(Notas)
admin.site.register(Disciplina)
