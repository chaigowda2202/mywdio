// import fs from 'fs'
// let data =fs.readFileSync("./y/testdata/testlogin.json")
// let object=JSON.parse(data)
// describe("",()=>{
//     it("",async()=>{
//         let u=object.url
//        await browser.url(u)
//     })
// })


const LoginPage = require('../pageobjects/login.page'); // Import Page Object
const testData = require('../data/testdata.json'); // Import Test Data

describe('Login Feature Tests', () => {
    testData.forEach(({ username, password }) => {
        it(`should login with username: ${username}`, () => {
            LoginPage.open(); // Navigate to the login page
            LoginPage.login(username, password); // Perform login

            // Add assertion to validate login success
            expect(browser.getUrl()).toContain('/dashboard'); // Replace with the actual expected URL
        });
    });
});

const LoginPage = require('../page/login.page');
const testData = require('../data/testdata.json');

describe('Login Feature', () => {
    testData.forEach(({ username, password }) => {
        it(`should login as ${username}`, () => {
            LoginPage.open();
            LoginPage.login(username, password);
            expect(browser.getUrl()).toContain('/dashboard');
        });
    });
});


const testData = require('../data/testdata.json');

describe('Login Tests', () => {
    testData.forEach(({ username, password }) => {
        it(`should login with username: ${username}`, () => {
            // Test logic here
        });
    });
});


// test/spec/dashboard.spec.js
const DashboardPage = require('../page/dashboard.page');
const LoginPage = require('../page/login.page');
const testData = require('../data/testdata.json');

describe('Dashboard Feature', () => {
    testData.forEach(({ username, password }) => {
        it(`should display the welcome message for ${username}`, () => {
            LoginPage.open();
            LoginPage.login(username, password);
            expect(DashboardPage.getWelcomeMessage()).toContain('Welcome');
        });
    });
});


// test/spec/login.spec.js
const LoginPage = require('../page/login.page');
const testData = require('../data/testdata.json');

describe('Login Feature', () => {
    testData.forEach(({ username, password }) => {
        it(`should log in as ${username}`, () => {
            LoginPage.open();
            LoginPage.login(username, password);
            expect(browser.getUrl()).toContain('/dashboard');
        });
    });
});


// login.page.js
class LoginPage {
    get usernameField() { return $('#username'); }
    get passwordField() { return $('#password'); }
    get loginButton() { return $('#login-button'); }

    open() {
        browser.url('/login');
    }

    login(username, password) {
        this.usernameField.setValue(username);
        this.passwordField.setValue(password);
        this.loginButton.click();
    }
}

module.exports = new LoginPage();

const LoginPage = require('./login.page');
const testData = require('./testdata.json');

describe('Login Feature', function () {
    testData.forEach(({ username, password }) => {
        it(`should log in as ${username}`, function () {
            LoginPage.open();
            LoginPage.login(username, password);
            expect(browser.getUrl()).toContain('/dashboard');
        });
    });
});

