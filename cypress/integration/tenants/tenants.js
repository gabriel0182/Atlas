import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

import login from "../PageObject/login.js";
import portfolioTenants from "../PageObject/portfolioTenants.js";

const lg = new login();
const ptrfTenants = new portfolioTenants();

Given("The user is logged in the Webapp", () => {
  lg.landing();
  lg.clientLogin();
  lg.credenTials();
  lg.access();
  lg.LoggedOn();
});

When("the user select the Portfolio Tenants option", () => {
  ptrfTenants.goTenants();
  ptrfTenants.tenantsSearch();
});

When("Confirm Map loads", () => {
  ptrfTenants.confirmMap();
});

Then("Confirm Export works", () => {
  ptrfTenants.confirmExports();
});
