const { test, expect, firefox } = require("@playwright/test")

test("verify datepicker by date example 1", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.locator('[id="datepicker"]').fill("18/02/2026")
    await page.waitForTimeout(5000)
    await expect(page.locator('[id="datepicker"]')).toHaveValue("18/02/2026")

})


test("verify datepicker logic exmaple 2 ", async ({ page }) => {
    await page.goto("https://webdriveruniversity.com/Datepicker/index.html")
    let date = "5"
    let month = "May"
    let year = 2028
    await page.locator('[id="datepicker"]').click()
    await page.waitForTimeout(5000)
    console.log(`${month} ${year}`) // May 2026
    while (true) {
        let monthyear = await page.locator('[class="datepicker-switch"]').first().textContent()
        console.log(monthyear)
        if (monthyear === `${month} ${year}`) {
            break
        }
        await page.locator('[class="next"]').first().click()
    }
    let daycount = await page.locator('[class="day"]').count()
    console.log(daycount) //31
    for (let i = 0; i < daycount; i++) {
        let datetext = await page.locator('[class="day"]').nth(i).textContent()
        if (datetext === date) {
            await page.locator('[class="day"]').nth(i).click()
            break
        }
    }
    await expect(page.locator('[class="form-control"]')).toHaveValue("05-05-2028")
    await page.waitForTimeout(5000)
})

// assignment select your birthdate in this in webiste
//https://testautomationpractice.blogspot.com/  --> in second date picker select date 5 may 2026


test("verify date picker assignment 1 ", async ({ page }) => {
    await page.goto("https://webdriveruniversity.com/Datepicker/index.html")
    let date = "4"
    let month = "July"
    let year = 1999

    await page.locator('[id="datepicker"]').click()
    await page.waitForTimeout(5000)
    console.log(`${month} ${year}`) // May 2026
    while (true) {
        let monthyear = await page.locator('[class="datepicker-switch"]').first().textContent()
        console.log(monthyear)
        if (monthyear === `${month} ${year}`) {
            break
        }
        await page.locator('[class="prev"]').first().click()
    }
    let daycount = await page.locator('[class="day"]').count()
    console.log(daycount) //31
    for (let i = 0; i < daycount; i++) {
        let datetext = await page.locator('[class="day"]').nth(i).textContent()
        if (datetext === date) {
            await page.locator('[class="day"]').nth(i).click()
            break
        }
    }
    await expect(page.locator('[class="form-control"]')).toHaveValue("07-04-1999")
    await page.waitForTimeout(5000)
})


test("ASSIGNMENT 2", async ({ page }) => {
    let givendate = "5"
    await page.goto('https://testautomationpractice.blogspot.com/')
    await page.locator('[id="txtDate"]').click()
    await page.waitForTimeout(5000)
    await page.locator('[class="ui-datepicker-month"]').selectOption("May")
    await page.locator('[class="ui-datepicker-year"]').selectOption("2026")
    let countdate = await page.locator('[class="ui-datepicker-calendar"] tbody tr td').count()

    for (let i = 0; i < countdate; i++) {
        let datetext = await page.locator('[class="ui-datepicker-calendar"] tbody tr td').nth(i).textContent()
        if (datetext === givendate) {
            await page.locator('[class="ui-datepicker-calendar"] tbody tr td').nth(i).click()
            break
        }
    }
    await expect(page.locator('[id="txtDate"]')).toHaveValue("05/05/2026")
})