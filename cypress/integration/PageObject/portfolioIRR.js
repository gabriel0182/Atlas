///  <reference types="cypress"/>

class portfolioIRR {
  selectIRR() {
    const portMng = cy
        .get(':nth-child(9) > .icon-button')
      .contains("Portfolio Management");
      portMng.click({ force: true });
    const prtfIRR = cy
      .get('[class="level-2 d-block"]')
      .get('[class="display-link selected "]')
      .get('[class="standard-button null link"]')
      .contains("Portfolio IRR Analytics");
    prtfIRR.click({ force: true });
    prtfIRR.wait(2000);
    return this;
  }
  verifyIRRtable() {
    const testData = require("../../fixtures/prtfIRR.json");
    testData.forEach((testDataRow) => {
      const data = {
        portfolio: testDataRow.portfolio,
      };
      context(`Generating a test for ${data.portfolio}`, () => {
        const choosePortfolio = cy
          .get("[class='col-9']")
          .get("[class='css-1hwfws3']");
        choosePortfolio.type(`${data.portfolio}{enter}{enter}`);
        const apply = cy.get("[type='button']").contains("Apply");
        apply.click({ force: true });
        apply.wait(30000);
        const tableIRR = cy
          .get("[class='ReactTable -striped -highlight']")
          .get("[class='rt-table']");
        tableIRR.should("be.visible", true);
        tableIRR.wait(2000)
      });
    });
    return this;
  }
  verifyValues() {
    const ptrfDetail = cy
    .get('[class="level-2 d-block"]')
    .get('[class="display-link  "]')
    .get('[href="/app/v2/portfolioanalytics"]')
    .get('[class="standard-button null link"]')
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
        apply.wait(30000);
    const grossIRR = cy
      .xpath(
        "/html[1]/body[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[5]/div[1]/div[1]/div[1]/div[3]/div[1]/div[16]/span[1]"
      )
      .invoke("text")
      .then((text1) => {
        const profit = cy.xpath(
          "/html[1]/body[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[5]/div[1]/div[1]/div[1]/div[3]/div[1]/div[17]/span[1]"
        );
        profit.invoke("text").then((text3) => {
          const equity = cy.xpath(
            "/html[1]/body[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[5]/div[1]/div[1]/div[1]/div[3]/div[1]/div[18]/span[1]"
          );
          equity.invoke("text").then((text5) => {
           const prtfIRROpt = cy
          .get('[class="level-2 d-block"]')
          .get('[class="display-link selected "]')
          .get('[class="standard-button null link"]')
              .contains("Portfolio IRR Analytics");
              prtfIRROpt.click({ force: true });
              prtfIRROpt.wait(2000);
            const testData1 = require("../../fixtures/prtfIRR.json");
            testData1.forEach((testDataRow) => {
              const data = {
                portfolio: testDataRow.portfolio,
              };
              context(`Generating a test for ${data.portfolio}`, () => {
                const choosePortfolio = cy
                  .get("[class='col-9']")
                  .get("[class='css-1hwfws3']");
                choosePortfolio.type(`${data.portfolio}{enter}{enter}`);
                const apply = cy.get("[type='button']").contains("Apply");
                apply.click({ force: true });
                apply.wait(15000);
              });
              const IRR = cy.xpath(
                "/html[1]/body[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[6]/div[2]"
              );
              IRR.invoke("text").should((text2) => {
                expect(text1).to.eq(text2);
              });
              const ptrfIRRprofit = cy.xpath(
                "/html[1]/body[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[7]/div[2]"
              );
              ptrfIRRprofit.invoke("text").should((text4) => {
                expect(text4).to.contain(text3);
              });
              const ptrfIRRequity = cy.xpath(
                "/html[1]/body[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[8]/div[2]"
              );
              ptrfIRRequity.invoke("text").should((text6) => {
                expect(text5).to.eq(text6);
              });
            });
          });
        });
      });
    })
  })
    return this;
  }
}
export default portfolioIRR;
