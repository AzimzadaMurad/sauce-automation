import { Cart } from "../components/cart";
import { CheckoutForm } from "../components/checkoutForm";
import { Product } from "../components/product";
import { Header } from "../components/header.js";
import { CheckoutOverview } from "../components/checkoutOverview";

describe("Purchase flow", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.login();
    cy.location("pathname").should("be.eq", "/inventory.html");
  });

  it.only("Purchase item", () => {
    //pick the first item and add to cart
    Product.items().eq(0);
    Product.getPrice();
    Product.addToCart().click();
    Header.cartBadge().should("have.text", 1);
    //go to cart
    Product.goToCartButton().click();
    Header.title().should("have.text", "Your Cart");
    //check if it is added
    Cart.items().should("have.length", 1);
    //checkout
    Cart.checkoutButton().click();
    Header.title().should("have.text", "Checkout: Your Information");
    CheckoutForm.firstNameInput().type("Murad");
    CheckoutForm.lastNameInput().type("Azimzada");
    CheckoutForm.postalCodeInput().type("11111");
    CheckoutForm.continueButton().click();
    CheckoutOverview.itemPrice().invoke("text").should("have.text", "$29.99");
    Header.title().should("have.text", "Checkout: Overview");
    CheckoutOverview.finishButton().click();
    Header.title().should("have.text", "Checkout: Complete!");
    cy.location("pathname").should("be.eq", "/checkout-complete.html");
  });
});
