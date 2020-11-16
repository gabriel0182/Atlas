///  <reference types="cypress"/>

class assetTransaction {
  getData2() {
    cy.fixture("assetTransaction.json").then((data) => {
      (this.search1 = data.search1), (this.search2 = data.search2);
    });
  }
  selectAssetOption() {
    const asset = cy
      .get('[class="display-link "]')
      .get('[title="Asset Transaction History"]')
      .contains("Asset Transaction History");
    asset.click({ force: true });
    const chooseNote = cy
      .get('[class="css-bg1rzq-control"]')
      .get('[class="css-1hwfws3"]')
      .get('[class="css-151xaom-placeholder"]')
      .click({ force: true });
    chooseNote.type(`${this.search1}{enter}{enter}`);
    chooseNote.wait(2000)
    const verifyData = cy.get('[class="rt-table"]')
    .get('[class="rt-thead -header"]')
    verifyData.should('be.visible', true)
    verifyData.should('contain', "Transaction Name")
    verifyData.should('contain', "Transaction Date")
    verifyData.should('contain', "Transaction Type")
    verifyData.should('contain', "Transaction Amount")
    verifyData.should('contain', "Beginning Asset Balance")
    verifyData.should('contain', "Ending Asset Balance")
    verifyData.should('contain', "Commentary")
    const data = cy.get('.rt-tbody > :nth-child(1) > .rt-tr > :nth-child(2)')
    data.should('contain', "06/01/2018")
    return this;
  }
}
export default assetTransaction;
