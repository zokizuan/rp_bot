'use strict';

const puppeteer = require('puppeteer');
const USERNAME_SELECTOR = '#mobile-login-email';
const PASSWORD_SELECTOR = '#mobile-login-pass';
const username = 'hdamnit@gmail.com';
const pass = '2.#UzC6$mc.mDB#';

(async () => {
	const browser = await puppeteer.launch({
		headless: false,
		args: ['--window-size=1360,768'],
	});
	try {
		page = await browser.newPage();
		// set device size to stick to only desktop view
		page.setViewport({
			width: 1360,
			height: 768,
			isMobile: false,
		});
		// open a URL
		page.goto('https://rptechindia.in/', {
			waitUntil: 'networkidle2',
		});
		page.waitForNavigation();
		await page.waitForXPath(
			'/html/body/div[1]/header/nav/div/div/div[2]/div[2]/ul/li[2]/a'
		);
		await page.click('.ajaxlogin-login');
		page.waitForNavigation();
		await page.waitForSelector(USERNAME_SELECTOR);
		page.waitForNavigation();
		await page.type(USERNAME_SELECTOR, username);
		await page.type(PASSWORD_SELECTOR, pass);
		page.waitForNavigation();
	} catch (err) {
		console.error(err.message);
	}
	// finally {
	// 	await browser.close();
	// }
})();
