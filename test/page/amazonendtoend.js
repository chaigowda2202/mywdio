
class endToend{

    get login(){
        return($('//a[@id="nav-link-accountList"]'))
    }

    get mobNum(){
        return($('//input[@id="ap_email"]'))
    }

    get continueBtn(){
        return($('//input[@id="continue"]'))
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

    get suggessionbox(){
        return($('//input[@id="twotabsearchtextbox"]'))
    }

    get suggContainer(){
        return($$('//div[@class="s-suggestion-container"]'))
    }
    
    get selectelement(){
        return($('//span[text()="Women Cotton Block Printed Kurta Pant With Dupatta"]'))
    }

    get addcart(){
        return($('//input[@id="add-to-cart-button"]'))
    }


}
export default new endToend()