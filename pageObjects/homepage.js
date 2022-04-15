import {expect} from "chai"

class homepage {
    openHomePage(){
        browser.maximizeWindow()
        return browser.url('');
    }

    signIn(){
        const button = $(`a.login`)
        button.click()
    }

    clickMenu(keyword){
        const menu = $$(`#block_top_menu > ul > li`)
        menu.filter(x=>x.$(`a`).getAttribute('title') === (keyword)).map(y=>y.click())
        driver.pause(3000)
    }

    checkTitle(keyword){
        expect(browser.getTitle()).equals(keyword)
    }
}

module.exports = new homepage();