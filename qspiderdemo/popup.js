
describe("popups" , ()=>{
    it("alert" , async()=>{

        await browser.url("https://demoapps.qspiders.com/ui/alert?sublist=0&scenario=1")
        await browser.pause(3000)


        await browser.$('//button[@id="buttonAlert2"]').click()
        await browser.pause(3000)

    })

    it.only("uploadfile" , async ()=>{

        await browser.url("https://practice.expandtesting.com/upload")
        await browser.maximizeWindow()
        await browser.pause(3000)

       
        await browser.$('//input[@type="file"]').click()
        await browser.pause(3000)

        
    })
})