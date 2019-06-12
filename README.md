# Protractor Framework
    A custom automation framework to support an ionic app and desktop version of site

## Getting Started
    These instructions will get you a copy of the project up and running on your local, remote & mobile execution for testing (regression test cases & module based execution). See deployment for notes on how to deploy the project on a live system

### Prerequisites
    You need to install the following software/application in your deploying system,        
    1. Install Xcode 
    2. Install Android SDK and Set android home
        https://stackoverflow.com/questions/27449206/what-is-the-final-version-of-the-adt-bundle [Direct file, download and keep it in any folder]
        
        export JAVA_HOME=/Library/Java/JavaVirtualMachines/jdk1.8.0_144.jdk/Contents/Home //JDK file path
        export JAVA_HOME=`/usr/libexec/java_home -v 1.8.0_131`
        export ANDROID_HOME=/Project/adt-bundle-mac-x86_64-20140702/sdk/
        export PATH=$PATH:/usr/local/bin:$JAVA_HOME/bin:$ANDROID_HOME/tools:$ANDROID_HOME/platform-tools
        export ANDROID_PROFILE=/Project/adt-bundle-mac-x86_64-20140702/sdk/

### Installing
    Installations on require package to run the basic protractor test,
    1. Download and Install Code IDE (https://code.visualstudio.com/)
    2. Install the protractor via npm
        command: npm install -g protractor
            This will install two command line tools, protractor and webdriver-manager. Try running protractor --version to make sure it's working.

            The webdriver-manager is a helper tool to easily get an instance of a Selenium Server running. Use it to download the necessary binaries with:

                command: webdriver-manager update

            Now start up a server with:

                command: **webdriver-manager start**

    3. The protractor-beautiful-reporter module is available via npm:
            command: npm install protractor-beautiful-reporter --save-dev
                    In your Protractor configuration file, register protractor-beautiful-reporter in Jasmine. 

## Running the tests
    You can start run your test after configuring it in configuration.js. Basically script runner file would be configuration.js and triggering with all the necessary details.
        command: protractor configuration.js

        Note: Before that you need to start the respective servers (selenium standalone server is must and followed by appium commands if you want to run in devices)

## Built With
    Protractor & Jasmine - The code framework
    Beautiful Reporter - Reproting Structure


## Author
    Tamilarasan Sekar <Tamilarasan.Sekar@siriuscom.com or tamilarasan5033@gmail.com>








