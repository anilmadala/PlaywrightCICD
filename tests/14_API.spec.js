//API ---> APPLICATION PROGRAMING INTERFACE


// web  application 
//FRONT END  --> WEBSITE ( DESGIN , BUTTON , JS )
// BACKEND  --> (THE ACTION THAT YOU GET AFTER GIVEING REACTION TO WEB PAGE ) ---> API 
// SERVER  --> DATA STORE PLACES 

// TECHINCAL ROLES 

//1 FRONT END DEVEOPLER  --> HTML , CSS, JS ,
//2 BACKEND DEVELOPER  --> 
//3 DBA --> DATAABSE BASE ADMINSTOR --> 
//4 DEVEOPS ENGINNER --> 
// 5 TESTOR -->
// MANNUAL TESTOR
//API TESTOR 
// ETL 
// AUTOMATION

// FULL STACK DEVEOPLER  -- FORNT END , BACKEND , DBA ,(DEVEOPS)
// FULL STACK TESTOR --> AUTAOMATION , ETL TESTOR , PERFORMANCE , API , MANNUAL 

// API IS THE COMMUICATION LINK BETWEEN FRONT END AND THE SERVER 

//SOAP-->(THIS IS A OLDER SERVICE) --->XML --> 
//REST-->( THIS IS NEW GEN SERIVECE ) --> JSON (99 %)

// SOAP SERVIVES ARE TESTED ON TOOL LIKE --> SOAP UI 
// REST SERVICES ARE TESTED ON TOOLS LIKE --> POSTMAN , SWAAGER 



// REST SERVICES -->

//GET --> IT GETS AALL THE INFORMATION --> 
//POST -->CREATE IT NEW INFORMATION --> 
//PUT --> UPDATE THE CREATED DATA 
//UPDATE -->  UPDATE THE CREATED DATA 
//PATCH --> UPDATE THE CREATED DATA 
//DELETE --> DELETE ALL THE DATA 


// IF YOU HAVE  A SINGLE API TO TEST --> API REQUEST 
// IF YOU HAVE  A MULTIPLE API TO TEST --> COLLECTION   


// SAMPLE OF XML DATA 

/**
<Colors>
<Color1>White</Color1>
<Color2>Blue</Color2>
<Color3>Black</Color3>
<Color4 Special="Light">Green</Color4>
<Color5>Red</Color5>
</Colors>
<Fruits>
<Fruits1>Apple</Fruits1>
<Fruits2>Pineapple</Fruits2>
<Fruits3>Grapes</Fruits3>
<Fruits4>Melon</Fruits4>
</Fruits>
</SampleXML>'
 * 
 */


// JSON SAMPLE

/**
 {
  "Page_title": "WebDriver | Contact Us",
  "section_header": "CONTACT US",
  "firstName": "user 100",
  "lastName": " data 1000",
  "email": "userdata123@gmail.com",
  "comment": "hello this is demo of testdata ",
  "success_message": "Thank You for your Message!"
}

 */


//SATUS --> CODE  --> SHOWS THE STATUS OF API --> 25 CODES 


// WHEN YOU WHEN WEBISTE --> WWW.YOUTUBE.COM --> URL -> UNIQUE RESOUCRES LOCTOTR 

// API URL 

// BASEURL                             QUERY PARAMETER 

//https://www.youtube.com/           results?search_query=playwright

// PATH PARAMTER

//https://reqres.in           /api/test-suite/collections/users/records


const { test, expect, request } = require("@playwright/test")
const { exitCode } = require("process")

test("verify GET API", async ({ request }) => {

  let req = await request.get("https://jsonplaceholder.typicode.com/posts")


  console.log(await req.status())//200
  console.log(await req.json()) // this wil convert your response  into json 

  let response = await req.json()

  expect(req.status()).toBe(200)

  expect(response[0].title).toEqual("sunt aut facere repellat provident occaecati excepturi optio reprehenderit")


})

test("verify POST API ", async ({ request }) => {

  let req = await request.post("https://jsonplaceholder.typicode.com/posts", {
    data: {
      "ID": "01000",
      "title": "demo POST QUERTY",
      "body": "THIS IS DEMO API TO CREATE A POST DATA ",
      "REESUT TYPE ": "POST"
    }
  })
  let responsepost = await req.json()
  console.log(responsepost)
  expect(req.status()).toBe(201)
  expect(responsepost.title).toEqual("demo POST QUERTY")
})


//.toBeOK() a automatic aseeration for api success status code

test("verify PUT API ", async ({ request }) => {

  let req = await request.put("https://jsonplaceholder.typicode.com/posts/1", {
    data: {
      "ID": "01000",
      "title": "demo POST QUERTY",
      "body": "THIS IS DEMO API TO CREATE A POST DATA ",
      "number": "987456"

    }
  })
  let responsepost = await req.json()
  console.log(responsepost)
  expect(req.status()).toBe(200)
  expect(responsepost.number).toEqual("123456")
})


test("verify PATCH API ", async ({ request }) => {
  let req = await request.patch("https://jsonplaceholder.typicode.com/posts/1", {
    data: {
      "ID": "01001",
      "title": "demo POST QUERTY",
      "body": "THIS IS DEMO API TO CREATE A POST DATA ",
      "number": "987456"

    }
  })
  let responsepost = await req.json()
  console.log(responsepost)
  expect(req.status()).toBe(200)
  expect(responsepost.number).toEqual("987456")
})


test("verify delete api ", async ({ request }) => {

  let req = await request.delete("https://jsonplaceholder.typicode.com/posts/1")

  let res = await req.json()

  expect(await req.status()).toBe(200)
})