import fs from "fs";
import login from "../page/testlogin.js";

let data = fs.readFileSync("./test/testdata/testlogin.json");
let mydata = JSON.parse(data);


describe("hhhhh", ()=>{

    mydata.forEach(x => {
       let link = x.url
       let un = x.userName
       let pwd = x.password

       it("testlogin" , async ()=>{

        await browser.url(link)
        await login.username.setValue(un)
        await login.Password.setValue(pwd)
        await browser.pause(2000)
       })

    });


})