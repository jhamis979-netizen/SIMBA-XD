const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const client = new Client({ 
    authStrategy: new LocalAuth(),
    puppeteer: { args: ['--no-sandbox', '--disable-setuid-sandbox'] }
});

client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
    console.log('SCAN HII QR KWA WHATSAPP YA BIASHARA')
});

client.on('ready', () => {
    console.log('Double Touchez Bot IKO ONLINE 🔥');
});

client.on('message', msg => {
    const text = msg.body.toLowerCase();
    if (text == 'bei') {
        msg.reply(`📸 *DOUBLE TOUCHEZ STUDIO*
BEI ZETU:
1. Baby Shoot: 150,000 TZS
2. Wedding: 500,000 TZS  
3. Studio Portrait: 50,000 TZS
Tuma "BOOK" kupanga`);
    }
    if (text == 'hi' || text == 'habari') {
        msg.reply(`Karibu Double Touchez 📸🔥
Tuma "BEI" kuona bei zetu
Tuma "BOOK" kupanga shoot`);
    }
    if (text == 'book') {
        msg.reply(`Poa! Niambie: 
1. Aina ya shoot
2. Tarehe unayotaka
Mfano: BOOK WEDDING 25/08/2026`);
    }
});

app.get("/", (req, res) => res.send("Double Touchez Bot iko hai!"));
app.listen(PORT, () => console.log(`Server running on ${PORT}`));

client.initialize();
