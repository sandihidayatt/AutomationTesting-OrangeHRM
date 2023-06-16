const loginData = require("../fixtures/OangeHrm/login.json")
import forgotPasswodPage from "../support/PageObject/forgotPasswordPage.cy"

describe('Reset Password Functionality', () => {
  const ForgotPass = new forgotPasswodPage
  it('Success Reset Password', () => {
    cy.visit(loginData.url) // url
    ForgotPass.clickForgotPass() // click forgot password button
    ForgotPass.inputUsername(loginData.validUser) // input username
    ForgotPass.clcikResetPass() //  click reset
    //validasi
    ForgotPass.checkMessage() // check message
  })

  it('Reset Empty Password', () => {
    cy.visit(loginData.url) // url
    ForgotPass.clickForgotPass() // click forgot password button
    ForgotPass.inputUsername(loginData.emptyUser) // input empty username
    ForgotPass.clcikResetPass() // clcik reset
    //validasi
    ForgotPass.checkMessage() // check message
  })
  it('Reset Invalid Password', () => {
    cy.visit(loginData.url)
    ForgotPass.clickForgotPass() // click forgot password button
    ForgotPass.inputUsername(loginData.invalidUser) // input empty username
    ForgotPass.clcikResetPass() // clcik reset
    //validasi
    ForgotPass.checkMessage() // check message
  })
})