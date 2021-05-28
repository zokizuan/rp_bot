const USERNAME_SELECTOR = '#mobile-login-email';
const PASSWORD_SELECTOR = '#mobile-login-pass';
const username = 'hdamnit@gmail.com';
const pass = '2.#UzC6$mc.mDB#';
const puppeteer = require('puppeteer');
(async () => {
	const browser = await puppeteer.launch({
		headless: false,
		args: ['--window-size=1360,768'],
	});
	const page = await browser.newPage();
	page.goto('https://rptechindia.in/', {
		waitUntil: 'networkidle2',
	});
	page.setViewport({
		width: 1366,
		height: 768,
		isMobile: false,
	});
	await page.waitForNavigation();
	await page.waitForTimeout(500);

	for (let i = 0; i < 4; i++) {
		// browser.close()
		await page.keyboard.press('Tab');
		await page.waitForTimeout(200);
	}
	await page.keyboard.press('Enter');
	await page.type(USERNAME_SELECTOR, username);
	await page.waitFor(500);

	await page.type(PASSWORD_SELECTOR, pass);
	await Promise.all([page.waitForNavigation(), page.click('#loginsubmit')]);
	page.goto(
		'https://rptechindia.in/sandisk-ultra-dual-drive-luxe-usb-type-c-1-tb-sdddc4-1t00-i35.html',
		{
			waitUntil: 'networkidle0',
		}
	);
	await page.waitForNavigation();
	while (true) {
		if ((await page.$('#buy-now')) !== null) {
			await page.click('#buy-now');
			break;
			// browser.close();
		} else {
			await page.reload(['networkidle0', 'domcontentloaded']);
		}
	}
})();
