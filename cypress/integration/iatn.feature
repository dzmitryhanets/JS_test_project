Feature: iATN

  I want to login into iATN
  
  @focus
  Scenario: Login into iATN
    Given I open iATN page
    When I login as "dmitry.ganets@identifix.com" with "12345678" password
    Then I see "IATN" in the title