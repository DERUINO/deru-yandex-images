const fetch = require('node-fetch');
const { randomInt } = require('./tools/helpers');

class ImageParser {
    _url = 'https://www.yandex.ru/images/search';
    html = '';

    constructor(params) {
        this.text = params?.text || '';
        this.page = params?.page || 1;
        this.pageRange = params?.pageRange || 1;
        this.count = params?.count || 1;
    }

    preparedPage() {
        return randomInt(1, this.pageRange);
    }

    async getUrlData() {
        let preparedUrl = this._url;

        if (this.text) {
            preparedUrl += `?text=${this.text}`;
        }

        if (this.page > 1) {
            preparedUrl += `&p=${this.preparedPage()}`;
        }

        const response = await fetch(preparedUrl);
        const html = await response.text();
        
        this.html = html;
    }

    async getImages() {
        await this.getUrlData();

        let array = [this.html.match(/img_url=http(\w|\:|\/|\.|\+|\(|\)|-|_|\?|=|\&|\*|\d|!|@|#|\^|\$|\%|a-zA-Z0-9А-Яа-я)+\&amp/gi)]
		      			
        if (array[0]) {
            array = array.map(elem => decodeURIComponent(elem.replace(/(img_url=|\&amp)/gi, "")));
        } else {
            array = [];
        }

        return {
            items: array.slice(0, this.count),
            page: this.preparedPage()
        };
    }
};

module.exports = ImageParser;