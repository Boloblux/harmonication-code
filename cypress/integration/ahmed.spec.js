// test.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test
describe('example to-do app', () => {
    it('should visit a site', () => {
        cy.visit('localhost:8080')
    })

    
    it('navigate', () => {
        cy.get(':nth-child(3) > .nav-link').click()
    })

    it('profile', () => {
        cy.get('h1,h3').should('have.length', 2)
        cy.get('#b1').should('have.length', 1)
    })

    it('url ok', () => {
        cy.get('#b1').should("have.attr", "href", "https://ahmed-jibrilaitouaret.fr/")
    })

})