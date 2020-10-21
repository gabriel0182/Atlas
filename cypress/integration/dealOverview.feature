Feature: Verify Deal Overview works

  Test Deal Overview

  Scenario: Test Deal Overview

    Given The user is logged in the Webapp

    When search by Atlas Tower deal record

    And Confirm that Loan Overview, Capital Stack, Reserves and Major Tenants Load

    And Confirm that Map Loads

    Then Confirm you are able to change Deal Status

