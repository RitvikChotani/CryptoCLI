const isRequired = (input) => {
    return input === '' ? 'This is required' : true;
}

module.exports = { isRequired };