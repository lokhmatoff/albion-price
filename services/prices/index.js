const axios = require('axios');
// const compress = require('zlib').gzip;

const apiMethod = 'https://www.albion-online-data.com/api/v2/stats/prices/';
const apiParams = {
    locations: [
        'Caerleon',
        'Lymhurst',
        'Martlock',
        'Bridgewatch',
        'FortSterling',
        'Thetford',
        'ArthursRest',
        'MerlynsRest',
        'MorganasRest',
        'BlackMarket',
    ],
};

const PricesService = {
    _cache: {},
    fetch(itemCode) {
        if (this._cache[itemCode]) {
            return Promise.resolve(this._cache[itemCode]);
        }

        return axios
            .get(`${apiMethod}${itemCode}`, apiParams)
            .then(({ data }) => {
                this._cache[itemCode] = data;
                return data;
            })
            .catch(error => ({ ...error }));
    },
    clear() {
        this._cache = {};
    },
};

module.exports = PricesService;
