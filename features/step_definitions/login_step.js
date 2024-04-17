const { Given, When, Then, After } = require('cucumber');
const { Builder, By, until } = require('selenium-webdriver');
require('chromedriver');
let getDriver = require('../../hook.js');

let driver;

Given('I am in the login page', async function () {
    driver = await getDriver();
    await driver.get('http://localhost:3000/register');
});

When("I enter {string} and {string}", async function (email, password) {
    await driver.findElement(By.name('email')).sendKeys(email);
    await driver.findElement(By.name('password')).sendKeys(password);
});

When('I click on the login button', async function () {
    await driver.findElement(By.id('login')).click();
});

Then("I will see {string}", async function (messageText) {
    let message = await driver.wait(until.elementLocated(By.id('arlert')), 2000);
    let text = await message.getText();
    if (!text.includes(messageText)) {
        throw new Error(`Expected to find "${messageText}", but got "${text}"`);
    }
});

module.exports = driver;

