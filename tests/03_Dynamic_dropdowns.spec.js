const { test, expect } = require("@playwright/test");

test("verify dynamic dropdowns", async ({ browser }) => {
    const Context = await browser.newContext();
    const page = await Context.newPage();

    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    // find dropdown and type ind
    await page.locator('[id="autocomplete"]').fill("in");
    // waiting for dropdown to be visible
    await page.waitForSelector('[id="ui-id-1"]');
    //smartly take the count of number of avaiable selector
    let option = await page.locator('[class="ui-menu-item"] div').count();
    console.log(option);

    for (let i = 0; i < option; i++) {
        let text = await page.locator('[class="ui-menu-item"] div').nth(i).textContent();
        console.log(text);
        if (text === "India") {
            await page.locator('[class="ui-menu-item"] div').nth(i).click();
            break;
        }
    }
    await page.waitForTimeout(3000) // 3 sec
    await expect(page.locator('[id="autocomplete"]')).toHaveValue("India")

});

//waitForSelector("slector")--> smartly waits for element to be visvible in ui and dom
//.count --> return the number of avaiable selector
// textContent()--> this retrun the text of the elements
//.nth(indexstarting)--> gets to given number elements
//.waitForTimeout(ms)--> hardcoded wait