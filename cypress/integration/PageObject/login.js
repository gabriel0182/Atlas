///  <reference types="cypress"/>

class login{

landing(){
  cy.clearCookies()
  cy.clearLocalStorage()
  const home = cy.visit("https://dev.nativ.co/")
   home.wait(2000)
   return this;
    }
             
clientLogin(){

    const client = cy.get("[class='link secondary blue text-uppercase d-flex align-items-center btn btn-primary']").contains("Client Login")
    client.click({force: true})
    client.wait(1000)
    return this;

}

credenTials(){
    const testData = require("../../fixtures/login.json");
    testData.forEach((testDataRow) => {
      const data = {
        user: testDataRow.user,
        pass: testDataRow.pass,
      };
      context(`Generating a test for ${data.user}`, () => {
        const userName = cy.get("[id='email']");
        userName.clear();
        userName.type(data.user);
        const passWord = cy.get("[id='password']")
        passWord.clear()
        passWord.type(data.pass);
      })
      return this;
    })
}

access(){
const loginButton = cy.get("[class='btn btn-primary btn-lg']").contains("Login")
loginButton.click({force: true})
return this;
}

LoggedOn(){
    const testData = require("../../fixtures/login.json");
    testData.forEach((testDataRow) => {
      const data = {
        name: testDataRow.name
      };
      context(`Generating a test for ${data.name}`, () => {
        const loggedUser = cy.get("[class='d-none d-md-block col']").get("[id='app-left-nav-user-dropdown']")
        loggedUser.should('contain',`${data.name}`)
        const adminMenu = cy.get("[id='app-left-nav-user-dropdown']")
        .get("[id='dropdown-basic']")
        adminMenu.click({force: true})
        adminMenu.wait(2000)
        const toggleAdmin = cy.contains("Toggle Asset Manager Mode")
        toggleAdmin.click({force: true})
      })
    })


}
}


export default login