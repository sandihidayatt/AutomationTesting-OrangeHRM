import baseLogin from "../support/PageObject/loginPage.cy"
const loginData = require("../fixtures/OangeHrm/login.json")
describe('Login Fuctionality', () => {
  const BaseLogin = new baseLogin()
  it('Success Login', () => {
    cy.visit(loginData.url)
    BaseLogin.inputUsername(loginData.validUser)
    BaseLogin.inputPassword(loginData.validPass)
    BaseLogin.clickLogin()
    //validasi
    BaseLogin.verifSucces()
    BaseLogin.verifUrl()
  })

  it('Login Invalid Username', () => {
    cy.visit(loginData.url)
    BaseLogin.inputUsername(loginData.invalidUser)
    BaseLogin.inputPassword(loginData.validPass)
    BaseLogin.clickLogin()
    BaseLogin.verifAlert()
  })

   it('login Invalid Password', () => {
    cy.visit(loginData.url)
    BaseLogin.inputUsername(loginData.validUser)
    BaseLogin.inputPassword(loginData.invalidPass)
    BaseLogin.clickLogin()
    //validasi
    BaseLogin.verifAlert()
  })

  it('login Invalid Username & Password', () => {
    cy.visit(loginData.url)
    BaseLogin.inputUsername(loginData.invalidUser)
    BaseLogin.inputPassword(loginData.invalidPass)
    BaseLogin.clickLogin()
    //validasi
    BaseLogin.verifAlert()
  })

  it('Login Empty Email', () => {
    cy.visit(loginData.url)
    BaseLogin.inputUsername(loginData.emptyUser)
    BaseLogin.inputPassword(loginData.validPass)
    BaseLogin.clickLogin()
    //validasi
    BaseLogin.verifError()
  })

  it('Login Empty Password', () => {
    cy.visit(loginData.url)
    BaseLogin.inputUsername(loginData.validUser)
    BaseLogin.inputPassword(loginData.emptyPass)
    BaseLogin.clickLogin()
    //validasi
    BaseLogin.verifError()
  })

  it('Login Empty Username & Password', () => {
    cy.visit(loginData.url)
    BaseLogin.inputUsername(loginData.emptyUser)
    BaseLogin.inputPassword(loginData.emptyPass)
    BaseLogin.clickLogin()
    //validasi
    BaseLogin.verifError()
  })
})