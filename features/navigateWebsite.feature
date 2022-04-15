Feature: navigate website

    As a user, I want to be able to navigate throughout the website using
    the menu links to get to various pages.

Scenario Outline: Navigate throughout the website via menu links
    Given The user is on homepage
    When The user clicks on the "<menu>" option in the menu
    Then The user see title of the page is "<pageTitle>"

    Examples:
      | menu       |  pageTitle          |
      | Women      | Women - My Store    |
      | Dresses    | Dresses - My Store  |
      | T-shirts   | T-shirts - My Store |

