const { test, expect } = require("@playwright/test");

test("verify modal popup", async ({ page }) => {
  // visit the website
  await page.goto("https://webdriveruniversity.com/Popup-Alerts/index.html");

  await page.locator('[id="button2"]').click();

  await expect(page.locator('[class="modal-title"]')).toContainText(
    "It’s that Easy!!  Well I think it is.....",
  );

  await page.locator('[class="btn btn-default"]').click();


});


test("verify js alerts popup", async ({ page }) => {
  // visit the website
  await page.goto("https://webdriveruniversity.com/Popup-Alerts/index.html");

  await page.locator('[id="button1"]').click();


  page.on("dialog",async(simplealert)=>{
    await simplealert.message()
    await expect(simplealert.message()).toContain("I am an alert box!")
    await simplealert.accept()
    console.log(simplealert.message())
  })
 


});


test("verify js confrim alerts popup", async ({ page }) => {
  // visit the website
  await page.goto("https://webdriveruniversity.com/Popup-Alerts/index.html");

  await page.locator('[id="button4"]').click();


  page.on("dialog",async(simplealert)=>{
    await expect(simplealert.message()).toContain("Press a button!")
    await simplealert.dismiss()
    console.log(simplealert.message())
  })
 
  await page.waitForTimeout(8000)
  await expect(page.locator('[id="confirm-alert-text"]')).toContainText("You pressed Cancel!")


});

//https://the-internet.herokuapp.com/javascript_alerts

