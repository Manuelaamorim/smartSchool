from django.db import models
from django.contrib.auth.models import User
from django.core.validators import RegexValidator
from django.core.validators import MinValueValidator, MaxValueValidator


class UserAluno (models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    nome = models.CharField(max_length=200, null=False)
    matricula = models.CharField(max_length=200)
    cpf = models.CharField(max_length=11)
    data_de_nascimento = models.DateField("Data de Nascimento")
    endereco = models.TextField()
    colegio = models.CharField(max_length=200, null=True)
    serie = models.PositiveSmallIntegerField()
    turma = models.CharField(max_length=1, null=True, validators=[RegexValidator(r'^[A-Z]$', 'Apenas letras maiúsculas são permitidas.')])
    nome_responsavel= models.CharField(max_length=200, null=False)
    cpf_responsavel = models.CharField(max_length=11, null=False)
    telefone = models.CharField(max_length=11, null=False)
    email_responsavel = models.EmailField(null=True)
    peso = models.FloatField(max_length=4, null=False, default=0.0, validators=[MinValueValidator(5), MaxValueValidator(120)],
    help_text='Peso deve ser entre 5 e 120KG.')
    altura = models.FloatField(max_length = 4, null=False, default=0.0, validators=[MinValueValidator(0.50), MaxValueValidator(2)],
    help_text='Altura deve ser entre 0.50 m e 2 m.')
    restricao_alimentar = models.TextField(max_length = 100, default='Não possui')
    tdah = models.CharField(max_length = 4, default='Não')
    pcd = models.CharField(max_length = 4, default='Não')


    def __str__(self):
        return "Aluno " + self.nome

    class Meta:
        app_label = 'appsmartschool'
        verbose_name = "Dados aluno"
        verbose_name_plural = "Dados aluno"

class UserProfessor(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    nome = models.CharField(max_length=200, null=False)
    matricula = models.CharField(max_length=200)
    cpf = models.CharField(max_length=11)
    data_de_nascimento = models.DateField("Data de Nascimento")
    telefone = models.CharField(max_length=11, null=False)
    email = models.EmailField(default=False)
    disciplinas = models.ManyToManyField('Disciplina', related_name='professores')  # Adicionado

    def __str__(self):
        return "Dados do professor " + self.nome

    class Meta:
        app_label = 'appsmartschool'
        verbose_name = "Dados do professor"
        verbose_name_plural = "Dados do professor"

class UserFuncionario (models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    nome = models.CharField(max_length=200, null=False)
    matricula = models.CharField(max_length=200)
    cpf = models.CharField(max_length=11)
    data_de_nascimento = models.DateField("Data de Nascimento")
    telefone = models.CharField(max_length=11, null=False)
    email = models.EmailField()

    def __str__(self):
        return "Dados do funcionário " + self.nome

    class Meta:
        app_label = 'appsmartschool'
        verbose_name = "Dados do funcionário"
        verbose_name_plural = "Dados do funcionário"


class MensagemContato(models.Model):
    nome = models.CharField(max_length=200)
    email = models.EmailField()
    telefone = models.PositiveBigIntegerField()
    mensagem = models.TextField(max_length=500)
    data_envio = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return "Dados de contato de " + self.nome

    class Meta:
        app_label = 'appsmartschool'
        verbose_name = "Dados de contato"
        verbose_name_plural = "Dados de contato"

class Disciplina(models.Model):
    codigo = models.CharField(max_length=8, unique=True)
    nome = models.CharField(max_length=40)
    carga_horaria = models.CharField(max_length=3, validators=[RegexValidator(r'^\d{1,3}$', 'Somente números são permitidos.')])
    ementa = models.TextField(max_length=2000)

    def __str__(self):
        return f"{self.nome} ({self.codigo})"

    class Meta:
        verbose_name = "Disciplina"
        verbose_name_plural = "Disciplinas"

class Presenca(models.Model):
    aluno = models.ForeignKey(UserAluno, on_delete=models.CASCADE)
    data = models.DateField()
    presente = models.BooleanField(default=False)
    materia = models.ForeignKey(Disciplina, on_delete=models.CASCADE)

    def __str__(self):
        status = "Presente" if self.presente else "Ausente"
        return f"{self.aluno.nome} - {status} em {self.data.strftime('%d/%m/%Y')} para {self.materia.nome}"

    class Meta:
        app_label = 'appsmartschool'
        verbose_name = "Presença do aluno"
        verbose_name_plural = "Presenças dos alunos"

class HorarioAula(models.Model):
    colegio = models.CharField(max_length=200, null=True)
    serie = models.PositiveSmallIntegerField()
    turma = models.CharField(max_length=1, null=True, validators=[RegexValidator(r'^[A-Z]$', 'Apenas letras maiúsculas são permitidas.')])
    horario_inicio_1 = models.TimeField()
    horario_fim_1 = models.TimeField()
    horario_inicio_2 = models.TimeField(null=True)
    horario_fim_2 = models.TimeField(null=True)
    horario_inicio_3 = models.TimeField(null=True)
    horario_fim_3 = models.TimeField(null=True)
    horario_inicio_4 = models.TimeField(null=True)
    horario_fim_4 = models.TimeField(null=True)

    seg_materia_do_horario_1 = models.CharField(max_length=200, null=False)
    seg_materia_do_horario_2 = models.CharField(max_length=200, null=True)
    seg_materia_do_horario_3 = models.CharField(max_length=200, null=True)
    seg_materia_do_horario_4 = models.CharField(max_length=200, null=True)
    
    ter_materia_do_horario_1 = models.CharField(max_length=200, null=True)
    ter_materia_do_horario_2 = models.CharField(max_length=200, null=True)
    ter_materia_do_horario_3 = models.CharField(max_length=200, null=True)
    ter_materia_do_horario_4 = models.CharField(max_length=200, null=True)
    
    quar_materia_do_horario_1 = models.CharField(max_length=200, null=True)
    quar_materia_do_horario_2 = models.CharField(max_length=200, null=True)
    quar_materia_do_horario_3 = models.CharField(max_length=200, null=True)
    quar_materia_do_horario_4 = models.CharField(max_length=200, null=True)
    
    quin_materia_do_horario_1 = models.CharField(max_length=200, null=True)
    quin_materia_do_horario_2 = models.CharField(max_length=200, null=True)
    quin_materia_do_horario_3 = models.CharField(max_length=200, null=True)
    quin_materia_do_horario_4 = models.CharField(max_length=200, null=True)
    
    sex_materia_do_horario_1 = models.CharField(max_length=200, null=True)
    sex_materia_do_horario_2 = models.CharField(max_length=200, null=True)
    sex_materia_do_horario_3 = models.CharField(max_length=200, null=True)
    sex_materia_do_horario_4 = models.CharField(max_length=200, null=True)
    


    def __str__(self):
        return "Horário da série "


    class Meta:
        app_label = 'appsmartschool'
        verbose_name = "Horário de Aula"
        verbose_name_plural = "Horários de Aulas"

class Notas(models.Model):
    aluno = models.ForeignKey(UserAluno, on_delete=models.CASCADE)
    materia_1 = models.CharField(max_length=200, null=False, default='Matéria 1')
    materia_2 = models.CharField(max_length=200, null=False, default='Matéria 2')
    materia_3 = models.CharField(max_length=200, null=False, default='Matéria 3')
    materia_4 = models.CharField(max_length=200, null=False, default='Matéria 4')

    nota1_materia1 = models.FloatField(max_length=4, null = False)
    nota2_materia1 = models.FloatField(max_length=4, null = False)
    nota3_materia1 = models.FloatField(max_length=4, null = False)  

    nota1_materia2 = models.FloatField(max_length=4, null = False)
    nota2_materia2 = models.FloatField(max_length=4, null = False)
    nota3_materia2 = models.FloatField(max_length=4, null = False)

    nota1_materia3 = models.FloatField(max_length=4, null = False)
    nota2_materia3 = models.FloatField(max_length=4, null = False)
    nota3_materia3 = models.FloatField(max_length=4, null = False)

    nota1_materia4 = models.FloatField(max_length=4, null = False)
    nota2_materia4 = models.FloatField(max_length=4, null = False)
    nota3_materia4 = models.FloatField(max_length=4, null = False)
    
    @property
    def media_materia1(self):
        return (self.nota1_materia1 + self.nota2_materia1 + self.nota3_materia1) / 3

    @property
    def media_materia2(self):
        return (self.nota1_materia2 + self.nota2_materia2 + self.nota3_materia2) / 3

    @property
    def media_materia3(self):
        return (self.nota1_materia3 + self.nota2_materia3 + self.nota3_materia3) / 3

    @property
    def media_materia4(self):
        return (self.nota1_materia4 + self.nota2_materia4 + self.nota3_materia4) / 3

    def _str_(self):
        return "Notas de {}".format(self.aluno.user.username)
    
    class Meta:
        app_label = 'appsmartschool'
        verbose_name = "Notas do aluno"
        verbose_name_plural = "Notas do aluno"

class Turma(models.Model):
    serie = models.PositiveSmallIntegerField()
    turma = models.CharField(max_length=1, validators=[RegexValidator(r'^[A-Z]$', 'Apenas letras maiúsculas são permitidas.')])
    materia_1 = models.CharField(max_length=40, null=True)
    codigo_materia_1 = models.CharField(max_length=8, null=True)
    materia_2 = models.CharField(max_length=40, null=True)
    codigo_materia_2 = models.CharField(max_length=8, null=True)
    materia_3 = models.CharField(max_length=40, null=True)
    codigo_materia_3 = models.CharField(max_length=8, null=True)
    materia_4 = models.CharField(max_length=40, null=True)
    codigo_materia_4 = models.CharField(max_length=8, null=True)
    docente = models.CharField(max_length=40, null=True)
    matricula_docente = models.CharField(max_length=200, null=True)

    def __str__(self):
        return f"Serie: {self.serie} {self.turma}"