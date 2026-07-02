// hybrid testcases --> mixture of api and ui is called hybrid testcases 

const { test, expect, request } = require("@playwright/test")
let token //undefined

test.beforeAll(async () => {
    let api = await request.newContext()
    let req = await api.post("https://rahulshettyacademy.com/api/ecom/auth/login", { data: { "userEmail": "john2k19wick@gmail.com", "userPassword": "vaibhavS@95" } })

    expect(req.ok()).toBeTruthy()
    const loginresponse = await req.json()
     token = loginresponse.token
})
test("verify successful login by api ", async ({ page }) => {


    page.addInitScript(value => {
        window.localStorage.setItem("token", value)
    }, token)
    await page.goto("https://rahulshettyacademy.com/client/#/dashboard/dash")
    await page.waitForTimeout(5000)
    await expect(page.locator('[class="left mt-1"] p')).toHaveText("Automation Practice")

})

/// changes added for the demo of pr 