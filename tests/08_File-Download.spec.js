const { test, expect } = require("@playwright/test");


test("verify download of file ",async({page})=>{

await page.goto("https://letcode.in/file")

const downloadpromise = page.waitForEvent("download")

await page.locator('[id="pdf"]').click()
const download = await downloadpromise

await download.saveAs("../Fixture/Downloaded_FILES/downloadpdf1.pdf")


await page.locator('[id="txt"]').click()
await download.saveAs("../Fixture/Downloaded_FILES/text1.txt")
})