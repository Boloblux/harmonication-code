describe('test sacha',()=>{
    it('should viisiite a site',()=>{
        cy.visit('localhost:8080')
        cy.get(':nth-child(4) > .nav-link > .d-none').click()
        cy.get(':nth-child(4) > .nav-link > .d-none').should("have.text","Sacha");

        

    })
})