describe('Handle JavaScript Alerts', () => {
    it('should accept an alert', async () => {
     
            // Navigate to the URL
            await browser.url('https://demoapps.qspiders.com/ui/alert?sublist=0');
            console.log('Navigated to URL successfully.');

            // Locate and click the button to trigger the alert
            await $('//button[@id="buttonAlert2"]').click()
            console.log('Button clicked successfully.');
            await browser.pause(3000)
    });
});
