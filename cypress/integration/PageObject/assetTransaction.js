///  <reference types="cypress"/>

class assetTransaction {
  getData2() {
    cy.fixture("assetTransaction.json").then((data) => {
      (this.search1 = data.search1), (this.search2 = data.search2);
    });
  }
  selectAssetOption() {
    const ecoNomics = cy
      .get('[class="left-nav-container"]')
      .contains("Economics");
      ecoNomics.click({ force: true });
    const asset = cy
       .contains("Asset Transaction History");
    asset.click({ force: true });
    const chooseNote = cy
      .get('[class="css-bg1rzq-control"]')
      .get('[class="css-1hwfws3"]')
      .get('[class="css-151xaom-placeholder"]')
      .click({ force: true });
    chooseNote.type(`${this.search1}{enter}{enter}`);
    chooseNote.wait(2000);
    const verifyData = cy
      .get('[class="rt-table"]')
      .get('[class="rt-thead -header"]');
    verifyData.should("be.visible", true);
    verifyData.should("contain", "Transaction Name");
    verifyData.should("contain", "Transaction Date");
    verifyData.should("contain", "Transaction Type");
    verifyData.should("contain", "Transaction Amount");
    verifyData.should("contain", "Beginning Asset Balance");
    verifyData.should("contain", "Ending Asset Balance");
    verifyData.should("contain", "Commentary");
    const data = cy.get('.rt-tbody > :nth-child(1) > .rt-tr > :nth-child(4)')
    data.should("contain", "($91,000,000.00)");
    return this;
  }
  verifyMezz() {
    const chooseNote2 = cy
      .get('[class="css-1hwfws3"]')
      .click({ force: true });
    chooseNote2.type(`${this.search2}{enter}{enter}`);
    chooseNote2.wait(2000);
    const verifyData2 = cy
      .get('[class="rt-table"]')
      .get('[class="rt-thead -header"]');
    verifyData2.should("be.visible", true);
    verifyData2.should("contain", "Transaction Name");
    verifyData2.should("contain", "Transaction Date");
    verifyData2.should("contain", "Transaction Type");
    verifyData2.should("contain", "Transaction Amount");
    verifyData2.should("contain", "Beginning Asset Balance");
    verifyData2.should("contain", "Ending Asset Balance");
    verifyData2.should("contain", "Commentary");
    const data2 = cy.get('.rt-tbody > :nth-child(1) > .rt-tr > :nth-child(4)')
    data2.should("contain", "($34,000,000.00)");
    return this;
  }
}
export default assetTransaction;
