import login from "../PageObject/login.js";
import napSearch from "../PageObject/napSearch.js";
import underWritings from "../PageObject/underWritings.js";

const lg = new login();
const nap = new napSearch();
const undw = new underWritings();

Given("The user is logged in the Webapp", () => {
  undw.getData2();
  nap.getData();
  lg.landing();
  lg.clientLogin();
  lg.credenTials();
  lg.access();
  lg.LoggedOn();
});

When("Search by Atlas Tower deal record", () => {
  nap.searchBar();
});

When("Select Properties and then Underwritings", () => {
  undw.selectUnderWritings();
});

When("Select Origination UW and Confirm Line Item Detail Popout", () => {
  undw.selectOrginationUW();
});

Then(
  "Select AM Update 1 and Confirm Lender UW - AM Update Line Item Detail Popout",
  () => {
    undw.selectAMUpdate1();
  }
);
