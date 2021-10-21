const axios = require('axios');

const itemsResource =
    'https://raw.githubusercontent.com/broderickhyman/ao-bin-dumps/master/formatted/items.json';

const ItemsService = {
    _cache: [],
    fetch() {
        if (this._cache.length) {
            return Promise.resolve({
                success: true,
                data: this._cache,
                error: null,
            });
        }

        return axios.get(itemsResource)
            .then(({ data }) => {
                this._cache = data;
                return {
                    success: true,
                    data,
                    error: null,
                }
            })
            .catch(error => ({
                success: false,
                data: null,
                error,
            }));
    },
    clear() {
        this._cache = [];
    }
};

module.exports = ItemsService;
