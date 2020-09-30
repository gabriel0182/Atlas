Feature: Verify Portfolio Detail

  Test Portfolio Detail

  Scenario: Test Portfolio Detail data

    Given The user is logged in the Webapp

    When the user select the Portfolio Detail option

    And Check to see that Current Projected Gross IRR loads

    And Check to see that Current Projected Profit loads

    And Check to see that Current Projected Equity Multiple IRR loads

    Then Verify data loads in table