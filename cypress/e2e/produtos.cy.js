/// <reference types="cypress" />

describe('Funcionalidade Página de Produtos', () => {

    beforeEach(() => {
      cy.visit('/produtos/')
    });

  it('Deve selecionar um produto da lista', () => {
      cy.get('[class="product-block grid"]')
      //.first()
      //.last()
      //.eq(3)
      .contains('Ajax Full-Zip Sweatshirt')
      .click()    
  });

  it('Deve adicionar um produto ao carrinho', () => {
      var quantidade = 135

    cy.get('[class="product-block grid"]')
      .contains('Atlas Fitness Tank').click()
    cy.get('.button-variable-item-XL').click()
    cy.get(':nth-child(2) > .value > .variable-items-wrapper > .variable-item').click()
    cy.get('.input-text').clear().type(quantidade)
    cy.get('.single_add_to_cart_button').click()
    cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantidade)
    cy.get('.woocommerce-message').should('contain', quantidade + ' × “Atlas Fitness Tank” foram adicionados no seu carrinho.')
  });

  it('Deve adicionar produto ao carrinho usando comando customizado', () => {
    cy.addChart('Atlas Fitness Tank', 5)
  });
});