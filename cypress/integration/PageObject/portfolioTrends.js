///  <reference types="cypress"/>

class portTrends {
    selectPt(){
        const portMng = cy
        .get("[class='nativ-insights']")
        .contains("Portfolio Management");
      portMng.click({ force: true });
      const portTr = cy.get("[title='Portfolio Trends']")
      .contains("Portfolio Trends")
      portTr.click({force: true})
      portTr.wait(2000)
      const testData = require("../../fixtures/prtfAnl.json");
    testData.forEach((testDataRow) => {
      const data = {
        portfolio: testDataRow.portfolio
        };
      context(`Generating a test for ${data.portfolio}`, () => {
      const selectPort = cy.get("[class='css-1hwfws3 react-select__value-container']")
      .get("[class='css-151xaom-placeholder react-select__placeholder']")
      .contains("Select Portfolio")
      selectPort.click({force: true})
      selectPort.type(`${data.portfolio}{downarrow}{enter}{enter}`)
      selectPort.wait(2000)
      })
    })
        return this;
   }
   conFirm(){
    const graphTitle = cy.get("[class='container-fluid']")
    .get("[class='font-subtitle']")
    graphTitle.should('have.text','Portfolio UPB by Quarter')
    const barsGraph = cy.get("[id='bar-noi-debt-yield']")
    .get("[class='nativ-graph bar-chart']")
    barsGraph.should('be.visible',true)
    const tableTitle = cy.get("[class='col-lg-6']")
    tableTitle.should('have.text','Quarterly Breakdown')
    const quarterlyTable = cy.get("[class='nativ-table nativ-card']")
    quarterlyTable.should('be.visible',true)
   }
}

export default portTrends