

import signup from '../page/dummyform.js'
import excel from "exceljs";
describe("dummyapp", () => {
    it("filling-form", async () => {

        await browser.url("https://www.flipkart.com/")
        await browser.maximizeWindow()
        await browser.pause(1000)

        let mysignup = new excel.Workbook()
        await mysignup.xlsx.readFile("./y/testdata/dummydata.xlsx")
        let sheet = mysignup.getWorksheet("Sheet1")

        let fname = sheet.getRow(1).getCell(1).toString()
        await signup.firstName.setValue(fname)
        await browser.pause(2000)

        

    });
});
