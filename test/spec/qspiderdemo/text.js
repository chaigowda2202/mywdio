// describe('demo', () => { 
    // it("mylogin" , async ()=>{
        // await browser.url("https://demoapps.qspiders.com/ui?scenario=1")

        // await browser.url("https://demoapps.qspiders.com/ui/button")

        // await browser.$("//input[@placeholder='Enter your name']").setValue("chaithanya")
        // await browser.pause(2000)

        // await  browser.$("//input[@placeholder='Enter Your Email']").setValue("chaithanya@123.com")
        // await  browser.pause(2000)
        
        // await  browser.$("//input[@placeholder='Enter your password']").setValue("12345678")
        // await  browser.pause(2000)

        // await browser.$("//button[text()='Register']").click()
        // await browser.pause(2000)
    // })

//! -------------------------------------------------------------------------------------

    // it("validate placeholder" , async ()=>{


    //     const textField = await browser.$("//input[@placeholder='Enter your name']");
    //     const placeholderValue1 = await textField.getAttribute('placeholder');

    //     const emailField = await browser.$("//input[@placeholder='Enter Your Email']");
    //     const placeholderValue2 = await emailField.getAttribute('placeholder');

    //     const pwdField = await browser.$("//input[@placeholder='Enter your password']");
    //     const placeholderValue3 = await pwdField.getAttribute('placeholder');

    //     if (placeholderValue1) {
    //         console.log(`Placeholder is present: "${placeholderValue1}"`);
    //     } else {
    //         console.log('Placeholder is not present in the text field.');
    //     }

    //     if (placeholderValue2) {
    //         console.log(`Placeholder is present: "${placeholderValue2}"`);
    //     } else {
    //         console.log('Placeholder is not present in the email field.');
    //     }

    //     if (placeholderValue3) {
    //         console.log(`Placeholder is present: "${placeholderValue3}"`);
    //     } else {
    //         console.log('Placeholder is not present in the paassword field');
    //     }
    
