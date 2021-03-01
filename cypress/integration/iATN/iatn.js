import { Given, When } from "cypress-cucumber-preprocessor/steps";

const url = 'https://app.iatn.community'
Given('I open iATN page', () => {
  cy.visit(url)
})

When("I login as {string} with {string} password", (username, password) => {
  cy.get('#Username').type(username);
  cy.get('#Password').type(password);
  cy.get('button:contains(Login)').click();
});

import { Then } from "cypress-cucumber-preprocessor/steps";

Then(`I see {string} in the title`, (title) => {
  cy.title().should('include', title)
})