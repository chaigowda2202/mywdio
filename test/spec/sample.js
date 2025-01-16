import assert from "assert";
import { log } from "console";


    describe ("" , ()=>{
        it("date" , async ()=>{
            await browser.url("https://testautomationpractice.blogspot.com/")
            await browser.pause(2000)
            // await browser.$('//input[@id="datepicker"]').click()
            // await browser.pause(2000)
        
            // let triangleElement = await browser.$('//span[@class="ui-icon ui-icon-circle-triangle-e"]');
            //     for (let i = 0; i < 10; i++) {
            //     await triangleElement.click();
            //     }

            //     await browser.pause(2000)

            //     let date = await browser.$('//a[@data-date="22"]/parent::td[@data-month="10"]')
            //     await date.click()
            //     await browser.pause(2000)

                
                // let yearElement = await browser.$('//span[@class="ui-datepicker-year"]');
                // let currentYear = await yearElement.getText();
                // assert.ok(currentYear, "Year should be displayed");
                // console.log("Displayed Year:", currentYear);
        
                
                // let monthElement = await browser.$('//span[@class="ui-datepicker-month"]');
                // let currentMonth = await monthElement.getText();
                // console.log(`============================${currentMonth}==============`);
                
                // assert.ok(currentMonth, "Month should be displayed");
                // console.log("Displayed Month:", currentMonth);

                // const dateInputValue = await browser.$('//input[@id="datepicker"]').getValue();
                // assert.ok(dateInputValue.includes("11/22"), "The date input should contain '11/22'.");
                // console.log("Selected Date in Input Field:", dateInputValue);


                //! dynamic table 

                await browser.$("//td[text()='Chrome']").waitForDisplayed();
                await browser.$("//td[text()='Chrome']").waitForExist({ timeout: 5000 });
                let process =  await browser.$("//td[text()='Chrome']/following-sibling::td[1]").getText()
               console.log(`=======CPU load of Chrome process:${process}============`);

               let memory = await browser.$("//td[text()='Firefox']/following-sibling::td[2]").getText()
               console.log(`========Memory Size of Firefox process: ${memory}===========`);
               
               let speed = await browser.$("//td[text()='Chrome']/following-sibling::td[3]").getText()
               console.log(`==================Network speed of Chrome process:${speed}==================`);
               
               let discspace = await browser.$("//td[text()='Firefox']/following-sibling::td[4]").getText()
               console.log(`Disk space of Firefox process:${discspace}===================`);
               

               

        }) 

    })

