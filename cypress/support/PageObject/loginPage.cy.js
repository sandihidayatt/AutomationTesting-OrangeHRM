
class baseLogin {
    username = ':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input'
    password = ':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input'
    loginButton = '.oxd-button'
    verifSuccesLogin = '.oxd-topbar-header-breadcrumb > .oxd-text'
    urlSuccesLogin = '/web/index.php/dashboard/index'
    alert = '.oxd-alert-content > .oxd-text'
    error = '.oxd-input-group > .oxd-text'

    inputUsername(username){
        cy.ketik(this.username,username)
    }
    inputPassword(password){
        cy.ketik(this.password,password)
    }
    clickLogin(){
        cy.get(this.loginButton).click()
    }
    verifUrl(){
        cy.url().should('include',this.urlSuccesLogin)
    }
    verifSucces(){
        cy.get(this.verifSuccesLogin).should('be.visible')
    }
    verifAlert(){
        cy.get(this.alert).should('be.visible')
    }
    verifError(){
        cy.get(this.error).should('be.visible')
    }
}


export default baseLogin