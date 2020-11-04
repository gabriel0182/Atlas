Feature: Verify Sources & Uses

  Test Sources & Uses

  Scenario: Test Sources & Uses

    Given The user is logged in the Webapp

    When search by Atlas Tower deal record

    When Select Sources & Uses and Confirm that Cost Basis table loads

    When Confirm that Initial, Future and Total Sources & Uses Load

    Then Confirm that values for the Total Uses and Sources rows are in balance