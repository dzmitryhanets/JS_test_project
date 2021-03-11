import {
  Given,
  When,
  Then,
} from 'cypress-cucumber-preprocessor/steps'

Given('user open {string} page', (url) => {
  cy.visit(Cypress.env(url))
})

When('user login as {string}', (user) => {
  cy.get('#Username').type(Cypress.env(user).email)
  cy.get('#Password').type(Cypress.env(user).password)
  cy.get('button:contains(Login)').click()
})

Then(`user see {string} in the title`, (title) => {
  cy.title().should('include', title)
})
