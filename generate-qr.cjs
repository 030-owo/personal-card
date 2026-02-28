const QRCode = require('qrcode');

// vCard format
const vCard = `BEGIN:VCARD
VERSION:3.0
FN:洪菘崴
TEL;TYPE=CELL:0953301633
EMAIL:eeerrreeerrr937@gmail.com
ORG:盛筑自動化有限公司
TITLE:機器人工程師
NOTE:國立勤益科技大學 人工智慧系
END:VCARD`;

QRCode.toFile('/home/node/.openclaw/workspace/personal-card/public/qrcode.png', vCard, {
  width: 300,
  margin: 2,
  color: {
    dark: '#1e293b',
    light: '#ffffff'
  }
}, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log('QR Code generated!');
  }
});
