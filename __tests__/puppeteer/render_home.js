/* 
This test suite was created using JESTEER, a project developed by 
Tim Ruszala, Katie Janzen, Clare Cerullo, and Charissa Ramirez.

Learn more at https://github.com/oslabs-beta/Jesteer .
*/
const puppeteer = require('puppeteer'); // v13.0.0 or later

jest.setTimeout(10000);
describe('Homepage', () => {

let browser, page, timeout;

beforeAll(async () => {
browser = await puppeteer.launch({
headless: true,
});
});

beforeEach(async () => {
page = await browser.newPage();
timeout = 5000;
page.setDefaultTimeout(timeout);
});

afterEach(async () => {
await page.close();
});

afterAll(async () => {
await browser.close();
});

it('should display the home page when you click on "CodeAid"', async () => {

{
const promises = [];
promises.push(page.waitForNavigation());
await page.goto('http://localhost:3000/');
await Promise.all(promises);
}

{
const element = await page.waitForSelector('#contents > DIV:nth-child(1) > DIV:nth-child(1) > A:nth-child(1) > H1:nth-child(1)');
await element.click();
}

await page.waitForNavigation();

{
const snapped = await page.$eval('#contents > DIV:nth-child(1) > DIV:nth-child(3)', el => el.innerHTML);
expect(snapped).toMatchSnapshot();
}

});

});
