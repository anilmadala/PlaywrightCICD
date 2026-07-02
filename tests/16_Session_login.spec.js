const { test, expect } = require("@playwright/test")



test("verify login in orange hrm ", async ({ page }) => {


    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    await page.locator('[name="username"]').fill("Admin")
    await page.locator('[name="password"]').fill("admin123")

    await page.locator('[type="submit"]').click()
    let dashboardele = await page.locator('[class="oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module"]')
    await expect(dashboardele).toBeVisible()
    await expect(dashboardele).toHaveText("Dashboard")

    // to save the data form user
    await page.context().storageState({ path: "../fixture/Cookies/user.json" })
})


test("verify user login by insterting storage state", async ({ browser }) => {
    let Context = await browser.newContext({ storageState: "../fixture/Cookies/user.json" }) // opens a open browser with given context
    let page = await Context.newPage() // opens a new page 


     await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

     
    let dashboardele = await page.locator('[class="oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module"]')
    await expect(dashboardele).toBeVisible()
    await expect(dashboardele).toHaveText("Dashboard")

})