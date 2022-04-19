Feature: so safe trial task

Background: Starting point
    Given The user is on homepage

    @navigate
    Scenario Outline: As a user, I want to be able to navigate throughout the website using the menu links to get to various pages.
        When The user clicks on the "<menu>" option in the menu
        Then The user see title of the page is "<pageTitle>"

    Examples:
      | menu       |  pageTitle          |
      | Women      | Women - My Store    |
      | Dresses    | Dresses - My Store  |
      | T-shirts   | T-shirts - My Store |

    @search
    Scenario: Dress Search - As a user, I want to be able to search for dresses by type, so I can purchase one.
    When The user inputs "printed" on search bar
    Then The user see related results listed
