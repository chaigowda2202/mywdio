
class signup{
    get signin(){
        return($('//a[@id="nav-link-accountList"]'))
    }

    get MobileNum(){
        return($('//input[@type="email"]'))
    }

    get continueBtn(){
        return ($('//input[@type="submit"]'))
    }

    get password(){
        return ($('//input[@id="ap_password"]'))
    }

    get signinBtn(){
        return ($('//input[@id="signInSubmit"]'))
    }

    get dropdown(){
        return ($('//div[@id="nav-search-dropdown-card"]'))
    }

    get suggession(){
        return($('//input[@id="twotabsearchtextbox"]'))
    }

    get suggdropDown(){
        return ($$('//div[@class="s-suggestion-container"]'))
    }

    async SignInPG(){
        await this.signin.click()
        await this.MobileNum.setValue("7795045257")
        await browser.pause(2000)
        await this.continueBtn.click()
        await browser.pause(2000)
        await this.password.setValue("chai@2202")
        await this.signinBtn.click()
        await browser.pause(1000)
        await this.dropdown.click()
        await this.dropdown.selectByIndex(14)
        await browser.pause(3000)

    }
}
export default new signup()