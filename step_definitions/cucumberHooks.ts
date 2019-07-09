import { Before, After, Status } from "cucumber";
import { browser } from "protractor";

Before(()=>{
    browser.manage().window().maximize();//setSize(900, 700);//
    console.log("Test started--------------");
    
});

After(async function (scenario){
    if(scenario.result.status=== Status.FAILED){
        const screenShotFail= await browser.takeScreenshot();
        this.attach(screenShotFail, "image/png");
    }

    // if(scenario.result.status=== Status.PASSED){
    //     const screenShotPass= await browser.takeScreenshot();
    //     this.attach(screenShotPass, "image/png");
    // }

    console.log("Test completed # # # # # #"); 
})