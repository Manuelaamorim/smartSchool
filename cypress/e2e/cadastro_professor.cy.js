describe('test cadastrar professor', () => {
    it('cenario1', () => { // A funcionária Stella Natalia Bernardes, cadastrada no sistema, acessa a aplicação e informa login (34479066420) e senha (stella123) e acessa o menu para cadastrar um professor. Informa os dados do professor a ser cadastrado (nome - José Manuel Barros, matrícula - jmaba123, CPF - 94671686422, data de nascimento - 1992-04-22, telefone - 81987654321 e email - josemanuelb@gmail.com), clica no botão "Cadastrar Professor" e o cadastro é finalizado com sucesso.
        cy.exec('py manage.py flush --noinput', { failOnNonZeroExit: false });
        cy.exec('py manage.py create_superuser', { failOnNonZeroExit: false });

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
        
        //Acessa a página http://127.0.0.1:8000/, faz login como funcionário Stella Bernardes e cadastra o professor José Manuel Barros com sucesso

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

    it('cenario2', () => { //A funcionária Maria da Conceição Xavier, cadastrada no sistema, acessa a aplicação e informa login (84258399477) e senha (mariacx123) e acessa o menu para cadastrar um professor. Informa os dados do professor a ser cadastrado (nome - Maria Alice Gusmão, matrícula - malgu123, CPF - 84936329452, data de nascimento - 1997-11-07, telefone - 81961876432 e email - malicegusmao@outlook.com), clica no botão "Cadastrar Professor" e o cadastro é finalizado com sucesso. Em seguida, tenta cadastrar um novo professor, informa seus dados (nome - Manuel Fernandes da Silva, CPF - 84936329452, matrícula - mfds1234, data de nascimento - 1996-07-11, telefone 8196880909 e email - mfds@example.com) e o cadastro não é realizado, pois já há um professor cadastrado no sistema com o mesmo CPF.
        cy.exec('py manage.py flush --noinput', { failOnNonZeroExit: false });
        cy.exec('py manage.py create_superuser', { failOnNonZeroExit: false });

        //Acessa o admin com o superuser cadastrado e cadastra um funcionário

        cy.visit('/admin'); // http://127.0.0.1:8000/
        cy.get('#id_username').type('admin')
        cy.get('#id_password').type('123456')
        cy.get('.submit-row > input').click()
        cy.get('.model-user > :nth-child(2) > .addlink').click()
        cy.get('#id_username').type('84258399477')
        cy.get('#id_password1').type('mariacx123')
        cy.get('#id_password2').type('mariacx123')
        cy.get('.default').click()
        cy.wait(3000)
        
        cy.get('.model-userfuncionario > td > .addlink')
        cy.get('.model-userfuncionario > td > .addlink').click()
        cy.get('#id_user').select('84258399477');
        cy.get('#id_nome').type('Maria da Conceição Xavier')
        cy.get('#id_matricula').type('mariacx123')
        cy.get('#id_cpf').type('84258399477')
        cy.get('#id_data_de_nascimento').type('11/02/1984')
        cy.get('#id_telefone').type('81982355958')
        cy.get('#id_email').type('mariacx@gmail.com')
        cy.get('.default').click()
        cy.wait(3000)

        cy.get('#logout-form > button').click()

        //Acessa a página http://127.0.0.1:8000/, faz login como funcionário Maria da Conceição Xavier e para cadastrar a professora Maria Alice Gusmão
        cy.visit('/');
        cy.get('[href="/funcionario/"] > .botao').click()
        cy.get('#username').type('84258399477')
        cy.get('#password').type('mariacx123')
        cy.get('.btn-submit').click()
        cy.wait(3000)
        cy.get(':nth-child(2) > .nav-menu-texto').click()
        cy.get('#nome').type('Maria Alice Gusmão')
        cy.get('#matricula').type('malgu123')
        cy.get('#cpf').type('84936329452')
        cy.get('#data_de_nascimento').type('1997-11-07')
        cy.get('#telefone').type('81961876432')
        cy.get('#email').type('malicegusmao@outlook.com')
        cy.get('.btn-submit').click()
        cy.get('p').invoke('text').should('have.string', "Cadastro realizado com sucesso.")
        
        cy.wait(3000)

        cy.get(':nth-child(2) > .nav-menu-texto').click()
        cy.get('#nome').type('Manuel Fernandes da Silva')
        cy.get('#matricula').type('mfds1234')
        cy.get('#cpf').type('84936329452')
        cy.get('#data_de_nascimento').type('1996-07-11')
        cy.get('#telefone').type('8196880909')
        cy.get('#email').type('mfds@example.com')
        cy.get('.btn-submit').click()
        cy.get('.error').invoke('text').should('have.string', "Um usuário com este CPF já está cadastrado.")
        
        cy.wait(3000)

        cy.get('#nome').type('Manuel Fernandes da Silva')
        cy.get('#matricula').type('mfds1234')
        cy.get('#cpf').type('90990949494')
        cy.get('#data_de_nascimento').type('1996-07-11')
        cy.get('#telefone').type('8196880909')
        cy.get('#email').type('mfds@example.com')
        cy.get('.btn-submit').click()
        cy.get('p').invoke('text').should('have.string', "Cadastro realizado com sucesso.")
        
        cy.wait(3000)
        
    })

    it('cenario3', () => { //A funcionária Clarice Maria da Silva, cadastrada no sistema, acessa a aplicação e informa login (27307763460) e senha (clams123) e acessa o menu para cadastrar um professor. Deixa um ou mais campos em branco e clica no botão "Cadastrar Professor", mas o formulário não é submetido, pois todos os campos devem ser preenchidos. Ao informar todos os campos do professor a ser cadastrado (nome - Maria das Dores Pascoal, matrícula - mdopa123, CPF - 98765432100, data de nascimento - 1975-02-03, telefone - 81984653875 e email - mdasdorespascoal@hotmail.com), clica novamente no botão "Cadastrar Professor" e o cadastro é finalizado com sucesso.
        cy.exec('py manage.py flush --noinput', { failOnNonZeroExit: false });
        cy.exec('py manage.py create_superuser', { failOnNonZeroExit: false });
        
        //Acessa o admin com o superuser cadastrado e cadastra um funcionário

        cy.visit('/admin'); // http://127.0.0.1:8000/
        cy.get('#id_username').type('admin')
        cy.get('#id_password').type('123456')
        cy.get('.submit-row > input').click()
        cy.get('.model-user > :nth-child(2) > .addlink').click()
        cy.get('#id_username').type('27307763460')
        cy.get('#id_password1').type('clams123')
        cy.get('#id_password2').type('clams123')
        cy.get('.default').click()
        cy.wait(3000)
         
        cy.get('.model-userfuncionario > td > .addlink')
        cy.get('.model-userfuncionario > td > .addlink').click()
        cy.get('#id_user').select('27307763460');
        cy.get('#id_nome').type('Clarice Maria da Silva')
        cy.get('#id_matricula').type('clams123')
        cy.get('#id_cpf').type('27307763460')
        cy.get('#id_data_de_nascimento').type('11/03/1984')
        cy.get('#id_telefone').type('81982350000')
        cy.get('#id_email').type('clams@gmail.com')
        cy.get('.default').click()
        cy.wait(3000)
 
        cy.get('#logout-form > button').click()

       //Acessa a página http://127.0.0.1:8000/ e faz login como funcionário Clarice Maria da Silva para cadastrar a professora Maria das Dores Pascoal

        cy.visit('/')
        cy.get('[href="/funcionario/"] > .botao').click()
        cy.get('#username').type('27307763460')
        cy.get('#password').type('clams123')
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

        // Preenche o campo matrícula
        cy.get('#matricula').type('mdopa123');

        // Tenta submeter o formulário
        cy.get('.btn-submit').click();

        // Verifica se a URL mudou para a página de sucesso, o que indica que o formulário foi submetido
        // Não houve mudança, pois os outros campos requeridos não foram preenchidos
        cy.url().should('not.include', '/cadastro_sucesso');

        cy.wait(5000)

        // Preenche o campo CPF
        cy.get('#cpf').type('98765432100');

        // Tenta submeter o formulário
        cy.get('.btn-submit').click();

        // Verifica se a URL mudou para a página de sucesso, o que indica que o formulário foi submetido
        // Não houve mudança, pois os outros campos requeridos não foram preenchidos
        cy.url().should('not.include', '/cadastro_sucesso');

        cy.wait(5000)

        //Preenche os demais campos
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