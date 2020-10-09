// https://docs.cypress.io/api/introduction/api.html

describe('calculator', () => {
  beforeEach(() => {
    cy.visit('/')
  });

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })

  it('should update the display with the result of the arithmetical operation', () => {
    cy.get('#number2').click();
    cy.get('#operator_add').click();
    cy.get('#number7').click();
    cy.get('#number8').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '80')
  })

  it('should chained together multiple operations', () => {
    cy.get('#number5').click();
    cy.get('#operator_add').click();
    cy.get('#number5').click();
    cy.get('#operator_multiply').click();
    cy.get('#number8').click();
    cy.get('#operator_divide').click();
    cy.get('#number4').click();
    cy.get('#number0').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '2')
  })


})
