//add custom command
import { LoginForm } from "../components/loginForm";

Cypress.Commands.add("login", () => {
  LoginForm.usernameInput().type("standard_user");
  LoginForm.passwordInput().type("secret_sauce");
  LoginForm.loginButton().click();
});
