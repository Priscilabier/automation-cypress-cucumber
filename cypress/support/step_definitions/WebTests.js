const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor');
const loginPage = require('../../page/LoginPage');
const { generateValidEmail } = require('../../utils/generators');

var validUsername;
const validPassword = 'Test1234!';
const invalidUsername = 'invalidusername@gmail.com';
const invalidPassword = 'invalidpassword';

Given('I am on the login page', () => {
  loginPage.visitPage();
});

When('I enter valid username and password', () => {
  loginPage.fillValidUsername(validUsername);
  loginPage.fillValidPassword(validPassword);
});

Then('I should see admin home page', () => {
  loginPage.verifyAdminHomePage();
});

When('I fill in the required registration fields with invalid email', () => {
  loginPage.fillRegistrationForm({
    name: 'John Smith',
    email: 'test.com',
    password: validPassword
  });
});

When('I leave the input empty', () => {
  loginPage.clearRegistrationForm();
}); 

Then('I should see an error message about the required fields', () => {
  loginPage.verifyEmptyFieldsAlert();
});

Then('I should see an error message about invalid email', () => {
  loginPage.verifyInvalidEmailAlert();
});

Then('I should see regular home page', () => {
  loginPage.verifyRegularHomePage();
});

When('I enter invalid username and password', () => {
  loginPage.fillInvalidUsername(invalidUsername);
  loginPage.fillInvalidPassword(invalidPassword);
});

When('I check the checkbox', () => {
  loginPage.checkCheckbox();
});

When('I click the Login button', () => {
  loginPage.clickBtnEntrar();
});

When('I click the Sign Up button', () => {
  loginPage.clickBtnCadastreSe();
});

When('I fill in the required registration fields', () => {
  validUsername = generateValidEmail();
  loginPage.fillRegistrationForm({
    name: 'John Test',
    email: validUsername,
    password: validPassword
  });
});

When('I click the Register button', () => {
  loginPage.clickBtnCadastrar();
});

Then('I should see a registration success message', () => {
  loginPage.verifyRegistrationSuccess();
});

Then('I should be redirected to Home', () => {
  loginPage.verifyHomePageRedirect();
});

Then('I should see an error message about invalid credentials', () => {
  loginPage.verifyInvalidCredentialsAlert();
});

Then('I should see error messages indicating required fields', () => {
  loginPage.verifyEmptyFieldsAlert();
});
