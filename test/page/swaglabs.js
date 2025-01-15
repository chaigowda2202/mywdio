
class swag_labs{

    get userName(){
        return($('//input[@id="user-name"]'))
    }

    get PWD(){
        return($('//input[@id="password"]'))
    }

    get login(){
        return($('//input[@id="login-button"]'))
    }

    get addcart(){
        return($('//button[@id="add-to-cart-sauce-labs-backpack"]'))
    }

    get cartlink(){
        return($('//a[@class="shopping_cart_link"]'))
    }

    get checkoutbtn(){
        return($('//button[@id="checkout"]'))
    }

    get firstname(){
        return($('//input[@id="first-name"]'))
    }

    get lastname(){
        return($('//input[@id="last-name"]'))
    }

    get postalcode(){
        return($('//input[@id="postal-code"]'))
    }

    get continuebtn(){
        return($('//input[@id="continue"]'))
    }

    get orderConfirmationMessage() {
        return ($('//h2[@class="complete-header"]')); 
    }
}

export default new swag_labs