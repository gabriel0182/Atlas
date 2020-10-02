import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

import login from "../PageObject/login.js";
import portfolioIRR from "../PageObject/portfolioIRR.js";

const lg = new login();
const ptrfIRR = new portfolioIRR();

Given("The user is logged in the Webapp", () => {
  lg.landing();
  lg.clientLogin();
  lg.credenTials();
  lg.access();
  lg.LoggedOn();
});

When("the user select the Portfolio IRR Analytics option", () => {
    ptrfIRR.selectIRR();
      
});

When("Make sure that data loads", () => {
    ptrfIRR.verifyIRRtable();

  
});

Then("Confirm IRR, Total Profit and Multiple values match the Portfolio Detail", () => {

    ptrfIRR.verifyValues();
          
});
