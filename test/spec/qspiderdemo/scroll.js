

describe('scroll', () => { 
    // it("vertical" , async()=>{
    //   await browser.url("https://demoapps.qspiders.com/ui/scroll?scenario=1")
    //   await browser.maximizeWindow()
    //   await browser.pause(2000)

    //   let newtab = await browser.$("//a[text() = 'Open In New Tab']");
    //   await newtab.click();
    //   await browser.pause(2000);

    //   let handle= await browser.getWindowHandles();
    //   console.log(`================================Window handles: ${handle}===============================`);
      
    //   let newHandle = handle[1];
    //   await browser.switchToWindow(newHandle);
    //   console.log(`Switched to new tab: ${newHandle}`);

  //   await browser.execute(() => {
  //     window.scrollTo(0, document.body.scrollHeight);
  // });// top to bottom
  // await browser.pause(2000);

  //   await browser.execute(() => {
  //     window.scrollTo(0, 0);
  // }); // back to top
  // await browser.pause(2000);

  // await browser.$('//input[@type="checkbox"]').click()
  // await browser.pause(2000)

  // await browser.$("//button[text()='Accept Our Policy']").click()
  // await browser.pause(2000)

  //   await browser.switchToWindow(handle[0]);
  //   console.log('Switched back to the original tab.');
  //   await browser.pause(2000)
  // })



//   it("horizontal" , async()=>{
//       await browser.url("https://demoapps.qspiders.com/ui/scroll/newHorizontal?scenario=1")
//       await browser.maximizeWindow()
//       await browser.pause(2000)

//       let newtab = await browser.$("//a[text() = 'Open In New Tab']");
//       await newtab.click();
//       await browser.pause(2000);

//       let handle= await browser.getWindowHandles();
//       console.log(`================================Window handles: ${handle}===============================`);
      
      // let newHandle = handle[1];
      // await browser.switchToWindow(newHandle);
//       console.log(`Switched to new tab: ${newHandle}`);

      
//     await browser.pause(2000);

//     //   await browser.execute(() => {
//     //     window.scrollBy(500, 0); // Scroll 500px horizontally
//     // });

//     await browser.execute(() => {
//       window.scrollTo(document.body.scrollWidth, 0); // Scroll to the right end
//   });
  
//   await browser.pause(2000);

//   await browser.execute(() => {
//     window.scrollTo(0, 0); // Scroll back to the left end
// });

//     await browser.pause(2000);

// })


it("infinite" , async()=>{

  await browser.url("https://demoapps.qspiders.com/ui/scroll/newInfinite?scenario=1")
        await browser.maximizeWindow()
      await browser.pause(2000)

      let newtab = await browser.$("//a[text() = 'Open In New Tab']");
      await newtab.click();
      await browser.pause(5000);

      for (let i = 0; i < 10; i++) {  // Set a limit to avoid infinite loop
        lastHeight = await browser.execute(() => {
            return document.body.scrollHeight;  // Get the current height of the page
        });

        console.log(`Scroll attempt: ${i}, Current page height: ${lastHeight}`);

        // Scroll down by 1000 pixels
        await browser.execute(() => {
            window.scrollBy(0, 1000);
        });





})

})

  




  
