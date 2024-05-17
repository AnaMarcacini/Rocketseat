describe('add product to cart', () => {
    it('should be able to navigate to the product page and add it to the cart', () => {
      cy.visit('http://localhost:3000')
  
      cy.get('a[href^="/product"]').first().click()
      // acessar o primeiro link (a que comece com product)
      cy.url().should('include', '/product')
      cy.location('pathname').should('include', '/product')
      /// após selecionar o produto verificar se a url da pagina tem product // ela deve ter se não mostrar o erro
      cy.contains('Adicionar ao carrinho').click()
  
      cy.contains('Cart (1)').should('exist')
    })
  
    it('should not count duplicated products on cart', () => {
      cy.visit('http://localhost:3000')
  
      cy.get('a[href^="/product"]').first().click()
  
      cy.location('pathname').should('include', '/product')
      cy.contains('Adicionar ao carrinho').click()
      cy.contains('Adicionar ao carrinho').click()
  
      cy.contains('Cart (1)').should('exist')
    })
  
    it('should be able to search for a product and add it to the cart', () => {
      cy.visit('http://localhost:3000')
  
      cy.get('input[name=q]').type('moletom').parent('form').submit()
  
      cy.get('a[href^="/product"]').first().click()
  
      cy.location('pathname').should('include', '/product')
  
      cy.contains('Adicionar ao carrinho').click()
  
      cy.contains('Cart (1)').should('exist')
    })
  })