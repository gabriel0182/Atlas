///  <reference types="cypress"/>

class portDetail {
  selectPtrfdetail() {
    const portMng = cy
      .get("[class='nativ-insights']")
      .contains("Portfolio Management");
    portMng.click({ force: true });
    const ptrfDetail = cy
      .get("[title='Portfolio Detail']")
      .contains("Portfolio Detail");
    ptrfDetail.click({ force: true });
    const testData = require("../../fixtures/prtfDetail.json");
    testData.forEach((testDataRow) => {
      const data = {
        portfolio: testDataRow.portfolio,
      };
      context(`Generating a test for ${data.portfolio}`, () => {
        const selectPtrf = cy
          .get("[class='css-1hwfws3 react-select__value-container']")
          .get("[class='css-151xaom-placeholder react-select__placeholder']")
          .contains("Select...");
        selectPtrf.type(`${data.portfolio}{downarrow}{enter}{enter}`);
        const apply = cy
          .get("[type='button']")
          .get("[class='btn btn-primary']")
          .contains("Apply");
        apply.click({ force: true });
        apply.wait(15000);
      });
    });
    return this;
  }
  validateGrossIRR() {
    const grossIRR = cy
      .get(
        "[class='rt-td rt-td styled-table__column d-flex justify-content-end right-align-padding styled-table__cell styled-table__cell--right rt-td styled-table__column']"
      )
      .get("[role='gridcell']")
      .get("[style='flex: 100 0 auto; width: 100px;']");
    grossIRR.should("not.have.text", "0");
    return this;
  }
  validateProjectedprofit() {
    const projectedProfit = cy.xpath(
      "/html[1]/body[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[5]/div[1]/div[1]/div[1]/div[3]/div[1]/div[17]/span[1]"
    );
    projectedProfit.should("not.have.text", "0");
    return this;
  }
  validateEquitymultiple() {
    const equityMultiple = cy.xpath(
      "/html[1]/body[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[5]/div[1]/div[1]/div[1]/div[3]/div[1]/div[18]/span[1]"
    );
    equityMultiple.should("not.have.text", "0");
    return this;
  }
  varifyTable(){
    const detailTable = cy.get("[class='rt-table']").get("[role='grid']");
    detailTable.should("be.visible", true);
    return this;
  }
}
export default portDetail;
