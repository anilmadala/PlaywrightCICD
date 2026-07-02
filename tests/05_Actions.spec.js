// Mouse Action

/**
 * click()
 * scroll()
 * drag and drop
 * rightclick()
 * doubleclick()
 * hover()
 *
 *
 */

// Keyboard
// copy and paste

const { test, expect } = require("@playwright/test");

test("verify click()  [dynamic click]", async ({ browser }) => {
  const Context = await browser.newContext();
  const page = await Context.newPage();

  await page.goto("https://demoqa.com/buttons");
  await page.locator('[class="mt-4"] button').nth(1).click();
  await expect(page.locator('[id="dynamicClickMessage"]')).toHaveText(
    "You have done a dynamic click",
  );
});

test("verify double click()", async ({ page }) => {
  await page.goto("https://demoqa.com/buttons");

  await page.locator('[id="doubleClickBtn"]').dblclick();

  await expect(page.locator('[id="doubleClickMessage"]')).toHaveText(
    "You have done a double click",
  );
});

test("verify right click()", async ({ page }) => {
  await page.goto("https://demoqa.com/buttons");

  await page.locator('[id="rightClickBtn"]').click({ button: "right" });

  await expect(page.locator('[id="rightClickMessage"]')).toHaveText(
    "You have done a right click",
  );
});

// simple keyboard action

test(" verify keyboard actions", async ({ page }) => {
  await page.goto("https://gotranscript.com/text-compare");

  await page.locator('[name="text1"]').fill(" hello my name is siddhant ");
  await expect(page.locator('[name="text1"]')).toHaveValue(
    " hello my name is siddhant ",
  );

  // when ever you have press a key on keyboard use this

  await page.keyboard.press("Control+A");
  await page.keyboard.press("Control+C");

  // await page.locator('[name="text2"]').click()

  await page.keyboard.press("Tab");

  await page.keyboard.press("Control+V");

  await page.locator('[name="text2"]').fill(" hello my name is siddhant ");
  await expect(page.locator('[name="text1"]')).toHaveValue(
    " hello my name is siddhant ",
  );
});

// Advance actions

// 1 drag and drop

test("verify drag and drop action", async ({ page }) => {
  await page.goto("https://webdriveruniversity.com/Actions/index.html");

  let dargable_element = await page.locator('[id="draggable"]');
  let dropable_element = await page.locator('[id="droppable"]');

  // way 1

  await dargable_element.dragTo(dropable_element);

  await expect(page.locator('[id="droppable"] p')).toHaveAttribute(
    "style",
    "background-color: rgb(244, 89, 80); height: 100%;",
  );
});

test("verify hover action", async ({ page }) => {
  await page.goto("https://webdriveruniversity.com/Actions/index.html");

  let hoverelement = await page.locator('[class="dropdown hover"]');

  await hoverelement.hover();
  await expect(page.locator('[class="dropdown hover"] a')).toHaveText("Link 1");
});

test("verify mouse  action for page", async ({ page }) => {
  await page.goto("https://webdriveruniversity.com/Actions/index.html");

  let hoverelement = await page.locator('[id="click-box"]');

  await expect(hoverelement).toContainText("Click and Hold!");
  await hoverelement.hover();
  await page.mouse.down();
  await expect(hoverelement).toContainText(
    "Well done! keep holding that click now.....",
  );
  await page.mouse.up();
  await expect(hoverelement).toContainText("Dont release me!!!");
  // await expect(page.locator('[class="dropdown hover"] a')).toHaveText("Link 1")
});

test("verify drag and drop action by  mouse action", async ({ page }) => {
  await page.goto("https://webdriveruniversity.com/Actions/index.html");

  let dargable_element = await page.locator('[id="draggable"]');
  let dropable_element = await page.locator('[id="droppable"]');

  await dargable_element.hover();
  await page.mouse.down();

  await dropable_element.hover();
  await page.mouse.up();

  await expect(page.locator('[id="droppable"] p')).toHaveAttribute(
    "style",
    "background-color: rgb(244, 89, 80); height: 100%;",
  );
});
//textContent() -- gets the text form the dom
//https://the-internet.herokuapp.com/drag_and_drop
//