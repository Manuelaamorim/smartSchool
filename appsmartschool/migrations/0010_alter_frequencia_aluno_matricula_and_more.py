# Generated by Django 5.0.3 on 2024-04-06 15:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('appsmartschool', '0009_useraluno_user_alter_mensagemcontato_telefone_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='frequencia_aluno',
            name='matricula',
            field=models.CharField(max_length=200),
        ),
        migrations.AlterField(
            model_name='useraluno',
            name='data_de_nascimento',
            field=models.DateField(verbose_name='Created on'),
        ),
        migrations.AlterField(
            model_name='useraluno',
            name='matricula',
            field=models.CharField(max_length=200),
        ),
    ]