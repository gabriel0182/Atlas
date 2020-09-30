import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

import login from "../PageObject/login.js";
import portTrends from "../PageObject/portfolioTrends.js";

const lg = new login();
const ptrTrends = new portTrends();

Given("The user is logged in the Webapp", () => {
  lg.landing();
  lg.clientLogin();
  lg.credenTials();
  lg.access();
  lg.LoggedOn();
});

When("the user select the Portfolio Trends option", () => {
  ptrTrends.selectPt();
});

Then("Verify Graph and underlying data table is loads", () => {
  ptrTrends.conFirm();
});
