describe('Подтверждение вакансии', () => {
    it('подтверждение', () => {

        cy.visit('https://dev.profteam.su/login');

        cy.get('input[type=text]').type('testerStudent');
        cy.get('input[type=password]').type('Password1');
        cy.get('button[type=submit]').eq(2).click();

        cy.get(':nth-child(5) > .menu-item__item-name').click();
        cy.get('.responses-list > .infinite-loader > :nth-child(1)').click();
        cy.get(':nth-child(1) > .responses-list-item__actions > :nth-child(1)').click();

    });
});