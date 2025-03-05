describe('Отклик на вакансию студентом', () => {
    it('Пользователь входит и оформляет заявку', () => {

        cy.visit('https://dev.profteam.su/login');

        cy.get('input[type=text]').type('MrHap');
        cy.get('input[type=password]').type('QWE123a');
        cy.get('button[type=submit]').eq(2).click();

        cy.get(':nth-child(1) > .menu-item__item-name').click()

        cy.get(':nth-child(1) > .header__nav > [href="/vacancies"]').click();
        cy.get(':nth-child(1) > .vacancy-item__info-wrapper > .vacancy-item__footer-wrapper > .vacancy-footer > .vacancy-footer__button-wrapper > .button__background-color-blue').click();
        cy.get('.card-main__button-flag').click();

        cy.visit('https://dev.profteam.su/account/responses');
    });
});