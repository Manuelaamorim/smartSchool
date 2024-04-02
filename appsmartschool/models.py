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