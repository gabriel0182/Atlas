///  <reference types="cypress"/>

class napSearch {
  getData() {
    cy.fixture("nap.json").then((data) => {
      (this.search = data.search),
       (this.result = data.result)
    });
  }
  searchBar() {
    const inputSearch = cy
      .get('[id="universal-search"]')
      .get('[placeholder="Search Deals"]')
      .get('[id="universalAtlasSearch"]');
    inputSearch.type(`${this.search}`);
    inputSearch.wait(1000);
    const selectResult = cy
      .get('[class="universal-search-results nativ-card"]')
      .get('[class="ReactTable"]')
      .get('[role="gridcell"]')
      .contains(`${this.result}`);
    selectResult.click({ force: true });
    selectResult.wait(4000);
    return this;
  }
  validateResult() {
    const dealTitle = cy
      .get('[id="loan-main-header"]')
      .get('[class="col-sm-9"]')
      .get('[class="font-subtitle"]')
      .get('[class="rice"]')
      .invoke("show");
    dealTitle.should("contain", `${this.search}`);
    return this;
  }
}
export default napSearch;
