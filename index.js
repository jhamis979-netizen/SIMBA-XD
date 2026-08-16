const { Client, LocalAuth } = require('whatsapp-web.js');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const client = new Client({ 
    authStrategy: new LocalAuth(),
    puppeteer: { args: ['--no-sandbox', '--disable-setuid-sandbox'] }
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
Tuma "BEI" kuona bei zetu`);
    }
});

app.get("/", (req, res) => res.send("Bot iko hai!"));
app.listen(PORT);

client.initialize();

// HII NDIO INATOA PAIRING CODE
client.on('auth_failure', msg => console.log('AUTH FAILED', msg));
client.on('disconnected', reason => console.log('DISCONNECTED', reason));

setTimeout(async () => {
    if (!client.info) {
        const code = await client.requestPairingCode('2557XXXXXXXX'); // WEKA NAMBA YAKO HAPA
        console.log('PAIRING CODE YAKO NI: ', code);
    }
}, 5000);
