"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const reporter = __importStar(require("cucumber-html-reporter"));
exports.config = {
    directConnect: true,
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    baseUrl: 'http://www.way2automation.com/angularjs-protractor/webtables/',
    capabilities: {
        'browserName': 'chrome'
    },
    specs: ['../feature_files/*.feature'],
    //exclude: [],
    cucumberOpts: {
        tags: ['@addUserTest'],
        format: 'json:./reports/test_results.json',
        require: ['./step_definitions/*.js'],
    },
    onComplete: () => {
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
                "App Version": "0.3.2",
                "Test Environment": "STAGING",
                "Browser": "Chrome  75.0.3770.100",
                "Platform": "Windows 10",
                "Parallel": "Scenarios",
                "Executed": "Remote",
            }
        };
        reporter.generate(options);
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdFJ1bm5lci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3Rlc3RSdW5uZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0EsaUVBQW1EO0FBR3hDLFFBQUEsTUFBTSxHQUFXO0lBRXhCLGFBQWEsRUFBRSxJQUFJO0lBQ25CLFNBQVMsRUFBRSxRQUFRO0lBQ25CLGFBQWEsRUFBRSxPQUFPLENBQUMsT0FBTyxDQUFDLCtCQUErQixDQUFDO0lBRS9ELE9BQU8sRUFBRSwrREFBK0Q7SUFFeEUsWUFBWSxFQUFDO1FBQ1QsYUFBYSxFQUFFLFFBQVE7S0FDMUI7SUFFRCxLQUFLLEVBQUUsQ0FBQyw0QkFBNEIsQ0FBQztJQUN0QyxjQUFjO0lBQ2IsWUFBWSxFQUFDO1FBQ1QsSUFBSSxFQUFFLENBQUMsY0FBYyxDQUFDO1FBQ3RCLE1BQU0sRUFBRSxrQ0FBa0M7UUFDMUMsT0FBTyxFQUFFLENBQUMseUJBQXlCLENBQUM7S0FFdkM7SUFFRCxVQUFVLEVBQUUsR0FBRSxFQUFFO1FBQ1osSUFBSSxPQUFPLEdBQUc7WUFDVixLQUFLLEVBQUUsV0FBVztZQUNsQixRQUFRLEVBQUUsNkJBQTZCO1lBQ3ZDLE1BQU0sRUFBRSw2QkFBNkI7WUFDckMsZ0JBQWdCLEVBQUUsSUFBSTtZQUN0QixvQkFBb0IsRUFBRSx3QkFBd0I7WUFDOUMsc0JBQXNCLEVBQUUsSUFBSTtZQUM1QixJQUFJLEVBQUUsdUNBQXVDO1lBQzdDLFVBQVUsRUFBRSx5QkFBeUI7WUFDckMsWUFBWSxFQUFFLElBQUk7WUFDbEIsUUFBUSxFQUFFO2dCQUNSLGFBQWEsRUFBQyxPQUFPO2dCQUNyQixrQkFBa0IsRUFBRSxTQUFTO2dCQUM3QixTQUFTLEVBQUUsdUJBQXVCO2dCQUNsQyxVQUFVLEVBQUUsWUFBWTtnQkFDeEIsVUFBVSxFQUFFLFdBQVc7Z0JBQ3ZCLFVBQVUsRUFBRSxRQUFRO2FBQ3ZCO1NBQ0osQ0FBQztRQUVGLFFBQVEsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7SUFFN0IsQ0FBQztDQUVKLENBQUEifQ==