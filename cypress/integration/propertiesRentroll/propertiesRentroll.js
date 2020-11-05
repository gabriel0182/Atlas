import login from "../PageObject/login.js";
import napSearch from "../PageObject/napSearch.js";
import rentRoll from "../PageObject/rentRoll.js";

const lg = new login();
const nap = new napSearch();
const rentR = new rentRoll();

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

When("Select Properties and confirm property detail popout works", () => {
    rentR.selectProperties();
  
});


Then(
  "Select Properties - Rent Roll and confirm that all data loads",
  () => {
    rentR.selectRentRoll();
  }
);
