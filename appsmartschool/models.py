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
