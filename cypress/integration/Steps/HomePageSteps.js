import {
  Given,
  When,
  Then,
} from 'cypress-cucumber-preprocessor/steps'

import HomePage from '../Pages/HomePage'

const homePage = new HomePage()

Then(`user see {string} in the title`, (title) => {
  homePage.getHomePageTitle().should('include', title)
})

Then(`user's name and role are`, (datatable) => {
  var value
  datatable.hashes().forEach((elem) => {
    for (var name in elem) {
      value = elem[name]
    }
    homePage.getUserFullName().should('have.text', elem.Name)
    homePage.getUserRole().should('have.text', elem.Role)
  })
})
