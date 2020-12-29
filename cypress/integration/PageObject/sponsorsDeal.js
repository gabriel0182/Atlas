///  <reference types="cypress"/>

class sponsorsDeal {
  getData2() {
    let date1 = Cypress.moment().format("MM,dd");
    let date2 = Cypress.moment().format("mm");
    let date3 = Cypress.moment().format("ss");
    cy.fixture("sponsors.json").then(() => {
      this.name = `AUT ${date3}`;
      this.company = `QA Test ${date1}`;
      this.percent = `${date2}%`;
    });
  }
  selectSponsors() {
    const suMmary = cy.get('[class="left-nav-container"]').contains("Summary");
    suMmary.click({ force: true });
    const sponsorsOption = cy.contains("Sponsors");
    sponsorsOption.click({ force: true });
    sponsorsOption.wait(2000);
    return this;
  }

  verifyData() {
    const SponsorsTable = cy.get('#page-loan-sponsor')
    SponsorsTable.should("be.visible", true);
       return this;
  }
  createSponsor() {
    const addSponsor = cy.get(
      ".container-fluid > :nth-child(1) > .d-flex > .nativ-button"
    );
    addSponsor.click({ force: true });
    addSponsor.wait(1000);
    const sponsorName = cy.get("#SponsorContact");
    sponsorName.click({ force: true });
    sponsorName.type(`${this.name}`);
    const sponsorCompany = cy.get("#SponsorName");
    sponsorCompany.click({ force: true });
    sponsorCompany.type(`${this.company}`);
    const sponsorPercent = cy.get("#OwnershipPercent");
    sponsorPercent.click({ force: true });
    sponsorPercent.type(`${this.percent}`);
    const add = cy.get(".green-button");
    add.click({ force: true });
    add.wait(1000);
    const conFirm = cy.get('[class="popup-header row"]');
    conFirm.should("contain", "Sponsor created!");
    return this;
  }
  confirmPOpout() {
    const sponsorCreated = cy
      .get(":nth-child(2) > .col-sm-12")
      .contains(`${this.name}`);
    sponsorCreated.click({ force: true });
    const poPout = cy.get(".slide-content > :nth-child(2)");
    poPout.should("be.visible", true);
    const popTitle = cy.get(".page-title");
    popTitle.should("contain", `${this.company}`);
    return this;
  }
  deleteSponsor() {
    const deleteButton = cy.get(".d-flex > .btn");
    deleteButton.click({ force: true });
    const delConfirm = cy.get(".red-button")
    .contains("Delete")
    delConfirm.click({ force: true });
    const confirmDelete = cy.get('[class="container-fluid"]')
    .get('[class="popup-header row"]')
    confirmDelete.should('contain',"Success")
    return this;
  }
}
export default sponsorsDeal;
