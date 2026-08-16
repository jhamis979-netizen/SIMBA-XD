const { Client, LocalAuth } = require('whatsapp-web.js');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const client = new Client({ 
    authStrategy: new LocalAuth(),
    puppeteer: { 
        executablePath: '/opt/render/.cache/puppeteer/chrome/linux-*/chrome-linux64/chrome',
        args: [
            '--no-sandbox', 
            '--disable-setuid-sandbox',
            '--disable-dev-shm-usage',
            '--disable-gpu'
        ]
    }
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
});

app.get("/", (req, res) => res.send("Bot iko hai!"));
app.listen(PORT);

client.initialize();

setTimeout(async () => {
    if (!client.info) {
        const code = await client.requestPairingCode('2557XXXXXXXX'); // WEKA NAMBA YAKO
        console.log('PAIRING CODE YAKO NI: ', code);
    }
}, 10000);
