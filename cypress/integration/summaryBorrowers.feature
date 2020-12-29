Feature: Verify Borrowers

  Test Borrowers

  Scenario: Test Borrowers

    Given The user is logged in the Webapp

    When search by Atlas Tower deal record

    And Go to Summary and Select Borrowers option 

    And Confirm Data Loads and Popout works

    Then Confirm I can add Borrowers
