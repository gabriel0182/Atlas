import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

import login from "../PageObject/login.js";
import portAnalytics from "../PageObject/portfolioAnalytics.js";

const lg = new login();
const ptrAnl = new portAnalytics();

Given("The user is logged in the Webapp", () => {
  lg.landing();
  lg.clientLogin();
  lg.credenTials();
  lg.access();
  lg.LoggedOn()
});

When("the user select the Portfolio Analytics option", () => {
  ptrAnl.selectPA();
});

When("As user verifies the stratification graphs loads", () => {
  ptrAnl.strfGraphs();
});

When("Verify the Deal pop out is displayed with the Deals List", () => {
  ptrAnl.dealpopOut();
});

Then("As user Create & Delete a Portfolio", () => {
  ptrAnl.createPortfolio();
  ptrAnl.deletePortfolio();
});
