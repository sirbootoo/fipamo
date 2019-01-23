
[![Made in Nigeria](https://img.shields.io/badge/made%20in-nigeria-008751.svg?style=flat-square)](https://github.com/acekyd/made-in-nigeria)

# Fipamo
This is 

# Using the library.

## Installation

install the library using 

```js
npm install fipamo
```
or 

```js
npm install Fipamo --save
```
to save to your package.json.

## Usage


### In Vanilla Javascript

```js
require('Fipamo')(key, arrKey)
```


```js
const fipamo = require('Fipamo');
const fip = fipamo('jsjss', ['a', 'A', 'zz']);

document.write(fip.crypt('llslsdkdncdkdk'));
document.write('\n');
document.write(fip.encodingURI('ӳӳӬӳӬӻӴӻӱӼӻӴӻӴ'));
document.write('\n');
document.write(fip.decodingURI(fip.encodingURI('ӳӳӬӳӬӻӴӻӱӼӻӴӻӴ')));
document.write('\n');
document.write(' -----> ');
document.write(fip.crypt('ӳӳӬӳӬӻӴӻӱӼӻӴӻӴ'));

```


## Open Issues / Contributions

You can open issues for things which you thing I did wrong. Or better you can contribute to this project. We will happy to have your contributions. Thank you

## License

