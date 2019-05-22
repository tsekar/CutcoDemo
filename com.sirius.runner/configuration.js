var HtmlReporter = require('protractor-beautiful-reporter');
let date = new Date() + "";
date = date.substr(0, date.indexOf(" GMT"));
let browserStartGlobal;

exports.config = {
  multiCapabilities:
    [
      {
        seleniumAddress: 'http://127.0.0.1:4730/wd/hub',
        browserName: 'android',
        platformName: 'Android',
        platformVersion: '6.0.1',
        deviceName: 'Samsung_Galaxy_S7',
        udid: 'ce10160a9195a30c01',
        app: '../com.sirius.library/Apps/app-debug.apk',
        bundleId: 'com.sirius.cutcorepapp',
        autoWebviewTimeout: 20000,
        autoWebview: true,
        name: 'android',
        automationName: 'appium',
        nativeWebScreenshot: true,
        noReset: false,
      },
      {
        seleniumAddress: 'http://172.19.16.150:4444/wd/hub',
        browserName: 'chrome',
        name: 'chrome',
        platformName: 'chrome',
      },
      {
        seleniumAddress: "http://127.0.0.1:4723/wd/hub",
        browserName: '',
        platformName: "iOS",
        platformVersion: "11.1.2",
        deviceName: "Sirius X",
        udid: "6e9a44f84b7f17c4606cd948036e92de4a636b35",
        app: "../com.sirius.library/Apps/MyApp.ipa",
        bundleId: "com.sirius.myapp",
        autoWebviewTimeout: 40000,
        autoWebview: true,
        automationName: "XCUITest",
        nativeWebTap: true,
        usePrebuiltWDA: true,
        nativeWebScreenshot: true,
        defaultTimeoutInterval: 45000,
        startIWDP: true,
        name: 'iphone',
      }
    ],

  framework: 'jasmine2',
  //specs: ['../com.sirius.specs/Sprint1/RA-634.js', '../com.sirius.specs/Sprint2/RA-635.js'],

  suites: {
    smoke: '../com.sirius.specs/Sprint1/*.js',
    regression: '../com.sirius.specs/**/*.js'
  },
  restartBrowserBetweenTests: true,

  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
  },
  onPrepare: function () {

    browser.getSession().then(function (session) {
      module.exports.browserName = session.caps_.map_.get("browserName");
      module.exports.executionName = session.caps_.map_.get("name");
    });

    browser.getCapabilities().then(function (browserStart) {
      if (browserStart.get("browserName") === '') {
        browserStartGlobal = browserStart;
      }
    }).finally(function () {
      if (browserStartGlobal) {
        browserStartGlobal.set("browserName", browserStartGlobal.get("name"));
      }
    });

    jasmine.getEnv().addReporter(new HtmlReporter({
      baseDirectory: '../com.sirius.testReports/' + date
    }).getJasmine2Reporter()
    );
  }

};