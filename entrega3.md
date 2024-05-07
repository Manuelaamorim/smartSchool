# Entrega 03

## Links relevantes:
<ul>
  <li>
    <a  href="https://cesar-mvp2.atlassian.net/jira/software/projects/VNC/boards/2"
      >Projeto no Jira</a>
  </li>
    <li>
    <a  href="https://www.figma.com/file/OodUDTbRUE7cAgmlOUiEr9/SmartSchool?type=design&node-id=0-1&mode=design&t=V3uiesp8LFjSo9ET-0"
      >Protótipo de Lo-Fi no Figma</a>
  </li>
  <li>
    <a  href="https://www.youtube.com/watch?v=aKq5v7QJX0w"
      >Screencast do Protótipo Lo-fi - Entrega 03</a>
  </li>
  <li>
    <a  href="https://www.youtube.com/watch?v=fw72oc_WmSU"
      >Screencast CI/CD com Build e Deployment Automatizado - Entrega 03</a>
  </li>
  <li>
    <a  href=""
      >Screencast da Execução dos Testes - Entrega 03</a>
  </li>
</ul>
<br/>

## Deployment das histórias produzidas:
<ul>
  <li>
    <a  href="https://fdssmartschool.azurewebsites.net/"
      >Projeto na Azure</a>
  </li>
  <li>
    <a  href="https://www.youtube.com/watch?v=9ORi6V3U_1Y"
      >Screencast da Azure - Entrega 03</a>
  </li>
</ul>
<br/>

## Instruções de acesso ao projeto:

###

Na página inicial do nosso site, os usuários podem escolher entre três perfis distintos: Aluno, Funcionário e Professor. Cada um deles redireciona o usuário a página de seu respectivo login.  Atualmente, o acesso para Professores ainda está em desenvolvimento e as funcionalidades correspondentes serão implementadas futuramente, conforme indicado nas issues abertas do Github.

###

Para acessar como Aluno, utilize o CPF "60356365433" e a matrícula "ale12345". Com esse login, os usuários podem visualizar informações como dados de saúde, boletim escolar, horários de aula e frequência da estudante Ana Luiza Eugênio. Além disso, há uma opção para que Ana Luiza envie um formulário de contato para a instituição de ensino.

###

Após realizar o logout e retornar à página principal, escolha o perfil de "Funcionário" para fazer login. Utilizando o CPF "92873712491" e a matrícula "func9916", o acesso é feito como Marcos Luiz Bonifácio Cordeiro, que possui autorização para cadastrar novos professores. Se o cadastro for concluído com sucesso, o usuário será redirecionado para uma página de confirmação.

###

Para utilizar outros dados cadastrados no Banco de Dados Azure, consulte as informações detalhadas abaixo.

&nbsp;
### Banco de dados da AZURE

&nbsp;
**Administração do Django**
 
&nbsp;
***Superuser:*** useradmin

&nbsp;
***Senha:*** 123

&nbsp;
- ***Usuários cadastrados***:

&nbsp;
###

&nbsp;
***ALUNOS:***

&nbsp;
***1) Ana Luiza Eugênio - 1 User Aluno:***

- ***Cadastro do User:***

&nbsp;
***CPF:*** 60356365433

&nbsp;
***Matrícula:*** ale12345

&nbsp;
***Data de nascimento:*** 25/08/2018

&nbsp;
***Série do usuário:*** 2 ano do fundamental

&nbsp;
***Email do usuário:*** analueu@gmail.com

&nbsp;
***Endereço da residência:*** Rua Visconde Seca, 134 - Apt. 242, Bloco A, Casa Amarela - Recife - Pernambuco, PE

&nbsp;
***Nome do responsável:*** Luciana Eugênio Alves

&nbsp;
***Cpf do responsável:*** 65898388443

&nbsp;
***Telefone do responsável:*** 81996614073

&nbsp;
***Email do responsável:*** lucianaeualves@gmail.com

&nbsp;
- ***Dados de Saúde do User:***

