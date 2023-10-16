///<reference types = 'Cypress'/>




describe('sisko', ()=>{

    let url = 'https://sistemtoko.com/'
    let rgtr_btn = ':nth-child(3) > a > #login'
    let email_element = ":nth-child(1) > .form-control"
    let emailText = 'prayogoferry+1@gmail.com'
    let psswrd_element = ':nth-child(2) > .form-control'
    let psswordText = '123456'
    let repasswrd_element = ':nth-child(3) > .form-control'
    let fullname_element = ':nth-child(4) > .form-control'
    let nameText = 'bukan bambank'
    let phone_element = ':nth-child(5) > .form-control'
    let phoneNumber = '09838848598'
    let codevoucher_element = '#code_voucher > .form-control'
    let codevoucher = 'kjskduhwke88'
    let rgstr_btn = '#register > .btn'

    beforeEach(()=>{
        cy.address({failOnStatusCode : false})
        cy.clickBtn(rgtr_btn)
        cy.url().should("contain", "/register")
    })
    
    it('rgstr-01 User register using credential data', () => {

        cy.setText(email_element, emailText)
        cy.setText(psswrd_element, psswordText)
        cy.setText(repasswrd_element, psswordText)
        cy.setText(fullname_element, nameText)
        cy.setText(phone_element, phoneNumber)
        cy.setText(codevoucher_element, codevoucher)
        cy.clickBtn(rgstr_btn)

        cy.visit("https://mail.google.com/mail/u/0/#inbox")

    });

    // it('rgstr-02 User register with empty Email ', () => {
    
    //     cy.setText(psswrd_element, psswordText)
    //     cy.setText(repasswrd_element, psswordText)
    //     cy.setText(fullname_element, nameText)
    //     cy.setText(phone_element, phoneNumber)
    //     cy.clickBtn(rgstr_btn)

    //     cy.get('#reason').should("contain", "email field is required")
    // });

    // it('rgstr-03 User register with empty Password field', () => {
    
    //     cy.setText(email_element, emailText)
    //     cy.setText(fullname_element, nameText)
    //     cy.setText(phone_element, phoneNumber)
    //     cy.clickBtn(rgstr_btn)

    //     cy.get('#reason').should("contain", "password field is required")
    // });

    // it('rgstr-04 User register using wrong format Email', () => {
        
    //     cy.setText(email_element, "prayogo")
    //     cy.setText(psswrd_element, psswordText)
    //     cy.setText(repasswrd_element, psswordText)
    //     cy.setText(fullname_element, nameText)
    //     cy.setText(phone_element, phoneNumber)
    //     cy.clickBtn(rgstr_btn)

    // });

    // it('rgstr-05 User register with wrong format password', () => {
        
    //         // cy.clickBtn(rgtr_btn)
    //         // cy.url().should("contain", "register")
    //         cy.setText(email_element, emailText)
    //         cy.setText(psswrd_element, "1234")
    //         cy.setText(repasswrd_element, "1234")
    //         cy.setText(fullname_element, nameText)
    //         cy.setText(phone_element, phoneNumber)
    //         cy.clickBtn(rgstr_btn)

    //         cy.get('#reason').should("contain", "wrong format")
    
    // });

    // it('rgstr-06 User register with empty all failed', () => {
    //     cy.clickBtn(rgstr_btn)

    //     cy.get('#title').should("contain", "Operation Failed")
    //     cy.get('#reason').should("contain", "check for empty field")

    // });

    // it('rgstr-07 User register using email has already resgistered', () => {
    //     cy.setText(email_element, "prayogoferry@gmail.com")
    //     cy.setText(psswrd_element, psswordText)
    //     cy.setText(repasswrd_element, psswordText)
    //     cy.setText(fullname_element, nameText)
    //     cy.setText(phone_element, phoneNumber)
    //     //cy.setText(codevoucher_element, codevoucher)
    //     cy.clickBtn(rgstr_btn)

    //     cy.get('#reason').should("contain", "email has already been taken")


    // });


})