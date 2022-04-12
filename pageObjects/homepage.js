class homepage {
    openHomePage(){
        browser.maximizeWindow()
        return browser.url('');
    }
}

module.exports = new homepage();