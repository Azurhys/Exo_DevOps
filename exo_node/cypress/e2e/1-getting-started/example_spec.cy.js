describe("Page d'accueil", () => {
    it('Doit afficher le message de bienvenue', () => {
      cy.visit('/') 
      cy.contains('Bienvenue sur mon serveur Express !') 
    })
  })
  