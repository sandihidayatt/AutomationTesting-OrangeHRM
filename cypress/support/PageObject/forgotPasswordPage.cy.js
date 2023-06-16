class forgotPasswodPage {
    forgotPassword = '.orangehrm-login-forgot > .oxd-text'
    username = '.oxd-input'
    resetPassword = '.oxd-button--secondary'
    message = '.oxd-text--h6'

    clickForgotPass (){
        cy.get(this.forgotPassword).click()
    }
    inputUsername(username){
        cy.ketik(this.username, username)
    }
    clcikResetPass(){
        cy.get(this.resetPassword).click()
    }
    checkMessage(){
        cy.get(this.message).should('be.visible')
    }
}
export default forgotPasswodPage