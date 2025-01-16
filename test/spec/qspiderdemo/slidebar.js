describe('Handle Slider', () => {
    it('slider', async () => {
        await browser.url('https://demoapps.qspiders.com/ui/slider?sublist=0'); // Example slider page
        await browser.maximizeWindow();
        await browser.pause(2000)

        let slide = await browser.$('//input[@type="range"]');
        let drag = 80; 
        console.log(drag);        
        await slide.dragAndDrop({ x: drag, y: 0 });

        await browser.pause(3000);
    });
});



