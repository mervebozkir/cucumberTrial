import { When } from '@wdio/cucumber-framework';
import homePage from "../pageObjects/homepage.js"
import authPage from "../pageObjects/authentication.js"

When(/^The user clicks SignIn item$/, ()=>{
    homePage.signIn()
})

When(/^The user clicks SignIn button$/, ()=>{
    authPage.signIn()
})

When(/^The user clicks on the "(.*)" option in the menu$/, (keyword)=>{
    homePage.clickMenu(keyword)
})

When(/^The user inputs "(.*)" on search bar$/, (keyword)=>{
    homePage.inputValueOnSearchBar(keyword)
})
