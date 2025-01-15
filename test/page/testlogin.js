
class login{

    get username (){
        return($('//input[@id="username"]'))
    }

    get Password(){
        return($('//input[@id="password"]'))
    }

    get submitBtn(){
        return($('//input[@id="password"]'))
    }
}

export default new login