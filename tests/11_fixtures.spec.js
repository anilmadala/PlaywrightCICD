const { test, expect } = require("@playwright/test");
const data = require("../Fixture/TestData/form.json");
const data2 = require("../Fixture/TestData/MultiTestdata.json");

test("01_Batch_4_verify the successful submission of details ", async ({
  browser,
}) => {
  let Context = await browser.newContext();
  let page = await Context.newPage();

  //visit the url
  await page.goto("https://webdriveruniversity.com/Contact-Us/contactus.html");
  // verify the title of the page
  await expect(page).toHaveTitle(data.Page_title);
  // verify the header
  await expect(page.locator('[class="section_header"]')).toHaveText(
    data.section_header,
  );
  // filling the details
  await page.locator('[name="first_name"]').fill(data.firstName);
  //verify the value of firstname
  await expect(page.locator('[name="first_name"]')).toHaveValue(data.firstName);
  // filling the details
  await page.locator('[name="last_name"]').fill(data.lastName);
  //verify the value of lastname
  await expect(page.locator('[name="last_name"]')).toHaveValue(data.lastName);
  // filling the details
  await page.locator('[name="email"]').fill(data.email);
  //verify the value of lastname
  await expect(page.locator('[name="email"]')).toHaveValue(data.email);

  // filling the details
  await page.locator('[name="message"]').fill(data.comment);
  //verify the value of lastname
  await expect(page.locator('[name="message"]')).toHaveValue(data.comment);

  // click on submit button
  await page.locator('[type="submit"]').click();
  await expect(page.locator('[id="contact_reply"] h1')).toHaveText(
    data.success_message,
  );
});

//json --> {"key":"value"}

// this is basic things  -->

//a single data json file will conatins a data of multiple testcases

//or

// you can have a single file for single testcase

// multiple data file

test("04_Batch_4_verify the successful submission of details for multiple data in single file ", async ({
  browser,
}) => {
  let Context = await browser.newContext();
  let page = await Context.newPage();

  //visit the url
  await page.goto("https://webdriveruniversity.com/Contact-Us/contactus.html");
  // verify the title of the page
  await expect(page).toHaveTitle(data2.Testdata[1].Page_title);
  // verify the header
  await expect(page.locator('[class="section_header"]')).toHaveText(
    data2.Testdata[1].section_header,
  );
  // filling the details
  await page.locator('[name="first_name"]').fill(data2.Testdata[1].firstName);
  //verify the value of firstname
  await expect(page.locator('[name="first_name"]')).toHaveValue(
    data2.Testdata[1].firstName,
  );
  // filling the details
  await page.locator('[name="last_name"]').fill(data2.Testdata[1].lastName);
  //verify the value of lastname
  await expect(page.locator('[name="last_name"]')).toHaveValue(
    data2.Testdata[1].lastName,
  );
  // filling the details
  await page.locator('[name="email"]').fill(data2.Testdata[1].email);
  //verify the value of lastname
  await expect(page.locator('[name="email"]')).toHaveValue(
    data2.Testdata[1].email,
  );

  // filling the details
  await page.locator('[name="message"]').fill(data2.Testdata[1].comment);
  //verify the value of lastname
  await expect(page.locator('[name="message"]')).toHaveValue(
    data2.Testdata[1].comment,
  );

  // click on submit button
  await page.locator('[type="submit"]').click();
  await expect(page.locator('[id="contact_reply"] h1')).toHaveText(
    data2.Testdata[1].success_message,
  );
});

// assignemnt --- > find away to use multiple data set for one code
//2 automate ornage hrm login flow using real time dymainc data

// https://opensource-demo.orangehrmlive.com/web/index.php/auth/login

// data2.Testdata.forEach((el) => {
//   test(` ${el.firstName} `, async ({ browser }) => {
//     let Context = await browser.newContext();
//     let page = await Context.newPage();

//     //visit the url
//     await page.goto(
//       "https://webdriveruniversity.com/Contact-Us/contactus.html",
//     );
//     // verify the title of the page
//     await expect(page).toHaveTitle(el.Page_title);
//     // verify the header
//     await expect(page.locator('[class="section_header"]')).toHaveText(
//       el.section_header,
//     );
//     // filling the details
//     await page.locator('[name="first_name"]').fill(el.firstName);
//     //verify the value of firstname
//     await expect(page.locator('[name="first_name"]')).toHaveValue(el.firstName);
//     // filling the details
//     await page.locator('[name="last_name"]').fill(el.lastName);
//     //verify the value of lastname
//     await expect(page.locator('[name="last_name"]')).toHaveValue(el.lastName);
//     // filling the details
//     await page.locator('[name="email"]').fill(el.email);
//     //verify the value of lastname
//     await expect(page.locator('[name="email"]')).toHaveValue(el.email);

//     // filling the details
//     await page.locator('[name="message"]').fill(el.comment);
//     //verify the value of lastname
//     await expect(page.locator('[name="message"]')).toHaveValue(el.comment);

//     // click on submit button
//     await page.locator('[type="submit"]').click();
//     await expect(page.locator('[id="contact_reply"] h1')).toHaveText(
//       el.success_message,
//     );
//   });
// });