&nbsp;
***Peso do usuário:*** 22,0 kg

&nbsp;
***Altura do usuário:*** 1,25 m

&nbsp;
***Restrição alimentar:*** Nenhuma

&nbsp;
***Possui TDAH:*** Sim

&nbsp;
***É PCD:*** Não

&nbsp;
- ***Frequência das aulas do User (15 aulas ministradas de cada matéria):***

&nbsp;
***Colégio do usuário:*** Júlio Mesquita

&nbsp;
***Faltas da matéria 1 (matemática):*** 0

&nbsp;
***Faltas da matéria 2 (português):*** 2

&nbsp;
***Faltas da matéria 3 (geografia):*** 1

&nbsp;
***Faltas da matéria 4 (história):*** 4

&nbsp;
- ***Horário de aulas da 2 série turma B (com a ementa de matemática, português, história e geografia):***

&nbsp;
***Nas Segundas-Feiras:***

&nbsp;
07:30 - 08:30 Português

&nbsp;
08:30 - 09:30 Matemática

&nbsp;
10:00 - 11:00 Matemática

&nbsp;
11:00 - 12:00 Português

&nbsp;
***Nas Terças-Feiras:***

&nbsp;
07:30 - 08:30 História

&nbsp;
08:30 - 09:30 Geografia

&nbsp;
10:00 - 11:00 Geografia

&nbsp;
11:00 - 12:00 História

&nbsp;
***Nas Quartas-Feiras:***

&nbsp;
07:30 - 08:30 Matemática

&nbsp;
08:30 - 09:30 Português

&nbsp;
10:00 - 11:00 Português

&nbsp;
11:00 - 12:00 Matemática

&nbsp;
***Nas Quintas-Feiras:***

&nbsp;
07:30 - 08:30 Geografia

&nbsp;
08:30 - 09:30 História

&nbsp;
10:00 - 11:00 História

&nbsp;
11:00 - 12:00 Geografia

&nbsp;
***Nas Sextas-Feiras:***

&nbsp;
07:30 - 08:30 História

&nbsp;
08:30 - 09:30 Geografia

&nbsp;
10:00 - 11:00 Matemárica

&nbsp;
11:00 - 12:00 Português

&nbsp;
- ***Boletim do aluno nas matérias cadastradas pela turma:***

&nbsp;
***Matemática:***

&nbsp;
Nota 1: 10.0

&nbsp;
Nota 2: 10.0

&nbsp;
Nota 3: 8.4

&nbsp;
***Português:***

&nbsp;
Nota 1: 9.7

&nbsp;
Nota 2: 10.0

&nbsp;
Nota 3: 8.9

&nbsp;
***História:***

&nbsp;
Nota 1: 10.0

&nbsp;
Nota 2: 8.5

&nbsp;
Nota 3: 10.0

&nbsp;
***Geografia:***

&nbsp;
Nota 1: 10

&nbsp;
Nota 2: 9.4

&nbsp;
Nota 3: 8.0

&nbsp;
###

&nbsp;
***2) João Antônio Lira Correia - 2 User Aluno:***

- ***Cadastro do User:***

&nbsp;
***CPF:*** 03049815400

&nbsp;
***Matrícula:*** jalc1234

&nbsp;
***Data de nascimento:*** 09/02/2015

&nbsp;
***Série do usuário:*** 5 ano do fundamental

&nbsp;
***Email do usuário:*** joaolcorreia@gmail.com

&nbsp;
***Endereço da residência:*** Rua General Graça, 74 - Num. 39, Arruda  - Recife - Pernambuco, PE

&nbsp;
***Nome do responsável:*** Maria Alice Correia Gomes

&nbsp;
***Cpf do responsável:*** 98362769475

&nbsp;
***Telefone do responsável:*** 81912270736

&nbsp;
***Email do responsável:*** mlicecg@gmail.com

&nbsp;
- ***Dados de Saúde do User:***

&nbsp;
***Peso do usuário:*** 38, 8 kg

&nbsp;
***Altura do usuário:*** 1,37 m

