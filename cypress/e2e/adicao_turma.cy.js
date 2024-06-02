describe('test cadastrar Turma', () => {
    it('cenario1', () => {
        cy.exec('py manage.py flush --noinput', { failOnNonZeroExit: false }).then(() => {
            cy.exec('py manage.py create_superuser', { failOnNonZeroExit: false });
        });

        cy.visit('/admin'); 
        cy.get('#id_username').type('admin');
        cy.get('#id_password').type('123456');
        cy.get('.submit-row > input').click();
        
        cy.get('.model-user > :nth-child(2) > .addlink').click();
        cy.get('#id_username').type('16285736299');
        cy.get('#id_password1').type('julioam123');
        cy.get('#id_password2').type('julioam123');
        cy.get('.default').click();
        cy.get('.model-userfuncionario > td > .addlink').click();
        cy.get('#id_user').select('16285736299');
        cy.get('#id_nome').type('Júlio Alcântara Muniz');
        cy.get('#id_matricula').type('julioam123');
        cy.get('#id_cpf').type('16285736299');
        cy.get('#id_data_de_nascimento').type('24/08/1984');
        cy.get('#id_telefone').type('81977274873');
        cy.get('#id_email').type('julioam@gmail.com');
        cy.get('.default').click();

        cy.get('#logout-form > button').click();

        cy.visit('/');
        cy.get('[href="/funcionario/"] > .botao').click();
        cy.get('#username').type('16285736299');
        cy.get('#password').type('julioam123');
        cy.get('.btn-submit').click();

        cy.get(':nth-child(3) > .nav-menu-texto').click();
        cy.get('#codigo').type('2024POR4');
        cy.get('#nome').type('Português');
        cy.get('#carga_horaria').type('60');
        cy.get('#ementa').type('Desenvolver a competência comunicativa dos alunos, aprimorando as habilidades de leitura e escrita');
        cy.get('button').click();

        cy.get(':nth-child(3) > .nav-menu-texto').click();
        cy.get('#codigo').type('2024MAT4');
        cy.get('#nome').type('Matemática');
        cy.get('#carga_horaria').type('60');
        cy.get('#ementa').type('Desenvolver uma base sólida de raciocínio lógico e matemático, utilizando pensamento analítico para resolver problemas');
        cy.get('button').click();

        cy.get(':nth-child(3) > .nav-menu-texto').click();
        cy.get('#codigo').type('2024CIE4');
        cy.get('#nome').type('Ciências');
        cy.get('#carga_horaria').type('60');
        cy.get('#ementa').type('Promover o entendimento dos fenômenos naturais e dos princípios científicos que governam o mundo ao nosso redor');
        cy.get('button').click();

        cy.get(':nth-child(3) > .nav-menu-texto').click();
        cy.get('#codigo').type('2024ART4');
        cy.get('#nome').type('Artes');
        cy.get('#carga_horaria').type('60');
        cy.get('#ementa').type('Desenvolver a percepção dos alunos nos diversos campos da arte incentivando a apreciação artística');
        cy.get('button').click();

        cy.get(':nth-child(4) > .nav-menu-texto').click();
        cy.get('#serie').type('4');
        cy.get('#turma').type('A');
        cy.get('#codigo_materia_1').type('2024POR4');
        cy.get('#codigo_materia_2').type('2024MAT4');
        cy.get('#codigo_materia_3').type('2024CIE4');
        cy.get('#codigo_materia_4').type('2024ART4');
        cy.get('.btn-submit').click();

        cy.get('p').invoke('text').should('contain', 'Cadastro realizado com sucesso.')
    });

    it('cenario2', () => {
        cy.exec('py manage.py flush --noinput', { failOnNonZeroExit: false }).then(() => {
            cy.exec('py manage.py create_superuser', { failOnNonZeroExit: false });
        });

        cy.visit('/admin');
        cy.get('#id_username').type('admin');
        cy.get('#id_password').type('123456');
        cy.get('.submit-row > input').click();

        cy.get('.model-user > :nth-child(2) > .addlink').click();
        cy.get('#id_username').type('87565376718');
        cy.get('#id_password1').type('amandavc123');
        cy.get('#id_password2').type('amandavc123');
        cy.get('.default').click();
        cy.get('.model-userfuncionario > td > .addlink').click();
        cy.get('#id_user').select('87565376718');
        cy.get('#id_nome').type('Amanda Vieira Carvalho');
        cy.get('#id_matricula').type('amandavc123');
        cy.get('#id_cpf').type('87565376718');
        cy.get('#id_data_de_nascimento').type('19/03/1991');
        cy.get('#id_telefone').type('81998828361');
        cy.get('#id_email').type('amandavc@gmail.com');
        cy.get('.default').click();

        cy.get('#logout-form > button').click();

        cy.visit('/');
        cy.get('[href="/funcionario/"] > .botao').click();
        cy.get('#username').type('87565376718');
        cy.get('#password').type('amandavc123');
        cy.get('.btn-submit').click();

        cy.get(':nth-child(3) > .nav-menu-texto').click();
        cy.get('#codigo').type('2024POR4');
        cy.get('#nome').type('Português');
        cy.get('#carga_horaria').type('60');
        cy.get('#ementa').type('Desenvolver a competência comunicativa dos alunos, aprimorando as habilidades de leitura e escrita');
        cy.get('button').click();

        cy.get(':nth-child(3) > .nav-menu-texto').click();
        cy.get('#codigo').type('2024MAT4');
        cy.get('#nome').type('Matemática');
        cy.get('#carga_horaria').type('60');
        cy.get('#ementa').type('Desenvolver uma base sólida de raciocínio lógico e matemático, utilizando pensamento analítico para resolver problemas');
        cy.get('button').click();

        cy.get(':nth-child(3) > .nav-menu-texto').click();
        cy.get('#codigo').type('2024CIE4');
        cy.get('#nome').type('Ciências');
        cy.get('#carga_horaria').type('60');
        cy.get('#ementa').type('Promover o entendimento dos fenômenos naturais e dos princípios científicos que governam o mundo ao nosso redor');
        cy.get('button').click();

        cy.get(':nth-child(3) > .nav-menu-texto').click();
        cy.get('#codigo').type('2024ART4');
        cy.get('#nome').type('Artes');
        cy.get('#carga_horaria').type('60');
        cy.get('#ementa').type('Desenvolver a percepção dos alunos nos diversos campos da arte incentivando a apreciação artística');
        cy.get('button').click();

        cy.get(':nth-child(4) > .nav-menu-texto').click();
        cy.get('#serie').type('4');
        cy.get('#turma').type('A');
        cy.get('#codigo_materia_1').type('2024POR4');
        cy.get('#codigo_materia_2').type('2024MAT4');
        cy.get('#codigo_materia_3').type('2024CIE4');
        cy.get('#codigo_materia_4').type('2024ART4');
        cy.get('.btn-submit').click();

        cy.get(':nth-child(3) > .nav-menu-texto').click();
        cy.get('#codigo').type('2025POR4');
        cy.get('#nome').type('Português');
        cy.get('#carga_horaria').type('60');
        cy.get('#ementa').type('Desenvolver a competência comunicativa dos alunos, aprimorando as habilidades de leitura e escrita');
        cy.get('button').click();

        cy.get(':nth-child(3) > .nav-menu-texto').click();
        cy.get('#codigo').type('2025MAT4');
        cy.get('#nome').type('Matemática');
        cy.get('#carga_horaria').type('60');
        cy.get('#ementa').type('Desenvolver uma base sólida de raciocínio lógico e matemático, utilizando pensamento analítico para resolver problemas');
        cy.get('button').click();

        cy.get(':nth-child(3) > .nav-menu-texto').click();
        cy.get('#codigo').type('2025CIE4');
        cy.get('#nome').type('Ciências');
        cy.get('#carga_horaria').type('60');
        cy.get('#ementa').type('Promover o entendimento dos fenômenos naturais e dos princípios científicos que governam o mundo ao nosso redor');
        cy.get('button').click();

        cy.get(':nth-child(3) > .nav-menu-texto').click();
        cy.get('#codigo').type('2025ART4');
        cy.get('#nome').type('Artes');
        cy.get('#carga_horaria').type('60');
        cy.get('#ementa').type('Desenvolver a percepção dos alunos nos diversos campos da arte incentivando a apreciação artística');
        cy.get('button').click();

        cy.get(':nth-child(4) > .nav-menu-texto').click();
        cy.get('#serie').type('4');
        cy.get('#turma').type('A');
        cy.get('#codigo_materia_1').type('2025POR4');
        cy.get('#codigo_materia_2').type('2025MAT4');
        cy.get('#codigo_materia_3').type('2025CIE4');
        cy.get('#codigo_materia_4').type('2025ART4');
        cy.get('.btn-submit').click();

        cy.get('.error').invoke('text').should('contain', 'A turma já existe.');
    });

    it('cenario3', () => {
        cy.exec('py manage.py flush --noinput', { failOnNonZeroExit: false }).then(() => {
            cy.exec('py manage.py create_superuser', { failOnNonZeroExit: false });
        });

        cy.visit('/admin');
        cy.get('#id_username').type('admin');
        cy.get('#id_password').type('123456');
        cy.get('.submit-row > input').click();

        cy.get('.model-user > :nth-child(2) > .addlink').click();
        cy.get('#id_username').type('87565376718');
        cy.get('#id_password1').type('amandavc123');
        cy.get('#id_password2').type('amandavc123');
        cy.get('.default').click();
        cy.get('.model-userfuncionario > td > .addlink').click();
        cy.get('#id_user').select('87565376718');
        cy.get('#id_nome').type('Amanda Vieira Carvalho');
        cy.get('#id_matricula').type('amandavc123');
        cy.get('#id_cpf').type('87565376718');
        cy.get('#id_data_de_nascimento').type('19/03/1991');
        cy.get('#id_telefone').type('81998828361');
        cy.get('#id_email').type('amandavc@gmail.com');
        cy.get('.default').click();

        cy.get('#logout-form > button').click();

        cy.visit('/');
        cy.get('[href="/funcionario/"] > .botao').click();
        cy.get('#username').type('87565376718');
        cy.get('#password').type('amandavc123');
        cy.get('.btn-submit').click();

        cy.get(':nth-child(3) > .nav-menu-texto').click();
        cy.get('#codigo').type('2024POR4');
        cy.get('#nome').type('Português');
        cy.get('#carga_horaria').type('60');
        cy.get('#ementa').type('Desenvolver a competência comunicativa dos alunos, aprimorando as habilidades de leitura e escrita');
        cy.get('button').click();

        cy.get(':nth-child(3) > .nav-menu-texto').click();
        cy.get('#codigo').type('2024MAT4');
        cy.get('#nome').type('Matemática');
        cy.get('#carga_horaria').type('60');
        cy.get('#ementa').type('Desenvolver uma base sólida de raciocínio lógico e matemático, utilizando pensamento analítico para resolver problemas');
        cy.get('button').click();

        cy.get(':nth-child(3) > .nav-menu-texto').click();
        cy.get('#codigo').type('2024CIE4');
        cy.get('#nome').type('Ciências');
        cy.get('#carga_horaria').type('60');
        cy.get('#ementa').type('Promover o entendimento dos fenômenos naturais e dos princípios científicos que governam o mundo ao nosso redor');
        cy.get('button').click();

        cy.get(':nth-child(3) > .nav-menu-texto').click();
        cy.get('#codigo').type('2024ART4');
        cy.get('#nome').type('Artes');
        cy.get('#carga_horaria').type('60');
        cy.get('#ementa').type('Desenvolver a percepção dos alunos nos diversos campos da arte incentivando a apreciação artística');
        cy.get('button').click();

        cy.get(':nth-child(4) > .nav-menu-texto').click();
        cy.get('#serie').type('4');
        cy.get('#turma').type('A');
        cy.get('#codigo_materia_1').type('2010POR4');
        cy.get('#codigo_materia_2').type('2024MAT4');
        cy.get('#codigo_materia_3').type('2024CIE4');
        cy.get('#codigo_materia_4').type('2024ART4');
        cy.get('.btn-submit').click();

        cy.get('.messages').within(() => {
            cy.contains('div', 'Matéria 1 não cadastrada.').should('exist');
        });
    });

    it('cenario4', () => {
        cy.exec('py manage.py flush --noinput', { failOnNonZeroExit: false }).then(() => {
            cy.exec('py manage.py create_superuser', { failOnNonZeroExit: false });
        });

        cy.visit('/admin');
        cy.get('#id_username').type('admin');
        cy.get('#id_password').type('123456');
        cy.get('.submit-row > input').click();

        cy.get('.model-user > :nth-child(2) > .addlink').click();
        cy.get('#id_username').type('87565376718');
        cy.get('#id_password1').type('amandavc123');
        cy.get('#id_password2').type('amandavc123');
        cy.get('.default').click();
        cy.get('.model-userfuncionario > td > .addlink').click();
        cy.get('#id_user').select('87565376718');
        cy.get('#id_nome').type('Amanda Vieira Carvalho');
        cy.get('#id_matricula').type('amandavc123');
        cy.get('#id_cpf').type('87565376718');
        cy.get('#id_data_de_nascimento').type('19/03/1991');
        cy.get('#id_telefone').type('81998828361');
        cy.get('#id_email').type('amandavc@gmail.com');
        cy.get('.default').click();

        cy.get('#logout-form > button').click();

        cy.visit('/');
        cy.get('[href="/funcionario/"] > .botao').click();
        cy.get('#username').type('87565376718');
        cy.get('#password').type('amandavc123');
        cy.get('.btn-submit').click();

        cy.get(':nth-child(3) > .nav-menu-texto').click();
        cy.get('#codigo').type('2024POR4');
        cy.get('#nome').type('Português');
        cy.get('#carga_horaria').type('60');
        cy.get('#ementa').type('Desenvolver a competência comunicativa dos alunos, aprimorando as habilidades de leitura e escrita');
        cy.get('button').click();

        cy.get(':nth-child(3) > .nav-menu-texto').click();
        cy.get('#codigo').type('2024MAT4');
        cy.get('#nome').type('Matemática');
        cy.get('#carga_horaria').type('60');
        cy.get('#ementa').type('Desenvolver uma base sólida de raciocínio lógico e matemático, utilizando pensamento analítico para resolver problemas');
        cy.get('button').click();

        cy.get(':nth-child(3) > .nav-menu-texto').click();
        cy.get('#codigo').type('2024CIE4');
        cy.get('#nome').type('Ciências');
        cy.get('#carga_horaria').type('60');
        cy.get('#ementa').type('Promover o entendimento dos fenômenos naturais e dos princípios científicos que governam o mundo ao nosso redor');
        cy.get('button').click();

        cy.get(':nth-child(3) > .nav-menu-texto').click();
        cy.get('#codigo').type('2024ART4');
        cy.get('#nome').type('Artes');
        cy.get('#carga_horaria').type('60');
        cy.get('#ementa').type('Desenvolver a percepção dos alunos nos diversos campos da arte incentivando a apreciação artística');
        cy.get('button').click();

        cy.get(':nth-child(4) > .nav-menu-texto').click();
        cy.get('#serie').type('4');
        cy.get('#turma').type('A');
        cy.get('#codigo_materia_1').type('2024POR4');
        cy.get('#codigo_materia_2').type('2024MAT4');
        cy.get('#codigo_materia_3').type('2024CIE4');
        cy.get('#codigo_materia_4').type('2024ART4');
        cy.get('.btn-submit').click();

        cy.get(':nth-child(3) > .nav-menu-texto').click();
        cy.get('#codigo').type('2025MAT4');
        cy.get('#nome').type('Matemática');
        cy.get('#carga_horaria').type('60');
        cy.get('#ementa').type('Desenvolver uma base sólida de raciocínio lógico e matemático, utilizando pensamento analítico para resolver problemas');
        cy.get('button').click();

        cy.get(':nth-child(3) > .nav-menu-texto').click();
        cy.get('#codigo').type('2025CIE4');
        cy.get('#nome').type('Ciências');
        cy.get('#carga_horaria').type('60');
        cy.get('#ementa').type('Promover o entendimento dos fenômenos naturais e dos princípios científicos que governam o mundo ao nosso redor');
        cy.get('button').click();

        cy.get(':nth-child(3) > .nav-menu-texto').click();
        cy.get('#codigo').type('2025ART4');
        cy.get('#nome').type('Artes');
        cy.get('#carga_horaria').type('60');
        cy.get('#ementa').type('Desenvolver a percepção dos alunos nos diversos campos da arte incentivando a apreciação artística');
        cy.get('button').click();

        cy.get(':nth-child(4) > .nav-menu-texto').click();
        cy.get('#serie').type('5');
        cy.get('#turma').type('A');
        cy.get('#codigo_materia_1').type('2024POR4');
        cy.get('#codigo_materia_2').type('2025MAT4');
        cy.get('#codigo_materia_3').type('2025CIE4');
        cy.get('#codigo_materia_4').type('2025ART4');
        cy.get('.btn-submit').click();

        cy.get('.messages', { timeout: 10000 }).within(() => {
            cy.get('.error').invoke('text').should('contain', 'Código da materia 1 já existe.');
        });
    });
});
