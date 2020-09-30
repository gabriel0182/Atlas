Feature: user can login into the web app
 
  Test login
  
  Scenario: user can login

    Given The user is in the Landing page
    
    When the user select the option to login
      
    And And user types user and password
	And And User Clicks in login option
	
    Then user is logged on