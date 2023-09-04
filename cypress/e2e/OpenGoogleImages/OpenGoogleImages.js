// Import Cypress commands and assertions
import { Given, When, Then , And} from 'cypress-cucumber-preprocessor/steps';

// Given step: Set up the initial context
Given('the user opens the google homepage', () => {
  // Visit a URL to your homepage)
  cy.visit('https://www.google.com/');
});

// When step: Navigate to the Google website
When('the user navigates to the images button', () => {
  // Visit the Google homepage
  cy.get('a.gb_y:contains("Images")').click();
});

// Then step: Verify Google homepage elements
Then('the user click on search bar', () => {
  // Assert that the search bar and Google logo elements are visible
  cy.get('textarea[name="q"]').click();

});

// And step: Verify the URL of the page
And('the URL of the page should be {string}', (expectedUrl) => {
  // Assert that the current URL matches the expected URL
  cy.url().should('eq', 'https://www.google.com/imghp?hl=en&ogbl');
});
