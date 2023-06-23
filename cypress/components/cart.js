export class Cart {
  static items() {
    return cy.get(".cart_item");
  }

  static checkoutButton() {
    return cy.get('[data-test="checkout"]');
  }
