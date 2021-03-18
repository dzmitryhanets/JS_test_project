class LoginPage {
  openLoginPage(url) {
    cy.visit(url)
  }
  getEmailLoginField() {
    return cy.get('#Username')
  }
  getPasswordField() {
    return cy.get('#Password')
  }
  getLoginButton() {
    return cy.get('button:contains(Login)')
  }
}
export default LoginPage
