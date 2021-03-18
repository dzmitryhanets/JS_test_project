import {
  Given,
  When,
  Then,
} from 'cypress-cucumber-preprocessor/steps'

import LoginPage from '../Pages/LoginPage'

const loginPage = new LoginPage()

Given('user open {string} page', (url) => {
  loginPage.openLoginPage(Cypress.env(url))
})

When('user login as {string}', (user) => {
  loginPage.getEmailLoginField().type(Cypress.env(user).email)
  loginPage.getPasswordField().type(Cypress.env(user).password)
  loginPage.getLoginButton().click()
})
