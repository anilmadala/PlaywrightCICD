const { test, expect } = require("@playwright/test");

test("Verify the fileUpload in playwright", async ({ page }) => {
  await page.goto("https://webdriveruniversity.com/File-Upload/index.html");
  // upload a file
  await page
    .locator('[id="myFile"]')
    .setInputFiles("../Fixture/readme.txt");

  page.on("verify alert", async (alert) => {
    await expect(alert.message()).toContain("Your file has now been uploaded!");
    await alert.accept();
  });


  await page.locator('[id="submit-button"]').click()
  await expect(page.url()).toContain("https://webdriveruniversity.com/File-Upload/index.html?filename=readme.txt")
});



test("verify upload of file ",async({page})=>{

await page.goto("https://letcode.in/file")

await page.locator('[class="file-cta"]').setInputFiles('../Fixture/readme.txt')
await page.waitForTimeout(8000)
await expect(page.locator('[class="label ng-star-inserted"]')).toContainText("readme.txt")
})
// setInputFiles(file path )

// // ../  --> inddates out of the folder
// D:\SourceandCode\Source_code_batch_4\playwright_main\Fixture\readme.txt


//https://davidwalsh.name/demo/multiple-file-upload.php