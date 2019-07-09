import {Config} from 'protractor';
import * as reporter from 'cucumber-html-reporter';
import { hostname } from 'os';

export let config: Config = {

    directConnect: true,
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),

    baseUrl: 'http://www.way2automation.com/angularjs-protractor/webtables/',

    capabilities:{
        'browserName': 'chrome'
    },

    specs: ['../feature_files/*.feature'],
   //exclude: [],
    cucumberOpts:{
        tags: ['@addUserTest'],
        format: 'json:./reports/test_results.json',
        require: ['./step_definitions/*.js'],

    },

    onComplete: ()=>{
        var options = {
            theme: 'bootstrap',
            jsonFile: './reports/test_results.json',
            output: './reports/test_results.html',
            storeScreenshots: true,
            screenshotsDirectory: './Reports/screenshots/',
            reportSuiteAsScenarios: true,
            name: 'Typescript-Protractor-Cucumber report',
            brandTitle: 'Regression test results',
            launchReport: true,
            metadata: {
              "App Version":"0.3.2",
              "Test Environment": "STAGING",
              "Browser": "Chrome  75.0.3770.100",
              "Platform": "Windows 10",
              "Parallel": "Scenarios",
              "Executed": "Remote",
          }
      };
   
      reporter.generate(options);
        
    }

}