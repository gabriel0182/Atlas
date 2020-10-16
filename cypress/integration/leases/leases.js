import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

import login from "../PageObject/login.js";
import portfolioLeases from "../PageObject/portfolioLeases.js";

const lg = new login();
const ptrfLeases = new portfolioLeases();

Given("The user is logged in the Webapp", () => {
  lg.landing();
  lg.clientLogin();
  lg.credenTials();
  lg.access();
  lg.LoggedOn();
});

When("the user select the Portfolio Leases option", () => {
  ptrfLeases.goLeases();
});

When("Confirm Map loads", () => {
    ptrfLeases.leasesSearch();
    ptrfLeases.mapValidation();

});

Then("Confirm Export works", () => {

});
