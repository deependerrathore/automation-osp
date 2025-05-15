import { test, expect } from '@playwright/test';

/**
 *Test to verify that the careers page lists at least one job title containing the word "Quality" and print the number of job listings.
 */
test('Careers page should list Quality ', async ({ page }) => {
  // Navigate to the careers page
  await page.goto('https://careers.osapiens.com/');

  // Get all job listings
  const jobListings = await page.getByRole('rowgroup').all();

  // Count and print the number of job listings
  const numberOfJobListings = await jobListings.length;
  console.log(`numberOfJobListings: ${numberOfJobListings}`);

  // Extract job titles from the listings
  const jobTitles: string[] = [];
  for (const row of jobListings) {
    const titleElement = await row.getByRole('gridcell').locator('a').first();
    const title = await titleElement.textContent();
    if (title) jobTitles.push(title.trim().toLowerCase());
  }

  // Checkif at least one job title contains "Quality". Performing lower case check so that we don't miss any job titles
  const qualityJobs = jobTitles.filter((title) => title.includes('quality'));

  // Fail the test if no quality jobs are found
  expect(qualityJobs.length, {
    message: 'Expected at least one job title to contain "Quality"',
  }).toBeGreaterThan(0);
});

/**
 * Improvement Ideas and Framework Creation (Ordered by Importance):
 *
 * Critical (Immediate Implementation):
 * 1. Add proper error handling for empty job listings or page load failures
 * 2. Create a more detailed error message that shows all available jobs when test fails
 * 3. Implement a Page Object Model to separate page structure from test logic
 * 4. Use a configuration file to manage environment variables and URLs
 * 5. Add retry logic for network instability scenarios
 *
 * Framework Foundation (Essential):
 * 6. Create project structure with directories for pages, tests, fixtures, and utilities
 * 7. Implement custom test hooks for setup/teardown operations (beforeEach, afterEach)
 * 8. Add TypeScript interfaces for page objects and test data
 * 9. Create helper utilities for common operations (element interactions, assertions)
 * 10. Implement custom test reporters with detailed execution information
 *
 * High Priority:
 * 11. Implement parameterization to check for different job categories in one test suite
 * 12. Implement a logging mechanism to capture test execution details
 * 13. Add visual validation to ensure the careers page renders correctly
 * 14. Extend the test to verify other job attributes like location, department, etc.
 * 15. Implement a test to check for broken links in the job listings
 *
 * Test Reliability & CI Integration:
 * 16. Add screenshot and trace capture on test failures for debugging
 * 17. Configure parallel test execution to reduce test run time
 * 18. Implement test tagging (@smoke, @regression) for selective test runs
 * 19. Create pipeline configuration for continuous testing
 *
 * Medium Priority:
 * 20. Add a test to verify that the job listings are mobile-responsive
 * 21. Add a test to verify that the job listings are accessible to screen readers
 * 22. Add a test to verify that the job listings are sorted by date or relevance
 * 23. Implement a test to check for the presence of search functionality on the careers page
 *
 * Advanced Testing Capabilities:
 * 24. Implement API testing integration to verify UI and API consistency
 * 25. Add performance metrics collection during test execution
 * 26. Create mock data services for API responses to ensure test isolation
 *
 * Future Enhancements:
 * 27. Validate language switching is working correctly
 * 28. Validate Register Your Interest flow works fine
 * 29. Implement a test to check for the presence of social media sharing options
 * 30. Create comprehensive documentation with examples and setup instructions
 *
 */
