const axios = require('axios');

const itemsResource =
    'https://raw.githubusercontent.com/broderickhyman/ao-bin-dumps/master/formatted/items.json';

const ItemsService = {
    fetch() {
        return axios.get(itemsResource)
            .then(({ data }) => data)
            .catch(error => ({ ...error }));
    }
};

module.exports = ItemsService;
