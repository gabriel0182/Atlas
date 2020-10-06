import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

import login from "../PageObject/login.js";
import dealMnger from "../PageObject/dealMnger.js";

const lg = new login();
const dealMng = new dealMnger();

Given("The user is logged in the Webapp", () => {
  lg.landing();
  lg.clientLogin();
  lg.credenTials();
  lg.access();
  lg.LoggedOn();
});

When("the user select the Deal Manager option", () => {

    dealMng.selectDealmanager();
  
});

When("Make sure save search works", () => {
    dealMng.addSearch();
  
});

When("Make sure map, filters and edit columns works", () => {

  dealMng.mapLoads();

  
});

When("Make sure clicking into the deal record from the results table works", () => {
  
});

Then("Make sure Deal Over Popout works", () => {

  dealMng.popOuts();
  
});
