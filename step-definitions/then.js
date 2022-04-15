import { Then } from '@wdio/cucumber-framework';
import authPage from "../pageObjects/authentication.js"
import accPage from "../pageObjects/accountpage.js"
import homepage from '../pageObjects/homepage.js';

Then(/^The user see authentication page$/, ()=>{
    authPage.checkHeader()
})

Then(/^The user inputs valid credentials$/, ()=>{
    authPage.inputCredentials()
})

Then(/^The user see my account page$/, ()=>{
    accPage.checkHeader()
})

Then(/^The user see title of the page is "(.*)"$/, (keyword)=>{
    homepage.checkTitle(keyword)
})