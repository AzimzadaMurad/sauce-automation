export class Header {
  static title() {
    return cy.get("#header_container .title");
  }

  static cartBadge() {
    return cy.get(".shopping_cart_badge");
  }
}
