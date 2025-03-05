describe('Негативный сценарий: Создание вакансии с спец символом', () => {
    it('Тыкаешь в название спец символ', () => {

        cy.visit('https://dev.profteam.su/login');
        cy.get('input[type=text]').type('testerEmployer');
        cy.get('input[type=password]').type('Password1');
        cy.get('button[type=submit]').eq(2).click();
        cy.get(':nth-child(7) > .menu-item__item-name').click();
        cy.get('[data-v-94414c9f=""][data-v-4849dea2=""] > .vacancies-block > .vacancies-block__filters-wrapper > .button').click();
        cy.get('.vacancy-add-form-wrapper > .form').should('be.visible');
        cy.get('.vacancy-add-form-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(1) > .form-control--responsive > .form-input--')
            .type('@', { force: true });
        cy.get('.vacancy-add-form-wrapper > .form > .form__buttons > .buttons > .button').click({ force: true });
    });
});