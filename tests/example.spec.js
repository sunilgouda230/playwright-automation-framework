// @ts-check
import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('test example', async ({ page }) => {
  await page.goto('/');
  console.log('Base URL is:', page.url());
  console.log('BASE_URL in test:', process.env.BASE_URL);
});
