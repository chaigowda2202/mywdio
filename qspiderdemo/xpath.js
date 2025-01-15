

describe ("xpath" , ()=>{
    // it ("login1" , async()=>{
    //     await browser.url("https://demoapps.qspiders.com/ui/login1.0")
    //     await browser.maximizeWindow()
    //     await browser.pause(2000)
    //     await browser.$('//input[@placeholder="Username:"]').addValue("chaithanya")
    //     await browser.pause(3000)
    //     await browser.$('//input[@placeholder="Password"]').addValue("123456789")
    //     await browser.pause(3000)
    //     await browser.$('//input[@type="checkbox"]').click()
    //     await browser.pause(3000)
    //     await browser.$('//input[@type="radio"]').click()
    //     await browser.pause(3000)
    // })


    it("duplicateElements",  async()=>{
        await browser.url("https://demoapps.qspiders.com/ui/duplicate?sublist=0&scenario=1")
        await browser.pause(1000)
        await browser.maximizeWindow()
        await browser.pause(2000)

        let check = await browser.$$('//input[@type="checkbox"]')
        for(let x of check){
            await x.click()
            console.log(x);
            await browser.pause(2000)
        }
    })
})