///  <reference types="cypress"/>

class sponsorsDeal{
    selectSponsors() {
        const suMmary = cy
          .get('[class="left-nav-container"]')
          .contains("Summary");
          suMmary.click({ force: true });
        const sponsorsOption = cy.contains("Sponsors");
        sponsorsOption.click({ force: true });
        sponsorsOption.wait(2000);
        return this;
      }

      verifyData(){
          const SponsorsTable = cy
          .get(':nth-child(2) > .col-sm-12')
          SponsorsTable.should('be.visible',true)
          SponsorsTable.should('contain',"QA Corp 102020")
          SponsorsTable.should('contain',"Sioni Group")
          SponsorsTable.should('contain',"$100,000,000")
          return this;
      }



}
export default sponsorsDeal;