///  <reference types="cypress"/>

class rentComps {
  selectrentComps() {
    const proPerTies = cy
      .get('[class="left-nav-container"]')
      .contains("Properties");
    proPerTies.click({ force: true });
    const mngProperties =  cy.get('[class="left-nav-container"]')
    .contains("Manage Properties")
    mngProperties.click({force: true})
    mngProperties.wait(4000)
    const properTy = cy
      .get('[class="rt-tr -odd"]')
      .get('[role="gridcell"]')
      .contains("1924");
    properTy.click({ force: true });
    const rentCompsOption = cy
      .get('[class="left-nav-container"]')
      .contains("Rent Comps");
    rentCompsOption.click({ force: true });
    const getMap = cy.get(
      '[style="z-index: 3; position: absolute; height: 100%; width: 100%; padding: 0px; border-width: 0px; margin: 0px; left: 0px; top: 0px; touch-action: pan-x pan-y;"]'
    );
    getMap.should("be.visible", true);
    const rentCompsTable = cy.get('[class="comps alternate-even"]');
    rentCompsTable.should("contain", "Rent Comp Name");
    rentCompsTable.should("contain", "Address");
    rentCompsTable.should("contain", "Year Built");
    rentCompsTable.should("contain", "Distance from Prop");
    const rentCompsValue = cy.get("tbody > :nth-child(1) > :nth-child(2)");
    rentCompsValue.should("contain", "132 West 31st Street");
    return this;
  }
}
export default rentComps;
