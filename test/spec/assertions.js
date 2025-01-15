

describe( "asser" , ()=>{
    it("assertion" , async()=>{
        await browser.url("https://www.amazon.in/")
        await browser.pause(3000)
        // const url = await browser.getUrl();
        // expect(url).toBe("https://www.amazon.in/");
        // console.log("success===============================");
        
        // await expect(browser).toHaveUrl("https://www.amazon.in/")

        // let x = await browser.$("//a[k@class='nav-a nav-a-2 nav-truncate   nav-progressive-attribute']")
        // x.waitForDisplayed({timeout:5000})
        // console.log(`===========================success=========================================` );

        // const x = await browser.$('//a[@id="nav-global-location-popover-link"]');
        // await x.waitForDisplayed({ timeout: 10000 });
        // await x.scrollIntoView();
        // expect(await x.isDisplayed()).toBe(true);

        // console.log("=======================The navigation link is displayed============================")
        // let y = await browser.getTitle()

        // expect(y).toContain("Amazon")
        // expect(y).toBe("Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in")
        // console.log("Page title is verified");
 
       
        // let a = await browser.$("//a[contains(@href, 'amazon.in')]");
        // let  href = await a.getAttribute("href");
        // expect(href).toContain("amazon.in");


        // let ele = await browser.$("h2")
        // let txt = await ele.getText()
        // expect(txt).toBe("Skip to")
        // console.log("==============success=================");



        //!  chai assertions 
        
        let x = {
            milk :["1l" , "2l" , "3l"]
        }
        x.should.be.a("object")


        })
    })

