import login from "../PageObject/login.js";
import napSearch from "../PageObject/napSearch.js";
import reviewDeal from "../PageObject/reviewDeal.js";
import dealDocs from "../PageObject/dealDocs.js";

const lg = new login();
const nap = new napSearch();
const dealOver = new reviewDeal();
const dealdc = new dealDocs();

Given("The user is logged in the Webapp", () => {
  nap.getData();
  dealOver.getData();
  dealdc.getData2();
  lg.landing();
  lg.clientLogin();
  lg.credenTials();
  lg.access();
  lg.LoggedOn();
});

When("search by Atlas Tower deal record", () => {
  nap.searchBar();
});

When("Select deal Documents option and create a new document folder", () => {
  dealdc.selectDealDocs();
});

When("Confirm you can upload a new document", () => {
  dealdc.uploadFile();
});

Then("Confirm you can delete a document", () => {
  dealdc.deleteFolder();
  dealdc.uploadFile2();
});
