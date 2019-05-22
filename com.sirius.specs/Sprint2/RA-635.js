var conf = require('/Users/user/Documents/Project/Cutco/com.sirius.runner/configuration.js');
var launcher = require('/Users/user/Documents/Project/Cutco/com.sirius.library/launcher.js');
var homePage = require('/Users/user/Documents/Project/Cutco/com.sirius.pageObjects/homePage_po.js');

var testInputs = require('/Users/user/Documents/Project/Cutco/com.sirius.testData/data.json');

describe('RA-635', function () {
    
    beforeAll(function () {
        browser.manage().deleteAllCookies();
        launcher.geturl().then(function () {
            browser.waitForAngularEnabled(false);
        })    
    })
    it('Verify whether user is able to login with valid user accounts', function () {
        let home = new homePage();

        home.loginApp();
    })
});