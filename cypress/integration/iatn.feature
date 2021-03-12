Feature: iATN

  User wants to login into iATN

  Background:
    Given user open "iATN" page
  
  Scenario: Login into iATN
    When user login as "testUser"
    Then user see "IATN" in the title

  Scenario: validate user name and role
    When user login as "testUser"
    Then user's name and role are
      |Name             |Role       |
      |Dzmitry Hanets 1 |Technician |