&nbsp;
***Restrição alimentar:*** Intolerância à lactose, intolerância ao glúten, alergia a amendoim.

&nbsp;
***Possui TDAH:*** Não

&nbsp;
***É PCD:*** Não

&nbsp;
- ***Frequência das aulas do User (15 aulas ministradas de cada matéria):***

&nbsp;
***Colégio do usuário:*** Fronte Nogueira

&nbsp;
***Faltas da matéria 1 (matemática):*** 5

&nbsp;
***Faltas da matéria 2 (português):*** 2

&nbsp;
***Faltas da matéria 3 (geografia):*** 7

&nbsp;
***Faltas da matéria 4 (história):*** 3

&nbsp;
- ***Horário de aulas da 5 série turma A (com a ementa de matemática, português, história e geografia):***

&nbsp;
***Nas Segundas-Feiras:***

&nbsp;
07:30 - 08:30 Matemática

&nbsp;
08:30 - 09:30 Matemática

&nbsp;
10:00 - 11:00 Português

&nbsp;
11:00 - 12:00 Português

&nbsp;
***Nas Terças-Feiras:***

&nbsp;
07:30 - 08:30 História

&nbsp;
08:30 - 09:30 História

&nbsp;
10:00 - 11:00 Geografia

&nbsp;
11:00 - 12:00 Geografia

&nbsp;
***Nas Quartas-Feiras:***

&nbsp;
07:30 - 08:30 Português

&nbsp;
08:30 - 09:30 Português

&nbsp;
10:00 - 11:00 Matemática

&nbsp;
11:00 - 12:00 Matemática

&nbsp;
***Nas Quintas-Feiras:***

&nbsp;
07:30 - 08:30 Geografia

&nbsp;
08:30 - 09:30 Geografia

&nbsp;
10:00 - 11:00 História

&nbsp;
11:00 - 12:00 História

&nbsp;
***Nas Sextas-Feiras:***

&nbsp;
07:30 - 08:30 Matemárica

&nbsp;
08:30 - 09:30 História

&nbsp;
10:00 - 11:00 Português

&nbsp;
11:00 - 12:00 Geografia

&nbsp;
- ***Boletim do aluno nas matérias cadastradas pela turma:***

&nbsp;
***Matemática:***

&nbsp;
Nota 1: 9.8

&nbsp;
Nota 2: 9.5

&nbsp;
Nota 3: 8.7

&nbsp;
***Português:***

&nbsp;
Nota 1: 9.4

&nbsp;
Nota 2: 9.9

&nbsp;
Nota 3: 10.0

&nbsp;
***História:***

&nbsp;
Nota 1: 8.2

&nbsp;
Nota 2: 9.0

&nbsp;
Nota 3: 9.5

&nbsp;
***Geografia:***

&nbsp;
Nota 1: 10

&nbsp;
Nota 2: 9.5

&nbsp;
Nota 3: 8.6

&nbsp;
###

&nbsp;
***FUNCIONÁRIOS:***

&nbsp;
***1) Marcos Luiz Bonifácio Cordeiro - 1 User Funcionário:***

- ***Cadastro do User:***

&nbsp;
***CPF:*** 92873712491

&nbsp;
***Matrícula:*** func9916

&nbsp;
***Data de nascimento:*** 12/10/1989

&nbsp;
***Telefone para contato:*** 81988271413

&nbsp;
***Email do responsável:*** marcosboncordeiro@gmail.com

&nbsp;
###

&nbsp;
***2) Luiz Felipe Carneiro Figueira - 2 User Funcionário:***

- ***Cadastro do User:***

&nbsp;
***CPF:*** 31462581538

&nbsp;
***Matrícula:*** func0193

&nbsp;
***Data de nascimento:*** 23/05/1991

&nbsp;
***Telefone para contato:*** 81971162481

&nbsp;
***Email do responsável:*** luizcarfig@gmail.com
&nbsp;
###

<br/>

## Diagrama de atividades do sistema:

