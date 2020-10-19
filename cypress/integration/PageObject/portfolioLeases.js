class portfolioLeases {
  goLeases() {
    const ptrfManager = cy
      .get("[class='btn btn-link']")
      .contains("Portfolio Management");
    ptrfManager.click({ force: true });
    const expensesOption = cy.get('[title="Leases"]').contains("Leases");
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
        const leaseProperty = cy.get('[class="css-1g6gooi"]').within(() => {
          cy.xpath(
            "/html[1]/body[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/fieldset[1]/form[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]"
          ).click({ force: true });
        });
        leaseProperty.type(`${data.property}{enter}{enter}`);
        const applyProperty = cy.get('[class="col-12"]').within(() => {
          cy.get("button").get('[type="submit"]').contains("Apply");
        });
        applyProperty.click({ force: true });
        const leasesCity = cy.get('[id="tEPropertyCityRolldown"]');
        leasesCity.clear({ force: true });
        leasesCity.click({ force: true });
        leasesCity.type(`${data.city}`, "{enter}", "{enter}");
        const applyCity = cy.xpath(
          "/html[1]/body[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/fieldset[1]/form[2]/div[2]/button[1]"
        );
        applyCity.click({ force: true });
        applyCity.wait(2000);
      });
    });
    return this;
  }
  mapValidation() {
    const map = cy
      .get('[class="comp-google-maps-container"]')
      .get('[class="gm-style-pbc"]');
    map.should("be.visible", true);
    return this;
  }
  validateExport() {
    const exportButton = cy
      .get('[class="col-sm-4"]')
      .get('[class="nativ-button small blue-button"]')
      .contains("Export");
    exportButton.click({ force: true });
    exportButton.wait(2000);
    const file = cy
      .readFile("./cypress/downloads/Lease Export.xlsx", "utf-8")
      .then((xlsx) => {
        expect(xlsx).contain("Lease Export");
      });
    cy.task("unlink3", "./cypress/downloads/Lease Export.xlsx", {
      timeout: 30000,
    });

    return this;
  }
}
export default portfolioLeases;
