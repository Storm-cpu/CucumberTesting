const { Given, When, Then, After } = require('cucumber');
const { Builder, By, until } = require('selenium-webdriver');
require('chromedriver');
let getDriver = require('../../hook.js');

let driver

Given('I am on the login page', async function () {
    driver = await getDriver();
    await driver.get('http://localhost:3000/register');
});

When('I click on the register button', async function () {
    await driver.findElement(By.id('register')).click();
});

When("I enter {string}, {string}, and {string}", async function (name, email, password) {
    await driver.findElement(By.name('name')).sendKeys(name);
    await driver.findElement(By.name('email')).sendKeys(email);
    await driver.findElement(By.name('password')).sendKeys(password);
});

When('I click on the submit button', async function () {
    await driver.findElement(By.id('login')).click();
});

Then("I should see {string}", async function (messageText) {
    let message = await driver.wait(until.elementLocated(By.id('arlert')), 2000);
    let text = await message.getText();
    if (!text.includes(messageText)) {
        throw new Error(`Expected to find "${messageText}", but got "${text}"`);
    }
});

