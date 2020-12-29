///  <reference types="cypress"/>

class borrowersDeal {
  getData2() {
    let date = Cypress.moment().format("YY,MM,dd, hh");
    let date1 = Cypress.moment().format("D");
    cy.fixture("borrowers.json").then((data) => {
      this.name = `AUT Borrower${date}`;
      (this.entity = data.entity);
      this.date = `${date1}`;
      (this.state = data.state)
    });
  }
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
addBorrowers(){
const closePopout = cy
.get('.information-button-close > img')
closePopout.click({force: true})
closePopout.wait(1000)
const createButton = cy
.get('.container-fluid > :nth-child(1) > .d-flex > .nativ-button') 
createButton.click({force: true})
createButton.wait(1000)
const borrowerName = cy
.get('#BorrowerName')
borrowerName.click({force: true})
borrowerName.type(`${this.name}`)
const borrowerEntity = cy
.get('#BorrowerEntityType')
borrowerEntity.select(`${this.entity}`)
const borrowerDate = cy
.get('#BorrowerDateFormed')
borrowerDate.click({force: true}) 
const selecDay =cy.get('.react-datepicker__month-container')
.get('[class="react-datepicker__current-month"]')
.get('[class="react-datepicker__week"]')
.contains(`${this.date}`)
selecDay.click({force: true})
const borrowerState = cy
.get('#StateofFormation')
borrowerState.select(`${this.state}`)
const saveBorrower = cy
.get('.green-button')
saveBorrower.click({force: true})
saveBorrower.wait(1000)
const table = cy
    .get(".col-sm-12");
    table.should("contain",`${this.name}`);
    const confirmBorrower = cy.get('[class="col-10"]')
    .get('[class="popup-header row"]')
    confirmBorrower.should('contain', 'Borrower created!')
return this;
}
}
export default borrowersDeal;
