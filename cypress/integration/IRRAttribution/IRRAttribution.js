import login from "../PageObject/login.js";
import napSearch from "../PageObject/napSearch.js";
import dealIRRAttribution from "../PageObject/dealIRRAttribution.js";

const lg = new login();
const nap = new napSearch();
const IRRAtt = new dealIRRAttribution();

Given("The user is logged in the Webapp", () => {
  nap.getData();
  IRRAtt.getData2();
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
  "Go to IRR Attribution and Select Mezz from Choose Tranche dropdown",
  () => {
      IRRAtt.selectIRRAtt();
    
  }
);

Then(
  "Confirm ledger data",
  () => {
    IRRAtt.verifyData();
  }
);
