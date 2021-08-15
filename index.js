const puppeteer = require('puppeteer');

(async () => {
    let browser;
    try {
        browser = await puppeteer.launch({
            headless: false,
            args: ["--disable-setuid-sandbox"],
            'ignoreHTTPSErrors': true
        });

        const page = await browser.newPage();

        await page.goto('https://popcat.click/');

        await page.waitForSelector("body");

        while (true) {
            await page.click("body");
            // await page.waitForTimeout(0.05);
        }

    } catch (e) {
        console.log("error", e);
    }
    await browser.close();
})();