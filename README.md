# yandex-images-api

Becouse official yandex images api does not exists, i wrote parser for yandex images.

(parser can work unstable, becouse yandex periodically usage captca for checking requests)

## Installation

```
npm i deru-yandex-images --save
```

## How Usage?

Import plugin with module or require type.

```javascript
import ImageParser from 'deru-yandex-images';
```

or

```javascript
require ImageParser = require('deru-yandex-images');
```

Use new instance of Parser:

(Promise format)
```javascript
new ImageParser({ params })
    .getImages()
    .then(res => console.log(res))
    .catch(err => console.error(err));
```

(async await format)
```javascript
try {
    const images = await new ImageParser({ params }).getImages();

    console.log(images);
} catch (err) {
    console.error(err);
}
```

```javascript
/**
 * return Object
 * 
 * example:
 * {
 *  items: ['image1.png', 'image2.png'],
 *  page: 1
 * }
 */
```

## Params

| Prop | type | Description |
| ---- | ------------| ---- |
| text | `String` | Value for search |
| count | `Number` | Count of returned images |
| page | `Number` | Page number |
| pageRange | `Number` | Set random page of range 1-pageRange