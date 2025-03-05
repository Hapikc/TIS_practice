describe('Страница вакансий', () => {
    it('Поиск вакансии', () => {

        cy.visit('https://dev.profteam.su/vacancies?start_price=0&end_price=0');

        cy.get('.form-input--text').type('Крановщик');
        cy.get(':nth-child(1) > .radio-component__input').click();
        cy.get(':nth-child(1) > .form-control--responsive > .form-input--number').type(50000);
        cy.get(':nth-child(2) > .form-control--responsive > .form-input--number').type(1000000);
        cy.get(':nth-child(3) > :nth-child(2) > .form-select__selected').click();
        cy.get('.form-select__items > :nth-child(2)').click();
        cy.get(':nth-child(4) > :nth-child(2) > .form-select__selected').click();
        cy.get('.form-select__items > :nth-child(2)').click();
    });
});