import {expect} from "chai"

class authenticationPage{
    checkHeader(){
        const header = $(`#center_column .page-heading`)
        header.waitForDisplayed()
        expect(header.getText()).equals('AUTHENTICATION')
    }

    inputCredentials(){
        this.mail.setValue('mrvbzkrtest@gmail.com')+this.password.setValue('Test123*')
    }

    get mail(){
        return $(`#login_form #email`)
    }

    get password(){
        return $(`#login_form #passwd`)
    }

    signIn(){
        $(`#SubmitLogin`).click()
    }
}

module.exports = new authenticationPage();