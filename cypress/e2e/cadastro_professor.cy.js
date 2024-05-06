describe('test cadastrar professor', () => {
    it('cenario1', () => { // A funcionária Stella Natalia Bernardes, cadastrada no sistema, acessa a aplicação e informa login (34479066420) e senha (stella123) e acessa o menu para cadastrar um professor. Informa os dados do professor a ser cadastrado (nome - José Manuel Barros, matrícula - jmaba123, CPF - 94671686422, data de nascimento - 1992-04-22, telefone - 81987654321 e email - josemanuelb@gmail.com), clica no botão "Cadastrar Professor" e o cadastro é finalizado com sucesso.
        
        //Acessa o admin com o superuser cadastrado e cadastra um funcionário

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
        
        //Acessa a página http://127.0.0.1:8000/, faz login como funcionário Stella e cadastra o professor José Manuel Barros com sucesso

        cy.visit('/');
        cy.get('[href="/funcionario/"] > .botao').click()
        cy.get('#username').type('34479066420')
        cy.get('#password').type('stellanb123')
        cy.get('.btn-submit').click()
        cy.wait(3000)
        cy.get(':nth-child(2) > .nav-menu-texto').click()
        cy.get('#nome').type('José Manuel Barros')
        cy.get('#matricula').type('jmaba123')
        cy.get('#cpf').type('94671686422')
        cy.get('#data_de_nascimento').type('1992-04-22')
        cy.get('#telefone').type('81987654321')
        cy.get('#email').type('josemanuelb@gmail.com')
        cy.get('.btn-submit').click()
        cy.get('p').invoke('text').should('have.string', "Cadastro realizado com sucesso.")
        cy.wait(3000)
        
    })

    it('cenario2', () => { //A funcionária Stella Natalia Bernardes, cadastrada no sistema, acessa a aplicação e informa login (34479066420) e senha (stella123) e acessa o menu para cadastrar um professor. Informa os dados do professor a ser cadastrado (nome - Maria Alice Gusmão, matrícula - malgu123, CPF - 94671686422, data de nascimento - 1997-11-07, telefone - 81961876432 e email - malicegusmao@outlook.com), clica no botão "Cadastrar Professor" e o cdastro não é realizado, pois já há um professor cadastrado com o mesmo CPF no sistema.

        //Acessa a página http://127.0.0.1:8000/, faz login como funcionário Stella e tenta cadastrar novamente o professor José Manuel Barros

        cy.visit('/');
        cy.get('[href="/funcionario/"] > .botao').click()
        cy.get('#username').type('34479066420')
        cy.get('#password').type('stellanb123')
        cy.get('.btn-submit').click()
        cy.wait(3000)
        cy.get(':nth-child(2) > .nav-menu-texto').click()
        cy.get('#nome').type('Maria Alice Gusmão')
        cy.get('#matricula').type('malgu123')
        cy.get('#cpf').type('94671686422')
        cy.get('#data_de_nascimento').type('1997-11-07')
        cy.get('#telefone').type('81961876432')
        cy.get('#email').type('malicegusmao@outlook.com')
        cy.get('.btn-submit').click()
        cy.get('.error').invoke('text').should('have.string', "Um usuário com este CPF já está cadastrado.")
        cy.wait(3000)
        
    })

    it('cenario3', () => { //A funcionária Stella Natalia Bernardes, cadastrada no sistema, acessa a aplicação e informa login (34479066420) e senha (stella123) e acessa o menu para cadastrar um professor. Informa apenas o nome do professor e clica no botão "Cadastrar Professor", mas o formulário não é submetido, pois todos os campos devem ser preenchidos. Ao informar todos os campos do professor a ser cadastrado (nome - Maria das Dores Pascoal, matrícula - mdopa123, CPF - 98765432100, data de nascimento - 1975-02-03, telefone - 81984653875 e email - mdasdorespascoal@hotmail.com), clica novamente no botão "Cadastrar Professor" e o cadastro é finalizado com sucesso.


       //Acessa a página http://127.0.0.1:8000/ e faz login como funcionário Stella

        cy.visit('/')
        cy.get('[href="/funcionario/"] > .botao').click()
        cy.get('#username').type('34479066420')
        cy.get('#password').type('stellanb123')
        cy.get('.btn-submit').click()
        cy.wait(3000)

        //Acessa o cadastro de professor
        cy.get(':nth-child(2) > .nav-menu-texto').click(); 

        // Preenche apenas o campo "nome" para testar a validação dos campos requeridos
        cy.get('#nome').type('Maria das Dores Pascoal');

        // Tenta submeter o formulário
        cy.get('.btn-submit').click();

        // Verifica se a URL mudou para a página de sucesso, o que indica que o formulário foi submetido
        // Não houve mudança, pois os outros campos requeridos não foram preenchidos
        cy.url().should('not.include', '/cadastro_sucesso');

        cy.wait(5000)

        // Preenche os demais campos requeridos
        cy.get('#matricula').type('mdopa123');
        cy.get('#cpf').type('98765432100');
        cy.get('#data_de_nascimento').type('1975-02-03');
        cy.get('#telefone').type('81984653875');
        cy.get('#email').type('mdasdorespascoal@hotmail.com');

        // Submete o formulário novamente, desta vez com todos os campos preenchidos
        cy.get('.btn-submit').click();

        // Verifica se a URL agora inclui 'cadastro_sucesso', o que indica que o cadastro foi completado com sucesso
        cy.url().should('include', '/cadastro_sucesso');
        
        
        cy.wait(3000)

        
    })
})