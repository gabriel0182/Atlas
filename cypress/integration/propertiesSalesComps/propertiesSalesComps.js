import login from "../PageObject/login.js";
import napSearch from "../PageObject/napSearch.js";
import salesComps from "../PageObject/salesComps.js";

const lg = new login();
const nap = new napSearch();
const sC = new salesComps();

Given("The user is logged in the Webapp", () => {
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

Then("Select Properties, then Sales Comps and Confirm Map Loads", () => {

    sC.selectsalesComps();
  
});