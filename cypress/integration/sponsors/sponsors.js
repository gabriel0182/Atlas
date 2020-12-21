import login from "../PageObject/login.js";
import napSearch from "../PageObject/napSearch.js";
import sponsorsDeal from "../PageObject/sponsorsDeal.js";

const lg = new login();
const nap = new napSearch();
const dealSp = new sponsorsDeal();

Given("The user is logged in the Webapp", () => {
  nap.getData();
  dealSp.getData2();
  lg.landing();
  lg.clientLogin();
  lg.credenTials();
  lg.access();
  lg.LoggedOn();
});

When("search by Atlas Tower deal record", () => {
  nap.searchBar();
});

When("Go to Summary and Select Sponsors", () => {
  dealSp.selectSponsors();
});

when("Confirm Data Loads", () => {
  dealSp.verifyData();
});

when("Confirm you are able to create a Sponsor", () => {
  dealSp.createSponsor();
});

when("Confirm Popout works", () => {
  dealSp.confirmPOpout();
});

Then("Confirm you are able to delete a Sponsors", () => {
  dealSp.deleteSponsor();
});
