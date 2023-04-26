describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })

  it('should update display with result of arithmetic operation', () => {
    cy.get("#number1").click()
    cy.get('#operator-add').click()
    cy.get('#number2').click()
    cy.get("#operator-equals").click()
    cy.get(".display").should("contain", "3")
  })

  it('should be able to chain multiple operations', () => {
    cy.get("#number1").click()
    cy.get('#operator-add').click()
    cy.get('#number2').click()
    cy.get('#operator-multiply').click()
    cy.get('#number2').click()
    cy.get("#operator-equals").click()
    cy.get(".display").should("contain", "6")
  })

  it('should display a negative number', () => {
    cy.get("#number3").click()
    cy.get("#operator-subtract").click()
    cy.get("#number6").click()
    cy.get("#operator-equals").click()
    cy.get(".display").should("contain", "-3")
  })

  it('should display a decimal', () => {
    cy.get("#number3").click()
    cy.get("#operator-divide").click()
    cy.get("#number2").click()
    cy.get("#operator-equals").click()
    cy.get(".display").should("contain", "1.5")
  })

  it('should display very large numbers', () => {
    cy.get("#number1").click()
    cy.get("#number0").click()
    cy.get("#number0").click()
    cy.get("#number0").click()
    cy.get("#number0").click()
    cy.get("#number0").click()
    cy.get("#number0").click()
    cy.get("#number0").click()
    cy.get("#number0").click()
    cy.get("#number0").click()
    cy.get("#number0").click()
    cy.get("#number0").click()
    cy.get('#operator-multiply').click()
    cy.get("#number1").click()
    cy.get("#number0").click()
    cy.get("#number0").click()
    cy.get("#number0").click()
    cy.get("#number0").click()
    cy.get("#number0").click()
    cy.get("#number0").click()
    cy.get("#number0").click()
    cy.get("#number0").click()
    cy.get("#number0").click()
    cy.get("#number0").click()
    cy.get("#number0").click()
    cy.get("#operator-equals").click()
    cy.get(".display").should("contain", "1e+22")
  })

  it('should display "Undefined" if divided by 0', () => {
    cy.get("#number3").click()
    cy.get("#operator-divide").click()
    cy.get("#number0").click()
    cy.get("#operator-equals").click()
    cy.get(".display").should("contain", "Undefined")
  })

})