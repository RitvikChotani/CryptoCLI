const Configstore = require('conf');
const pkg = require('../package.json');

class KeyManager {
    constructor() {
        this.config = new Configstore(pkg.name);
    }

    setKey(key) {
        this.config.set('apiKey', key);
        if(!key) {
            throw new Error('No new key found, please find the new key');
        }
    }

    getKey() {
        const key = this.config.get('apiKey');
        if(!key) {
            throw new Error('No new key found, please find the new key');
        }

        return key;
    }

    deleteKey() {
        
        const key = this.config.get('apiKey');

        if(!key) {
            throw new Error('No new key found, please find the new key');
        }

        this.config.delete('apiKey');

    }
}

module.exports = KeyManager;