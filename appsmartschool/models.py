from django.db import models

class UserAluno (models.Model):
    
    matricula = models.PositiveIntegerField()
    nome = models.CharField(max_length=200, null=False)
    cpf = models.CharField(max_length=11)
    data_de_nascimento = models.DateTimeField("Created on")
    endereco = models.TextField()
    serie = models.PositiveSmallIntegerField()
    email = models.EmailField()
    nome_responsavel= models.CharField(max_length=200, null=False)
    cpf_responsavel = models.PositiveIntegerField()
    telefone = models.PositiveIntegerField()
    email_responsavel = models.EmailField()

    class Meta:
        app_label = 'appsmartschool'

class Dados_saude(models.Model):
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
    telefone = models.CharField(max_length=20)
    mensagem = models.TextField(max_length=500)
    data_envio = models.DateTimeField(auto_now_add=True)

    class Meta:
        app_label = 'appsmartschool'

class Frequencia_Aluno(models.Model):
    colegio = models.CharField(max_length=200)
    nome = models.CharField(max_length=200)
    serie = models.PositiveSmallIntegerField()
    matricula = models.PositiveIntegerField()
    materia_1 = models.CharField(max_length=200, null=False)
    faltas_m1 =  models.PositiveSmallIntegerField(null=False)
    porcentagem_m1 = models.DecimalField(max_digits=2, decimal_places=2, null=False)
    materia_2 = models.CharField(max_length=200, null=False)
    faltas_m2 =  models.PositiveSmallIntegerField(null=False)
    porcentagem_m2 = models.DecimalField(max_digits=2, decimal_places=2, null=False)
    materia_3 = models.CharField(max_length=200, null=False)
    faltas_m3 =  models.PositiveSmallIntegerField(null=False)
    porcentagem_m3 = models.DecimalField(max_digits=2, decimal_places=2, null=False)
    materia_4 = models.CharField(max_length=200, null=False)
    faltas_m4 =  models.PositiveSmallIntegerField(null=False)
    porcentagem_m4 = models.DecimalField(max_digits=2, decimal_places=2, null=False)

    class Meta:
        app_label = 'appsmartschool'