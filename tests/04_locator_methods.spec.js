const { test, expect } = require("@playwright/test");
// locators -->

//getbyAltText() -->this method get you the selector by the value of alt attribute
//getByLabel() --> the get loctor by the label name
//getByPlaceholder --> gets you the input box by placeholder attribute
// getByRole()--> gets the selector by the role of element
//getByText()--> gets the selector by text
// getByTitle()--> gets the title selector
//.locator()

test("verify locator method getByAltText()", async ({ page }) => {
  await page.goto("https://letcode.in/");
  let element = await page.getByAltText("letcode");
  // checks if image is visble
  await expect(element).toBeVisible();
  //verify attribute and value of element
                                        //
  await expect(element).toHaveAttribute("src", "../../assets/logo.png");
});

test("verify the locator method getByLabel() ", async ({ page }) => {
  await page.goto("https://letcode.in/");
  let element = await page.getByLabel("main navigation");
  await expect(element).toBeVisible();
});

test("verify the locator method getByPlaceholder() ", async ({ page }) => {
  //visit the url
  await page.goto("https://webdriveruniversity.com/Contact-Us/contactus.html");
  // verify the title of the page
  await expect(page).toHaveTitle("WebDriver | Contact Us");
  // verify the header
  await expect(page.locator('[class="section_header"]')).toHaveText(
    "CONTACT US",
  );
  // this majorly used for input boxes
  let element = await page.getByPlaceholder("First Name");
  // filling the details
  await element.fill("user1");
  //verify the value of firstname
  await expect(element).toHaveValue("user1");
});

test("verify the locator method getByRole() ", async ({ page }) => {
  //visit the url
  await page.goto(
    "https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html",
  );

  // this majorly used for input boxes
  let element = await page.getByRole("checkbox", { name: "Option 1" });
  // filling the details
  await element.check();
  //verify the element is checked
  await expect(element).toBeChecked();
});

test("verify the locator method getByRole()  example 2", async ({ page }) => {
  //visit the url
  await page.goto("https://webdriveruniversity.com/Contact-Us/contactus.html");
  // verify the title of the page
  await expect(page).toHaveTitle("WebDriver | Contact Us");
  // verify the header
  await expect(page.locator('[class="section_header"]')).toHaveText(
    "CONTACT US",
  );
  // this majorly used for input boxes
  let element = await page.getByPlaceholder("First Name");
  // filling the details
  await element.fill("user1");
  //verify the value of firstname
  await expect(element).toHaveValue("user1");

  // getb by role
  let elementbtn = await page.getByRole("button", { name: "RESET" });

  await elementbtn.click();

  //verify the value of firstname
  await expect(element).toHaveValue("");
});

test("verify the locator method getByText()", async ({ page }) => {
  //visit the url
  await page.goto("https://webdriveruniversity.com/Contact-Us/contactus.html");
  // verify the title of the page
  await expect(page).toHaveTitle("WebDriver | Contact Us");
  // verify the header

  let header = await page.getByText("CONTACT US");

  await expect(header).toBeVisible();
});