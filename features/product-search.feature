Feature: Product Search

Scenario: Search for a product

Given user is on the Products page

When user enters "Blue Top" in the search box

And clicks the Search button

Then Blue Top should be displayed in the search results