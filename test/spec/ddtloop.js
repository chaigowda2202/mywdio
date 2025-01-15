import excel from "exceljs";

describe("", () => {
  it("looping values", async () => {
    // let myloop = new excel.Workbook();
    // await myloop.xlsx.readFile("./y/testdata/data.xlsx");
    // let mysheet = myloop.getWorksheet("Sheet1");
    // console.log(mysheet.columnCount);

    // for (let x = 1; x <= mysheet.columnCount; x++) {
    //   for (let y = 1; y <= mysheet.rowCount; y++) {
    //     console.log(mysheet.getRow(x).getCell(y).toString());
    //   }
    // }

    let mydata = new excel.Workbook();
    await mydata.xlsx.readFile("./y/testdata/data.xlsx");
    let mysheet1 = mydata.getWorksheet("Sheet1")
    mysheet1.getRow(5).getCell(1).value = "amazon"
    await mydata.xlsx.writeFile("./y/testdata/data.xlsx")
  });
});

