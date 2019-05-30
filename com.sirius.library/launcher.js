module.exports.geturl = function () {
    return new Promise(function (res, rej) {
        browser.getCapabilities().then(function (browserStart) {
            var exportBrowserName = browserStart.get("browserName");
            switch (exportBrowserName) {
                case 'chrome':
                    browser.driver.manage().deleteAllCookies();
                    browser.get(''); //link 
                    break;
                default:
                    browser.driver.manage().deleteAllCookies();
                    browser.waitForAngularEnabled(false);
                    break;
            }
            res(true);
        });
    })
};
