describe('mouseactions', () => { 
    // it("mousehover" , async ()=>{
    //     await browser.url("https://demoapps.qspiders.com/ui/scroll?scenario=1")
    //     await browser.maximizeWindow()
    //     await browser.pause(1000)

    //     await browser.url("https://demoapps.qspiders.com/ui/mouseHover?sublist=0")
    //     await browser.pause(3000)

    //     await browser.$('//img[@class="w-5 h-5 mt-5 ml-3 cursor-pointer "]').moveTo()
    //     await browser.pause(3000)

    // })

    // it("clickandhold" , async ()=>{

    //     await browser.url("https://demoapps.qspiders.com/ui/clickHold")
    //     await browser.maximizeWindow()
    //     await browser.pause(1000)

    //     await browser.$('//div[@id="circle"]').click({duration: 4000})
    //     await browser.pause(3000)
    // })


    it("dragndrop" , async()=>{
        await browser.url("https://demoapps.qspiders.com/ui/dragDrop?sublist=0")
        await browser.maximizeWindow()
        await browser.pause(1000)

        let dragElement = await browser.$('//div[text()="Drag Me"]');
        await browser.pause(5000)
        await dragElement.dragAndDrop({ x: -100, y: -200 })
        await browser.pause(5000)
    })


    
 })

