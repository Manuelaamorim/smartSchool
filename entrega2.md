# Entrega 02

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
   <li>
    <a  href="https://www.youtube.com/watch?v=JNPZFxvesNU&ab_channel=YgorRosa"
      >Screencast - Entrega 02</a>
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

***Instruções de acesso ao projeto:***

Nesta seção, iremos detalhar o passo a passo de como navegar pelo nosso site “fdssmartschool” na Azure Websites.
Primeiramente, criamos um menu principal temporário para esta entrega. A página inicial utilizada nesta aplicação web é o login do aluno, uma vez que todas as histórias implementadas até então são funcionalidades disponíveis após o login deste. Salienta-se que as demais páginas relativas ao aluno (afora o login), apenas são possíveis de serem acessadas após este passo. Caso as informações do aluno estejam cadastradas no banco de dados, é possível ter acesso ao menu do aluno, caso contrário, será apresentada uma mensagem de erro. Por fim, o login é o número do CPF do aluno (sem pontos e sem hífen) e sua senha é seu código de matrícula (composta de números e letras).
Ao entrar na página principal da Azure (https://fdssmartschool.azurewebsites.net/), deve-se digitar “60356365433”, como login (CPF da aluna cadastrada Ana Luiza Eugênio) e como senha “ale12345” (sua matrícula), ambas informações sem as aspas duplas.

Ao realizar o login com sucesso, o site redirecionará ao menu do aluno, onde é possível ver todas suas funcionalidades no menu principal. O nome “SmartSchool”, localizado no canto superior esquerdo redireciona a página sempre ao seu menu inicial, bem como a seção “Logout” (canto superior direito), sempre retorna à página de login. Entre essas opções, há outras funcionalidades: “Dados de saúde”, “Boletim”, “Horários”, Frequência”, “Contato” e “Perfil”. Destas, três foram implementadas: “Dados de saúde”, “Frequência” e “Contato”.

Ao clicar em “Dados de saúde”, aparecerão as informações de dados de saúde apenas da aluna vinculada ao CPF (que é um dado personalíssimo, ou seja, não existe CPFs iguais, cada um é vinculado a uma pessoa) em que fora realizado o login. Nesta seção, pode-se encontrar o peso, altura, restrições alimentares do aluno, bem como se ele possui TDAH/TEA ou é PCD. No caso da aluna em questão, ela pesa 22,0 kg, mede 1,25 m, não possui restrição alimentar, possui TDAH e não é PCD.

No menu da “Frequência”, também apenas aparecerá dados vinculados ao CPF da aluna em questão. No referido caso, a aluna é do colégio “Júlio Mesquita”, teve 15 aulas de cada matéria matriculada (matemática, português, geografia e história) e ela faltou 0 aulas de matemática, 2 de português, 1 de geografia, 4 de história. Vale ressaltar que o próprio sistema calcula a frequência porcentual da aluna em cada disciplina.


Por fim, na opção “Contato”, o aluno pode acessar informações de contato da SmartSchool ou enviar mensagens para tirar dúvidas, realizar perguntas ou enviar solicitações. A mensagem ficará salva no banco de dados e em caso de sucesso ao enviá-la, o usuário será redirecionado a uma página de sucesso. O formato que deverá ser enviada a mensagem deve ser, por exemplo:

Nome: Rosália
Endereço de e-mail: rosalia@gmail.com (precisa possuir @)
Telefone de Contato: 81999998888 (apenas números)
Dúvida, pergunta ou solicitação (máximo 500 caracteres): Gostaria de reclamar sobre a cantina da escola... (em que possui formatação livre, mas é limitada a 500 caracteres).

Por fim, ao realizar o logout, o usuário será redirecionado ao menu principal.

Além de Ana Luiza Eugênio, há mais um aluno cadastrado para fins de teste, seguem abaixo seus dados fictícios.

João Antônio Lira Correia - Segundo User:


**Cadastro do User:**


CPF: 03049815400
Matrícula: jalc1234
Data de nascimento: 09/02/2015
Série do usuário: 5 ano do fundamental
Email do usuário: joaolcorreia@gmail.com
Endereço da residência: Rua General Graça, 74 - Num. 39, Arruda  - Recife - Pernambuco, PE
Nome do responsável: Maria Alice Correia Gomes
Cpf do responsável: 98362769475
Telefone do responsável: 81912270736
Email do responsável: mlicecg@gmail.com


**Dados de Saúde do User:**
	
Peso do usuário: 3,38 kg
Altura do usuário: 1,37 m
Restrição alimentar: Intolerância à lactose, intolerância ao glúten, alergia a amendoim.
Possui TDAH: Não
É PCD: Não


**Frequência das aulas do User (15 aulas ministradas de cada matéria):**


Colégio do usuário: Fronte Nogueira
Faltas da matéria 1 (matemática): 5
Faltas da matéria 2 (português): 2
Faltas da matéria 3 (geografia): 7
Faltas da matéria 4 (história): 3



***Diagrama de atividades do sistema:***

***Issues/bug tracker:***
  
  - Issues em abertas:
    
    ![issues_abertas](https://github.com/Manuelaamorim/SmartSchool/assets/142773064/7205f4c1-a9c6-4420-8d26-46f6e4018929)
    

  - Issues fechadas:
  
  ![issues_fechadas](https://github.com/Manuelaamorim/SmartSchool/assets/142773064/6662efa1-417c-458d-8679-633b19771772)
<br/>
<br/>

 ***Print do backlog do projeto:***
  
  
  ![backlog_entrega2](https://github.com/Manuelaamorim/SmartSchool/assets/142773064/ece4a331-0ba9-4456-b3a8-12b9a3c5054b)
  
 
***Print do quadro da Sprint:***


![quadrojira_entrega02](https://github.com/Manuelaamorim/SmartSchool/assets/142773064/79bc2892-6e0d-4933-a7d4-881941490c33)


***Relato da Programação em Par experimentada:***

Incluída entre os temas ministrados na disciplina Fundamentos de Desenvolvimento de Software, a Extreme Programming (XP) se destaca por ser um método ágil cuja abordagem de desenvolvimento de software promove a agilidade e a qualidade, sendo recomendada quando os requisitos do projeto a ser desenvolvido são vagos ou sujeitos a mudanças. 
Além de valores e princípios, essa metodologia proposta por Kent Beck no final dos anos 90 preconiza práticas como a programação em pares (pair programming), onde dois desenvolvedores colaboram na implementação do código, alternando-se entre quem codifica e quem revisa/orienta o trabalho.
Essa forma de desenvolvimento promove uma visão ampla do projeto, permitindo antecipar problemas e soluções futuras durante o processo de codificação, além de contribuir para disseminar o conhecimento sobre o código e facilitar a comunicação entre os membros do time. 
Em relação à atividade prática proposta pela disciplina, consistente no desenvolvimento de uma aplicação utilizando a framework Django e o ambiente da Azure, a equipe optou por criar uma aplicação voltada para o ambiente escolar, denominada SmartSchool.
Para realizar essa tarefa, os membros do grupo se organizaram em três duplas, cada uma responsável pela codificação e outras tarefas específicas. O método de condução do trabalho foi deixado à livre escolha de cada dupla e os resultados dessa abordagem serão apresentados a seguir.


- Par 01 – Beatriz e Manuela

Inicialmente, o Par 01 assumiu a tarefa de desenvolver a funcionalidade de consulta aos dados de saúde dos alunos. Essa seção específica do sistema disponibiliza informações pertinentes ao aluno, incluindo, mas não se limitando a, altura, peso, existência de restrições alimentares, condição de pessoa com deficiência (PCD), entre outros aspectos relevantes.
De forma coordenada e operando remotamente, a equipe deu início ao trabalho com um esforço concentrado na compreensão do framework Django, o qual fundamenta a arquitetura da aplicação em questão. O material didático fornecido pelo professor se mostrou um recurso valioso para o aprendizado e progresso do projeto.
Durante o desenvolvimento, um integrante do par desempenhou o papel de programadora, conduzindo a sessão de codificação e compartilhando sua tela através do Google Meet durante as reuniões virtuais. Paralelamente, o outro integrante contribuiu com a pesquisa de informações e esclarecimento de dúvidas ao longo do processo. Em um segundo momento, a dupla optou por alternar os papéis, visando otimizar a eficiência do trabalho e minimizar a margem para erros futuros.

- Par 02 – Lisa e Luziane

De início, coube ao Par 02 a tarefa de desenvolver a funcionalidade do formulário de contato, consistente em uma página na qual o usuário da aplicação informa alguns dados básicos (nome, telefone e e-mail), e envia uma mensagem para posterior análise pelo funcionário competente. Adicionalmente, este par foi responsável pela inclusão das funcionalidades de login e logout, bem como pela pesquisa de inconsistências e elaboração do presente relatório.
Nessa etapa do projeto, os integrantes do par já possuíam certa familiaridade com Python, HTML e CSS, mas não detinham conhecimentos de Django ou de Azure. Cientes desse cenário, os integrantes procuraram sanar suas deficiências técnicas através de aulas específicas e por meio de consultas com o professor, contando ainda com a colaboração de colegas experientes nos temas. Tais recursos foram essenciais para esclarecer dúvidas e conseguir executar e finalizar essa etapa do projeto.
No que se refere à elaboração do código, o Par 02 realizou suas atividades de forma presencial e remota, empregando a funcionalidade de compartilhamento de tela do Google Meet durante as interações remotas. Em ambos os casos, houve alternância entre as atividades de codificação e revisão/orientação do código. Destaque-se que essa prática se revelou benéfica tanto para prevenir eventuais equívocos como para facilitar a resolução destes de forma mais ágil.

- Par 03 – Matheus e Ygor

Após a divisão de tarefas, o Par 03 assumiu a função de desenvolver a funcionalidade da frequência dos alunos, consistente na visualização das faltas obtidas pelo aluno, bem como do seu percentual de presença nas aulas ministradas..
Para a realização desse processo, os integrantes do Par 03 reuniram-se em uma sala remota e distribuíram entre si as atividades que iriam produzir. Após diversas análises, um dos integrantes ficou responsável pelo HTML e CSS do site, ficando o outro responsável pela codificação do Django e pelo preenchimento do banco de dados na Microsoft Azure.
Com todas as tarefas concluídas, surgiram novas atividades para serem efetuadas, além da correção de erros observados durante o desenvolvimento do projeto. Por essa razão, um dos integrantes do par adicionou ao código uma funcionalidade onde os alunos cadastrados poderiam visualizar apenas os seus dados correspondentes e, em paralelo, o outro ficou responsável pela gravação do vídeo desenvolvido pelo grupo, no qual seriam demonstradas as funcionalidades da aplicação.

- Conclusões

A primeira etapa do projeto de desenvolvimento de software utilizando Python e Django juntamente com o ambiente Azure foi concluída e alcançou marcos significativos, embora diversos pontos tenham permanecido pendentes de implementação ou correção, os quais serão objeto de etapas posteriores.
Ressalta-se, mais uma vez, a importância da programação em pares para atingir esse objetivo, eis que promoveu não apenas uma colaboração mais estreita entre os membros da equipe como também contribuiu para um aperfeiçoamento da codificação em sentido amplo, o que representa mais um incentivo para prosseguir com sua aplicação.
