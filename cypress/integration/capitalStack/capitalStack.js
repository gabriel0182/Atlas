import login from "../PageObject/login.js";
import napSearch from "../PageObject/napSearch.js";
import capitalStructure from "../PageObject/capitalStructure.js";

const lg = new login();
const nap = new napSearch();
const capSt = new capitalStructure();


Given("The user is logged in the Webapp", () => {
  nap.getData();
  lg.landing();
  lg.clientLogin();
  lg.credenTials();
  lg.access();
  lg.LoggedOn();
});

When("search by Atlas Tower deal record", () => {
  nap.searchBar();
});

When("Select Capital Stack and Confirm that data loads in pop out", () => {
    capSt.selectCapital()
  
});

When("Confirm create new Tranche works", () => {
  
});

Then("Confirm delete Tranche works", () => {
 
});