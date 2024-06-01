describe('test cadastrar disciplina', () => {
    it('cenario1', () => { // A funcionária Mirtes Baptista, cadastrada no sistema, acessa a aplicação e informa login (57302471410) e senha (mirtes123) e acessa o menu para cadastrar uma disciplina. Informa os dados da disciplina a ser cadastrada (código - 12, nome - Português I A, carga horária - 200, ementa - Assuntos), clica no botão "Cadastrar Disciplina" e o cadastro é finalizado com sucesso.
        cy.exec('py manage.py flush --noinput', { failOnNonZeroExit: false });
        cy.exec('py manage.py create_superuser', { failOnNonZeroExit: false });

        //Acessa o admin com o superuser cadastrado e cadastra um funcionário

        cy.visit('/admin'); // http://127.0.0.1:8000/
        cy.get('#id_username').type('admin')
        cy.get('#id_password').type('123456')
        cy.get('.submit-row > input').click()
        cy.get('.model-user > :nth-child(2) > .addlink').click()
        cy.get('#id_username').type('57302471410')
        cy.get('#id_password1').type('mirtes123')
        cy.get('#id_password2').type('mirtes123')
        cy.get('.default').click()
        cy.wait(3000)
        
        cy.get('.model-userfuncionario > td > .addlink')
        cy.get('.model-userfuncionario > td > .addlink').click()
        cy.get('#id_user').select('57302471410');
        cy.get('#id_nome').type('Mirtes Baptista')
        cy.get('#id_matricula').type('mirtes123')
        cy.get('#id_cpf').type('57302471410')
        cy.get('#id_data_de_nascimento').type('24/01/1993')
        cy.get('#id_telefone').type('81995467823')
        cy.get('#id_email').type('mirtesb@gmail.com')
        cy.get('.default').click()
        cy.wait(3000)

        cy.get('#logout-form > button').click()
        
        //Acessa a página http://127.0.0.1:8000/, faz login como funcionária Mirtes Baptista e cadastra a disciplina Português I A

        cy.visit('/');
        cy.get('[href="/funcionario/"] > .botao').click()
        cy.get('#username').type('57302471410')
        cy.get('#password').type('mirtes123')
        cy.get('.btn-submit').click()
        cy.wait(3000)
        cy.get(':nth-child(3) > .nav-menu-texto').click()
        cy.get('#codigo').type('12')
        cy.get('#nome').type('Português I A')
        cy.get('#carga_horaria').type('200')
        cy.get('#ementa').type('Assuntos')
        cy.get('.btn-submit').click()
        cy.get('p').invoke('text').should('have.string', "Cadastro realizado com sucesso.")
        cy.wait(3000)
        
    })

    it('cenario2', () => { //O funcionário Rodolfo Melo, cadastrado no sistema, acessa a aplicação e informa login (44536334408) e senha (rodolfo123) e acessa o menu para cadastrar uma disciplina. Informa os dados da disciplina a ser cadastrada (código - 13, nome - Matemática II B, carga horária - 200, ementa - Assuntos), clica no botão "Cadastrar Disciplina" e o cadastro é finalizado com sucesso. Em seguida, tenta cadastrar uma nova disciplina, informa seus dados (código - 13, nome - Geografia II C, carga horária - 180, ementa - Assuntos) e o cadastro não é realizado, pois já há uma disciplna cadastrada no sistema com o código.
        cy.exec('py manage.py flush --noinput', { failOnNonZeroExit: false });
        cy.exec('py manage.py create_superuser', { failOnNonZeroExit: false });

        //Acessa o admin com o superuser cadastrado e cadastra um funcionário

        cy.visit('/admin'); // http://127.0.0.1:8000/
        cy.get('#id_username').type('admin')
        cy.get('#id_password').type('123456')
        cy.get('.submit-row > input').click()
        cy.get('.model-user > :nth-child(2) > .addlink').click()
        cy.get('#id_username').type('44536334408')
        cy.get('#id_password1').type('rodolfo123')
        cy.get('#id_password2').type('rodolfo123')
        cy.get('.default').click()
        cy.wait(3000)
        
        cy.get('.model-userfuncionario > td > .addlink')
        cy.get('.model-userfuncionario > td > .addlink').click()
        cy.get('#id_user').select('44536334408');
        cy.get('#id_nome').type('Rodolfo Melo')
        cy.get('#id_matricula').type('rodolfo123')
        cy.get('#id_cpf').type('44536334408')
        cy.get('#id_data_de_nascimento').type('15/11/1988')
        cy.get('#id_telefone').type('81984673158')
        cy.get('#id_email').type('rodolfomelox@hotmail.com')
        cy.get('.default').click()
        cy.wait(3000)

        cy.get('#logout-form > button').click()

        //Acessa a página http://127.0.0.1:8000/, faz login como funcionário Roldolfo Melo para cadastrar a disciplina Matemática II B com o código 13
        cy.visit('/');
        cy.get('[href="/funcionario/"] > .botao').click()
        cy.get('#username').type('44536334408')
        cy.get('#password').type('rodolfo123')
        cy.get('.btn-submit').click()
        cy.wait(3000)
        cy.get(':nth-child(3) > .nav-menu-texto').click()
        cy.get('#codigo').type('13')
        cy.get('#nome').type('Matemática II B')
        cy.get('#carga_horaria').type('200')
        cy.get('#ementa').type('Assuntos')
        cy.get('.btn-submit').click()
        cy.get('p').invoke('text').should('have.string', "Cadastro realizado com sucesso.")
        
        cy.wait(3000)

        //Não consegue cadastrar a disciplina Geografia II C com o código 13, pois já há disciplina com o mesmo código
        cy.get(':nth-child(3) > .nav-menu-texto').click()
        cy.get('#codigo').type('13')
        cy.get('#nome').type('Geografia II C')
        cy.get('#carga_horaria').type('180')
        cy.get('#ementa').type('Assuntos')
        cy.get('.btn-submit').click()
        cy.get('.error').invoke('text').should('have.string', "Uma disciplina com este código já está cadastrada.")
        
        cy.wait(3000)

        //Consegue cadastrar a disciplina Geografia II C após mudar o código
        cy.get('#codigo').type('14')
        cy.get('#nome').type('Geografia II C')
        cy.get('#carga_horaria').type('180')
        cy.get('#ementa').type('Assuntos')
        cy.get('.btn-submit').click()
        cy.get('p').invoke('text').should('have.string', "Cadastro realizado com sucesso.")
        
        cy.wait(3000)
        
    })

    it('cenario3', () => { //A funcionária Lúcia Alves, cadastrada no sistema, acessa a aplicação e informa login (54645149458) e senha (lucia123) e acessa o menu para cadastrar uma disciplina. Deixa um ou mais campos em branco e clica no botão "Cadastrar Disciplina", mas o formulário não é submetido, pois todos os campos devem ser preenchidos. Ao informar todos os campos da disciplina a ser cadastrada (código - 15, nome - Ciências I C, carga horária - 120, ementa - Assuntos), clica novamente no botão "Cadastrar Disciplina" e o cadastro é finalizado com sucesso.
        cy.exec('py manage.py flush --noinput', { failOnNonZeroExit: false });
        cy.exec('py manage.py create_superuser', { failOnNonZeroExit: false });

        //Acessa o admin com o superuser cadastrado e cadastra um funcionário

        cy.visit('/admin'); // http://127.0.0.1:8000/
        cy.get('#id_username').type('admin')
        cy.get('#id_password').type('123456')
        cy.get('.submit-row > input').click()
        cy.get('.model-user > :nth-child(2) > .addlink').click()
        cy.get('#id_username').type('54645149458')
        cy.get('#id_password1').type('lucia123')
        cy.get('#id_password2').type('lucia123')
        cy.get('.default').click()
        cy.wait(3000)
         
        cy.get('.model-userfuncionario > td > .addlink')
        cy.get('.model-userfuncionario > td > .addlink').click()
        cy.get('#id_user').select('54645149458');
        cy.get('#id_nome').type('Lúcia Cecília Alves')
        cy.get('#id_matricula').type('lucia123')
        cy.get('#id_cpf').type('54645149458')
        cy.get('#id_data_de_nascimento').type('29/04/1974')
        cy.get('#id_telefone').type('81997413164')
        cy.get('#id_email').type('luciaca@gmail.com')
        cy.get('.default').click()
        cy.wait(3000)
 
        cy.get('#logout-form > button').click()

       //Acessa a página http://127.0.0.1:8000/ e faz login como funcionário Lúcia Alves para cadastrar a disciplina Ciências I C

        cy.visit('/')
        cy.get('[href="/funcionario/"] > .botao').click()
        cy.get('#username').type('54645149458')
        cy.get('#password').type('lucia123')
        cy.get('.btn-submit').click()
        cy.wait(3000)

        //Acessa o cadastro da disciplina
        cy.get(':nth-child(3) > .nav-menu-texto').click(); 

        // Preenche apenas o campo "codigo" para testar a validação dos campos requeridos
        cy.get('#codigo').type('15');

        // Tenta submeter o formulário
        cy.get('.btn-submit').click();

        // Verifica se a URL mudou para a página de sucesso, o que indica que o formulário foi submetido
        // Não houve mudança, pois os outros campos requeridos não foram preenchidos
        cy.url().should('not.include', '/cadastro_sucesso');

        cy.wait(5000)

        // Preenche o campo nome
        cy.get('#nome').type('Ciências I C');

        // Tenta submeter o formulário
        cy.get('.btn-submit').click();

        // Verifica se a URL mudou para a página de sucesso, o que indica que o formulário foi submetido
        // Não houve mudança, pois os outros campos requeridos não foram preenchidos
        cy.url().should('not.include', '/cadastro_sucesso');

        cy.wait(5000)

        // Preenche o campo carga horária 
        cy.get('#carga_horaria').type('120');

        // Tenta submeter o formulário
        cy.get('.btn-submit').click();

        // Verifica se a URL mudou para a página de sucesso, o que indica que o formulário foi submetido
        // Não houve mudança, pois os outros campos requeridos não foram preenchidos
        cy.url().should('not.include', '/cadastro_sucesso');

        cy.wait(5000)

        //Preenche o último campo
        cy.get('#ementa').type('Assuntos');

        // Submete o formulário novamente, desta vez com todos os campos preenchidos
        cy.get('.btn-submit').click();

        // Verifica se a URL agora inclui 'cadastro_sucesso', o que indica que o cadastro foi completado com sucesso
        cy.url().should('include', '/cadastro_sucesso');
        
        
        cy.wait(3000)

        
    })

    it('cenario4', () => { //A funcionária Bernadete Souto, cadastrada no sistema, acessa a aplicação e informa login (47490595444) e senha (bernadete123) e acessa o menu para cadastrar uma disciplina. Informa os dados da disciplina a ser cadastrada (código - 16, nome - Português III C, carga horária - 220, ementa - Assuntos), clica no botão "Cadastrar Disciplina" e o cadastro não é realizado, pois a carga horária é maior que 200 horas.
        cy.exec('py manage.py flush --noinput', { failOnNonZeroExit: false });
        cy.exec('py manage.py create_superuser', { failOnNonZeroExit: false });

        //Acessa o admin com o superuser cadastrado e cadastra um funcionário

        cy.visit('/admin'); // http://127.0.0.1:8000/
        cy.get('#id_username').type('admin')
        cy.get('#id_password').type('123456')
        cy.get('.submit-row > input').click()
        cy.get('.model-user > :nth-child(2) > .addlink').click()
        cy.get('#id_username').type('47490595444')
        cy.get('#id_password1').type('bernadete123')
        cy.get('#id_password2').type('bernadete123')
        cy.get('.default').click()
        cy.wait(3000)
        
        cy.get('.model-userfuncionario > td > .addlink')
        cy.get('.model-userfuncionario > td > .addlink').click()
        cy.get('#id_user').select('47490595444');
        cy.get('#id_nome').type('Bernadete Souto')
        cy.get('#id_matricula').type('bernadete123')
        cy.get('#id_cpf').type('47490595444')
        cy.get('#id_data_de_nascimento').type('14/05/1994')
        cy.get('#id_telefone').type('81981345675')
        cy.get('#id_email').type('bernadetesouto@hotmail.com')
        cy.get('.default').click()
        cy.wait(3000)

        cy.get('#logout-form > button').click()

        //Acessa a página http://127.0.0.1:8000/, faz login como funcionário Bernadete Souto para cadastrar a disciplina Português III C
        cy.visit('/');
        cy.get('[href="/funcionario/"] > .botao').click()
        cy.get('#username').type('47490595444')
        cy.get('#password').type('bernadete123')
        cy.get('.btn-submit').click()
        cy.wait(3000)
        cy.get(':nth-child(3) > .nav-menu-texto').click()
        cy.get('#codigo').type('16')
        cy.get('#nome').type('Português III C')
        cy.get('#carga_horaria').type('220')
        cy.get('#ementa').type('Assuntos')
        cy.get('.btn-submit').click()

        // Verifica se a URL mudou para a página de sucesso, o que indica que o formulário foi submetido
        // Não houve mudança, pois o campo carga horária não foi preenchido corretamente
        cy.url().should('not.include', '/cadastro_sucesso');
        
        cy.wait(3000)

        //Consegue cadastrar a disciplina História II A após mudar a carga horária
        cy.get(':nth-child(3) > .nav-menu-texto').click()
        cy.get('#codigo').type('16')
        cy.get('#nome').type('Português III C')
        cy.get('#carga_horaria').type('170')
        cy.get('#ementa').type('Assuntos')
        cy.get('.btn-submit').click()
        cy.get('p').invoke('text').should('have.string', "Cadastro realizado com sucesso.")
        
        cy.wait(3000)
        
    })
    
    it('cenario5', () => { //O funcionário Henrique Campos, cadastrado no sistema, acessa a aplicação e informa login (31620517469) e senha (henrique123) e acessa o menu para cadastrar uma disciplina. Informa os dados da disciplina a ser cadastrada (código - 17, nome - “História II A, carga horária - 150, ementa - Assuntos), clica no botão "Cadastrar Disciplina" e o cadastro é finalizado com sucesso. Em seguida, tenta cadastrar uma nova disciplina, informa seus dados (código - 18, nome - História II A, carga horária - 160, ementa - Assuntos) e o cadastro não é realizado, pois já há uma disciplna cadastrada no sistema com esse nome.
        cy.exec('py manage.py flush --noinput', { failOnNonZeroExit: false });
        cy.exec('py manage.py create_superuser', { failOnNonZeroExit: false });
        
        //Acessa o admin com o superuser cadastrado e cadastra um funcionário

        cy.visit('/admin'); // http://127.0.0.1:8000/
        cy.get('#id_username').type('admin')
        cy.get('#id_password').type('123456')
        cy.get('.submit-row > input').click()
        cy.get('.model-user > :nth-child(2) > .addlink').click()
        cy.get('#id_username').type('31620517469')
        cy.get('#id_password1').type('henrique123')
        cy.get('#id_password2').type('henrique123')
        cy.get('.default').click()
        cy.wait(3000)
        
        cy.get('.model-userfuncionario > td > .addlink')
        cy.get('.model-userfuncionario > td > .addlink').click()
        cy.get('#id_user').select('31620517469');
        cy.get('#id_nome').type('Henrique Campos')
        cy.get('#id_matricula').type('henrique123')
        cy.get('#id_cpf').type('31620517469')
        cy.get('#id_data_de_nascimento').type('03/10/1991')
        cy.get('#id_telefone').type('81991023465')
        cy.get('#id_email').type('henricampos@hotmail.com')
        cy.get('.default').click()
        cy.wait(3000)

        cy.get('#logout-form > button').click()

        //Acessa a página http://127.0.0.1:8000/, faz login como funcionário Henrique Campos para cadastrar a disciplina História II A
        cy.visit('/');
        cy.get('[href="/funcionario/"] > .botao').click()
        cy.get('#username').type('31620517469')
        cy.get('#password').type('henrique123')
        cy.get('.btn-submit').click()
        cy.wait(3000)
        cy.get(':nth-child(3) > .nav-menu-texto').click()
        cy.get('#codigo').type('17')
        cy.get('#nome').type('História II A')
        cy.get('#carga_horaria').type('150')
        cy.get('#ementa').type('Assuntos')
        cy.get('.btn-submit').click()
        cy.get('p').invoke('text').should('have.string', "Cadastro realizado com sucesso.")
        
        cy.wait(3000)

        //Não consegue cadastrar a disciplina História II A, pois já há disciplina com o mesmo nome
        cy.get(':nth-child(3) > .nav-menu-texto').click()
        cy.get('#codigo').type('18')
        cy.get('#nome').type('História II A')
        cy.get('#carga_horaria').type('160')
        cy.get('#ementa').type('Assuntos')
        cy.get('.btn-submit').click()
        cy.get('.error').invoke('text').should('have.string', "Uma disciplina com este nome já está cadastrada.")
        
        cy.wait(3000)

        //Consegue cadastrar a disciplina História II A após mudar o nome
        cy.get('#codigo').type('18')
        cy.get('#nome').type('História II B')
        cy.get('#carga_horaria').type('160')
        cy.get('#ementa').type('Assuntos')
        cy.get('.btn-submit').click()
        cy.get('p').invoke('text').should('have.string', "Cadastro realizado com sucesso.")
        
        cy.wait(3000)
        
    })

})