
 import signup from '../page/amazonpg.js'

describe('SIGNUP', () => { 
    it('signup-page', async () => {
        await browser.url('https://www.amazon.in/');
        await signup.SignInPG();
    });
});