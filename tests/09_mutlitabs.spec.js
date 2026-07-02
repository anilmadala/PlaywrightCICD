const { test, expect } = require("@playwright/test");


// while dealing with mutlipage or multi window always use default way
test(" Validate the multi Window in playwright", async function ({ browser }) {
    const Context = await browser.newContext();
    const page = await Context.newPage();

    await page.goto("https://webdriveruniversity.com/");

    const [ContactUsPage] = await Promise.all([
        Context.waitForEvent("page"), // waiting for page to open
        page.locator('[href="Contact-Us/contactus.html"] h1').click(),
    ]);

    await ContactUsPage.locator('[name="first_name"]').fill("abcd");
    await ContactUsPage.locator('[name="last_name"]').fill("efgh");

    //verify the value of firstname
    await expect(ContactUsPage.locator('[name="first_name"]')).toHaveValue(
        "abcd",
    );

    //verify the value of lastname
    await expect(ContactUsPage.locator('[name="last_name"]')).toHaveValue("efgh");

    //[href="Click-Buttons/index.html"] h1
    await expect(
        page.locator('[href="Click-Buttons/index.html"] h1'),
    ).toContainText("BUTTON CLICKS");

    const [ButtonPage] = await Promise.all([
        Context.waitForEvent("page"),
        page.locator('[href="Click-Buttons/index.html"] h1').click(),
    ]);

    await expect(ButtonPage.locator('[id="main-header"] h1')).toContainText(
        "Lets Get Clicking!",
    );
});




test("verify Multiwindow handling", async function({browser}){

    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://vinothqaacademy.com/multiple-windows/");

    const [newwindow] = await Promise.all([
        context.waitForEvent("page"),
        page.locator('[name="newbrowserwindow123"]').click()
    ]);

    await newwindow.locator('[placeholder="Name"]').fill("Uday");
    await expect(newwindow.locator('[placeholder="Name"]')).toHaveValue("Uday");
})