export class CheckoutOverview {
  static subtotalLabel() {
    return cy.get(".summary_subtotal_label");
  }

  static finishButton() {
    return cy.get('[data-test="finish"]');
  }
}
