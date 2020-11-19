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
    return this;

}


}
export default dealIRRAnalysis;