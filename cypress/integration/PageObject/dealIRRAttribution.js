///  <reference types="cypress"/>

class dealIRRAttribution {
  getData2() {
    cy.fixture("IRRAttribution.json").then((data) => {
      this.tranche = data.tranche;
    });
  }
  selectIRRAtt() {
    const ecoNomics = cy
      .get('[class="left-nav-container"]')
      .contains("Economics");
    ecoNomics.click({ force: true });
    const IRROption = cy.contains("IRR Attribution");
    IRROption.click({ force: true });
    IRROption.wait(2000);
    const choosetranche = cy.get(".css-1hwfws3").click({ force: true });
    choosetranche.type(`${this.tranche}{enter}{enter}`);
    choosetranche.wait(2000);
    return this;
  }
  verifyData() {
    const ledgerTable = cy.get(
      "#page-irr-attribution > .container-fluid > :nth-child(2) > .col"
    );
    ledgerTable.should("be.visible", true);
    ledgerTable.should("contain", "Mezzanine - AM Update");
    ledgerTable.should("contain", "Mezzanine - Origination IRR");
    ledgerTable.should("contain", "Mezzanine - AM Update");
    ledgerTable.should("contain", "12.52%");
    ledgerTable.should("contain", "1.60%");
    ledgerTable.should("contain", "$11,009,762");
    ledgerTable.should("contain", "$2,306,321");
    ledgerTable.should("contain", "1.27x");
    ledgerTable.should("contain", "1.05x");
    return this;
  }
}
export default dealIRRAttribution;
