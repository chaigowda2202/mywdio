class signup{

    get login(){
        return ($('//span[text()="Login"]'))
    }

    get lastName(){
        return($('//input[@id="last_3"]'))
    }

    get address1(){
        return($('//input[@id="input_5_addr_line1"]'))
    }

    get address2(){
        return($('//input[@id="input_5_addr_line2"]'))
    }

    get citybox(){
        return($('//input[@id="input_5_city"]'))
    }

    get countrymenu(){
        return($('//select[@id="input_5_country"]'))
    }

    get phoneNum(){
        return($('//input[@id="input_6_full"]'))
    }

    get emailAddField(){
        return($('//input[@id="input_4"]'))
    }

    get suggessionsBox(){
        return($('//textarea[@id="input_12"]'))
    }
}

export default new signup()