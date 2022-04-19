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

    inputValueOnSearchBar(keyword){
        this.inputValue.setValue(keyword)
        driver.pause(7000)
    }

    get inputValue(){
        const input = $(`#search_query_top`)
        return input;
    }

    relatedResults(){
        const resultList = $(`#index > div.ac_results > ul`).$$(`li`)
        const writtenValue = this.inputValue.getValue()
        const updatedValue = writtenValue[0].toUpperCase()+writtenValue.substring(1)
        for(var i=0;i<resultList.length;i++){            
           expect(resultList[i].$(`strong`).getHTML()).contains(updatedValue)
        }
    }
}

module.exports = new homepage();