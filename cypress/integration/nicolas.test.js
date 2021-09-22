describe('example to-do app', () => {
    it('should visit a site', () => {
        cy.visit('localhost:8080')
        cy.get('a').click({multiple: true})
        cy.get('a').should("have.attr", "href", "javascript:void(0)");
    })
})