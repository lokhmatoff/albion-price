const axios = require('axios');

const itemsResource =
    'https://raw.githubusercontent.com/broderickhyman/ao-bin-dumps/master/formatted/items.json';

const ItemsService = {
    _cache: [],
    fetch() {
        if (this._cache.length) {
            return Promise.resolve(this._cache);
        }

        return axios.get(itemsResource)
            .then(({ data }) => {
                this._cache = data;
                return {
                    success: true,
                    data,
                }
            })
            .catch(error => ({
                success: false, ...error
            }));
    },
    clear() {
        this._cache = [];
    }
};

module.exports = ItemsService;
