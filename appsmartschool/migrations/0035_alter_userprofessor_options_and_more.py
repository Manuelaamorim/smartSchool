# Generated by Django 5.0.3 on 2024-05-21 19:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('appsmartschool', '0034_turma_matricula_docente'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='userprofessor',
            options={'verbose_name': 'Dados professor', 'verbose_name_plural': 'Dados professor'},
        ),
        migrations.AlterField(
            model_name='userprofessor',
            name='email',
            field=models.EmailField(max_length=254, null=True),
        ),
    ]