const { test, expect } = require("@playwright/test");
//lean way
test("verify sleection of dropdowns , checkboxes , radio btns", async ({
  page,
}) => {
  //visit the page
  await page.goto(
    "https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html",
  );
  // verify the title of the page
  await expect(page).toHaveTitle(
    "WebDriver | Dropdown Menu(s) | Checkboxe(s) | Radio Button(s)",
  );
  //verfiy the header text
  await expect(page.locator('[id="main-header"]')).toHaveText(
    "Dropdown Menu(s), Checkboxe(s) & Radio Button(s)",
  );
  // sleect option form dropdown
  await page.locator('[id="dropdowm-menu-1"]').selectOption("Python");
  // verify selected option
  await expect(page.locator('[id="dropdowm-menu-1"]')).toHaveValue("python");

  //check the checkbox
  await page.locator('[id="checkboxes"] [value="option-2"]').check();
  await page.locator('[id="checkboxes"] [value="option-4"]').check();
  await page.locator('[id="checkboxes"] [value="option-3"]').uncheck();

  await expect(
    page.locator('[id="checkboxes"] [value="option-2"]'),
  ).toBeChecked();
  await expect(
    page.locator('[id="checkboxes"] [value="option-4"]'),
  ).toBeChecked();
  await expect(
    page.locator('[id="checkboxes"] [value="option-3"]'),
  ).not.toBeChecked();

//checking radio buttons
await page.locator('[id="radio-buttons"] input[value="blue"]').check()

await expect(page.locator('[id="radio-buttons"] input[value="blue"]')).toBeChecked()

await expect(page.locator('[value="cabbage"]')).toBeDisabled()
});

// methods

// checkbox and radio button -->
// check() --> check the box
// uncheck()--> uncheck the selected box

// static -->
//selectOption()--> this method will select a value form the given dropdown

//Asseration
// toBeChecked() --> verify checckbox or raido button is checked
// not.toBeChecked() --> verify chgeckbox is not checked
// toHaveValue() --> to check value of dropdown
//.toBeDisabled() -- to check functaionlty is disabled
