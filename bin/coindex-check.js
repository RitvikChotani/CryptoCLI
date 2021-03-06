const program = require('commander');
const check = require('../commands/check');

program
    .command('price')
    .description('Check price of coin')
    .option('--coin <type>', 'Add specif coin types in CSV format','BTC,ETH,XRP')
    .option('--curr <type>', 'Change currency', 'USD')
    .action((cmd) => check.price(cmd));

program.parse(process.argv);