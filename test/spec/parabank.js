import paraBankprocess from "../page/parabank.js"
import fs from "fs"

let data = fs.readFileSync("y/testdata/parabank.json")
let myobj = JSON.parse(data)

describe('Parabank Automation', () => {
    it(' log in successfully', async () => {
      await browser.url('https://parabank.parasoft.com/parabank/index.htm');
      await browser.maximizeWindow()
      await browser.pause(1000)

      let { firstName, lastName, street, city, state, zipCode,phoneNumber, ssn, username, password , confirmpassword } = myobj.registration;
        let {USERNAME,PASSWORD} = myobj.login
        await paraBankprocess.registerlink.click()
        await paraBankprocess.firstname.setValue(firstName)
        await browser.pause(1000)
        await paraBankprocess.lastname.setValue(lastName)
        await browser.pause(1000)
        await paraBankprocess.Address.setValue(street)
        await browser.pause(1000)
        await paraBankprocess.City.setValue(city)
        await browser.pause(1000)
        await paraBankprocess.State.setValue(state)
        await browser.pause(1000)
        await paraBankprocess.ZipCode.setValue(zipCode)
        await browser.pause(1000)
        await paraBankprocess.PhNumber.setValue(phoneNumber)
        await browser.pause(1000)
        await paraBankprocess.SSN.setValue(ssn)
        await browser.pause(1000)
        await paraBankprocess.userName.setValue(username)
        await browser.pause(1000)
        await paraBankprocess.Password.setValue(password)
        await browser.pause(1000)
        await paraBankprocess.confirmpass.setValue(confirmpassword)
        await browser.pause(1000)
        await paraBankprocess.register.click()
        await browser.pause(2000)

        await paraBankprocess.UN.setValue(USERNAME)
        await paraBankprocess.PASS.setValue(PASSWORD)
        await paraBankprocess.LOGIN.click()
        await browser.pause(2000)

        // const message = $("//p[text()='Your account was created successfully. You are now logged in.']").getText();
        // console.log(`====================${message}===========================`); 

        //  const messageElement = $("//p[text()='Your account was created successfully. You are now logged in.']");
        //  messageElement.waitForExist(); 
        //  expect(messageElement).toContain('Your account was created successfully. You are now logged in.');
                
    });


    it("openNewAccount" , async ()=>{

        let {accountType,fromAccountId} = myobj.openAccount
        await paraBankprocess.newAcc.click()
        ;await browser.pause(2000)
        // await paraBankprocess.accType.setValue(accountType);await browser.pause(2000)
        // await paraBankprocess.accID.setValue(fromAccountId);await browser.pause(2000)
        await paraBankprocess.openAccBtn.click();await browser.pause(2000)

        // const successMessage = $("//p[text()='Congratulations, your account is now open.']").getText();
        // expect(successMessage).to.not.be.empty;
    });



    it("transferprocess", async()=>{
let {amount,fromAccountId , toAccountId} = myobj.transfer

     await paraBankprocess.transfer.click()
     await paraBankprocess.AMOUNT.setValue(amount)
     await browser.pause(2000)
     await paraBankprocess.transferbtn.click()
     await browser.pause(3000)

//      const isEnabled = await $('//option[@value="14121"]/parent::select[@id="fromAccountId"]').isEnabled();
// if (isEnabled) {
//     await $('//option[@value="14121"]/parent::select[@id="fromAccountId"]').setValue('text'); 
//     console.error('=========Element is not enabled.============');
// }

    })

    it("billpay" , async ()=>{

        let {payeeName ,payeeAddress , payeeCity, payeeState,zipcode, payeePhoneNumber , account ,verifyAccount , amount } = myobj.billPay
        await paraBankprocess.billPayLink.click()
        await paraBankprocess.pname.setValue(payeeName)
        await paraBankprocess.paddress.setValue(payeeAddress)
        await paraBankprocess.pcity.setValue(payeeCity)
        await paraBankprocess.pstate.setValue(payeeState)
        await paraBankprocess.pzipcode.setValue(zipcode)
        await paraBankprocess.p_phnum.setValue(payeePhoneNumber)
        await paraBankprocess.acc.setValue(account)
        await paraBankprocess.Veriacc.setValue(verifyAccount)
        await paraBankprocess.amt.setValue(amount)
        await paraBankprocess.sendbtn.click()
        await browser.pause(3000)
    })

    it("loan" , async ()=>{
        let {amount , downPayment , fromAccountId} = myobj.loan
        await paraBankprocess.loan.click()
        await paraBankprocess.loanAmount.setValue(amount)
        await paraBankprocess.dpayment.setValue(downPayment)
        // await paraBankprocess.fromAccount.setValue(fromAccountId)
        await paraBankprocess.applybtn.click()
        await browser.pause(3000)

        // const successMessage = $('.success').getText();
        // expect(successMessage).to.contain('Loan Request Processed');
    })
})