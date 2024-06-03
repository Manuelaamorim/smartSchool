# Contributing
Se você deseja colaborar com o desenvolvimento do SmartSchool, siga os passos abaixo:

## Criando sua conta no Github

O primeiro passo é criar uma conta no GitHub seguindo as instruções abaixo:

<ul>
  <li>
    <a  href="https://docs.github.com/pt/get-started/start-your-journey/creating-an-account-on-github"
      >Guia de Criação de Conta no Github</a>
  </li>
</ul>

## Clone do Repositório

Abra o terminal do Git Bash

- Navegue até o diretório onde você deseja clonar o repositório, utilizando o comando:

<html lang="pt">

      cd /c/Users/SeuUsuario/SeuDiretorio

</html>

- Clone o repositório para o diretório navegado, utilizando o comando:

<html lang="pt">

      git clone https://github.com/Manuelaamorim/SmartSchool.git

</html>

## Após acessar no código
- Habilitando execução de scripts no PowerShell do Windows:


<html lang="pt">

      Set-ExecutionPolicy -Scope CurrentUser Unrestricted

</html>

- Criando um ambiente virtual:


<html lang="pt">

      py -m venv venv

</html>

- Ativando o ambiente virtual:


<html lang="pt">

      venv\Scripts\activate.bat

</html>

- Instalar o conteúdo do requirements.txt:


<html lang="pt">

      pip install -r requirements.txt

</html>

- Criação de arquivos de migração baseados nas mudanças já existentes:


<html lang="pt">

      python manage.py makemigrations appsmartschool

</html>

- Aplicação das migrações ao seu banco de dados:


<html lang="pt">

      python manage.py migrate

</html>

Por fim, quando necessário, realize os comandos a seguir:

- Para executar o site, use o comando na URL http://127.0.0.1:8000/:


<html lang="pt">

      python manage.py runserver

</html>

- Verificando o status do repositório:


<html lang="pt">

      git status

</html>

- Adicionando arquivos modificados:


<html lang="pt">

      git add .

</html>

- Fazendo o commit das mudanças:


<html lang="pt">

      git commit -m “seu comentário”

</html>

- Enviando as mudanças para o repositório remoto:


<html lang="pt">

      git push

</html>

- Recebendo atualizações do código:


<html lang="pt">

      git pull

</html>

- Requisitando permissão para commitar:
Se você não foi adicionado como colaborador, siga estes passos para requisitar permissão para commit:

## Solicitando acesso
- Abra uma issue no repositório solicitando permissão para ser adicionado como colaborador. Descreva brevemente seu interesse em contribuir e as áreas específicas em que você gostaria de ajudar.

- Aguardando aprovação:
Um mantenedor do repositório revisará sua solicitação e, se aprovado, adicionará você como colaborador.

- Confirmando colaboração:
Após ser adicionado como colaborador, você receberá uma notificação por e-mail. Confirme a colaboração e siga os passos de envio de atualizações listados acima.

## Criando contas nas ferramentas necessárias e acessando-as
<ul>
  <li>
    <a  href="https://smartschl.atlassian.net/jira/software/projects/SSC/boards/1"
      >Projeto no Jira</a>
  </li>
    <li>
    <a  href="https://www.figma.com/file/OodUDTbRUE7cAgmlOUiEr9/SmartSchool?type=design&node-id=0-1&mode=design&t=V3uiesp8LFjSo9ET-0"
      >Protótipo de Lo-Fi no Figma</a>
  </li>
</ul>

## Solicitação de merge da prod para a main
Para solicitar um merge da branch prod (que está na Azure) para a branch main, siga os passos abaixo:

- Certifique-se de que está na branch prod:


<html lang="pt">

      git checkout prod

</html>

- Atualize a Branch prod:


<html lang="pt">

      git pull origin prod

</html>

- Crie um pull request:
Crie um novo pull request no GitHub solicitando o merge da prod para a main. Inclua uma descrição detalhada das mudanças e qualquer contexto necessário para a revisão.

- Aguarde revisão e aprovação:
Notifique os mantenedores do repositório sobre o pull request para que possam revisar e aprovar as mudanças.

- Merge aprovado:
Após a aprovação, um mantenedor do repositório fará o merge das mudanças na branch main.

Seguindo esses passos, você garantirá que todas as mudanças sejam revisadas e integradas corretamente ao projeto.


## Acessando nosso site na Azure
- Acesse o endereço https://fdssmartschool.azurewebsites.net/  para visitar o site da Smartschool, siga as diretrizes de contribuição descritas no nosso repositório para manter a consistência e qualidade do projeto.
 <ul>
  <li>
    <a  href="https://fdssmartschool.azurewebsites.net/"
      >Projeto na Azure</a>
  </li>
 </ul>

*Observação: Antes de acessar a aplicação web da Smart School, lembre-se de verificar as issues abertas para garantir que sua colaboração seja o mais eficaz possível. Antes de iniciar, comente na issue em que você está interessado para que os outros colaboradores saibam que você está trabalhando nela.*
