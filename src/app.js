const Quotes = require('./db/Quotes');

exports.lambdaHandler = async (event, context) => {
    return Quotes[Math.floor(Math.random() * Quotes.length)];
};
