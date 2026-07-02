//Hookes in playwright 

// hookes are special functions that run before or after test 
/**
 * 
 * beforeAll()-->runs before the  all tescase are starting  --> run onces before all testcases start 
 * (importing dependcys,to read your fixture data , to set up the pre conditions )
 * afterAll() -->runs after the all tescase have run --> run onces after all testcases end 
 * (to geneerate reports , cleaning , to excutue post condition )
 * 
 * beforeEach()-->runs before every testcase start --> to set some precodition 
 * afterEach()-->runs before every testcase ended --> to set some post condition 
 * 
 */
const { test, expect, request } = require("@playwright/test")


test.beforeAll(async () => {
    console.log(" i run once before all testcase")
})


test.beforeEach(async () => {
    console.log(" i am running before every testcase")
})

test("Testcase 1", async ({ page }) => {
    console.log("testcase 1 successfull")
})

test("Testcase_ 2", async ({ page }) => {
    console.log("testcase 2 successfull")
})

test("Testcase$ 3", async ({ page }) => {
    console.log("testcase 3 successfull")
})


test.afterEach(async () => {
    console.log(" i am running after every testcase")
})


test.afterAll(async () => {
    console.log("i run after all testcases")
})