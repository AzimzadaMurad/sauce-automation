export class CheckoutOverview {
  static itemPrice() {
    return cy.get(".inventory_item_price");
  }

  static finishButton() {
    return cy.get('[data-test="finish"]');
  }
}
