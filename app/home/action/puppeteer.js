const puppeteer = require('puppeteer');


module.exports = function(req, res){
    
    (async () => {
        const browser = await puppeteer.launch({headless: false});
        const page = await browser.newPage();
        await page.goto('http://baidu.com');
        //await page.screenshot({path: 'xin.png'});
        page.evaluate(() => {
            $("#loginNav>li:eq(1)").click();
            $("#userName").val("");
            $("#pwd").val("");
            console.log($(".table-bordered"));
        });
        //await browser.close();

        res.send("ok");
    })();
};