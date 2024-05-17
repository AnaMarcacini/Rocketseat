/// <reference types="cypress" />

declare namespace Cypress {
    interface Chainable {
      searchByQuery(query: string): Chainable<void>
    }
  }
  
  Cypress.Commands.add('searchByQuery', (query: string) => {
    cy.visit('/')
    cy.get('input[name=q]').type(query).parent('form').submit()
  })


// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//  comando não precisa selecionar um elemento
//

// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//precisa selecionar um elemento antes como botão ( ex click)
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//  pode ser os dois parent e child
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
