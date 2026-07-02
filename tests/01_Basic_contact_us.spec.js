const { test, expect } = require("@playwright/test");

test("01_Batch_4_verify the successful submission of details ", async ({
  browser,
}) => {
  let Context = await browser.newContext();
  let page = await Context.newPage();

  //visit the url
  await page.goto("https://webdriveruniversity.com/Contact-Us/contactus.html");
  // verify the title of the page
  await expect(page).toHaveTitle("WebDriver | Contact Us");
  // verify the header
  await expect(page.locator('[class="section_header"]')).toHaveText(
    "CONTACT US",
  );
  // filling the details
  await page.locator('[name="first_name"]').fill("user1");
  //verify the value of firstname
  await expect(page.locator('[name="first_name"]')).toHaveValue("user1");

  // filling the details
  await page.locator('[name="last_name"]').fill("data1");
  //verify the value of lastname
  await expect(page.locator('[name="last_name"]')).toHaveValue("data1");
  // filling the details
  await page.locator('[name="email"]').fill("data@gmail.com");
  //verify the value of lastname
  await expect(page.locator('[name="email"]')).toHaveValue("data@gmail.com");

  // filling the details
  await page.locator('[name="message"]').fill("basic test");
  //verify the value of lastname
  await expect(page.locator('[name="message"]')).toHaveValue("basic test");

  // click on submit button
  await page.locator('[type="submit"]').click();
  await expect(page.locator('[id="contact_reply"] h1')).toHaveText(
    "Thank You for your Message!",
  );
});
//methods
// page.locator()--- this is used to find your element using css selector
// .fill("text") --> this command is used to type your text into input box
// .click()--> this used to click on element
// asserastion
// .toHaveValue()--> to check the user input value of input box
// .toHaveText() --> if you have hard coded text in dom
