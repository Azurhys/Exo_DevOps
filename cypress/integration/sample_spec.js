
describe('My First Test', () => {
    it('Visits the homepage', () => {
      cy.visit('/')
      cy.contains('Hello, world!').should('be.visible')
    })
  })