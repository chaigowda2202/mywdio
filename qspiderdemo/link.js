

describe ( "clicklink" , ()=>{
    // it("clickeachlink" , async ()=>{


    //     await browser.url("https://demoapps.qspiders.com/ui/link?sublist=0&scenario=1")
    //     await browser.pause(3000)

    //     await browser.maximizeWindow()
    //     await browser.pause(3000)

    //    let findlink =  await browser.$$("//a[@class='text-white hover:text-slate-300 text-[14px]']")
    //     findlink.forEach(async(a )=> {
    //             a.click()
    //             await browser.pause(3000)
    //             await browser.back()
    //             console.log("aaaaaaaaaaa")
                
    //     });
                   
    // })

    // it( "clickallthelinks" ,  async ()=>{
    //     await browser.url("https://demoapps.qspiders.com/ui/link/linkNew?sublist=1")
    //     await browser.pause(3000)

    //     await browser.maximizeWindow()
    //     await browser.pause(3000)

    //     let alllinks =  await browser.$$("//a[@class='text-white hover:text-slate-300 text-[14px]']")

    //     alllinks.forEach(async(x) => {
    //             x.click()
    //             await browser.pause(3000)
    //             console.log("===============clicked===============");
    //     });

    // } )

    // it.only( "textoflink" , async()=>{
    //     await browser.url("https://demoapps.qspiders.com/ui/link/linkNew?sublist=1")
    //     await browser.pause(3000)


    //     await browser.maximizeWindow()
    //     await browser.pause(3000)

    // let alltext =  await browser.$$("//a[@class='text-white hover:text-slate-300 text-[14px]']")
       
    //     let s= await alltext.map( async(a) => {
    //         let m=[]
    //              m=await a.getText()
    //             await browser.pause(3000)
    //             return m
          
    //     });
    //     console.log(`------------${s}`);
        
    // })

    
    // it( " count links " , async ()=>{
    // await browser.url("https://demoapps.qspiders.com/ui/link?sublist=0")
    //     await browser.pause(2000)
    //     await browser.maximizeWindow()
    //     await browser.pause(2000)


    //     let links = await $$('a');
    //     console.log(`===============================number of links  on web page :${links.length} `);
    //     await browser.pause(2000)

    // })



    // it("getURL/tittle" , async ()=>{

        // await browser.url("https://demoapps.qspiders.com/ui/link?sublist=0")
        // await browser.pause(2000)
        // await browser.maximizeWindow()
        // await browser.pause(2000)

    //     let pageUrl = await browser.getUrl();      
    //     let pageTitle = await browser.getTitle();

    //     console.log(`Page URL: ${pageUrl}`);
    //     console.log(`Page Title: ${pageTitle}`);

    // })


    it("optionalfields"  , async ()=>{
        
        await browser.url("https://demoapps.qspiders.com/ui/toggle?sublist=0&scenario=3")
        await browser.pause(2000)
        await browser.maximizeWindow()
        await browser.pause(2000)

         let c = await browser.$$("//span[@class='absolute left-[3px] top-[2px] translate-x-0 inline-block w-3 h-3 transition duration-300 ease-in-out transform bg-white border border-gray-300 rounded-full']")

         for (let toggle of c) {
            await toggle.click();
            console.log(`============ Element clicked =======================`);
            await browser.pause(2000); 
        }

        await browser.$('//button[@id="togglers"]').click()
        await browser.pause(2000); 
    } )
})


