describe('test cadastrar aluno', () => {
    it('cenario1', () => {
        cy.exec('py manage.py flush --noinput', { failOnNonZeroExit: false });
        cy.exec('py manage.py create_superuser', { failOnNonZeroExit: false });
     
        cy.visit('/admin'); // http://127.0.0.1:8000/
        cy.get('#id_username').type('admin')
        cy.get('#id_password').type('123456')
        cy.get('.submit-row > input').click()
        cy.wait(1000)
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

        cy.visit('/');
        cy.get('[href="/funcionario/"] > .botao').click()
        cy.get('#username').type('34479066420')
        cy.get('#password').type('stellanb123')
        cy.get('.btn-submit').click()
        cy.wait(3000)
    })
})