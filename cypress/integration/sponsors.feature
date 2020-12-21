Feature: Verify Sponsors

  Test Sponsors

  Scenario: Test Sponsors

    Given The user is logged in the Webapp

    When search by Atlas Tower deal record

    And Go to Summary and Select Sponsors 
    
    And Confirm Data Loads

    And Confirm you are able to create a Sponsor

    And Confirm Popout works

    Then Confirm you are able to delete a Sponsors