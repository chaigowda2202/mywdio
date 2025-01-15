
class paraBankprocess{

    get registerlink(){
        return($("//a[text()='Register']"))
    }

    get firstname(){
        return($('//input[@id="customer.firstName"]'))
    }

    get lastname(){
        return($('//input[@id="customer.lastName"]'))
    }

    get Address(){
        return($('//input[@id="customer.address.street"]'))
    }

    get City(){
        return($('//input[@id="customer.address.city"]'))
    }

    get State(){
        return($('//input[@id="customer.address.state"]'))
    }

    get ZipCode(){
        return($('//input[@id="customer.address.zipCode"]'))
    }

    get PhNumber(){
        return($('//input[@id="customer.phoneNumber"]'))
    }

    get SSN(){
        return($('//input[@id="customer.ssn"]'))
    }

    get userName(){
        return($('//input[@id="customer.username"]'))
    }

    get Password(){
        return($('//input[@id="customer.password"]'))
    }

    get confirmpass(){
        return($('//input[@id="repeatedPassword"]'))
    }

    get register(){
        return($('//input[@value="Register"]'))
    }

    get UN(){
        return($('//input[@name="username"]'))
    }

    get PASS(){
        return($('//input[@name="password"]'))
    }

    get LOGIN(){
        return($('//input[@value="Log In"]'))
    }

    get transfer(){
        return($("//a[text()='Transfer Funds']"))
    }

    get AMOUNT(){
        return($('//input[@id="amount"]'))
    }

    get transferbtn(){
        return($('//input[@value="Transfer"]'))
    }

    get newAcc(){
        return($("//a[text()='Open New Account']"))
    }

    // get accType(){
    //     return($('//option[@value="0"]'))
    // }

    // get accID(){
    //     return($('//option[@value="15453"]'))
    // }

    get openAccBtn(){
        return($('//input[@value="Open New Account"]'))
    }

    get billPayLink(){
        return($("//a[text()='Bill Pay']"))
    }

    get pname(){
        return($('//input[@name="payee.name"]'))
    }

    get paddress(){
        return($('//input[@name="payee.address.street"]'))
    }

    get pcity(){
        return($('//input[@name="payee.address.city"]'))
    }

    get pstate(){
        return($('//input[@name="payee.address.state"]'))
    }

    get pzipcode(){
        return($('//input[@name="payee.address.zipCode"]'))
    }

    get p_phnum(){
        return($('//input[@name="payee.phoneNumber"]'))
    }

    get acc(){
        return($('//input[@name="payee.accountNumber"]'))
    }

    get Veriacc(){
        return($('//input[@name="verifyAccount"]'))
    }

    get amt(){
        return($('//input[@name="amount"]'))
    }

    get sendbtn(){
        return($('//input[@value="Send Payment"]'))
    }

    get loan(){
        return($("//a[text()='Request Loan']"))
    }

    get loanAmount(){
        return($('//input[@id="amount"]'))
    }
    get dpayment(){
        return($('//input[@id="downPayment"]'))
    }

    // get fromAccount(){
    //     return($('//select[@id="fromAccountId"]'))
    // }

    get applybtn(){
        return($('//input[@value="Apply Now"]'))
    }
}



export default new paraBankprocess()