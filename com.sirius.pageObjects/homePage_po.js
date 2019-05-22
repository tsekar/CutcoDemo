var config = require('../com.sirius.runner/configuration.js');
var testInputs = require('../com.sirius.testData/data.json');

let Homepage = function () {

    //Page Object Lists
    var passwordText = element(by.xpath('.//input[@type=\'password\']'));
    var usernameText = element(by.xpath('.//input[@type=\'name\']'));
    var loginButton = element(by.xpath("//ion-button[contains(.,'Login')]"));
    var usernameError = element(by.xpath('//*[.="Please enter the Username"]'));
    var passwordError = element(by.xpath('//*[.="Please enter the Password"]'));


    //Reusable functions
    this.loginApp = function () {
        let browserName = config.executionName;
        switch (browserName) {
            case 'chrome':
                usernameText.sendKeys(testInputs.chrome.username);
                passwordText.sendKeys(testInputs.chrome.password);
                break;
            case 'iphone':
                usernameText.sendKeys(testInputs.iphone.username);
                passwordText.sendKeys(testInputs.iphone.password);
                break;
            case 'android':
                usernameText.sendKeys(testInputs.android.username);
                passwordText.sendKeys(testInputs.android.password);
                break;
            case 'ipad':
                usernameText.sendKeys(testInputs.ipad.username);
                passwordText.sendKeys(testInputs.ipad.password);
                break;
        }
        loginButton.click();
    }


    this.getUsernameError = function () {
        usernameError.value();
        console.log(usernameError.value());
    }

};

module.exports = Homepage;