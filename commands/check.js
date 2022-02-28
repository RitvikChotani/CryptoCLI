const KeyManager = require('../lib/KeyManager');
const CryptoAPI = require('../lib/CryptoAPI');

const keyManager = new KeyManager();

const check = {
    async price(cmd) {
        try {
            const key = keyManager.getKey();

            const api = new  CryptoAPI(key);

            const price = await api.getPriceData(cmd.coin, cmd.curr);
            console.log(price);
        } catch(err) {
            console.error(err.message.red);
        }
    }
}

module.exports = check;