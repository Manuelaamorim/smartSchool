describe('test visualizar Boletim', () => {
    it('cenario1', () => { //Maria Ferreira está cadastrada no sistema da SmartSchool e está matriculada nas aulas do 3º ano C do Fundamental I, que inclui as matérias de História III, Geografia III, Matemática III, Português III, e Ciências III. Ela tentará consultar as suas notas e o banco de dados retornará as informações salvas referentes a todas as notas por disciplina da aluna;
        cy.exec('py manage.py flush --noinput', { failOnNonZeroExit: false });
        cy.exec('py manage.py create_superuser', { failOnNonZeroExit: false });

        cy.visit('/admin'); //pagina http://127.0.0.1:8000/
        cy.get('#id_username').type('admin')
        cy.get('#id_password').type('123456')
        cy.get('.submit-row > input').click()
        cy.wait(1000)
        cy.get('.model-user > :nth-child(2) > .addlink').click()
        cy.wait(1000)
        cy.get('#id_username').type('12476892303')
        cy.get('#id_password1').type('mar12345')
        cy.get('#id_password2').type('mar12345')
        cy.wait(3000)
        cy.get('.default').click()
        cy.wait(1000)

        cy.get('.model-disciplina > td > .addlink').click()
        cy.wait(2000)
        cy.get('#id_codigo').type('012')
        cy.get('#id_nome').type('Português')
        cy.get('#id_carga_horaria').type('60')
        cy.get('#id_ementa').type('Desenvolver a competência comunicativa dos alunos, aprimorando as habilidades de leitura e escrita')
        cy.get('[value="Salvar e adicionar outro(a)"]').click()
        cy.wait(1000)

        cy.get('#id_codigo').type('345')
        cy.get('#id_nome').type('Matemática')
        cy.get('#id_carga_horaria').type('60')
        cy.get('#id_ementa').type('Desenvolver uma base sólida de raciocínio lógico e matemático, utilizando pensamento analítico para resolver problemas')
        cy.get('[value="Salvar e adicionar outro(a)"]').click()
        cy.wait(1000)

        cy.get('#id_codigo').type('678')
        cy.get('#id_nome').type('Ciências')
        cy.get('#id_carga_horaria').type('60')
        cy.get('#id_ementa').type('Promover o entendimento dos fenômenos naturais e dos princípios científicos que governam o mundo ao nosso redor')
        cy.get('[value="Salvar e adicionar outro(a)"]').click()
        cy.wait(1000)

        cy.get('#id_codigo').type('910')
        cy.get('#id_nome').type('Artes')
        cy.get('#id_carga_horaria').type('60')
        cy.get('#id_ementa').type('Desenvolver a percepção dos alunos nos diversos campos da arte incentivando a apreciação artística')
        cy.get('.default').click()
        cy.wait(1000)

        cy.get('.model-turma > td > .addlink').click()
        cy.wait(1000)
        cy.get('#id_serie').type('3')
        cy.get('#id_turma').type('C')
        cy.get('#id_materia_1').type('Português')
        cy.get('#id_codigo_materia_1').type('012')
        cy.get('#id_materia_2').type('Matemática')
        cy.get('#id_codigo_materia_2').type('345')
        cy.get('#id_materia_3').type('Ciências')
        cy.get('#id_codigo_materia_3').type('678')
        cy.get('#id_materia_4').type('Artes')
        cy.get('#id_codigo_materia_4').type('910')
        cy.get('.default').click()
        cy.wait(3000)

        cy.get('.model-useraluno > td > .addlink')
        cy.get('.model-useraluno > td > .addlink').click()
        cy.get('#id_user').select('12476892303');
        cy.get('#id_matricula').type('mar12345')
        cy.get('#id_nome').type('Maria Ferreira')
        cy.get('#id_cpf').type('12476892303')
        cy.get('#id_data_de_nascimento').type('01/01/2016')
        cy.get('#id_endereco').type('Rua da alegria, 23')
        cy.get('#id_colegio').type('Santa Cruz')
        cy.get('#id_serie').type('3')
        cy.get('#id_turma').type('C')
        cy.get('#id_nome_responsavel').type('Antônia Maria Ferreira')
        cy.get('#id_cpf_responsavel').type('98765434210')
        cy.get('#id_telefone').type('81940028926')
        cy.get('#id_email_responsavel').type('antoniaferreira@gmail.com')
        cy.get('#id_peso').clear()
        cy.get('#id_peso').type('29.50')
        cy.get('#id_altura').clear()
        cy.get('#id_altura').type('1.30')
        cy.get('#id_restricao_alimentar').clear()
        cy.get('#id_restricao_alimentar').type('Não')
        cy.get('#id_tdah').clear()
        cy.get('#id_tdah').type('Não')
        cy.get('#id_pcd').clear()
        cy.get('#id_pcd').type('Não')
        cy.wait(1000)
        cy.get('.default').click()
        cy.wait(2000)

        cy.get('.model-notas > th').click()
        cy.wait(1000)
        cy.get('li > .addlink').click()
        cy.get('#id_aluno').select('Aluno Maria Ferreira')
        cy.get('#id_disciplina').select('Português (012)')
        cy.get('#id_nota1').type('8.5')
        cy.get('#id_nota2').type('9.0')
        cy.get('#id_nota3').type('10.0')
        cy.get('[value="Salvar e adicionar outro(a)"]').click()
        cy.wait(2000)

        cy.get('#id_aluno').select('Aluno Maria Ferreira')
        cy.get('#id_disciplina').select('Matemática (345)')
        cy.get('#id_nota1').type('7.3')
        cy.get('#id_nota2').type('8.4')
        cy.get('#id_nota3').type('9.5')
        cy.get('[value="Salvar e adicionar outro(a)"]').click()
        cy.wait(2000)

        cy.get('#id_aluno').select('Aluno Maria Ferreira')
        cy.get('#id_disciplina').select('Ciências (678)')
        cy.get('#id_nota1').type('10.0')
        cy.get('#id_nota2').type('7.0')
        cy.get('#id_nota3').type('8.0')
        cy.get('[value="Salvar e adicionar outro(a)"]').click()
        cy.wait(2000)
        
        cy.get('#id_aluno').select('Aluno Maria Ferreira')
        cy.get('#id_disciplina').select('Artes (910)')
        cy.get('#id_nota1').type('7.5')
        cy.get('#id_nota2').type('9.2')
        cy.get('#id_nota3').type('9.8')
        cy.get('.default').click()
        cy.wait(2000)

        cy.visit('/');
        cy.get('[href="/aluno/"] > .botao').click()
        cy.wait(1000)
        cy.get('#username').type('12476892303')
        cy.get('#password').type('mar12345')
        cy.get('.btn-submit').click()
        cy.wait(1000)
        cy.get(':nth-child(2) > .nav-menu-texto').click()
        cy.get('.info-section').invoke('text').then((text) => {
            expect(text.trim()).to.include('Nome: Maria Ferreira')
            expect(text.trim()).to.include('Série: 3º');
            expect(text.trim()).to.include('Matrícula: mar12345');
          })
        cy.wait(3000)

        
    })

    it('cenario2', () => { //Luiz Rosa está cadastrado no sistema da SmartSchool com os seguintes dados: matrícula - 20090304; CPF - 59843216754; data de nascimento - 24/05/2018; endereço - Rua Padre Roma 345; e-mail - germanarosa@gmail.com; nome do responsável - Germana Rosa; CPF do responsável - 94325674387 e está matriculado nas aulas do 1º ano B do Fundamental I, que inclui as matérias de História I, Geografia I, Matemática I, Português I e Ciências I. Ele poderá consultar apenas as notas de cada matéria em que está matriculado, e não as de Maria Ferreira, ainda que ela esteja na mesma turma;
        cy.exec('py manage.py flush --noinput', { failOnNonZeroExit: false });
        cy.exec('py manage.py create_superuser', { failOnNonZeroExit: false });

        cy.visit('/admin'); //pagina http://127.0.0.1:8000/
        cy.get('#id_username').type('admin')
        cy.get('#id_password').type('123456')
        cy.get('.submit-row > input').click()
        cy.wait(1000)
        cy.get('.model-user > :nth-child(2) > .addlink').click()
        cy.wait(1000)
        cy.get('#id_username').type('59843216754')
        cy.get('#id_password1').type('lui20090304')
        cy.get('#id_password2').type('lui20090304')
        cy.wait(3000)
        cy.get('.default').click()
        cy.wait(1000)

        cy.get('.model-useraluno > td > .addlink')
        cy.get('.model-useraluno > td > .addlink').click()
        cy.get('#id_user').select('59843216754');
        cy.get('#id_matricula').type('lui20090304')
        cy.get('#id_nome').type('Luiz Rosa')
        cy.get('#id_cpf').type('59843216754')
        cy.get('#id_data_de_nascimento').type('24/05/2016')
        cy.get('#id_endereco').type(' Rua Padre Roma 345')
        cy.get('#id_colegio').type('Novo Elemento')
        cy.get('#id_serie').type('3')
        cy.get('#id_turma').type('C')
        cy.get('#id_email').type('germanarosa@gmail.com')
        cy.get('#id_nome_responsavel').type('Germana Rosa')
        cy.get('#id_cpf_responsavel').type('94325674387')
        cy.get('#id_telefone').type('81985676822')
        cy.get('#id_email_responsavel').type('germanarosa@gmail.com')
        cy.wait(3000)
        cy.get('.default').click()
        cy.wait(1000)

        cy.get('.model-notas > th').click()
        cy.wait(1000)
        cy.get('li > .addlink').click()
        cy.get('#id_aluno').select('Aluno Luiz Rosa')
        cy.get('#id_materia_1').clear()
        cy.get('#id_materia_2').clear()
        cy.get('#id_materia_3').clear()
        cy.get('#id_materia_4').clear()
        cy.get('#id_materia_1').type('História')
        cy.get('#id_materia_2').type('Geografia')
        cy.get('#id_materia_3').type('Matemática')
        cy.get('#id_materia_4').type('Português')

        cy.get('#id_nota1_materia1').type('6.5')
        cy.get('#id_nota2_materia1').type('8.3')
        cy.get('#id_nota3_materia1').type('9.7')

        cy.get('#id_nota1_materia2').type('9.0')
        cy.get('#id_nota2_materia2').type('9.1')
        cy.get('#id_nota3_materia2').type('9.3')

        cy.get('#id_nota1_materia3').type('10.0')
        cy.get('#id_nota2_materia3').type('9.6')
        cy.get('#id_nota3_materia3').type('9.8')

        cy.get('#id_nota1_materia4').type('8.1')
        cy.get('#id_nota2_materia4').type('8.8')
        cy.get('#id_nota3_materia4').type('9.5')

        cy.wait(3000)
        cy.get('.default').click()
        cy.wait(1000)

        cy.visit('/');
        cy.get('[href="/aluno/"] > .botao').click()
        cy.wait(1000)
        cy.get('#username').type('59843216754')
        cy.get('#password').type('lui20090304')
        cy.get('.btn-submit').click()
        cy.wait(1000)
        cy.get(':nth-child(2) > .nav-menu-texto').click()
        cy.get('.info-section').invoke('text').then((text) => {
            expect(text.trim()).to.include('Nome: Luiz Rosa')
            expect(text.trim()).to.include('Série: 3º');
            expect(text.trim()).to.include('Matrícula: lui20090304');
          })
        cy.wait(3000)
        
    })

    it('cenario3', () => { //André Sales está cadastrado no sistema da SmartSchool com os seguintes dados: matrícula - 20240506; CPF - 12528976549; data de nascimento - 18/01/2017; endereço - Rua da Hora, 45; e-mail - paulosales@gmail.com; nome do responsável - Paulo Henrique Sales; CPF do responsável - 02399752827; número de telefone - 81940148945. Ele está matriculado nas aulas do 2° ano A do Fundamental I, que inclui as matérias de História II, Geografia II, Matemática II, Português II e Ciências II. Ele tentará consultar suas notas antes que o professor as tenha cadastrado e aparecerá  a mensagem “Não há notas cadastradas para este aluno." na página de boletim.
        cy.exec('py manage.py flush --noinput', { failOnNonZeroExit: false });
        cy.exec('py manage.py create_superuser', { failOnNonZeroExit: false });

        cy.visit('/admin'); //pagina http://127.0.0.1:8000/
        cy.get('#id_username').type('admin')
        cy.get('#id_password').type('123456')
        cy.get('.submit-row > input').click()
        cy.wait(1000)
        cy.get('.model-user > :nth-child(2) > .addlink').click()
        cy.wait(1000)
        cy.get('#id_username').type('12528976549')
        cy.get('#id_password1').type('and20240506')
        cy.get('#id_password2').type('and20240506')
        cy.wait(3000)
        cy.get('.default').click()
        cy.wait(1000)

        cy.get('.model-useraluno > td > .addlink')
        cy.get('.model-useraluno > td > .addlink').click()
        cy.get('#id_user').select('12528976549');
        cy.get('#id_matricula').type('and20240506')
        cy.get('#id_nome').type('André Sales')
        cy.get('#id_cpf').type('12528976549')
        cy.get('#id_data_de_nascimento').type('18/01/2017')
        cy.get('#id_endereco').type(' Rua da Hora, 45')
        cy.get('#id_colegio').type('Saber Viver')
        cy.get('#id_serie').type('2')
        cy.get('#id_turma').type('A')
        cy.get('#id_email').type('paulosales@gmail.com')
        cy.get('#id_nome_responsavel').type('Paulo Henrique Sales')
        cy.get('#id_cpf_responsavel').type('02399752827')
        cy.get('#id_telefone').type('81940148945')
        cy.get('#id_email_responsavel').type('paulosales@gmail.com')
        cy.wait(3000)
        cy.get('.default').click()
        cy.wait(1000)

        cy.get('.model-notas > th').click()
        cy.wait(1000)
        cy.get('li > .addlink').click()
        cy.wait(3000)


        cy.visit('/');
        cy.get('[href="/aluno/"] > .botao').click()
        cy.wait(1000)
        cy.get('#username').type('12528976549')
        cy.get('#password').type('and20240506')
        cy.get('.btn-submit').click()
        cy.wait(1000)
        cy.get(':nth-child(2) > .nav-menu-texto').click()
        cy.wait(3000)
        cy.get('.info-section').invoke('text').then((text) => {
            expect(text.trim()).to.include('Nome: André Sales')
            expect(text.trim()).to.include('Série: 2º');
            expect(text.trim()).to.include('Matrícula: and20240506');
          })
        cy.get('.notas').invoke('text').should('have.string', "Não há notas cadastradas para este aluno.")
        cy.wait(3000)

        
    })
})