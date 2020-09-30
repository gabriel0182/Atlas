///  <reference types="cypress"/>

class portDetail {
    selectPtrfdetail(){
        const portMng = cy
        .get("[class='nativ-insights']")
        .contains("Portfolio Management");
      portMng.click({ force: true });
        const ptrfDetail = cy.get("[title='Portfolio Detail']")
        .contains("Portfolio Detail")
        ptrfDetail.click({force: true})
        const testData = require("../../fixtures/prtfDetail.json");
    testData.forEach((testDataRow) => {
      const data = {
        portfolio: testDataRow.portfolio
        };
      context(`Generating a test for ${data.portfolio}`, () => {
          const selectPtrf = cy.get("[class='css-1hwfws3 react-select__value-container']")
          .get("[class='css-151xaom-placeholder react-select__placeholder']")
          .contains("Select...")
          selectPtrf.type(`${data.portfolio}{downarrow}{enter}{enter}`)
          const apply = cy.get("[type='button']")
          .get("[class='btn btn-primary']")
          .contains("Apply")
          apply.click({force: true})
          apply.wait(20000)
      })
    })
        return this;
    }
    validateGrossIRR(){
        const grossIRR = cy.get("[class='rt-td rt-td styled-table__column d-flex justify-content-end right-align-padding styled-table__cell styled-table__cell--right rt-td styled-table__column']")
        .get("[role='gridcell']")
        .get("[style='flex: 100 0 auto; width: 100px;']")
        grossIRR.should('not.have.text','0')
        return this;
    }


}
export default portDetail