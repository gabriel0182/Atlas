///  <reference types="cypress"/>

class portAnalytics {
  selectPA() {
    const portMng = cy
      .get("[class='nativ-insights']")
      .contains("Portfolio Management");
    portMng.click({ force: true });
    const portAnl = cy
      .get("[title='Portfolio Analytics']")
      .contains("Portfolio Analytics");
    portAnl.click({ force: true });
    portAnl.wait(2000);
    const testData = require("../../fixtures/prtfAnl.json");
    testData.forEach((testDataRow) => {
      const data = {
        portfolio: testDataRow.portfolio,
        group: testDataRow.group,
      };
      context(`Generating a test for ${data.portfolio}`, () => {
        const selectprf = cy
          .get("[class='css-151xaom-placeholder react-select__placeholder']")
          .contains("Select Portfolio");
        selectprf.click({ force: true });
        selectprf.type(`${data.portfolio}{downarrow}{enter}{enter}`);
        const selectgr = cy
          .get("[class='css-1hwfws3 react-select__value-container']")
          .contains("Group Deals By...");
        selectgr.click({ force: true });
        selectgr.type(`${data.group}{enter}{enter}`);
        selectgr.wait(1000);
        const search = cy
          .get("[class='options-button btn btn-primary']")
          .contains("View Atlas Fund 2 grouped by Property Type");
        search.click({ force: true });
        cy.wait(3000);
        return this;
      });
    });
  }

  strfGraphs() {
    const dealStatus = cy.get("[id='deal-status-donut']");
    dealStatus.should("contain", "Funded/Performing");
    const originator = cy.get("[id='origination-donut']");
    originator.should("contain", "John Doe");
    const loanType = cy.get("[id='deal-type-donut']");
    loanType.should("contain", "TBD");
    const propertyType = cy.get("[id='property-type-donut']");
    propertyType.should("contain", "Office");
    const MSA = cy.get("[id='geographic-distribution-donut']");
    MSA.should("contain", "Chicago");
    const propertyState = cy.get("[id='property-state-donut']");
    propertyState.should("contain", "NY");
    const noteType = cy.get("[id='note-type-donut']");
    noteType.should("contain", "Mezzanine");
  }
  dealpopOut(){
    const dealPop = cy.xpath("/html[1]/body[1]/div[1]/div[1]/div[2]/div[1]/div[2]/div[4]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/*[local-name()='svg'][1]/*[name()='g'][1]/*[name()='g'][1]/*[name()='g'][6]/*[name()='path'][1]")
    dealPop.click({force: true})
    dealPop.wait(1000)
    const dealTitle =  
    cy.get("[class='chart-detail react-table-container nativ-table container']")
    .get("[class='col-10']")
    dealTitle.should('contain','Deals')
     const closeForm = cy.get("[class='d-flex justify-content-end col-2']")
    .get("[class='nativ-button dismiss small link']")
    .get("[alt='Exit']")
    closeForm.click({force: true})
    closeForm.wait(1000)
  }
  createPortfolio() {
    const addPortfolio = cy
      .get("[class='add-icon btn btn-success btn-sm']")
      .contains("Create New Portfolio");
    addPortfolio.click({ force: true });
    addPortfolio.wait(2000);
    const testData = require("../../fixtures/newPortfolio.json");
    testData.forEach((testDataRow) => {
      const data = {
        name: testDataRow.name,
        dealName: testDataRow.dealName,
      };
      context(`Generating a test for ${data.name}`, () => {
        const prtName = cy.get("[id='portfolioName']");
        prtName.type(data.name);
        prtName.wait(3000);
        const dlname = cy.get("[class='filter-results col-lg-9 col-sm-12']");
        dlname.within(() => {
          cy.get("div")
            .get("[style='flex: 200 0 auto; width: 200px; max-width: 200px;']")
            .contains(`${data.dealName}`)
            .click({ force: true });
        });
        const saveprtf = cy
          .get("[class='save-changes btn btn-primary']")
          .contains("Save Changes");
        saveprtf.click({ force: true });
        saveprtf.wait(3000);
        const confirm = cy.get("[class='popup-header row']");
        confirm.should("have.text", "Portfolio undefined Created!");
      });
      cy.reload();
      cy.wait(3000);
      const testData = require("../../fixtures/newPortfolio.json");
      testData.forEach((testDataRow) => {
        const data = {
          name: testDataRow.name,
          group: testDataRow.group,
        };
        context(`Generating a test for ${data.name}`, () => {
          const selectprf = cy
            .get("[class='css-151xaom-placeholder react-select__placeholder']")
            .contains("Select Portfolio");
          selectprf.click({ force: true });
          selectprf.wait(1000);
          selectprf.type(`${data.name}{downarrow}{enter}{enter}`);
          const selectgr = cy
            .get("[class='css-1hwfws3 react-select__value-container']")
            .contains("Group Deals By...");
          selectgr.click({ force: true });
          selectgr.type(`${data.group}{enter}{enter}`);
          selectgr.wait(1000);
          const search = cy
            .get("[class='options-button btn btn-primary']")
            .should("contain", "View AUT Portfolio grouped by Property Type");
          cy.wait(3000);
          return this;
        });
      });
    });
  }
  deletePortfolio() {
    const editprtf = cy
      .get("[class='btn btn-primary btn-sm']")
      .contains("Edit Portfolio");
    editprtf.click({ force: true });
    editprtf.wait(1000);
    const deleteprtf = cy
      .get("[class='btn btn-danger']")
      .contains("Delete Portfolio");
    deleteprtf.click({ force: true });
    return this;
  }
}
export default portAnalytics;
