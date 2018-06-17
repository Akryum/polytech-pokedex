// https://docs.cypress.io/api/introduction/api.html

describe('Pokemon details page', () => {
  it('Go to pokemon details page', () => {
    cy.visit('/')
    cy.wait(1000)
    cy.get('.pokemons')
    cy.wait(1000)
    cy.get('.pokemon-list-item').eq(2).click()
    cy.wait(1000)
    cy.get('.toggle-favorite')
  })
})
