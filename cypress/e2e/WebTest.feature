Feature: Automation of functional scenarios with cypress + cucumber

Scenario: Create Account Using valid Credential With checkbox checked 
    Given I am on the login page
    When I click the Sign Up button
    When I fill in the required registration fields
    When I check the checkbox
    When I click the Register button
    Then I should see a registration success message
    And I should see admin home page

  Scenario: Create Account Using valid Credential With checkbox unchecked
    Given I am on the login page
    When I click the Sign Up button
    When I fill in the required registration fields
    When I click the Register button
    Then I should see a registration success message
    And I should see regular home page
    
  Scenario: Create Account Using invalid Credential for Email
    Given I am on the login page
    When I click the Sign Up button
    When I fill in the required registration fields with invalid email
    When I click the Register button
    Then I should see an error message about invalid email

  Scenario: Create Account leaving the input empty
    Given I am on the login page
    When I click the Sign Up button
    When I leave the input empty
    When I click the Register button
    Then I should see an error message about the required fields  