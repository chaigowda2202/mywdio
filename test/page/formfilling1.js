

// !  facebook login
class login {

    get newaccount(){
        return($('//a[@class="_42ft _4jy0 _6lti _4jy6 _4jy2 selected _51sy"]'))
    }

    get firstName(){
        return($('//input[@name="firstname"]'))
    }

    get lastName(){
        return($('//input[@name="lastname"]'))
    }

    get dobDay(){
        return($('//select[@title="Day"]'))
    }

    get dobMonth(){
        return($('//select[@title="Month"]'))
    }

    get dobYear(){
        return($('//select[@title="Year"]'))
    }

    get radiobtns(){
        return($('//input[@value="1"]'))
    }

    get email(){
        return($('//input[@aria-label="Mobile number or email address"]'))
    }

    get password(){
        return($('//input[@data-type="password"]'))
    }

    get signup(){
        return($('//button[@name="websubmit"]'))
    }
}

export default new login()

