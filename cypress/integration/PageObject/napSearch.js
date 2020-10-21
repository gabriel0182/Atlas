///  <reference types="cypress"/>

class napSearch {
  search() {
    const testData = require("../../fixtures/nap.json");
    testData.forEach((testDataRow) => {
      const data = {
        search: testDataRow.search,
        result: testDataRow.result,
      };
      context(`Generating a test for ${data.search}`, () => {
        const inputSearch = cy
          .get('[id="universal-search"]')
          .get('[placeholder="Search Deals"]')
          .get('[id="universalAtlasSearch"]');
        inputSearch.type(`${data.search}`);
        inputSearch.wait(1000);
        const selectResult = cy
          .get('[class="universal-search-results nativ-card"]')
          .get('[class="ReactTable"]')
          .get('[role="gridcell"]')
          .contains(`${data.result}`);
        selectResult.click({ force: true });
        selectResult.wait(4000);
      });
    });
    return this;
  }
  validateResult() {
    const testData = require("../../fixtures/nap.json");
    testData.forEach((testDataRow) => {
      const data = {
        search: testDataRow.search,
      };
      context(`Generating a test for ${data.search}`, () => {
        const dealTitle = cy
          .get('[id="loan-main-header"]')
          .get('[class="col-sm-9"]')
          .get('[class="font-subtitle"]')
          .get('[class="rice"]')
          .invoke('show')
        dealTitle.should('contain', `${data.search}`);
      });
    });
    return this;
  }
}
export default napSearch;
