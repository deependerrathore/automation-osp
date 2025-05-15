## Overview

This Playwright test verifies that the Osapiens Careers Page lists at least one job title containing the word "Quality". It also logs the total number of job listings found on the page.

### ✅ What the test does:

- Navigates to careers page
- Retrieves all job listings
- Extracts job titles from each listing
- Checks if at least one job title contains the word "Quality" (case-insensitive)
- Prints the total number of job listings to the console
- Fails the test if no such title is found

## Setup Instructions

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Supported browsers will be installed automatically by Playwright

### Installation

1. Clone this repository:

   ```
   git@github.com:deependerrathore/automation-osp.git
   ```

2. Install dependencies:

   ```
   npm i
   ```

3. Running Tests

   To run all tests:

   ```
   npx playwright test --headed
   ```
