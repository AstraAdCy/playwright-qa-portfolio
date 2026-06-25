Feature: Add Product To Cart

Scenario: Add product to cart

Given user is on the Products page

When user adds "Blue Top" to the cart

And navigates to the Cart page

Then Blue Top should be displayed in the cart