![diagrama_fds](https://github.com/MatheusVelame/projetos2g3/assets/142773064/fafa48b3-d51c-4237-9833-5e9aa0210344)


<br/>

## Issues/bug tracker:
  
  - Issues em abertas:

    ![image](https://github.com/Manuelaamorim/SmartSchool/assets/142773064/dbf3cda7-10e3-4118-a19a-c7d2ce0f6f78)
       

  - Issues fechadas:

    ![image](https://github.com/Manuelaamorim/SmartSchool/assets/142773064/05d64a60-e0b7-4f4d-8f19-3c0fb6216a05)

  

<br/>

 ## Print do backlog do projeto:
  
  ![image](https://github.com/Manuelaamorim/SmartSchool/assets/142419881/5962221e-b44c-4d8f-a07f-aadd585747a0)

<br/>  
 
## Print do quadro da Sprint:

![image](https://github.com/Manuelaamorim/SmartSchool/assets/142419881/162fdaf2-4e8e-4da3-a3a9-a8e8a1947175)


<br/>

## Relato da Programação em Par experimentada:


*Introdução*

Dando continuidade ao projeto de desenvolvimento da aplicação Smart School, a segunda etapa demandou a implementação de três novas histórias além da realização de Testes de Sistema (E2E) Automatizados. Para atender a esse novo requisito, a equipe escolheu a ferramenta Cypress, framework de teste end-to-end de código aberto. Nos tópicos seguintes, serão detalhadas as experiências de cada dupla durante esta etapa do projeto.

*Par 01 – Beatriz e Manuela*

O Par 01 concentrou seus esforços na implementação da funcionalidade de visualização de notas, proporcionando aos alunos acesso fácil e rápido ao seu desempenho acadêmico. Além disso, o par dedicou um tempo significativo para aprender sobre o funcionamento da ferramenta Cypress, integrando-a ao processo de desenvolvimento para realizar testes automatizados de ponta a ponta. Dessa forma, seus integrantes puderam aplicar suas habilidades conjuntas para enfrentar os desafios dessa nova etapa, buscando não apenas desenvolver a funcionalidade, mas também garantir sua qualidade por meio de testes abrangentes.

*Par 02 – Lisa e Luziane*

Por sua vez, o Par 02 assumiu a responsabilidade pelo desenvolvimento do cadastro de professores, uma adição crucial ao sistema SmartSchool, bem como da tela inicial de login, diferenciando os acessos para cada tipo de usuário (aluno, professor ou funcionário). Esta tarefa exigiu uma extensão dos conhecimentos prévios do par, particularmente no que diz respeito à manipulação de dados e à integração com o banco de dados Azure. Para incorporar os Testes de Sistema Automatizados utilizando o Cypress, o par dedicou um tempo para compreender os fundamentos da ferramenta e integrá-la ao seu fluxo de trabalho, assegurando, ao final, não apenas a funcionalidade adequada do cadastro de professores, mas também sua robustez por meio de testes automatizados.

*Par 03 – Matheus e Ygor*

Por fim, o Par 03 focou na implementação da funcionalidade de visualização de horários, uma característica essencial para os alunos organizarem suas atividades acadêmicas. Para incorporar os Testes de Sistema Automatizados com o Cypress, o par combinou seus esforços para enfrentar os desafios técnicos e garantir que a funcionalidade de visualização de horários fosse implementada com sucesso, com testes automatizados para validar sua integridade e desempenho.

Conclusões

A segunda etapa do projeto está transcorrendo de forma positiva, com cada equipe seguindo adiante com suas tarefas de forma consistente. A adição dos Testes de Sistema Automatizados representa um avanço significativo na busca por uma aplicação robusta e confiável. O aprendizado continua sendo uma constante, e embora desafios sempre se apresentem, a equipe está comprometida em superá-los. À medida que nos aproximamos da última entrega, permanece o compromisso de melhoria contínua e de garantir que o a aplicação atenda às expectativas e necessidades estabelecidas para o aprendizado do conteúdo da disciplina.
