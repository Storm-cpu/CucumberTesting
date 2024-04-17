const { Builder } = require('selenium-webdriver');
var { After } = require('cucumber');

let driver;

async function getDriver() {
    if (!driver) {
        driver = await new Builder().forBrowser('chrome').build();
    }
    return driver;
}

After(async function () {
    if (driver) {
        await driver.quit();
        driver = null;
    }
});

module.exports = getDriver;
