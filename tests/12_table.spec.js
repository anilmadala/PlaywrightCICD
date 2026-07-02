const { test, expect } = require("@playwright/test");

test("verify table in playwright", async ({ page }) => {
  await page.goto("https://webdriveruniversity.com/Data-Table/index.html");

  let names = await page.locator('[id="t01"] tbody tr td:nth-child(1)').count();

  let first_name = await page.locator('[id="t01"] tbody tr td:nth-child(1)');
  let middle_name = await page.locator('[id="t01"] tbody tr td:nth-child(2)');
  let age = await page.locator('[id="t01"] tbody tr td:nth-child(3)');

  // my name is jhon smith and my age is 45
  for (let i = 0; i < names; i++) {
    let fn = await first_name.nth(i).textContent();
    let mn = await middle_name.nth(i).textContent();
    let ag = await age.nth(i).textContent();

    console.log(
      ` my name is ${fn} my surname is ${mn} and i am ${ag} years old`,
    );
  }
});
