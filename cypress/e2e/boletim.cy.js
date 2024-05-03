describe('test visualizar Boletim', () => {
    it('cenario1', () => { //Maria Ferreira está cadastrada no sistema da SmartSchool e está matriculada nas aulas do 3º ano C do Fundamental I, que inclui as matérias de História III, Geografia III, Matemática III, Português III, e Ciências III. Ela tentará consultar as suas notas e o banco de dados retornará as informações salvas referentes a todas as notas por disciplina da aluna;
        cy.visit('/');
        cy.get('[href="/aluno/"] > .botao').click()
        cy.get('#username').type('12476892303')
        cy.get('#password').type('20240102')
        cy.get('.btn-submit').click()

        
    })

    it('cenario2', () => { //Marcos Rosa está cadastrado no sistema da SmartSchool com os seguintes dados: matrícula - 20090304; CPF - 59843216754; data de nascimento - 24/05/2018; endereço - Rua Padre Roma 345; e-mail - germanarosa@gmail.com; nome do responsável - Germana Rosa; CPF do responsável - 94325674387 e está matriculado nas aulas do 1º ano B do Fundamental I, que inclui as matérias de História I, Geografia I, Matemática I, Português I e Ciências I. Ele poderá consultar apenas as notas de cada matéria em que está matriculado, e não as de Maria Ferreira, ainda que ela esteja na mesma turma;

        cy.visit('/');
        cy.get('[href="/aluno/"] > .botao').click()
        cy.get('#username').type('59843216754')
        cy.get('#password').type('20090304')
        cy.get('.btn-submit').click()
        
    })

    it('cenario3', () => { //André Sales está cadastrado no sistema da SmartSchool com os seguintes dados: matrícula - 20240506; CPF - 12528976549; data de nascimento - 18/01/2017; endereço - Rua da Hora, 45; e-mail - paulosales@gmail.com; nome do responsável - Paulo Henrique Sales; CPF do responsável - 02399752827; número de telefone - 81940148945. Ele está matriculado nas aulas do 2° ano A do Fundamental I, que inclui as matérias de História II, Geografia II, Matemática II, Português II e Ciências II. Ele tentará consultar suas notas antes que o professor as tenha cadastrado e aparecerá a página vazia.

        cy.visit('/');
        cy.get('[href="/aluno/"] > .botao').click()
        cy.get('#username').type('12528976549')
        cy.get('#password').type('20240506')
        cy.get('.btn-submit').click()

        
    })
})