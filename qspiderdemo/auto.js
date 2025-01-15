describe ("autosuggesstion" , ()=>{
    it("auto" , async()=>{
        await browser.url("https://www.amazon.in/")
        await browser.maximizeWindow()
        await  browser.pause(2000)

        await browser.$('//input[@name="field-keywords"]').setValue("iphones")
        await browser.pause(5000)

        let auto = await browser.$$('//div[@class="s-suggestion s-suggestion-ellipsis-direction"]')
        console.log(`=================${auto.length}===================`);

        for (let x of await auto){
            let check =await x.getText()
            if(check.includes("pro")){
                x.click()
                break
            }
            console.log(`===============${check}================`);
        }

        await browser.$("(//span[text()='iPhone 16 Pro Max 256 GB: 5G Mobile Phone with Camera Control, 4K 120 fps Dolby Vision and a Huge Leap in Battery Life. Works with AirPods; Desert Titanium'])[1]").click()
        await browser.pause(5000)

        let handle = await browser.getWindowHandles()
        let newHandle = handle[1];
        await browser.switchToWindow(newHandle);

        let addToCart = await browser.$('(//input[@id="add-to-cart-button"])[2]');
        await addToCart.click();
        await browser.pause(4000);

        let handle1 = await browser.getWindowHandles()
        let newHandle1 = handle1[1];
        await browser.switchToWindow(newHandle1);
    
        let cartButton = await browser.$('//div[@id="nav-cart-count-container"]');
        await cartButton.waitForExist({ timeout: 5000 });
        await cartButton.waitForDisplayed({ timeout: 5000 });

       
        let cartItem = '//span[contains(text(),"iPhone 16 Pro Max 256 GB")]';
        let isItemPresent = await browser.$(cartItem).isExisting();
        console.log(`=======================${isItemPresent}=====================`);
        
        expect(isItemPresent).toBe(true, "The item is not present in the cart.");

    })
})
