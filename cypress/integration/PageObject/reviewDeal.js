///  <reference types="cypress"/>

class reviewDeal {
  getData() {
    cy.fixture("nap.json").then((data) => {
      (this.search = data.search),
      (this.result = data.result),
      (this.status1 = data.status1),
      (this.status2 = data.status2)
    });
  }
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
  selectStatus(){
    const sl = cy
    .get('[data-row="Deal Status"]')
    .get('[class="datum-value"]')
    .get('[class="rice"]')
    .contains(`${this.status2}`)
    sl.click({force: true})
    const statusField = cy.
    xpath("/html[1]/body[1]/div[1]/div[1]/div[2]/div[3]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/table[1]/tbody[1]/tr[2]/td[2]/div[1]/select[1]")
      statusField.select(`${this.status1}`).type("{enter}{enter}")
      statusField.wait(3000) 
    const validateStatus = cy
    .get('[data-row="Deal Status"]')
    .get('[class="datum-value"]')
    .get('[class="rice"]')
    validateStatus.should('contain',`${this.status1}`)
    const statusBack = cy
    .get('[data-row="Deal Status"]')
    .get('[class="datum-value"]')
    .get('[class="rice"]')
    .contains(`${this.status1}`)
    statusBack.click({force: true})
    const selectStatus = cy.
    xpath("/html[1]/body[1]/div[1]/div[1]/div[2]/div[3]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/table[1]/tbody[1]/tr[2]/td[2]/div[1]/select[1]")
    selectStatus.select(`${this.status2}`).type("{enter}{enter}") 
    return this;
  }
}
export default reviewDeal;
