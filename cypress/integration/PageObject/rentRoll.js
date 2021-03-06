 class rentRoll{
    selectProperties(){
        const proPerTies = cy.get('[class="left-nav-container"]')
        .contains("Properties")
        proPerTies.click({force: true})
        const mngProperties =  cy.get('[class="left-nav-container"]')
        .contains("Manage Properties")
        mngProperties.click({force: true})
        mngProperties.wait(2000)
        const properTy = cy.get('[class="rt-tr -odd"]')
        .get('[role="gridcell"]')
        .contains("1924")
        properTy.click({force: true})
        const popOut = cy.get('[class="slidein"]')
        .get('[class="slide-content"]')
        .get('[class="section-google-map"]')
        popOut.should('be.visible',true)
        const popOutName = cy.get('[class="slidein"]')
        .get('[class="slide-content"]')
        .get('[class="container-fluid"]')
        .get('[data-row="MSA"]')
        .get('[class="rice"]')
        popOutName.should('contain', "New York City")
        return this;
    }
    selectRentRoll(){
         const rentOption = cy
        .get('[class="left-nav-container"]')
        .contains("Rent Roll")
        rentOption.click({force: true})
        rentOption.wait(3000)
        const rentRollTable = cy.get('[class="rent-rolls"]')
        .get('[class="container-fluid"]')
        .get('[class="rt-table"]')
        rentRollTable.should('be.visible',true)
        return this;
    }

 }
 export default rentRoll;