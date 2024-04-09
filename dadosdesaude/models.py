from django.db import models

class Dados_saude(models.Model):
    peso = models.FloatField(max_length=4, null=False)
    altura = models.FloatField(max_length = 4, null=False)
    restricao_alimentar = models.TextField(max_length = 100)
    tdah = models.CharField(max_length = 4)
    pcd = models.CharField(max_length = 4)

