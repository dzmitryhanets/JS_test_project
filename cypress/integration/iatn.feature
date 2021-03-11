Feature: iATN

  User wants to login into iATN
  
  @focus
  Scenario: Login into iATN
    Given user open "iATN" page
    When user login as "testUser"
    Then user see "IATN" in the title