///  <reference types="cypress"/>

class portfolioExpenses {
    goExpenses(){
        const ptrfManager = cy
          .get("[class='btn btn-link']")
          .contains("Portfolio Management");
        ptrfManager.click({ force: true });
        const expensesOption = cy.get('[title="Expenses"]')
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
            const applyProperty = cy.get('[class="col-12"]')
            .within(()=>{
                cy.get("button")
                .get('[type="submit"]')
                .contains("Apply")
             })
             applyProperty.click({force: true})
             const expenseCity = cy.get('[id="liPropertyCityRolldown"]')
             .clear({force: true})
             .click({force: true})
             expenseCity.type(`${data.city}{enter}{enter}`)
             const applyCity = cy.xpath("/html[1]/body[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/fieldset[1]/form[2]/div[1]/div[2]/div[1]/button[1]")
             applyCity.click({force: true})
             const expensesType = cy.get('[id="react-select-3-input"]')
             .clear({force: true})
            .click({force: true})
             expensesType.type(`${data.type}{enter}{enter}`)
             const applyType = cy.xpath("/html[1]/body[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/fieldset[1]/form[3]/div[1]/div[2]/div[1]/button[1]")
             applyType.click({force: true})
             const confirmProperty = cy.get('[class="filter-list"]')
             .get('[class="filter-item"]')
             confirmProperty.should('contain',`${data.property}`)
             .should('contain',`${data.city}`)
             .should('contain',`${data.type}`)
             confirmProperty.wait(2000)
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
      cy.wait(5000);
    const file = cy
      .readFile("./cypress/downloads/Line Item Export.xlsx", "utf-8")
      .then((xlsx) => {
        expect(xlsx).contain("Line Item Export");
      });
    cy.task("unlink2", "./cypress/downloads/Line Item Export.xlsx", {
      timeout: 30000,
    });

    return this;
    }
    
}
export default portfolioExpenses;