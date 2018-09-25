/**
 * author: Shawn
 * time  : 9/25/18 8:48 PM
 * desc  :
 * update: Shawn 9/25/18 8:48 PM
 */

const puppeteer = require('puppeteer');

async function sleep(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(), ms)
    })
}

~async function () {

    // for (let i = 0; i < 4; i++) {
        const browser = await puppeteer.launch({
            headless: false,
            slowMo: 100,
            devtools: false,
            // args: ['--ash-host-window-bounds=1024x768', `--proxy-server=http://42.59.98.102:24651`],
            // args: ['--ash-host-window-bounds=1920x1080'],
        });
        const page = await browser.newPage();
        await page.goto('https://passport.jd.com/new/login.aspx');

        // select account login
        let loginTab = await page.$$('.login-tab');
        await loginTab[1].click();

        // input account
        let loginNameInput = await page.$('#loginname');
        await loginNameInput.focus();
        await page.keyboard.type("your account");

        // input password
        let passwordInput = await page.$('#nloginpwd');
        await passwordInput.focus();
        await page.keyboard.type("your password");


        let loginBtn = await page.$('#loginsubmit');
        await loginBtn.click();

        await sleep(2000);

        // browser.close();
    // }


    // let inputElement = await page.$('.JDJRV-img-refresh');
}();
