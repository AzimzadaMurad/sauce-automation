export class LoginForm {
  static usernameInput() {
    return cy.get('[data-test="username"]');
  }
  static passwordInput() {
    return cy.get('[data-test="password"]');
  }
  static loginButton() {
    return cy.get('[data-test="login-button"]');
  }
}
