var Login = function () {

    //Page Object Lists
    var usernameText = element(By.xpath('.//input[@type="name"]'));
    var password = element(By.xpath('.//input[@type="password"]'));
    var loginButton = element(by.xpath("//*[text()=\'Login\']"));

    //Reusable functions
    this.setUserName = function (name) {
        usernameText.sendKeys(name);
        
    };
    this.setPassword = function (passwor) {
        password.sendKeys(passwor);
    };
    this.clickSignIn = function () {
        loginButton.click();
    }
};
module.exports = Login