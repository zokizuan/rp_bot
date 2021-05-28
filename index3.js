const USERNAME_SELECTOR = '#mobile-login-email';
const PASSWORD_SELECTOR = '#mobile-login-pass';
const username = 'alexmercer327@gmail.com';
const pass = 'Xsaints@626742';
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
		'https://rptechindia.in/nvidia-geforce-rtx-3070.html',
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
