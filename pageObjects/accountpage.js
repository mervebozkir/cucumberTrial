import {expect} from "chai"

class accountPage {
    checkHeader(){
        const header = $(`#center_column .page-heading`)
        header.waitForDisplayed()
        expect(header.getText()).equals('MY ACCOUNT')
    }
}

module.exports = new accountPage();