const axios = require('axios');

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
    _operations: 0,
    fetch(codes) {
        if (this._cache[codes]) {
            return Promise.resolve(this._cache[codes]);
        }

        if (this._operations === 10) {
            this.clear();
        }

        return axios
            .get(`${apiMethod}${codes}`, apiParams)
            .then(({ data }) => {
                this._cache[codes] = data;
                return {
                    success: true,
                    data,
                };
            })
            .catch(error => ({
                success: false,
                ...error
            }))
            .finally(() => {
                this._operations += 1;
            });
    },
    clear() {
        this._cache = {};
        this._operations = 0;
    },
};

module.exports = PricesService;
