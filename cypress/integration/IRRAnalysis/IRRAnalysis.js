import login from "../PageObject/login.js";
import napSearch from "../PageObject/napSearch.js";
import dealIRRAnalysis from "../PageObject/dealIRRAnalysis.js";

const lg = new login();
const nap = new napSearch();
const IRR = new dealIRRAnalysis();

Given("The user is logged in the Webapp", () => {
  nap.getData();
  IRR.getData2();
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
  "Go to IRR Analysis and Select Mezz from Choose Tranche dropdown and Mezzanine - AM Update from the Choose Forecast Drop down",
  () => {
    IRR.selectIRR();
  }
);

Then(
  "Confirm values for IRR, Total Profit and Multiple are not 0 or negative",
  () => {
    IRR.confirmValues();
  }
);
