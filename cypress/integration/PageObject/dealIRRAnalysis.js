///  <reference types="cypress"/>

class dealIRRAnalysis{
    getData2() {
        cy.fixture("IRRAnalysis.json").then((data) => {
          (this.tranche = data.tranche), (this.forecast = data.forecast);
        });
      }
selectIRR(){
    const IRROption = cy
    .get('[class="display-link "]')
    .get('[title="IRR Analysis"]')
    .contains("IRR Analysis")
    IRROption.click({force:true})
    IRROption.wait(2000)
    const choosetranche = cy
    .get(':nth-child(1) > .nativ-form-group > .css-1pcexqc-container > .css-1ofrjoz-control > .css-1hwfws3')
    .click({force:true})
    choosetranche.type(`${this.tranche}{enter}{enter}`)
    choosetranche.wait(2000)
    const chooseForecast = cy
    .get(':nth-child(2) > .nativ-form-group > .css-1pcexqc-container > .css-1ofrjoz-control > .css-1hwfws3')
    .click({force:true})
    chooseForecast.type(`${this.forecast}{enter}{enter}`)
    const run = cy
    .get(':nth-child(3) > .nativ-button')
    run.click({force:true})
    run.wait(2000)
    const verifyTable = cy.get('[class="col"]')
    .get('[class="react-table-container nativ-table nativ-card"]')
    .get('[class="container-fluid"]')
    verifyTable.should('contain','IRR Data')
    return this;

}
confirmValues(){
    const IRRValue = cy
    .get(':nth-child(2) > .container > :nth-child(1) > :nth-child(2)')
    IRRValue.should('not.equal',0)
    IRRValue.should('not.equal','-1.20%')
    IRRValue.should('not.equal','(1.20%)')
    const proFit = cy
    .get(':nth-child(2) > .container > :nth-child(2) > :nth-child(2)')
    proFit.should('not.equal',0)
    proFit.should('not.equal','($1,598,093)')
    proFit.should('not.equal','$-1,598,093')
    const mulTiple = cy
    .get(':nth-child(2) > .container > :nth-child(3) > :nth-child(2)')
    mulTiple.should('not.equal',0)
    mulTiple.should('not.equal','-1.04x')
    mulTiple.should('not.equal','(1.04x)')
    return this;
}

}
export default dealIRRAnalysis;