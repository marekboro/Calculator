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

  it('should be able to give decimals', () => {
    cy.get('#number5').click();
    cy.get('#operator_divide').click();
    cy.get('#number2').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '2.5')
  })

  it('should be able to result in a negative number', () => {
    cy.get('#number5').click();
    cy.get('#operator_subtract').click();
    cy.get('#number9').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '-4')
  })

  it('should be able to result  16 decimal spaces', () => {
    cy.get('#number2').click();
    cy.get('#operator_divide').click();
    cy.get('#number3').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '0.6666666666666666')
  })

  it('should be able to display very larget numbers', () => {
    cy.get('#number2').click();
    cy.get('#number4').click();
    cy.get('#number5').click();
    cy.get('#number6').click();
    cy.get('#number7').click();
    cy.get('#operator_multiply').click();
    cy.get('#number8').click();
    cy.get('#number5').click();
    cy.get('#number5').click();
    cy.get('#number7').click();
    cy.get('#number9').click();
    cy.get('#number6').click();
    cy.get('#operator_equals').click();
    // cy.get('.display').should('contain', '21024340332')
    cy.get('#operator_multiply').click();
    cy.get('#number9').click();
    cy.get('#number3').click();
    cy.get('#number8').click();
    cy.get('#number5').click();
    cy.get('#number7').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '1973281510540524')
    
  })

  it('should not be able to divide by zero', () => {
    cy.get('#number2').click();
    cy.get('#operator_divide').click();
    cy.get('#number0').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', 'DividingByZeroIsNaughty')
  })



})
