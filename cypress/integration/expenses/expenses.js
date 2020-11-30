import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

import login from "../PageObject/login.js";
import portfolioExpenses from "../PageObject/portfolioExpenses.js";

const lg = new login();
const ptrfExpenses = new portfolioExpenses();

Given("The user is logged in the Webapp", () => {
  lg.landing();
  lg.clientLogin();
  lg.credenTials();
  lg.access();
  lg.LoggedOn();
});

When("the user select the Portfolio Expenses option", () => {
  ptrfExpenses.goExpenses();
});

When("Confirm Expenses filters works", () => {
  ptrfExpenses.expensesSearch();
});

/**When("Confirm Export works", () => {
  ptrfExpenses.confirmExport(); 
});*/

Then("Confirm Map loads", () => {
ptrfExpenses.expensesMap();
//ptrfExpenses.deleteFile();
});
