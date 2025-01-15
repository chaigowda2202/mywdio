describe( "alert" , ()=>{
    // it("popups" , async ()=>{
        
    //     await browser.url("https://demoapps.qspiders.com/ui/frames?sublist=0");
    //     await browser.maximizeWindow();
    //     await browser.pause(1000);
    //     let a=await browser.$('//iframe[@class="w-full h-96"]')
    // // await browser.switchToParentFrame()
    // await browser.switchFrame(a)
    //     await browser.$('//input[@id="username"]').setValue("chaithanya")

    //     await browser.$('//input[@id="password"]').setValue("123456")

    //     await browser.$('//button[@type="submit"]').click()
    //     await browser.pause(1000);
        
    // })


    // it.only("nestediframe" , async()=>{

    //     await browser.url("https://demoapps.qspiders.com/ui/frames/nested?sublist=1")
        // await browser.maximizeWindow();
        // await browser.pause(1000);

    //     let frm = await browser.$('//iframe[@class="w-full h-96"]')

    //     await browser.switchFrame(frm)

    //     let email = await browser.$("//p[text() = 'Admin@gmail.com']").getText();
    //     console.log(`==============${email}===============`);
        
    //     let pwd = await browser.$("//p[text() = 'Default Password']/following-sibling::*[1]").getText();
    //     console.log(`==============${pwd}===============`);

    //     let conpwd = await browser.$("//p[text() = 'Default Password']/following-sibling::*[3]").getText();
    //     console.log(`==============${conpwd}===============`);
        
    //     await browser.pause(3000);


    //     await browser.switchFrame($('//div[@class="form_container"]/iframe'))

    //     await browser.$('//input[@id="email"]').addValue(email)
    //     await browser.pause(2000);
    //     await browser.$('//input[@id="password"]').addValue(pwd)
    //     await browser.pause(2000);
    //     await browser.$('//input[@id="confirm-password"]').addValue(conpwd)
    //     await browser.pause(2000);

    //     await browser.$('//button[@id="submitButton"]').click()
    //     await browser.pause(2000);

    // })


    // it ("multipleframe" , async ()=>{

    //     await  browser.url("https://demoapps.qspiders.com/ui/frames/multiple?sublist=2")
    //     await browser.maximizeWindow();
    //     await browser.pause(1000);

    //     let mulframe1 = await browser.$('(//iframe[@class="w-full h-96"])[1]')
    //     await browser.switchFrame(mulframe1)

    //     await browser.$('//input[@id="email"]').setValue("Admin@gmail.com")
    //     await browser.pause(1000);

    //     await browser.$('//input[@id="password"]').setValue("Admin@1234")
    //     await browser.pause(1000);

    //     await browser.$('//input[@id="confirm-password"]').setValue("Admin@1234")
    //     await browser.pause(1000);

    //     await browser.$("//button[text() = 'Sign Up']").click()
    //     await browser.pause(2000);

        
    //     await browser.switchToParentFrame();

    //     let mulframe2 = await browser.$('(//iframe[@class="w-full h-96"])[2]')
    //     await browser.switchFrame(mulframe2)
    //     await browser.pause(1000);

    //     await browser.$('//input[@id="username"]').setValue("SuperAdmin@gmail.com")
    //     await browser.pause(1000);

    //     await browser.$('//input[@id="password"]').setValue("SuperAdmin@1234")
    //     await browser.pause(1000);

    //     await browser.$("//button[text() ='Login']").click()
    //     await browser.pause(2000);

       
    // })


    it("nestedmultipleframe" , async()=>{
        await browser.url("https://demoapps.qspiders.com/ui/frames/nestedWithMultiple?sublist=3")
        await browser.pause(2000)
    })
})