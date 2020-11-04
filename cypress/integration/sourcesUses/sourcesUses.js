import login from "../PageObject/login.js";
import napSearch from "../PageObject/napSearch.js";
import sourUses from "../PageObject/sourUses.js";

const lg = new login();
const nap = new napSearch();
const sourUs = new sourUses();

Given("The user is logged in the Webapp", () => {
  nap.getData();
  lg.landing();
  lg.clientLogin();
  lg.credenTials();
  lg.access();
  lg.LoggedOn();
});

When("search by Atlas Tower deal record", () => {
  nap.searchBar();
});

When("Select Sources & Uses and Confirm that Cost Basis table loads", () => {
  sourUs.selectSourcesUses();
});

When("Confirm that Initial, Future and Total Sources & Uses Load", () => {
  sourUs.valuesLoads();
});

Then(
  "Confirm that values for the Total Uses and Sources rows are in balance",
  () => {
    sourUs.validateBalance();
  }
);
