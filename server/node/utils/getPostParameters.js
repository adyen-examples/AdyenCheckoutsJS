const { ADYEN_API_KEY, CHECKOUT_URL, ADYEN_MERCHANT } = require('./config');

module.exports = (endpoint, request) => {
    const body = JSON.stringify({
        merchantAccount: ADYEN_MERCHANT,
        ...request
    });

    return {
        body,
        url: `${CHECKOUT_URL}/${endpoint}`,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
            'Content-Length': Buffer.byteLength(body, 'utf8'),
            'X-Api-Key': ADYEN_API_KEY
        }
    };
};
