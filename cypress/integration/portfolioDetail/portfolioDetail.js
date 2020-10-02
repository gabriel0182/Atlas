import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

import login from "../PageObject/login.js";
import portDetail from "../PageObject/portfDetail.js";

const lg = new login();
const ptrfDetail = new portDetail();

Given("The user is logged in the Webapp", () => {
  lg.landing();
  lg.clientLogin();
  lg.credenTials();
  lg.access();
  lg.LoggedOn();
});

When("the user select the Portfolio Detail option", () => {
  ptrfDetail.selectPtrfdetail();
});

When("Check to see that Current Projected Gross IRR loads", () => {
  ptrfDetail.validateGrossIRR();
});

When("Check to see that Current Projected Profit loads", () => {
  ptrfDetail.validateProjectedprofit();
});

When("Check to see that Current Projected Equity Multiple IRR loads", () => {
  ptrfDetail.validateEquitymultiple();
});

Then("Verify data loads in table", () => {
  ptrfDetail.varifyTable();
});
