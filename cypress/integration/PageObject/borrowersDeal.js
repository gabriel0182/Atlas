///  <reference types="cypress"/>

class borrowersDeal {
  selectBorrowers() {
    const suMmary = cy.get('[class="left-nav-container"]').contains("Summary");
    suMmary.click({ force: true });
    const borrowersOption = cy.contains("Borrowers");
    borrowersOption.click({ force: true });
    borrowersOption.wait(4000);
    return this;
  }

  confirmData() {
    const table = cy
    .get(".col-sm-12");
    table.should("be.visible", true);
    table.should("contain", "Atlas Capital LLC");
    table.should("contain", "Atlas Capital LLC");
    const borrowPopout = cy
    .get('.rt-tbody > :nth-child(1) > .rt-tr > .justify-content-start')
    borrowPopout.click({force: true})
    const popOut = cy
    .get('.slide-content')
    popOut.should("be.visible", true)
    const pageTitle = cy
    .get('.page-title') 
    pageTitle.should("contain", "Atlas Capital LLC");
    const dealID = cy
    .get('.app-page-context > :nth-child(1)')
    dealID.should("contain", "5682");
    return this;
  }
}
export default borrowersDeal;
