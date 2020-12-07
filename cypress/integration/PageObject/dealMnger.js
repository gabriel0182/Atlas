///  <reference types="cypress"/>

class dealMnger{

    selectDealmanager(){
        const dealManageroption = cy.get("[href='/app/dashboard/loanManager']")
        .contains("Deal Manager")
        dealManageroption.click({force: true})
        dealManageroption.wait(2000)
        const clearFilters =  cy.get("[class='nativ-button small red-button']")
        .contains("CLEAR ALL")
        clearFilters.click({force: true})
        return this;
    }

    addSearch(){
        const newSearch = cy.get("[class='nativ-button small blue-button']")
        .contains("+ Add Filter")
        newSearch.click({force: true})
        newSearch.wait(1000)
        const testData = require("../../fixtures/dealManager.json");
    testData.forEach((testDataRow) => {
      const data = {
        search: testDataRow.search,
        simbol: testDataRow.simbol,
        property: testDataRow.property,
        search2: testDataRow.search2,
        status: testDataRow.status,
        searchName: testDataRow.searchName
      };
      context(`Generating a test for ${data.search}`, () => {
        const criteria1 = cy.xpath("/html[1]/body[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[2]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]")
        criteria1.type(`${data.search}{enter}{enter}`)
        const sign = cy.xpath("/html[1]/body[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[2]/div[1]/div[1]/div[2]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]")
        sign.type(`${data.simbol}{enter}{enter}`)
        const propertySearch = cy.xpath("/html[1]/body[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[2]/div[1]/div[1]/div[2]/div[1]/div[1]/div[3]/div[1]/input[1]")
        propertySearch.type(`${data.property}{enter}{enter}`)
        const newSearch2 = cy.get("[class='nativ-button small blue-button']")
        .contains("+ Add Filter")
        newSearch2.click({force: true})
        newSearch2.wait(2000)
        const criteria2 = cy.xpath("/html[1]/body[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[2]/div[1]/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]")
        criteria2.type(`${data.search2}{enter}{enter}`)
        const sign2 = cy.xpath("/html[1]/body[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[2]/div[1]/div[1]/div[2]/div[1]/div[2]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]")
        sign2.type(`${data.simbol}{enter}{enter}`)
        sign2.wait(1000)
        const statusSearch = cy.xpath("/html[1]/body[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[2]/div[1]/div[1]/div[2]/div[1]/div[2]/div[3]/div[1]/div[1]/div[1]/div[1]")
        statusSearch.type(`${data.status}{enter}`)
        statusSearch.wait(1000)
        const saveSearch = cy.get("[class='nativ-button small green-button']")
        saveSearch.click({force: true})
        const searchTitle = cy.get("[id='searchName']")
        searchTitle.type(`${data.searchName}`)
        const save = cy.get("[role='document']")
        .within(() => {
            cy.get("div")
            .get("[class='nativ-button small green-button']")
        .contains("SAVE")
        .click({force: true})
        })
        const verifySearch = cy.get("[class='with-padding']")
        verifySearch.should('have.text',`${data.searchName}`)
    })
    })
    return this;
    }

    editColumns(){
const editButton = cy.get("[id='config-column-edit-icon-container']")
.get("[class='nativ-button small blue-button']")
.contains("Edit Columns")
editButton.click({force: true})
const column1 = cy.get("[for='ANoteUWNCFDSCRInterpreted']")
.contains("UW NCF DSCR")
column1.click({force: true})
const column2 = cy.get("[for='ANoteUWNCFDYInterpreted']")
.contains("UW NCF DY")
column2.click({force: true})
const saveChanges = cy.get("[class='nativ-button small blue-button']")
.contains("Save Changes")
saveChanges.click({force: true})
const verifyColumn1 = cy.xpath("/html[1]/body[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[2]/div[1]/div[1]/div[5]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[12]/div[1]")
verifyColumn1.should('contain','UW NCF DSCR')
const verifyColumn2 = cy.xpath("/html[1]/body[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[2]/div[1]/div[1]/div[5]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[13]/div[1]")
verifyColumn2.should('contain','UW NCF DY')
}

mapLoads(){
const map = cy
.get('[style="z-index: 3; position: absolute; height: 100%; width: 100%; padding: 0px; border-width: 0px; margin: 0px; left: 0px; top: 0px; touch-action: pan-x pan-y;"]')
map.should('be.visible', true)
return this;
}
popOuts(){
 const record = cy.get("[class='rt-tr -even']")
 .within(()=>{
 cy.get("div")
 .get("[role='gridcell']")
 .contains("North Park Shopping Center")
 .click(348,469,{force: true})
 })
 record.wait(2000)
 const popWindow = cy.get("[class='slide-content']")
 popWindow.should('be.visible',true)
  const loanButton = cy.get("[class='nativ-button small blue-button']")
  .contains("Loan Overview")
  loanButton.click({force:true})
  loanButton.wait(3000)
  const loanPage = cy.get("[id='page-loan-overview']")
  loanPage.should('be.visible', true)
 return this;
}

}
export default dealMnger;