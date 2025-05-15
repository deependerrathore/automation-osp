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
