const axios = require('axios');
const colors = require('colors');

class CryptoAPI {
    constructor(apiKey) {
        this.apiKey = apiKey;
        this.baseURL = `https://api.nomics.com/v1/currencies/ticker`;
    }
    
    async getPriceData(coin, currency) {
        try {

            //Formatter for currency
            const formatter = new Intl.NumberFormat('en-US', {
                style: 'currency',
                 currency: currency
            })
            const res = await axios.get(`${this.baseURL}?key=${this.apiKey}&ids=${coin}&interval=1d,30d&convert=${currency}`);
            let output = '';

            res.data.forEach((coin) => {
                output += `Coin: ${coin.symbol.yellow} (${coin.name}) | Price: ${formatter.format(coin.price).blue} | Rank: ${coin.rank.yellow}\n`
            });
            return output;
        } catch(err) {
            handleError(err);
        }
    }
}

const handleError = (err) => {
    if(err.response.status === 401) {
        throw new Error('Your API Key is invalid - Goto https://nomics.com');
    } else if(err.response.status === 404) {
        throw new Error('Your API is not response, check internet maybe?');
    } else {
        throw new Error('Something is wrong, something we couldn\'t even figure out!');
    }
}

module.exports = CryptoAPI;