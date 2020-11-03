///  <reference types="cypress"/>

class capitalStructure {
    selectCapital(){
        const capitalSt = cy.get('[class="level-2"]')
        .get('[title="Capital Structure"]')
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
        return this;
    }



}
export default capitalStructure;