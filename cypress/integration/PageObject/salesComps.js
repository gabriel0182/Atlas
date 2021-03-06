///  <reference types="cypress"/>

class salesComps {
  selectsalesComps() {
    const proPerTies = cy
      .get('[class="left-nav-container"]')
      .contains("Properties");
    proPerTies.click({ force: true });
    const mngProperties = cy
      .get('[class="left-nav-container"]')
      .contains("Manage Properties");
    mngProperties.click({ force: true });
    mngProperties.wait(4000);
    const properTy = cy
      .get('[class="rt-tr -odd"]')
      .get('[role="gridcell"]')
      .contains("1924");
    properTy.click({ force: true });
    const salesCompsOption = cy
      .get('[class="left-nav-container"]')
      .contains("Sales Comps");
    salesCompsOption.click({ force: true });
    salesCompsOption.wait(3000);
    const getMap = cy.get(
      '[style="z-index: 3; position: absolute; height: 100%; width: 100%; padding: 0px; border-width: 0px; margin: 0px; left: 0px; top: 0px; touch-action: pan-x pan-y;"]'
    );
    getMap.should("be.visible", true);
    const salesCompsTable = cy.get('[class="comps alternate-even"]');
    salesCompsTable.should("be.visible", true);
    salesCompsTable.should("contain", "Sales Comp Name");
    salesCompsTable.should("contain", "Address");
    salesCompsTable.should("contain", "# of Units");
    salesCompsTable.should("contain", "Year Built");
    salesCompsTable.should("contain", "Distance from Prop");
    const salesCompsName = cy.get(
      "tbody > :nth-child(1) > :nth-child(2) > .rice"
    );
    salesCompsName.should("contain", "1120 6th Avenue");
    return this;
  }
}
export default salesComps;
