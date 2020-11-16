import login from "../PageObject/login.js";
import napSearch from "../PageObject/napSearch.js";
import assetTransaction from "../PageObject/assetTransaction.js";

const lg = new login();
const nap = new napSearch();
const asset = new assetTransaction();

Given("The user is logged in the Webapp", () => {
  asset.getData2();
  nap.getData();
  lg.landing();
  lg.clientLogin();
  lg.credenTials();
  lg.access();
  lg.LoggedOn();
});

When(
  "Go to Asset Transaction History and Select Senior from Chose Note dropdown and confirm data",
  () => {
    nap.searchBar();
    asset.selectAssetOption();
  }
);

Then("Select Mezz from Chose Note dropdown and confirm data", () => {});
