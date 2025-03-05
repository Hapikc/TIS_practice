Cypress.Commands.add('switchUser', (user) => {
    cy.visit('/logout') // Выход из текущей сессии
    cy.get('input[type="text"]').type(user.email)
    cy.get('input[type="password"]').type(user.password)
    cy.contains('button', 'Войти').click()
    cy.url().should('include', '/account')
});