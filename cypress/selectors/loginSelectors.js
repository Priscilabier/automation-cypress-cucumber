export const loginSelectors = {
    EMAIL: '[data-testid="email"]',
    PASSWORD: 'input[name="password"]',
    NAME: '[data-testid="nome"]',
    LOGIN_BTN: '[data-testid="entrar"]',
    REGISTER_BTN: '[data-testid="cadastrar"]',
    ALERT: '.alert',
    EMPTY_FIELD_EMAIL: '.form > :nth-child(3)',
    EMPTY_FIELD_PASSWORD: '.form > :nth-child(4)',
    CHECKBOX: '[data-testid="checkbox"]',
    ADMIN_HOME_PAGE: '.lead',
    REGULAR_HOME_PAGE: 'h1'
};

export const BASE_URL = 'https://front.serverest.dev'; 