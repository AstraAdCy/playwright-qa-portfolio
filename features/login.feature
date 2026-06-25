Feature: Login Functionality

Scenario: Successful login with valid credentials

Given user is on the login page

When user enters a valid email and password

And clicks the Login button

Then user should be logged in successfully

Scenario: Unsuccessful login with invalid credentials

Given user is on the login page

When user enters an invalid email and password

And clicks the Login button

Then an error message should be displayed