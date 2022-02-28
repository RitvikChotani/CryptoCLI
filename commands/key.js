const KeyManager = require('../lib/KeyManager')
const colors = require('colors');
const inquirer = require('inquirer');
const { isRequired } = require('../utils/validation')

const keyManager = new KeyManager();

const key = {
    async set() {
        const input = await inquirer.prompt([
            {
                type:'input',
                name:'key',
                message: 'Enter API key'.green + 'from https://nomics.com',
                validate: isRequired
            }
        ]);

        keyManager.setKey(input);
        if(key) console.log('API key set'.blue);
    },
    show() {
        try {
           const key = keyManager.getKey();
           console.log(`API key: `, key.key.yellow);
        } catch(e) {
            console.error(e.message.red)
        }
    },
    remove() {
        try {
            keyManager.deleteKey();
            console.log(`API key removed`.blue);
         } catch(e) {
             console.error(e.message.red)
         }
    },
}

module.exports = key;