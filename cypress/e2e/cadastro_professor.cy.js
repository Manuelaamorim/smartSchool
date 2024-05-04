describe('test visualizar Boletim', () => {
    it('cenario1', () => { //Maria Ferreira está cadastrada no sistema da SmartSchool e está matriculada nas aulas do 3º ano C do Fundamental I, que inclui as matérias de História III, Geografia III, Matemática III, Português III, e Ciências III. Ela tentará consultar as suas notas e o banco de dados retornará as informações salvas referentes a todas as notas por disciplina da aluna;
        cy.visit('/');
        cy.get('[href="/funcionario/"] > .botao').click()
        cy.get('#username').type('76513312493')
        cy.get('#password').type('ga123456')
        cy.get('.btn-submit').click()
        cy.wait(3000)
        cy.get(':nth-child(2) > .nav-menu-texto').click()
        cy.get('#nome').type('José Manuel Barros')
        cy.get('#matricula').type('jmaba123')
        cy.get('#cpf').type('94671686422')
        cy.get('#data_de_nascimento').type('1992-04-22')
        cy.get('#telefone').type('98765-4321')
        cy.get('#email').type('josemanuelb@gmail.com')
        cy.get('.btn-submit').click()
        cy.get('p').invoke('text').should('have.string', "Cadastro realizado com sucesso.")
        cy.wait(3000)
        
    })

    it('cenario2', () => { //Luiz Rosa está cadastrado no sistema da SmartSchool com os seguintes dados: matrícula - 20090304; CPF - 59843216754; data de nascimento - 24/05/2018; endereço - Rua Padre Roma 345; e-mail - germanarosa@gmail.com; nome do responsável - Germana Rosa; CPF do responsável - 94325674387 e está matriculado nas aulas do 1º ano B do Fundamental I, que inclui as matérias de História I, Geografia I, Matemática I, Português I e Ciências I. Ele poderá consultar apenas as notas de cada matéria em que está matriculado, e não as de Maria Ferreira, ainda que ela esteja na mesma turma;

        cy.visit('/');
        cy.get('[href="/funcionario/"] > .botao').click()
        cy.get('#username').type('76513312493')
        cy.get('#password').type('ga123456')
        cy.get('.btn-submit').click()
        cy.wait(3000)
        cy.get(':nth-child(2) > .nav-menu-texto').click()
        cy.get('#nome').type('Maria Alice Gusmão')
        cy.get('#matricula').type('malgu123')
        cy.get('#cpf').type('94671686422')
        cy.get('#data_de_nascimento').type('1997-11-07')
        cy.get('#telefone').type('961876432')
        cy.get('#email').type('malicegusmao@outlook.com')
        cy.get('.btn-submit').click()
        cy.get('.error').invoke('text').should('have.string', "Um usuário com este CPF já está cadastrado.")
        cy.wait(3000)
        
    })

    it('cenario3', () => { //A funcionária Stella Natalia Bernardes, cadastrada no sistema, acessa a aplicação e informa login (34479066420) e senha (stella123) e acessa o menu para cadastrar um professor. Informa apenas o nome do professor e clica no botão "Cadastrar Professor", mas o formulário não é submetido, pois todos os campos devem ser preenchidos. Ao informar todos os campos do professor a ser cadastrado (nome - Maria Alice Fernandes Novais, matrícula - mlfn1234, CPF - 98765432100, data de nascimento - 1985-05-16, telefone - 558132165498 e email - mafn@example.com), clica novamente no botão "Cadastrar Professor" e o cadastro é finalizado com sucesso.

        //Acessar o admin com o superuser cadastrado e cadastrar um funcionário

        cy.visit('/admin'); // http://127.0.0.1:8000/
        cy.get('#id_username').type('admin')
        cy.get('#id_password').type('123456')
        cy.get('.submit-row > input').click()
        cy.get('.model-user > :nth-child(2) > .addlink').click()
        cy.get('#id_username').type('34479066420')
        cy.get('#id_password1').type('stellanb123')
        cy.get('#id_password2').type('stellanb123')
        cy.get('.default').click()
        cy.wait(3000)
        
        cy.get('.model-userfuncionario > td > .addlink')
        cy.get('.model-userfuncionario > td > .addlink').click()
        cy.get('#id_user').select('34479066420');
        cy.get('#id_nome').type('Stella Natalia Bernardes')
        cy.get('#id_matricula').type('stellanb123')
        cy.get('#id_cpf').type('34479066420')
        cy.get('#id_data_de_nascimento').type('11/01/1974')
        cy.get('#id_telefone').type('81982355859')
        cy.get('#id_email').type('stellanb@gmail.com')
        cy.get('.default').click()
        cy.wait(3000)

        cy.get('#logout-form > button').click()

       //Acesar a página http://127.0.0.1:8000/ e fazer login como funcionário

        cy.visit('/')
        cy.get('[href="/funcionario/"] > .botao').click()
        cy.get('#username').type('34479066420')
        cy.get('#password').type('stellanb123')
        cy.get('.btn-submit').click()
        cy.wait(3000)

        //Acessar o cadastro de professor
        cy.get(':nth-child(2) > .nav-menu-texto').click(); 

        // Preenche apenas o campo "nome" para testar a validação dos campos requeridos
        cy.get('#nome').type('Maria Laura Fernandes Novais');

        // Tenta submeter o formulário
        cy.get('.btn-submit').click();

        // Verifica se a URL mudou para a página de sucesso, o que indica que o formulário foi submetido
        // Isso não deve acontecer, pois os outros campos requeridos não foram preenchidos
        cy.url().should('not.include', '/cadastro_sucesso');

        cy.wait(5000)

        // Preenche os demais campos requeridos
        cy.get('#matricula').type('mlfn1234');
        cy.get('#cpf').type('98765432100');
        cy.get('#data_de_nascimento').type('1985-05-16');
        cy.get('#telefone').type('558132165498');
        cy.get('#email').type('mafn@example.com');

        // Submete o formulário novamente, desta vez com todos os campos preenchidos
        cy.get('.btn-submit').click();

        // Verifica se a URL agora inclui 'cadastro_sucesso', o que indica que o cadastro foi completado com sucesso
        cy.url().should('include', '/cadastro_sucesso');
        
        
        cy.wait(3000)

        
    })
})