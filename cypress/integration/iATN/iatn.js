import {
  Given,
  When,
  Then,
} from 'cypress-cucumber-preprocessor/steps'

const url = 'https://app.iatn.community'
Given('user open iATN page', () => {
  cy.visit(url)
})

When(
  'user login as {string} with {string} password',
  (username, password) => {
    cy.get('#Username').type(username)
    cy.get('#Password').type(password)
    cy.get('button:contains(Login)').click()
  },
)

Then(`user see {string} in the title`, (title) => {
  cy.title().should('include', title)
})
