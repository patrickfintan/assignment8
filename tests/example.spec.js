// @ts-check
import { test, expect } from '@playwright/test';

test('add_book_test', async ({ page }) => {
  //start on show books page
  await page.goto('http://localhost:5173/books/show/');

  await expect(page.locator('#show_all_books_table')).toBeVisible();

  //count the number of times 'sample_title' appears in the table
  const initialMatches = await page.locator('#show_all_books_table td:has-text("sample_title")').count();

  //go to cretae book page
  await page.goto('http://localhost:5173/books/create/');

  //fill in required inputs
  await page.fill('#title_box', 'sample_title');
  await page.fill('#author_box', 'sample_author');
  await page.fill('#summary_box', 'sample_summary');
  await page.fill('#year_box', '2000');

  //click save button
  await page.click('#save_button');

  //go back to show books page
  await page.goto('http://localhost:5173/books/show/');

  const tableNew = page.locator('#show_all_books_table');
  await expect(tableNew).toContainText('sample_title');

  //again count the number of times 'sample_title' appears
  const newMatches = await page.locator('#show_all_books_table td:has-text("sample_title")').count();

  //must be exactly 1 greater
  expect(newMatches).toBe(initialMatches + 1);
});


test('no_title_test', async ({ page }) => {
 
  //got to create page
  await page.goto('http://localhost:5173/books/create/');

  //fill in required inputs
  //nothing is entered for title_box
  await page.fill('#author_box', 'sample_author');
  await page.fill('#summary_box', 'sample_summary');
  await page.fill('#year_box', '2000');


  //by default, it is set so that the test should fail
  let shouldFail = true

  try {
  //attempt to press save button
  //however, the test should not fail as save button is not expected to be clickable
  await page.locator('#save_button').click({ timeout: 1000 });

} catch (error) {
  //if an error occurs, because the button cannot be clicked
  //shouldFail is set to false
  console.warn('as expected "save_button" cannot be pressed', error.message);
  shouldFail = false;
}

//test fails depending on if "save_button" can be clicked or not
if (shouldFail) {
  expect(false).toBe(true);
}

});

