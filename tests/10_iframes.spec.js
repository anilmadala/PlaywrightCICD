const { test, expect } = require("@playwright/test");

test("verify handling of iframes in playwright", async ({ page }) => {
  await page.goto("https://letcode.in/frame");

  //when dealing with i frame in playwright used method ---> framelocator

  await page.frameLocator('iframe[id="firstFr"]').locator('[name="fname"]').fill("siddhant");

  await page.frameLocator('iframe[id="firstFr"]').locator('[name="lname"]').fill("gadakh");
});

//what is iframe
// i frame is window or a webpage in a webpage

// how to indetify iframe
// 1 iframe will always have tag such as  --> iframe , frameset

test("way 2", async ({ page }) => {
  await page.goto("https://letcode.in/frame");

  let farme = await page.frameLocator('iframe[id="firstFr"]');

  await farme.locator('[name="fname"]').fill("siddhant");
  await farme.locator('[name="lname"]').fill("gadakh");
});



test("verify i frames",async({page})=>{
  await page.goto("https://webdriveruniversity.com/IFrame/index.html")

  let frame1 = await page.frameLocator('[id="frame"]')
  await frame1.locator('[href="../Contact-Us/contactus.html"]').click()
  await frame1.locator('[name="first_name"]').fill("qwertyu")
  await frame1.locator('[name="last_name"]').fill("fbvcxz")
})

