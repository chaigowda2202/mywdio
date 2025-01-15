import login from '../page/formfilling1.js'
import excel from "exceljs";
describe("facebook", () => {
    it("form-filling", async () => {

        await browser.url("https://www.facebook.com/")
        await browser.maximizeWindow()
        await browser.pause(1000)
        
  
            let mylogin = new excel.Workbook();
            await mylogin.xlsx.readFile("./test/testdata/formdata.xlsx");
            let myform = mylogin.getWorksheet("facebook")

            await login.newaccount.waitForClickable({ timeout: 5000 });
            await login.newaccount.click();

            let FN = myform.getRow(1).getCell(1).toString()
            await login.firstName.setValue(FN)
            await browser.pause(1000)

            let LN = myform.getRow(1).getCell(2).toString()
            await login.lastName.setValue(LN)
            await browser.pause(1000)

            let day = await login.dobDay     
            
            await day.selectByIndex(21); 
            await browser.pause(1000)

            let month = await login.dobMonth
            await month.selectByIndex(1); 
            await browser.pause(1000)

            let year = await login.dobYear
            await year.selectByIndex(25); 
            await browser.pause(1000)

            await login.radiobtns.waitForClickable({ timeout: 5000 });
            await login.radiobtns.click();

            let mail = myform.getRow(2).getCell(1).toString()
            await login.email.setValue(mail)
            await browser.pause(1000)

            let pwd = myform.getRow(3).getCell(1).toString()
            await login.password.setValue(pwd)
            await browser.pause(1000)

            await login.signup.waitForClickable({ timeout: 5000 });
            await login.signup.click();

            console.log("======================Form filled successfully=====================");
        
    });
});

