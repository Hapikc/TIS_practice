describe('Создание вакансии', () => {
    it('Пользователь авторизуется и создает вакансию', () => {
        cy.visit('https://dev.profteam.su/login');

        cy.get('input[type=text]').type('testerEmployer');
        cy.get('input[type=password]').type('Password1');
        cy.get('button[type=submit]').eq(2).click();

        cy.get(':nth-child(7) > .menu-item__item-name').click();
        cy.get('[data-v-94414c9f=""][data-v-4849dea2=""] > .vacancies-block > .vacancies-block__filters-wrapper > .button').click();

        cy.get('.vacancy-add-form-wrapper > .form').should('be.visible');


        cy.get('.vacancy-add-form-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(1) > .form-control--responsive > .form-input--')
            .type('Дегустатор вина', { force: true });

        cy.get('.vacancy-add-form-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(2) > .salary-field > .salary-field__wrapper--bottom > .radio-list > :nth-child(1)')
            .click({ force: true });
        cy.get(':nth-child(1) > .form-control--responsive > .form-input--number')
            .type('20000', { force: true });
        cy.get(':nth-child(2) > .form-control--responsive > .form-input--number')
            .type('100000', { force: true });

        cy.get('.vacancy-add-form-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(4) > [data-v-af677f15=""] > :nth-child(1) > .radio-list > :nth-child(3)')
            .click({ force: true });

        cy.get('.form-control--responsive > .form-input--text')
            .type('никогда и свободно', { force: true });

        cy.get('.vacancy-add-form-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(5) > .form-control > .form-area')
            .type('многа многа деняк', { force: true });
        cy.get('.vacancy-add-form-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(6) > .form-control > .form-area')
            .type('пить воду', { force: true });

        cy.get('.vacancy-add-form-wrapper > .form > .form__buttons > .buttons > .button')
            .click({ force: true });
    });
});