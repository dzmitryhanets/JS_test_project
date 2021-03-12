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

Then(`user's name and role are`, (datatable) => {
  var value
  datatable.hashes().forEach((elem) => {
    for (var name in elem) {
      value = elem[name]
    }
  })
  datatable.hashes().forEach((elem) => {
    cy.get('span[class^="profile-menu__name"]').should(
      'have.text',
      elem.Name,
    )
    cy.get('span[class^="profile-menu__role"]').should(
      'have.text',
      elem.Role,
    )
  })
})
