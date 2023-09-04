Feature: Open Google

Scenario: User opens the Google homepage

Given the user opens the google homepage

When the user navigates to the images button

Then the user click on search bar

And the URL of the page should be "https://www.google.com/imghp?hl=en&ogbl"