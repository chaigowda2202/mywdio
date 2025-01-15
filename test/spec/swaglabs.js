import swag_labs from "../page/swaglabs.js";
import fs from "fs";

let mydata = fs.readFileSync("./test/testdata/swaglabs.json");
let obj = JSON.parse(mydata);

describe("swager_labs", () => {
  it("login", async () => {
    let myurl = obj.url;
    let myusername = obj.UserName;
    let mypassword = obj.password;
    let fname = obj.firstname;
    let lname = obj.lastname;
    let pcode = obj.postalcode;

    await browser.url(myurl)
    await swag_labs.userName.setValue(myusername);
    await browser.pause(2000)

    await swag_labs.PWD.setValue(mypassword)
    await browser.pause(2000)

    await swag_labs.login.click()
    await browser.pause(2000)

    await swag_labs.addcart.click()
    await browser.pause(2000)

    await swag_labs.cartlink.click()
    await browser.pause(2000)

    await swag_labs.checkoutbtn.click()
    await browser.pause(2000)

    await swag_labs.firstname.setValue(fname)
    await browser.pause(2000)

    await swag_labs.lastname.setValue(lname)
    await browser.pause(2000)

    await swag_labs.postalcode.setValue(pcode)
    await browser.pause(2000)

    await swag_labs.continuebtn.click()
    await browser.pause(3000)

    console.log("======Thank you for your order=======")

  });
});


