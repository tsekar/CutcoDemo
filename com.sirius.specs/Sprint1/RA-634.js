var conf = require('/Users/user/Documents/Project/Cutco/com.sirius.runner/configuration.js');
var launcher = require('/Users/user/Documents/Project/Cutco/com.sirius.library/launcher.js');
var homePage = require('/Users/user/Documents/Project/Cutco/com.sirius.pageObjects/homePage_po.js');
describe('RA-634', function () {

    beforeAll(function () {
        browser.manage().deleteAllCookies();
        launcher.geturl().then(function () {
            browser.waitForAngularEnabled(false);
        })
    })
    it('Verify whether shopper is able to login with invalid user accounts', function () {
        let home = new homePage();
    
        home.loginApp();
        browser.sleep(15000);
    })

});