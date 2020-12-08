class portfolioLeases {
  goLeases() {
    const ptrfManager = cy
    .get(':nth-child(9) > .icon-button')
      .contains("Portfolio Management");
    ptrfManager.click({ force: true });
    const expensesOption = cy
    .contains("Leases");
    expensesOption.click({ force: true });
    expensesOption.wait(2000);
    return this;
  }
  leasesSearch() {
    const testData = require("../../fixtures/leases.json");
    testData.forEach((testDataRow) => {
      const data = {
        property: testDataRow.property,
        city: testDataRow.city,
      };
      context(`Generating a test for ${data.property}`, () => {
        const leaseProperty = cy
        .get(':nth-child(2) > .container-fluid > :nth-child(1) > .col-12 > .nativ-form-group > .css-1pcexqc-container > .css-1ofrjoz-control > .css-1hwfws3')
        leaseProperty.type(`${data.property}{enter}{enter}`);
        const applyProperty = cy
        .get(':nth-child(2) > .container-fluid > :nth-child(2) > .col-12 > .btn')
        .contains("Apply")
        applyProperty.click({ force: true });
        const leasesCity = cy.get('[id="tEPropertyCityRolldown"]');
        leasesCity.clear({ force: true });
        leasesCity.click({ force: true });
        leasesCity.type(`${data.city}`, "{enter}", "{enter}");
        const applyCity = cy.xpath(
          "/html[1]/body[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/fieldset[1]/form[2]/div[2]/button[1]"
        );
        applyCity.click({ force: true });
        applyCity.wait(5000);
      });
    });
    return this;
  }
  validateExport() {
    const exportButton = cy
      .get('[class="col-sm-4"]')
      .get('[class="nativ-button small blue-button"]')
      .contains("Export");
    exportButton.click({ force: true });
    exportButton.clock().then((clock) => {
      clock.tick(2000)
    })
    cy.readFile("cypress/downloads/Lease Export.xlsx", "utf-8")
      .then((xlsx) => {
        expect(xlsx).contain("Lease Export");
      });
       return this;
  }
  mapValidation() {
    const map = cy
    .get('[style="z-index: 3; position: absolute; height: 100%; width: 100%; padding: 0px; border-width: 0px; margin: 0px; left: 0px; top: 0px; touch-action: pan-x pan-y;"]')
    map.should("be.visible", true);
    return this;
  }
 
  deletefile(){
    cy.task("unlink3", "cypress/downloads/Lease Export.xlsx", {
      timeout: 30000,
    });


  }
}
export default portfolioLeases;
