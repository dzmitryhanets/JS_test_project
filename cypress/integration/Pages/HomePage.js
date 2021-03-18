class HomePage {
  getHomePageTitle() {
    return cy.title()
  }
  getUserFullName() {
    return cy.get('span[class^="profile-menu__name"]')
  }
  getUserRole() {
    return cy.get('span[class^="profile-menu__role"]')
  }
}
export default HomePage
