const { Given, When, Then, After } = require('cucumber');
const { Builder, By, until, Select } = require('selenium-webdriver');
require('chromedriver');
let getDriver = require('../../hook.js');

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

Then("I will be redirected to the home page", async function () {
    await sleep(3500);
    driver = await getDriver();
    const currentUrl = await driver.getCurrentUrl();
    if (currentUrl !== 'http://localhost:3000/') {
        throw new Error('Not redirected to the home page');
    }
});

When('I click on the add job button', async function () {
    // Tìm nút "thêm việc" và click
    await sleep(1000);
    let addJobButton = await driver.findElement(By.xpath('//a[@href="/add-job"]'));
    await driver.executeScript("arguments[0].click();", addJobButton);
    let close = await driver.findElement(By.className('close-btn'));
    await driver.executeScript("arguments[0].click();", close);
});

When("I enter {string}, {string}, and {string} into the form", async function (position, company, jobLocation) {
    await driver.findElement(By.name('position')).sendKeys(position);
    await driver.findElement(By.name('company')).sendKeys(company);
    await driver.findElement(By.name('jobLocation')).sendKeys(jobLocation);
});

When('I select {string}, {string}', async function (status, jobType) {
    await sleep(1000);
    // Tìm thẻ select
    let statusDropdown = await driver.findElement(By.name('status'));
    let jobTypeDropdown = await driver.findElement(By.name('jobType'));

    // Tạo đối tượng Select
    let selectStatus = new Select(statusDropdown);
    let selectJobType = new Select(jobTypeDropdown);

    // Chọn tùy chọn dựa trên chỉ số
    await selectStatus.selectByIndex(parseInt(status));
    await selectJobType.selectByIndex(parseInt(jobType));
});

When("I click on the 'Save' button", async function () {
    let saveButton = await driver.findElement(By.css('button[type="submit"]'));
    await saveButton.click();
});

Then("I will receive a message {string}", async function (messageText) {
    let message = await driver.wait(until.elementLocated(By.id('arlert')), 2000);
    let text = await message.getText();
    if (!text.includes(messageText)) {
        throw new Error(`Expected to find "${messageText}", but got "${text}"`);
    }
});



