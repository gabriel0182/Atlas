import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

import login from "../PageObject/login.js";
import napSearch from "../PageObject/napSearch.js";

const lg = new login();
const nap = new napSearch();

Given("The user is logged in the Webapp", () => {
  lg.landing();
  lg.clientLogin();
  lg.credenTials();
  lg.access();
  lg.LoggedOn();
});

When("search by Atlas Tower deal record", () => {
  nap.search();
});

Then("the Atlas Tower deal is shown", () => {
  nap.validateResult();
});
