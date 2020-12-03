///  <reference types="cypress"/>

class capitalStructure {
    getData() {
        let date = Cypress.moment().format("mm");
        cy.fixture("capitalStack.json").then((data) => {
            (this.investmentType = data.investmentType),
          this.trancheAmount = `550${date}`;
          this.name = `AUT ${date}`;
          this.term = `${date}`
        });
      }
    selectCapital(){
        const ecoNomics = cy
        .get('[class="level-1"]')
        .get('[class="level-2"]')
        .get('[class="sub-menu"]')
        .get('[class="grow-group"]')
        .contains("Economics")
        ecoNomics.click({force: true})
        const capitalSt = cy.get('[class="grow-group"]')
        .get('[href="/app/dashboard/capitalstructuretranche"]')
        .contains("Capital Structure")
        capitalSt.click({force: true})
        capitalSt.wait(3000)
        const selectMezz = cy.get('[class="col-sm-12"]')
        .get('[class="loan-note react-table-container nativ-table nativ-card with-totals"]')
        .get('[class="rt-table"]')
        .get('[class="rt-tbody"]')
        .within(()=>{
                cy.get('[class="rt-tr-group"]')
                .get('[class="rt-tr -odd"]')
                .get('[role="gridcell"]')
                .contains("Mezzanine")
                .click({force: true})
        })
        selectMezz.wait(2000)
        /*const selectValue = cy
        .get('.rt-tr-group > .rt-tr > :nth-child(1)')
        selectValue.click({force: true})
        selectValue.wait(2000)*/
        const capStpopOut = cy.get('[class="slidein"]')
        .get('[class="slide-content"]')
        .get('[class="page-title"]')
        capStpopOut.should('be.visible',true)
        capStpopOut.should('have.text','Mezzanine')
        const formTitle = cy.get('[class="touch loan-information-table col-sm-12"]')
        .get('[class="nativ-table "]')
        .get("h2")
        formTitle.should('be.visible',true)
        formTitle.should('contain','Tranche Details')
        const closeButton = cy.get('[type="button"]')
        .get('[alt="Exit"]')
        closeButton.click({force: true})
        closeButton.wait(2000)
        return this;
    }
addCapitalStacks(){
    const addButton = cy.get('[class="nativ-button green-button small"]')
    .contains("Create New Tranche")
    addButton.click({force: true})
    addButton.wait(2000)
    const invType = cy.get('[id="noteType"]')
    invType.select(`${this.investmentType}`)
    const amount = cy.get('[id="noteAmount"]')
    .click({force: true})
    amount.type(`${this.trancheAmount}`)
    const subMit = cy.get('[class="nativ-button small green-button"]')
    .contains("Create Note")
    subMit.click({force: true})
    subMit.wait(5000)
    const confirmMessage = cy.get('[class="container-fluid"]')
    .get('[class="row"]')
    .get('[class="col-10"]')
    .get('[class="popup-header row"]')
    .get('[class="d-flex align-items-center col-12"]')
    confirmMessage.should('contain', "Tranche created!")
    return this;
}
deleteCapitalStacks(){
const select = cy.get('[class="col-sm-12"]')
        .get('[class="loan-note react-table-container nativ-table nativ-card with-totals"]')
        .get('[class="rt-table"]')
        .get('[class="rt-tbody"]')
        .within(()=>{
                cy.get('[class="rt-tr-group"]')
                .get('[class="rt-tr -odd"]')
                .get('[role="gridcell"]')
                .contains("Equity")
                .click({force: true})
        })
        select.wait(2000)
    const capName = cy.get('[data-row="Tranche Name"]')
    .get('[class="rice"]')
    .get('[data-value="--"]')
    .contains("--")
    capName.type(`${this.name}{enter}`)
    const term = cy.get('[data-row="Tranche Term"]')
    .within(()=>{
        cy.get("td")
        .get('[class="rice"]')
       .get('[data-value="--"]')
        .contains("--")
    })    
    term.type(`${this.term}{enter}`)
    const closeButton2 = cy.get('[type="button"]')
        .get('[alt="Exit"]')
        closeButton2.click({force: true})
        closeButton2.reload()
        closeButton2.wait(2000)
        const deleteButton = 
            cy.get(':nth-child(4) > .rt-tr > [style="flex: 50 0 auto; width: 50px; max-width: 50px;"] > .nativ-button > .svg-inline--fa')
            deleteButton.click({force: true})
    const confirmDelete = cy.get('[id="popup-root"]')
    .get('[id="confirm-dialog"]')
    .get('.jss100 > .red-button')
    .contains("Delete")
    confirmDelete.click({force: true})
    const confirmDeleteMess = cy.get('[class="container-fluid"]')
    .get('[class="popup-header row"]')
    .get('[class="d-flex align-items-center col-12"]')
    confirmDeleteMess.should('contain',"Success")
    return this;
    }
}
export default capitalStructure;