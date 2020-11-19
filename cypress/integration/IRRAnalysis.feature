Feature: Verify IRR Analysis

  Test IRR Analysis

  Scenario: Test IRR Analysis

    Given The user is logged in the Webapp

    When search by Atlas Tower deal record

    And Go to IRR Analysis and Select Mezz from Choose Tranche dropdown and Mezzanine - AM Update from the Choose Forecast Drop down

    Then Confirm values for IRR, Total Profit and Multiple are not 0 or negative