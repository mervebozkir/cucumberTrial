import { Given } from '@wdio/cucumber-framework';
import homePage from "../pageObjects/homepage.js"

Given(/^The user is on homepage$/, () =>{
    homePage.openHomePage()
})

