import login from "../PageObject/login.js";
import napSearch from "../PageObject/napSearch.js";
import borrowersDeal from "../PageObject/borrowersDeal.js";

const lg = new login();
const nap = new napSearch();
const dealBorrow = new borrowersDeal();

Given("The user is logged in the Webapp", () => {
  nap.getData();
  dealBorrow.getData2();
  lg.landing();
  lg.clientLogin();
  lg.credenTials();
  lg.access();
  lg.LoggedOn();
});

When("search by Atlas Tower deal record", () => {
  nap.searchBar();
});

When("Go to Summary and Select Borrowers option", () => {
  dealBorrow.selectBorrowers();
});

When("Confirm Data Loads and Popout works", () => {
  dealBorrow.confirmData();
});

Then("Confirm I can add Borrowers", () => {
  dealBorrow.addBorrowers();
});
