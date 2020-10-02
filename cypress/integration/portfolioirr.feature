Feature: Verify Portfolio IRR Analytics

  Test Portfolio IRR Analytics

  Scenario: Test Portfolio IRR Analytics data

    Given The user is logged in the Webapp

    When the user select the Portfolio IRR Analytics option

    And  Make sure that data loads

    Then Confirm IRR, Total Profit and Multiple values match the Portfolio Detail