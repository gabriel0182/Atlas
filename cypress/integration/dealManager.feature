Feature: Verify Deal Manager Page

  Test Deal Manager Page

  Scenario: Test Deal Manager Page

    Given The user is logged in the Webapp

    When the user select the Deal Manager option

    And Make sure save search works

    And Make sure map, filters and edit columns works

    And Make sure clicking into the deal record from the results table works

    Then Make sure Deal Over Popout works