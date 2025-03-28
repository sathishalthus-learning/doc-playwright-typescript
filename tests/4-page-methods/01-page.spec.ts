//
import {test,expect} from "@playwright/test";

// page 
// page is default fixture passed to everytest
test(`page navigations`,async({page})=>{
    await page.goto('https://playwright.dev/docs/intro');
    // content()
    // returns html content of page
    console.log(page.content());

    //context

    // drag drop
    //isClosed
    //mainframe
    //opener
    // pause
    //pdf
    //removealllistners
    // rempvelocatorhanler
    //requestgc
    //route
    //routefromhar
    //rotewebsocket
    //screenshot
    //setcontent
    // setnavigationtimeout
    // setdefaulttimeout
    // setextragheaders
    //setviewportsize
    //title
    //unroute
    //unrouteall
    //url
    //video
    //viewportsize
    //workers
    

    await page.close();
})



