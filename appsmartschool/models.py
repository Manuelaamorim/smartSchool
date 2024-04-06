from django.db import models
from django.contrib.auth.models import User


class UserAluno (models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    matricula = models.CharField(max_length=200)
    nome = models.CharField(max_length=200, null=False)
    cpf = models.CharField(max_length=11)
    data_de_nascimento = models.DateField("Created on")
    endereco = models.TextField()
    serie = models.PositiveSmallIntegerField()
    email = models.EmailField()
    nome_responsavel= models.CharField(max_length=200, null=False)
    cpf_responsavel = models.CharField(max_length=11, null=False)
    telefone = models.CharField(max_length=11, null=False)
    email_responsavel = models.EmailField()


    class Meta:
        app_label = 'appsmartschool'


class Dados_saude(models.Model):
    user_aluno = models.OneToOneField(UserAluno, on_delete=models.CASCADE, null=True)
    peso = models.FloatField(max_length=4, null=False)
    altura = models.FloatField(max_length = 4, null=False)
    restricao_alimentar = models.TextField(max_length = 100)
    tdah = models.CharField(max_length = 4)
    pcd = models.CharField(max_length = 4)


    class Meta:
        app_label = 'appsmartschool'


class MensagemContato(models.Model):
    nome = models.CharField(max_length=200)
    email = models.EmailField()
    telefone = models.PositiveBigIntegerField()
    mensagem = models.TextField(max_length=500)
    data_envio = models.DateTimeField(auto_now_add=True)


    class Meta:
        app_label = 'appsmartschool'


class Frequencia_Aluno(models.Model):
    user_aluno = models.OneToOneField(UserAluno, on_delete=models.CASCADE, null=True)
    colegio = models.CharField(max_length=200)
    nome = models.CharField(max_length=200)
    serie = models.PositiveSmallIntegerField()
    matricula = models.CharField(max_length=200)
    materia_1 = models.CharField(max_length=200, null=False)
    faltas_da_materia_1 =  models.PositiveSmallIntegerField(null=False)
    aulas_da_materia_1 = models.IntegerField(default=0)  # Total de aulas planejadas
    materia_2 = models.CharField(max_length=200, null=False)
    faltas_da_materia_2 =  models.PositiveSmallIntegerField(null=False)
    aulas_da_materia_2 = models.IntegerField(default=0)  # Total de aulas planejadas
    materia_3 = models.CharField(max_length=200, null=False)
    faltas_da_materia_3 =  models.PositiveSmallIntegerField(null=False)
    aulas_da_materia_3 = models.IntegerField(default=0)  # Total de aulas planejadas
    materia_4 = models.CharField(max_length=200, null=False)
    faltas_da_materia_4 =  models.PositiveSmallIntegerField(null=False)
    aulas_da_materia_4 = models.IntegerField(default=0)  # Total de aulas planejadas




    def porcentagem_da_materia_1(self):
        """Calcula a porcentagem de presença."""
        if self.aulas_da_materia_1 > 0:
             return round(((self.aulas_da_materia_1 - self.faltas_da_materia_1) / self.aulas_da_materia_1) * 100, 2)
        return 0


    def porcentagem_da_materia_2(self):
        """Calcula a porcentagem de presença."""
        if self.aulas_da_materia_2 > 0:
             return round(((self.aulas_da_materia_2 - self.faltas_da_materia_2) / self.aulas_da_materia_2) * 100, 2)
        return 0


    def porcentagem_da_materia_3(self):
        """Calcula a porcentagem de presença."""
        if self.aulas_da_materia_3 > 0:
             return round(((self.aulas_da_materia_3 - self.faltas_da_materia_3) / self.aulas_da_materia_3) * 100, 2)
        return 0


    def porcentagem_da_materia_4(self):
        """Calcula a porcentagem de presença."""
        if self.aulas_da_materia_4 > 0:
             return round(((self.aulas_da_materia_4 - self.faltas_da_materia_4) / self.aulas_da_materia_4) * 100, 2)
        return 0


    class Meta:
        app_label = 'appsmartschool'