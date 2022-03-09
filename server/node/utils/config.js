const { ADYEN_API_KEY, ADYEN_MERCHANT, ADYEN_CLIENT_KEY } = process.env;

const API_VERSION = 'v68';
const CHECKOUT_URL = `https://checkout-test.adyen.com/${API_VERSION}`;

module.exports = {
    ADYEN_API_KEY,
    CHECKOUT_URL,
    ADYEN_MERCHANT,
    ADYEN_CLIENT_KEY
};
