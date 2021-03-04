Feature: iATN

  I want to login into iATN
  
  @focus
  Scenario: Login into iATN
    Given user open iATN page
    When user login as "dmitry.ganets@identifix.com" with "12345678" password
    Then user see "IATN" in the title