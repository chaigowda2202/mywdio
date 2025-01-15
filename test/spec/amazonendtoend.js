import endToend from "../page/amazonendtoend.js";
import excel from "exceljs";

describe("" , ()=>{
    it("endtoendamazon" , async ()=>{
        await browser.url('https://www.amazon.in/');
        await browser.maximizeWindow()
        await browser.pause(1000)

        let myamazonsignup = new excel.Workbook()
        await myamazonsignup.xlsx.readFile("./y/testdata/amazonendtoend.xlsx")
        let mysheet = myamazonsignup.getWorksheet("Sheet1")

        await endToend.login.click();

        let  phnum= mysheet.getRow(1).getCell(1).toString()
        await endToend.mobNum.setValue(phnum)
        await browser.pause(2000)

        await endToend.continueBtn.click();

        let  pwd= mysheet.getRow(1).getCell(2).toString()
        await endToend.password.setValue(pwd)
        await browser.pause(2000)

        await endToend.signinBtn.click();

        await endToend.dropdown.click()
        await endToend.dropdown.selectByIndex(14)
        await browser.pause(1000)

        let suggest = mysheet.getRow(2).getCell(1).toString()
        await endToend.suggessionbox.setValue(suggest)
        await browser.pause(2000)


        let menu = await endToend.suggContainer
        console.log(`=================${menu.length}===================`);


        for (let cloths of await menu){
            let dress =await cloths.getText()
            if(dress.includes("women")){
                cloths.click()
                break
            }
            console.log(`===============${dress}================`);
        }
        // await browser.pause(2000)

        await endToend.selectelement.click()

        let handle = await browser.getWindowHandles()
        let newHandle = handle[1];
        await browser.switchToWindow(newHandle);

        await endToend.addcart.click()



    })
})