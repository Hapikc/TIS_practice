describe('Негативный сценарий: Создание вакансии с пустыми полями', () => {
    it('Пользователь авторизуется и пытается создать вакансию ничего не заполняя', () => {

        cy.visit('https://dev.profteam.su/login');

        // авторизация пользователя
        cy.get('input[type=text]').type('testerEmployer');
        cy.get('input[type=password]').type('Password1');
        cy.get('button[type=submit]').eq(2).click();

        // переход к созданию вакансии
        cy.get(':nth-child(7) > .menu-item__item-name').click();
        cy.get('[data-v-94414c9f=""][data-v-4849dea2=""] > .vacancies-block > .vacancies-block__filters-wrapper > .button').click(); // тык на кнопку "создать вакансию"


        cy.get('.vacancy-add-form-wrapper > .form').should('be.visible');

        // попытка отправить форму с пустыми полями
        cy.get('.vacancy-add-form-wrapper > .form > .form__buttons > .buttons > .button').click({ force: true });

    });
});