# Entrega 03

***Links relevantes:***
<ul>
  <li>
    <a  href="https://cesar-mvp2.atlassian.net/jira/software/projects/VNC/boards/2"
      >Projeto no Jira</a>
  </li>
    <li>
    <a  href="https://www.figma.com/file/OodUDTbRUE7cAgmlOUiEr9/SmartSchool?type=design&node-id=0-1&mode=design&t=V3uiesp8LFjSo9ET-0"
      >Protótipo de Lo-Fi no Figma</a>
  </li>
</ul>
<br/>

***Deployment das histórias produzidas:***
<ul>
  <li>
    <a  href="https://fdssmartschool.azurewebsites.net/"
      >Projeto na Azure</a>
  </li>
</ul>
<br/>

***Instruções de acesso ao projeto:***

Nesta seção, iremos detalhar o passo a passo de como navegar pelo nosso site “fdssmartschool” na Azure Websites.
Primeiramente, criamos um menu principal temporário para esta entrega. A página inicial utilizada nesta aplicação web é o login do aluno, uma vez que todas as histórias implementadas até então são funcionalidades disponíveis após o login deste. Salienta-se que as demais páginas relativas ao aluno (afora o login), apenas são possíveis de serem acessadas após este passo. Caso as informações do aluno estejam cadastradas no banco de dados, é possível ter acesso ao menu do aluno, caso contrário, será apresentada uma mensagem de erro. Por fim, o login é o número do CPF do aluno (sem pontos e sem hífen) e sua senha é seu código de matrícula (composta de números e letras).
Ao entrar na página principal da Azure (https://fdssmartschool.azurewebsites.net/), deve-se digitar “60356365433”, como login (CPF da aluna cadastrada Ana Luiza Eugênio) e como senha “ale12345” (sua matrícula), ambas informações sem as aspas duplas.

Ao realizar o login com sucesso, o site redirecionará ao menu do aluno, onde é possível ver todas suas funcionalidades no menu principal. O nome “SmartSchool”, localizado no canto superior esquerdo redireciona a página sempre ao seu menu inicial, bem como a seção “Logout” (canto superior direito), sempre retorna à página de login. Entre essas opções, há outras funcionalidades: “Dados de saúde”, “Boletim”, “Horários”, Frequência”, “Contato” e “Perfil”. Destas, três foram implementadas: “Dados de saúde”, “Frequência” e “Contato”.

Ao clicar em “Dados de saúde”, aparecerão as informações de dados de saúde apenas da aluna vinculada ao CPF (que é um dado personalíssimo, ou seja, não existe CPFs iguais, cada um é vinculado a uma pessoa) em que fora realizado o login. Nesta seção, pode-se encontrar o peso, altura, restrições alimentares do aluno, bem como se ele possui TDAH/TEA ou é PCD. No caso da aluna em questão, ela pesa 22,0 kg, mede 1,25 m, não possui restrição alimentar, possui TDAH e não é PCD.

No menu da “Frequência”, também apenas aparecerá dados vinculados ao CPF da aluna em questão. No referido caso, a aluna é do colégio “Júlio Mesquita”, teve 15 aulas de cada matéria matriculada (matemática, português, geografia e história) e ela faltou 0 aulas de matemática, 2 de português, 1 de geografia, 4 de história. Vale ressaltar que o próprio sistema calcula a frequência porcentual da aluna em cada disciplina.


Por fim, na opção “Contato”, o aluno pode acessar informações de contato da SmartSchool ou enviar mensagens para tirar dúvidas, realizar perguntas ou enviar solicitações. A mensagem ficará salva no banco de dados e em caso de sucesso ao enviá-la, o usuário será redirecionado a uma página de sucesso. O formato que deverá ser enviada a mensagem deve ser, por exemplo:

&nbsp;
**Nome:** Rosália

&nbsp;
**Endereço de e-mail:** rosalia@gmail.com (precisa possuir @)

&nbsp;
**Telefone de Contato:** 81999998888 (apenas números)

&nbsp;
**Dúvida, pergunta ou solicitação (máximo 500 caracteres):** Gostaria de reclamar sobre a cantina da escola... (possui formatação livre, mas é  limitada a 500 caracteres).

Por fim, ao realizar o logout, o usuário será redirecionado ao menu principal.

Além de Ana Luiza Eugênio, há mais um aluno cadastrado para fins de teste, seguem abaixo seus dados fictícios.

João Antônio Lira Correia - Segundo User:

**Cadastro do User:**

&nbsp;
 **CPF:** 03049815400

&nbsp;
**Matrícula:** jalc1234

&nbsp;
**Data de nascimento:** 09/02/2015

&nbsp;
**Série do usuário:** 5 ano do fundamental

&nbsp;
**Email do usuário:** joaolcorreia@gmail.com

&nbsp;
**Endereço da residência:** Rua General Graça, 74 - Num. 39, Arruda  - Recife - Pernambuco, PE

&nbsp;
**Nome do responsável:** Maria Alice Correia Gomes

&nbsp;
**CPF do responsável:** 98362769475

&nbsp;
**Telefone do responsável:** 81912270736

&nbsp;
**Email do responsável:** mlicecg@gmail.com


**Dados de Saúde do User:**

&nbsp;
**Peso do usuário:** 3,38 kg

&nbsp;
**Altura do usuário:** 1,37 m

&nbsp;
**Restrição alimentar:** Intolerância à lactose, intolerância ao glúten, alergia a amendoim.

&nbsp;
**Possui TDAH:** Não

&nbsp;
**É PCD:** Não

**Frequência das aulas do User (15 aulas ministradas de cada matéria):**

&nbsp;
**Colégio do usuário:** Fronte Nogueira

&nbsp;
**Faltas da matéria 1 (matemática):** 5

&nbsp;
**Faltas da matéria 2 (português):** 2

&nbsp;
**Faltas da matéria 3 (geografia):** 7

&nbsp;
**Faltas da matéria 4 (história):** 3

<br/>

***Diagrama de atividades do sistema:***



<br/>

***Issues/bug tracker:***
  
  - Issues em abertas:
    

    

  - Issues fechadas:
  

<br/>

 ***Print do backlog do projeto:***
  
  
<br/>  
 
***Print do quadro da Sprint:***




<br/>

***Relato da Programação em Par experimentada:***

1. Introdução

Dando continuidade ao projeto de desenvolvimento da aplicação Smart School, a segunda etapa demandou a implementação de três novas histórias além da realização de Testes de Sistema (E2E) Automatizados. Para atender a esse novo requisito, a equipe escolheu a ferramenta Cypress, framework de teste end-to-end de código aberto. Nos tópicos seguintes, serão detalhadas as experiências de cada dupla durante esta etapa do projeto.

2.	Par 01 – Beatriz e Manuela

O Par 01 concentrou seus esforços na implementação da funcionalidade de visualização de notas, proporcionando aos alunos acesso fácil e rápido ao seu desempenho acadêmico. Além disso, o par dedicou um tempo significativo para aprender sobre o funcionamento da ferramenta Cypress, integrando-a ao processo de desenvolvimento para realizar testes automatizados de ponta a ponta. Dessa forma, seus integrantes puderam aplicar suas habilidades conjuntas para enfrentar os desafios dessa nova etapa, buscando não apenas desenvolver a funcionalidade, mas também garantir sua qualidade por meio de testes abrangentes.

3.	Par 02 – Lisa e Luziane

Por sua vez, o Par 02 assumiu a responsabilidade pelo desenvolvimento do cadastro de professores, uma adição crucial ao sistema SmartSchool, bem como da tela inicial de login, diferenciando os acessos para cada tipo de usuário (aluno, professor ou funcionário). Esta tarefa exigiu uma extensão dos conhecimentos prévios do par, particularmente no que diz respeito à manipulação de dados e à integração com o banco de dados Azure. Para incorporar os testes utilizando o Cypress, o par dedicou um tempo para compreender os fundamentos da ferramenta e integrá-la ao seu fluxo de trabalho, assegurando, ao final, não apenas a funcionalidade adequada do cadastro de professores, mas também sua robustez por meio de testes automatizados.

4.	Par 03 – Matheus e Ygor

Por fim, o Par 03 focou na implementação da funcionalidade de visualização de horários, uma característica essencial para os alunos organizarem suas atividades acadêmicas. Para incorporar os testes com o Cypress, o par combinou seus esforços para enfrentar os desafios técnicos e garantir que a funcionalidade de visualização de horários fosse implementada com sucesso, com testes automatizados para validar sua integridade e desempenho.

5.	Conclusões

A segunda etapa do projeto está transcorrendo de forma positiva, com cada equipe seguindo adiante com suas tarefas de forma consistente. A adição dos Testes de Sistema Automatizados representa um avanço significativo na busca por uma aplicação robusta e confiável. O aprendizado continua sendo uma constante, e embora desafios sempre se apresentem, a equipe está comprometida em superá-los. À medida que nos aproximamos da última entrega, permanece o compromisso de melhoria contínua e de garantir que o a aplicação atenda às expectativas e necessidades estabelecidas para o aprendizado do conteúdo da disciplina.


