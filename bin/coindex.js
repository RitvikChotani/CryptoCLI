#!/usr/bin/env node

const program = require('commander');
const pkg = require('../package.json')

program
    .version(pkg.version)
    .command('key', 'Manage API key')
    .command('check', 'check coin price info')
    .parse(process.argv);

