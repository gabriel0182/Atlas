import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

import login from  '../PageObject/login.js'


const lg = new login


Given('The user is in the Landing page', () => {

  lg.landing();
    
    
  });
   
  When('the user select the option to login', () => { 

 lg.clientLogin();
      
  })
   
  When('And user types user and password', () => { 
   
  lg.credenTials();
      
  }) 

  When('And User Clicks in login option', () => { 
   
    lg.access();
      
  }) 

  Then('user is logged on', () => {

    lg.LoggedOn();    

    });
   