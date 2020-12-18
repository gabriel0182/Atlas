import login from "../PageObject/login.js";
import napSearch from "../PageObject/napSearch.js";
import sponsorsDeal from "../PageObject/sponsorsDeal.js";

const lg = new login();
const nap = new napSearch();
const DealSp = new sponsorsDeal();

Given("The user is logged in the Webapp", () => {
  nap.getData();
  //DealSp.getData2();
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
  DealSp.selectSponsors();
});

when("Confirm Data Loads", () => {
    DealSp.verifyData();
});

when("Confirm Popout works", () => {});

Then("Confirm you are able to create and delete Sponsors", () => {});
