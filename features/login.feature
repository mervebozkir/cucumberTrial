Feature: Login

Scenario: Successfull login
  Given The user is on homepage
  When The user clicks SignIn item
  Then The user see authentication page
  And The user inputs valid credentials
  When The user clicks SignIn button
  Then The user see my account page