//! -------------------------------------------------------------------------------------

    // it("capture data from the text field in the console that you have sent" , async ()=>{
   
        // const textField = await browser.$("//input[@placeholder='Enter your name']");
        // const textFieldValue = await textField.getValue();
        // console.log(`==========The value in the text field is: "${textFieldValue}"==================`);
    // })


    // it("Write a script to click on the 'hide password' icon?" , async ()=>{
    //     const hidePasswordIcon = await browser.$("//span[@class='absolute text-slate-600 text-[18px] bg-gray-100']")
        
        // await browser.maximizeWindow()
        // await browser.pause(5000)

    //     await hidePasswordIcon.click();
    //     await browser.pause(5000)
    //     console.log('===========Successfully clicked on the "hide password" icon.');
    // })

    // it("Write a script to Click On A Button ?" , async ()=>{
    
        // await browser.maximizeWindow()
        // await browser.pause(2000)

        // await browser.$("//button[@id='btn']").click() 
        // await browser.pause(2000)
        // await browser.$("//button[@id='btn1']").click()
        // await browser.pause(2000)

        // -----------------------

        // await browser.$("//button[@id='btn2']").click() 
        // await browser.pause(2000)
        // await browser.$("//button[@id='btn3']").click()
        // await browser.pause(2000)

        // -----------------------------
        
        // await browser.$("//button[@id='btn4']").click() 
        // await browser.pause(2000)
        // await browser.$("//button[@id='btn5']").click()
        // await browser.pause(2000)
        // await browser.$("//button[@id='btn6']").click() 
        // await browser.pause(2000)
        // await browser.$("//button[@id='btn7']").click()
        // await browser.pause(2000)
        // await browser.$("//button[@id='btn8']").click()
        // await browser.pause(2000)
          

    // })


    // describe ( "button" , ()=>{

    //     it("doubleclick" , async()=>{
    //         await browser.url('https://demoapps.qspiders.com/ui/button');
            
    //     await browser.maximizeWindow()
    //     await browser.pause(2000)

    //     await browser.$("//button[@id='btn']").doubleClick() 
    //     await browser.pause(2000)
    //     })
    // })


    //  describe ( "button" , ()=>{

    //     it("disabled" , async()=>{
    //         await browser.url('https://demoapps.qspiders.com/ui/button');
    //         await browser.pause(2000)

    //         let buttons = await browser.$$('button'); 

    //         await browser.pause(2000)

    //         for (let i = 0; i < buttons.length; i++) {
    //             let button = buttons[i];

    //             let isDisabled = await button.getAttribute('disabled') !== null;

    //             await browser.pause(2000)

    //             if (isDisabled) {
    //                 console.log(`=====Button ${i + 1} is disabled.`);
    //             } else {
    //                 console.log(`=====Button ${i + 1} is enabled.`);
    //             }
    //         }
    //         await browser.pause(2000)

    //     })
    // })

    //! ------------------------------------------

    // describe("Radio Buttons Test", () => {
    //     it("Check all radio buttons", async () => {

    //         await browser.url('https://demoapps.qspiders.com/ui/radio');
    //         await browser.maximizeWindow();
    //         await browser.pause(2000)
            
    //         let radioButtons = await browser.$$("//input[@type='radio']");
    
    //         if (radioButtons.length === 0) {
    //             console.error("No radio buttons found on the page!");
    //             return;
    //         }
    //         await browser.pause(2000)
    //         console.log(`=========================Total radio buttons found: ${radioButtons.length}`);
    
    //         for (let i = 0; i < radioButtons.length; i++) {
    //             let radioButton = radioButtons[i];
  
    //             await browser.pause(2000)
                
    //             let isDisplayed = await radioButton.isDisplayed();
    //             console.log(`Radio button ${i + 1} is displayed: ${isDisplayed}`);
                

    //             let isEnabled = await radioButton.isEnabled();
    //             console.log(`Radio button ${i + 1} is enabled: ${isEnabled}`);
                
    //             let isSelected = await radioButton.isSelected();
    //             console.log(`Radio button ${i + 1} is selected: ${isSelected}`);
                
    //             if (isEnabled && !isSelected) {
    //                 await radioButton.click();
    //                 const isSelectedAfterClick = await radioButton.isSelected();
    //                 console.log(`Radio button ${i + 1} selected after click: ${isSelectedAfterClick}`);
    //                 await browser.pause(2000)
    //             }
    //         }
    //     });
    // });
    


    // describe('checkbox', () => { 
    //     it("selectcheckbox" , async ()=>{

    //         await browser.url("https://demoapps.qspiders.com/ui/checkbox?sublist=0&scenario=1")
    //         await browser.maximizeWindow(); 
    //         await browser.pause(5000)

    //         let checkbox = await browser.$("//input[@type='checkbox'][1]");

    //         if (await checkbox.isExisting() && await checkbox.isEnabled()) {
           
    //             let isSelectedBefore = await checkbox.isSelected();
    //             console.log(`Checkbox selected state before clicking: ${isSelectedBefore}`);

    //             if (!isSelectedBefore) {
    //                 await checkbox.click();
    //                 console.log("Checkbox clicked.");
    //                 await browser.pause(2000)
    //             }
    //             let isSelectedAfter = await checkbox.isSelected();
    //             console.log(`Checkbox selected state after clicking: ${isSelectedAfter}`);
    //         } else {
    //             console.error("Checkbox is not available or not enabled.");
    //         }
    //     })
    //  })


    // describe("Select All Checkboxes", () => {
    //     it("Select all checkboxes on the page", async () => {

    //         await browser.url('https://demoapps.qspiders.com/ui/checkbox');
    //         await browser.maximizeWindow();
    //         await browser.pause(2000)

    //         let checkboxes = await browser.$$("//input[@type='checkbox']");
    
    //         console.log(`Total checkboxes found: ${checkboxes.length}`);
    //         await browser.pause(2000)

    //         for (let i = 0; i < checkboxes.length; i++) {
    //             let checkbox = checkboxes[i];
                
    //             if (await checkbox.isEnabled() && await checkbox.isDisplayed()) {
         
    //                 let isSelected = await checkbox.isSelected();
    //                 console.log(`Checkbox ${i + 1} selected state before clicking: ${isSelected}`);
    //                 await browser.pause(2000)

    //                 if (!isSelected) {
    //                     await checkbox.click();
    //                     console.log(`Checkbox ${i + 1} selected.`);
    //                 }
                    
    //                 let isSelectedAfter = await checkbox.isSelected();
    //                 console.log(`Checkbox ${i + 1} selected state after clicking: ${isSelectedAfter}`);
    //             } else {
    //                 console.log(`Checkbox ${i + 1} is either not enabled or not displayed.`);
    //             }
    //         }

    //         await browser.pause(5000)
    //         await browser.$("//input[@type='submit']").click()
    //         await browser.pause(5000)

    //     });


    // it("countCheckbox"  , async ()=>{
    //     await browser.url("https://demoapps.qspiders.com/ui/checkbox?sublist=0")
    //     await browser.pause(2000);

    //     let check = await browser.$$('//input[@type="checkbox"]')

    //     console.log(`===============Number of checkboxes on the page: ${check.length}==========`);

    // })

    // });
    


    describe('My Mocha Test', () => {
        before(() => {
            console.log('Setup before all tests');
        });
    
        it('should verify the title of a page', async () => {
            await browser.url('https://webdriver.io');
            const title = await browser.getTitle();
            expect(title).toEqual('WebdriverIO · Next-gen browser and mobile automation test framework for Node.js');
        });
    
        after(() => {
            console.log('Cleanup after all tests');
        });
    });
    