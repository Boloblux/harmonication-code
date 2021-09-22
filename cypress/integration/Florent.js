describe('Tests to-do', () => {
    it('should visit a site', () => {
        cy.visit('http://localhost:8080/')
    })

    it('page', () => {
        cy.get(':nth-child(5) > .nav-link > .d-none').click();
        cy.get('h1').should('have.text', "Salut moi c'est Florent Quintin");
    })
})