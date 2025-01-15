
class TestLogin{

    get userNamefield(){
        return($('//input[@id="username"]'))
    }


    get Passwordfield(){
        return ($('//input[@id="password"]'))
    }

    // get valueforpassword(){
    //     return ($("//b[text()='Password123']//ancestor::section[1]"))
    // }

    get submitbtn(){
        return($('//button[@id="submit"]'))
    }

    

}

export default new TestLogin