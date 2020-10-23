import login from "../PageObject/login.js";
import napSearch from "../PageObject/napSearch.js";
import reviewDeal from "../PageObject/reviewDeal.js";

const lg = new login();
const nap = new napSearch();
const dealOver = new reviewDeal();

Given("The user is logged in the Webapp", () => {
  nap.getData();
  dealOver.getData()
  lg.landing();
  lg.clientLogin();
  lg.credenTials();
  lg.access();
  lg.LoggedOn();
});

When("search by Atlas Tower deal record", () => {
  nap.searchBar();
});

When(
  "Confirm that Loan Overview, Capital Stack, Reserves and Major Tenants Load",
  () => {
    dealOver.loanOverview();
    dealOver.capitalStack();
    dealOver.reServes();
    dealOver.majorTenants();
  }
);

When("Confirm that Map Loads", () => {
  dealOver.confirmMap();
});

Then("Confirm you are able to change Deal Status", () => {
  dealOver.selectStatus();
});
