import { test, expect } from '@playwright/test';

test('Careers page should list Quality ', async ({ page }) => {
  await page.goto('https://careers.osapiens.com/');

  const jobListings = await page.getByRole('rowgroup').all();

  const numberOfJobListings = await jobListings.length;

  console.log(`numberOfJobListings: ${numberOfJobListings}`);

  const jobTitles: string[] = [];

  for (const row of jobListings) {
    const titleElement = await row.getByRole('gridcell').locator('a').first();

    const title = await titleElement.textContent();
    if (title) jobTitles.push(title.trim().toLowerCase());
  }

  const qualityJobs = jobTitles.filter((title) => title.includes('quality'));

  expect(qualityJobs.length, {
    message: 'Expected at least one job title to contain "Quality"',
  }).toBeGreaterThan(0);
});
