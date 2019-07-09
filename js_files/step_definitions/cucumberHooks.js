"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const protractor_1 = require("protractor");
cucumber_1.Before(() => {
    protractor_1.browser.manage().window().setSize(800, 600); //maximize();
    console.log("Test started--------------");
});
cucumber_1.After(function (scenario) {
    return __awaiter(this, void 0, void 0, function* () {
        if (scenario.result.status === cucumber_1.Status.FAILED) {
            const screenShotFail = yield protractor_1.browser.takeScreenshot();
            this.attach(screenShotFail, "image/png");
        }
        // if(scenario.result.status=== Status.PASSED){
        //     const screenShotPass= await browser.takeScreenshot();
        //     this.attach(screenShotPass, "image/png");
        // }
        console.log("Test completed # # # # # #");
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VjdW1iZXJIb29rcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3N0ZXBfZGVmaW5pdGlvbnMvY3VjdW1iZXJIb29rcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsdUNBQWlEO0FBQ2pELDJDQUFxQztBQUVyQyxpQkFBTSxDQUFDLEdBQUUsRUFBRTtJQUNQLG9CQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFBLGFBQWE7SUFDekQsT0FBTyxDQUFDLEdBQUcsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO0FBRTlDLENBQUMsQ0FBQyxDQUFDO0FBRUgsZ0JBQUssQ0FBQyxVQUFnQixRQUFROztRQUMxQixJQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsTUFBTSxLQUFJLGlCQUFNLENBQUMsTUFBTSxFQUFDO1lBQ3ZDLE1BQU0sY0FBYyxHQUFFLE1BQU0sb0JBQU8sQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUNyRCxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxXQUFXLENBQUMsQ0FBQztTQUM1QztRQUVELCtDQUErQztRQUMvQyw0REFBNEQ7UUFDNUQsZ0RBQWdEO1FBQ2hELElBQUk7UUFFSixPQUFPLENBQUMsR0FBRyxDQUFDLDRCQUE0QixDQUFDLENBQUM7SUFDOUMsQ0FBQztDQUFBLENBQUMsQ0FBQSJ9