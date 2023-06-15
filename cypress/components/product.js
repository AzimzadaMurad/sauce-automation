export class Product {
  static goToCartButton() {
    return cy.get("#shopping_cart_container");
  }

  static items() {
    return cy.get(".inventory_item");
  }
  static addToCart() {
    return cy.get("[data-test='add-to-cart-sauce-labs-backpack']");
  }
}
