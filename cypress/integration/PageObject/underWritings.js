///  <reference types="cypress"/>


class underWritings {
    getData2() {
        cy.fixture("underWritings.json").then((data) => {
          (this.search1 = data.search1),
          (this.search2 = data.search2)
        });
      }
    selectUnderWritings(){
        const proPerTies = cy.get('[class="display-link "]')
        .get('[type="button"]')
        .contains("Properties")
        proPerTies.click({force: true})
        proPerTies.wait(3000)
        const properTy = cy.get('[class="rt-tr -odd"]')
        .get('[role="gridcell"]')
        .contains("1924")
        properTy.click({force: true})
        const selUnderW = cy.get('[class="display-link "]')
        .get('[title="Underwritings"]')
        .contains("Underwritings")
        selUnderW.click({force: true})
        selUnderW.wait(3000)
        return this;
    }
    selectOrginationUW(){
    const searchField = cy
    .get('.css-151xaom-placeholder')
    .click({force: true})
    .get('#react-select-3-option-0')
    searchField.contains(`${this.search1}`).click({force: true})
    const originatioTable = cy.get('[class="rt-tbody"]')
    .get('[class="rt-tr-group"]')
    .get('[class="rt-tr -even"]')
    .get('[class="rt-td"]')
    .contains("Lender UW Cash Flow - IP")
    originatioTable.click({force: true})
    const lineItemDetailPopout = cy.get('.slide-content')
    lineItemDetailPopout.should('be.visible', true)
    const getTitle = cy.get('[class="page-header"]')
    .get('[class="col-12"]')
    .get('[class="page-title"]')
    getTitle.should('contain',"Lender UW Cash Flow - IP")
    const closeform = cy.get('[class="slide-content"]')
    .get('[type="button"]')
    .get('[alt="Exit"]')
    closeform.click({force: true})
    closeform.wait(2000)
    return this;
}
selectAMUpdate1(){
  const searchField2 = cy
  .get('.css-1hwfws3')
    .click({force: true})
    .get('#react-select-3-option-1')
    searchField2.contains(`${this.search2}`).click({force: true})
    const AMTable = cy.get('[class="rt-tbody"]')
    .get('[class="rt-tr-group"]')
    .get('[class="rt-tr -even"]')
    .get('[class="rt-td"]')
    .contains("Lender UW - AM Update")
    AMTable.click({force: true})
    const Popout = cy.get('.slide-content')
    Popout.should('be.visible', true)
    const formTitle = cy.get('[class="page-header"]')
    .get('[class="col-12"]')
    .get('[class="page-title"]')
    formTitle.should('contain',"Lender UW - AM Update")
    const close = cy.get('[class="slide-content"]')
    .get('[type="button"]')
    .get('[alt="Exit"]')
    close.click({force: true})
    close.wait(2000)
    return this;
}
}
export default underWritings;