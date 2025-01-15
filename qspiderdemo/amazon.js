describe("end-to-end"  , ()=>{
    it("login" , async()=>{

        await browser.url("https://www.amazon.in/")
        await browser.maximizeWindow()
        await browser.pause(3000)

        await browser.$("//span[text()='Hello, sign in']").click()
        await browser.pause(3000)       

        await browser.$('//input[@id="ap_email"]').setValue("7795045257")     
        await browser.pause(3000)

        await browser.$('//input[@class="a-button-input"]').click()
        await browser.pause(3000)

        await browser.$('//input[@type="password"]').setValue("chai@2202")     
        await browser.pause(3000)

        await browser.$('//input[@id="signInSubmit"]').click()
        await browser.pause(3000)

        let sel = await browser.$('//div[@id="nav-search-dropdown-card"]')
        await sel.click()
        await sel.selectByIndex(11)
        await browser.pause(3000)
        console.log(`===== selected drop down option ${sel}=========`)
        await browser.pause(3000)

        await browser.$('//input[@id="twotabsearchtextbox"]').setValue("lip")
        await browser.pause(2000)

        let auto = await browser.$$('//div[@class="s-suggestion-container"]')
        console.log(`=================${auto.length}===================`);

        for (let x of await auto){
            let check =await x.getText()
            if(check.includes("pencil")){
                x.click()
                break
            }
            console.log(`===============${check}================`);
        }
        await browser.pause(2000)

        await browser.$("(//span[text()='MARS Matte Lip Liner & MARS Matte Lip Liner & MARS Matte Lip Liner'])[1]").click()
        await browser.pause(1000)

        let handle = await browser.getWindowHandles()
        let newHandle = handle[1];
        await browser.switchToWindow(newHandle);

        await browser.$('//input[@id="add-to-cart-button"]').click()
        await browser.pause(3000)

        let handle1 = await browser.getWindowHandles()
        let newHandle1 = handle1[1];
        await browser.switchToWindow(newHandle1);

        let cartButton = await browser.$('//div[@id="nav-cart-count-container"]');
        await cartButton.waitForExist({ timeout: 5000 });
        await cartButton.waitForDisplayed({ timeout: 5000 });

        let cartItem = '//span[contains(text(),"MARS Matte Lip Liner & MARS Matte Lip Liner & MARS Matte Lip Liner")]';
        let isItemPresent = await browser.$(cartItem).isExisting();
        console.log(`=======================${isItemPresent}=====================`);
        
        expect(isItemPresent).toBe(true, "The item is not present in the cart.");

    })
})

