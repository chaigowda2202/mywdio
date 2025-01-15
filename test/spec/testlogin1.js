
import TestLogin from '../page/login.js'
import excel from 'exceljs'

describe('TESTLOGIN', () => { 
    it('testlogin' , async()=>{
        await browser.url('https://practicetestautomation.com/practice-test-login/')
        // await TestLogin.loginPage()

        let username1 = new excel.Workbook()
        await username1.xlsx.readFile("./y/testdata/data.xlsx")
        let usersheet = username1.getWorksheet("Sheet1")
        let username = usersheet.getRow(1).getCell(1).toString()


        // let pwd1 = new excel.Workbook()
        // await pwd1.xlsx.readFile("./y/testdata/data.xlsx")
        // let pwdsheet = pwd1.getWorksheet("Sheet1")
        let pwd = user.getRow(2).getCell(1).toString()

        console.log(username);
        console.log(pwd);
                

        await TestLogin.userNamefield.setValue(username)
        await TestLogin.Passwordfield.setValue(pwd)

        await browser.pause(3000)

        await TestLogin.submitbtn.click()

        // let x = await browser.$("//strong[text()='Congratulations student. You successfully logged in!']")
        // expect(x).toContain("Congratulations student. You successfully logged in!")
        // console.log("========loggedin successfuly=============");
        

    })
 })