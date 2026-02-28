const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    headless: 'new',
    executablePath: '/usr/bin/chromium',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage']
  });
  
  const page = await browser.newPage();
  await page.setViewport({ width: 420, height: 800 });
  await page.goto('http://localhost:3010', { waitUntil: 'networkidle0' });
  
  await page.screenshot({ 
    path: '/home/node/.openclaw/workspace/personal-card/screenshot.png',
    fullPage: true 
  });
  
  await browser.close();
  console.log('Screenshot saved!');
})();
