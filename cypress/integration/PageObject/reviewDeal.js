///  <reference types="cypress"/>

class reviewDeal {
  loanOverview() {
    const loanTable = cy
      .get('[class="col-xl-6 col-md-12 col-sm-12"]')
      .get('[class="nativ-card nativ-table fixed-layout"]');
    loanTable.should("contain", "Loan Overview");
    return this;
  }
  capitalStack() {
    const capitalTable = cy
      .get('[class="row"]')
      .get('[class="col-12"]')
      .get('[class="nativ-card nativ-table with-totals"]');
    capitalTable.should("contain", "Capital Stack");
    return this;
  }
  reServes() {
    const reServesTable = cy
      .get('[class="row"]')
      .get('[class="col-6"]')
      .get('[class="nativ-card nativ-table with-totals"]');
    reServesTable.should("contain", "Reserves");
    return this;
  }
  majorTenants() {
    const tenantsTable = cy
      .get('[class="row"]')
      .get('[class="col-6"]')
      .get('[class="nativ-card nativ-table"]');
    tenantsTable.should("contain", "Major Tenants");
    return this;
  }
  confirmMap() {
    const map = cy.get('[class="d-flex align-items-center col-xl-6 col-md-12 col-sm-12"]')
    .get('[class="google-maps-container"]')
    .get('[style="width: 100%; height: 100%; margin: 0px; padding: 0px; position: relative;"]')
    .invoke('show')
    .scrollIntoView()
    map.should('be.visible', true);
    return this;
  }
}
export default reviewDeal;
