import login from "../PageObject/login.js";
import napSearch from "../PageObject/napSearch.js";
import rentComps from "../PageObject/rentComps.js";

const lg = new login();
const nap = new napSearch();
const rC = new rentComps();

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

Then("Select Properties, then Rent Comps and Confirm Map Loads", () => {
  rC.selectrentComps();
});
