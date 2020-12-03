///  <reference types="cypress"/>

class portfolioExpenses {
    goExpenses(){
        const ptrfManager = cy
        .get(':nth-child(9) > .icon-button')
        .contains("Portfolio Management");
        ptrfManager.click({ force: true });
        const expensesOption = cy
        .contains("Expenses")
        expensesOption.click({force: true})
        expensesOption.wait(2000)
        return this;
    }
    expensesSearch(){
        const testData = require("../../fixtures/expenses.json");
        testData.forEach((testDataRow) => {
          const data = {
            property: testDataRow.property,
            city: testDataRow.city,
            type: testDataRow.type,
          };
          context(`Generating a test for ${data.property}`, () => {
            const propertyType = cy.get('[class="css-1hwfws3 react-select__value-container"]')
            .get('[class="css-1g6gooi"]')
            .within(()=>{
                cy.get('[id="react-select-2-input"]')
                .clear({force: true})
                .click({force: true})
            })
            propertyType.type(`${data.property}{enter}{enter}`)
            const applyProperty = cy
            .get(':nth-child(2) > .container-fluid > :nth-child(2) > .col-12 > .btn')
            applyProperty.click({force: true})
             const expenseCity = cy.get('[id="liPropertyCityRolldown"]')
             .clear({force: true})
             .click({force: true})
             expenseCity.type(`${data.city}{enter}{enter}`)
             const applyCity = cy
             .get(':nth-child(4) > .container-fluid > :nth-child(2) > .col-12 > .btn')
             applyCity.click({force: true})
             const expensesType = cy.get('[id="react-select-3-input"]')
             .clear({force: true})
            .click({force: true})
             expensesType.type(`${data.type}{enter}{enter}`)
             const applyType = cy
             .get(':nth-child(6) > .container > :nth-child(2) > .col-12 > .btn')
             applyType.click({force: true})
             const confirmProperty = cy.get('[class="filter-list"]')
             .get('[class="filter-item"]')
             confirmProperty.should('contain',`${data.property}`)
             .should('contain',`${data.city}`)
             .should('contain',`${data.type}`)
             confirmProperty.wait(4000)
            })
        })
        return this;
    }
    expensesMap(){
        const getMap = cy.get('[class="gm-style-pbc"]')
        getMap.should('be.visible', true)
        return this;
    }

    confirmExport(){
      const exportButton = cy.get('[class="col-sm-4"]')
      .get('[class="nativ-button small blue-button"]')
      .contains("Export")
      exportButton.click({force: true})
      exportButton.clock().then((clock) => {
        clock.tick(2000)
      })
    cy
      .readFile("cypress/downloads/Line Item Export.xlsx", "utf-8")
      .then((xlsx) => {
        expect(xlsx).contain("Line Item Export");
      });
      return this;
    }
      deleteFile(){
    cy.task("unlink2", "cypress/downloads/Line Item Export.xlsx", {
      timeout: 30000,
    });
    return this;
  }
    }
export default portfolioExpenses;