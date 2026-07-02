const {test,expect} = require("@playwright/test")
// this line is used to import your commands/asseartion and smart suggestion 

// Testcase --> single file which is used to check a feature or bug 
// Test Suite --> collection testcases is called test suite 


// below is sample of a test block in playwright 

// keep in mind in automation we ahve two to perform 
// action --> pefrom the task
//asseration -->  checks if the task is perfrom 

// structured or default way 
test("verify the basic of playwright ", async({browser})=>{
    const Context = await browser.newContext() // this open a fresh browser with new context 
    const page = await Context.newPage() // this opens a fresh page in a created context 

    //command to vist a website 
    await page.goto("https://webdriveruniversity.com/Contact-Us/contactus.html") 
    //verify id we have visted correct website
    await expect(page).toHaveTitle("WebDriver | Contact Us")
})


