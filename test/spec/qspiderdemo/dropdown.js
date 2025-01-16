
describe('dropdown', () => { 
    it( "singledrop" , async()=>{

        await browser.url("https://demoapps.qspiders.com/ui/dropdown?sublist=0")
        await browser.maximizeWindow()
        await browser.pause(3000)

        let drop = await browser.$('//select[@id="select1"]')
        await drop.selectByIndex(0); 
        await browser.pause(1000)

        await browser.$('//input[@id="phone"]').setValue("9878765435")
        let drop2 = await browser.$('//select[@id="select2"]')
        await drop2.selectByIndex(1); 
        await browser.pause(1000)

        let drop3 = await browser.$('//select[@id="select3"]')
        await drop3.selectByIndex(7); 
        await browser.pause(2000)

        let drop4 = await browser.$('//select[@id="select5"]')
        await drop4.selectByIndex(17); 
        await browser.pause(2000)

        let drop6 = await browser.$('//select[@id="select7"]')
        await drop6.selectByIndex(2); 
        await browser.pause(2000)

        await browser.$('//button[@type="submit"]').click()
        await browser.pause(3000)

    })
 })