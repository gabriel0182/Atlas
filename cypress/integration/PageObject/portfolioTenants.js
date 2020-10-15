///  <reference types="cypress"/>

class portfolioTenants {
  goTenants() {
    const ptrfManager = cy
      .get("[class='btn btn-link']")
      .contains("Portfolio Management");
    ptrfManager.click({ force: true });
    const tenantsPage = cy.get("[title='Tenants']").contains("Tenants");
    tenantsPage.click({ force: true });
    tenantsPage.wait(2000);
    return this;
  }
  tenantsSearch() {
    const testData = require("../../fixtures/searchTenants.json");
    testData.forEach((testDataRow) => {
      const data = {
        search: testDataRow.search,
      };
      context(`Generating a test for ${data.search}`, () => {
        const tenantsName = cy.get("[id='tenantName']");
        tenantsName.click({ force: true });
        tenantsName.clear({ force: true });
        tenantsName.type(` ${data.search}`);
        const apply = cy
          .get("[type='submit']")
          .get("[class='btn btn-primary btn-sm']")
          .contains("Apply");
        apply.click({ force: true });
        apply.wait(5000);
      });
    });
    return this;
  }
  confirmMap() {
    const getMap = cy.get("[class='comp-google-maps-container']");
    getMap.should("be.visible", true);
    return this;
  }
  confirmExports() {
    const exportButton = cy
      .get("[class='nativ-button small blue-button']")
      .contains("Export");
    exportButton.click({ force: true });
    cy.wait(5000);
    const file = cy
      .readFile("./cypress/downloads/Tenant Exposure.xlsx", "utf-8")
      .then((xlsx) => {
        expect(xlsx).contain("Tenant Exposure");
      });
    cy.task("unlink", "./cypress/downloads/Tenant Exposure.xlsx", {
      timeout: 30000,
    });

    return this;
  }
}

export default portfolioTenants;
