///<reference types = 'Cypress'/>

describe("Login",()=>{

    beforeEach(()=>{
        cy.address({failOnStatusCode : false})
        cy.clickBtn(':nth-child(2) > a > #login')
        cy.url().should("include", "/login")
        
    })

    let email_element = ":nth-child(1) > .form-control"
    let pswrd_element = ":nth-child(2) > .form-control"
    let email = "prayogoferry@gmail.com"
    let password = "06102023"
    let btn_login = "#login > .btn"
    let forgot_password = '[href="https://sistemtoko.com/forgot"]'
    let sendreminder_btn = ':nth-child(3) > .btn'

    it('Log-01 User login using valid data', () => {
        
       cy.setText(email_element, email).wait(5000)
       cy.setText(pswrd_element, password).wait(5000)
       //cy.wait(20000)
       cy.clickBtn(btn_login, {wait:5000})

       cy.url({timeout : 20000}).should("contain", '/member')

      // cy.get('#title').should("be.visible")
       //.should("contain", "Operation Success")

    });

    // it('Log-02 User login using invalid data', () => {
    //     cy.setText(email_element, "prayogo01@gmail.com")
    //    cy.setText(pswrd_element, password)
    //    cy.clickBtn(btn_login)

    //    cy.get('#title').should("contain", "Operation Failed")
    // });

    // it('Log-03 User login with empty field', () => {
    //     cy.clickBtn(btn_login)

    //     cy.get('#reason').should("contain", "email field is required")
    //     .and("contain", "password field is required")
        
    // });

    // it('Log-04 Forgot Password', () => {
    //     cy.clickBtn(forgot_password)
    //     cy.setText('.form-control', email)
    //     cy.clickBtn(sendreminder_btn)

    //     cy.get('strong').should("contain", "Password reminder sent")
    // });
})