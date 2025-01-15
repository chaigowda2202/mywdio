
describe ("" , ()=>{
    it("" , async ()=>{
        await browser.url("https://testautomationpractice.blogspot.com/")
        
        await browser.pause(2000)

        let expectedyear = "2026"
        let expectedmonth = "December"
        let expecteddate = "24"
        await browser.$('//input[@id="datepicker"]').click()
        while (true) {
           let actualmonth = await browser.$('//span[@class="ui-datepicker-month"]').getText()
           let actualyear = await browser.$('//span[@class="ui-datepicker-year"]').getText()

           if (actualmonth==expectedmonth && actualyear==expectedyear) {
                break;
           }

           await browser.$('//span[@class="ui-icon ui-icon-circle-triangle-e"]').click()
        }

    //     let actualdate=  await browser.$$("//a[@class='ui-state-default']")
    //    for (const getdata of actualdate) {
    //     let datetext = await getdata.getText()
    //     if(datetext==expecteddate){
    //         await getdata.click()
    //         break; 
    //     }
    //     console.log(`=============${getdata}=========`);
    //    }
    //  await browser.pause(3000)

    let actualDate = await browser.$$("//a[@class='ui-state-default']");

    for (const getDate of actualDate) {
      let dateText = await getDate.getText(); 

      if (dateText === expecteddate) {
        await getDate.click(); 
        console.log(`Date ${dateText} matched and clicked.`); 
        break;
      }

      console.log(`Available date: ${dateText}`); 
    }

    await browser.pause(3000);
    
    })
})