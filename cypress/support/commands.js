Cypress.Commands.add("address", ()=>{
    cy.visit("https://sistemtoko.com/member?p=bambank")
   // https://sistemtoko.com/member?p=bambank
})

Cypress.Commands.add("setText", (path, text)=>{
    cy.get(path).clear().type(text)
})

Cypress.Commands.add("clickBtn", (path)=>{
    cy.get(path).click()
})