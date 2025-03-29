import { loginSelectors, BASE_URL } from '../selectors/loginSelectors';

class LoginPage {
    visitPage() {
        cy.visit(`${BASE_URL}/login`);
    }

    fillEmail(email) {
        cy.get(loginSelectors.EMAIL).clear().type(email);
    }

    fillPassword(password) {
        cy.get(loginSelectors.PASSWORD).clear().type(password);
    }

    verifyRegularHomePage() {
        cy.get(loginSelectors.REGULAR_HOME_PAGE)
            .contains('Serverest Store')
            .should('be.visible');
    }

    fillRegistrationForm({ name, email, password }) {
        cy.get(loginSelectors.NAME).clear().type(name);
        this.fillEmail(email);
        this.fillPassword(password);
    }

    verifyAdminHomePage() {
        cy.get(loginSelectors.ADMIN_HOME_PAGE)
            .contains('Este é seu sistema para administrar seu ecommerce.')
            .should('be.visible');
    }

    checkCheckbox() {
        cy.get(loginSelectors.CHECKBOX).check();
    }

    fillValidUsername(validEmail) {
        cy.get(loginSelectors.EMAIL).clear().type(validEmail);
    }

    fillInvalidUsername(username) {
        cy.get(loginSelectors.EMAIL).type(username);
    }

    fillValidPassword(password) {
        cy.get(loginSelectors.PASSWORD).type(password);
    }

    fillInvalidPassword(password) {
        cy.get(loginSelectors.PASSWORD).type(password);
    }

    clickBtnEntrar() {
        cy.get(loginSelectors.LOGIN_BTN).click();
    }

    clickBtnCadastreSe() {
        cy.get(loginSelectors.REGISTER_BTN).click();
    }

    clickBtnCadastrar() {
        cy.get(loginSelectors.REGISTER_BTN).click();
    }

    verifyInvalidCredentialsAlert() {
        cy.get(loginSelectors.ALERT).should('be.visible');
    }

    verifyInvalidEmailAlert() {
        cy.get(loginSelectors.EMAIL).should(($input) => {
            expect($input[0].validationMessage).to.include("Please include an '@' in the email address. 'test.com' is missing an '@'.");
        });
    }

    clearRegistrationForm() {
        cy.get(loginSelectors.NAME).clear();
        cy.get(loginSelectors.EMAIL).clear();
        cy.get(loginSelectors.PASSWORD).clear();
    }

    verifyEmptyFieldsAlert() {
        cy.get(loginSelectors.NAME).should('be.visible').and('have.value', '');
        cy.get(loginSelectors.EMAIL).should('be.visible').and('have.value', '');
        cy.get(loginSelectors.PASSWORD).should('be.visible').and('have.value', '');
    }

    verifyRegistrationSuccess() {
        cy.get(loginSelectors.ALERT)
            .contains('Cadastro realizado com sucesso')
            .should('be.visible');
    }

    verifyHomePageRedirect() {
        cy.url().should('include', '/home');
    }
}

export default new LoginPage();
