describe('example to-do app', () => {
    it('click on all buttons', () => {
        cy.visit('localhost:8080')
        cy.get('a').click({multiple: true})
        cy.get('a').should("have.attr", "href", "javascript:void(0)");
    })
})