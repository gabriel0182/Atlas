Feature: Verify Portfolio Expenses

  Test Portfolio Expenses

  Scenario: Test Portfolio Expenses data

    Given The user is logged in the Webapp

    When the user select the Portfolio Expenses option

    And Confirm Expenses filters works

    And Confirm Map loads
    
    Then Confirm Export works