
# Fipamo
This is an encryption library built in javascript with two inputs.

# Using the library.

## Installation

install the library using 

```js
npm install fipamo
```
or 

```js
npm install fipamo --save
```
to save to your package.json.

## Usage


### In Vanilla Javascript

```js
require('fipamo')(key, arrKey)
```


```js
const fipamo = require('fipamo');
const fip = new fipamo('Secret key', ['array', 'of', 'keys.', 'Please', 'this', 'is', 'compulsory']);

/* func.crypt encrypts the data. */
console.log(fip.crypt('llslsdkdncdkdk')); // Sample string to encrypt --> result = ӳӳӬӳӬӻӴӻӱӼӻӴӻӴ

/* Encoding URI enables the passing of the encrypted data string over HTTP */
console.log(fip.encodingURI('ӳӳӬӳӬӻӴӻӱӼӻӴӻӴ')); // %D3%B3%D3%B3%D3%AC%D3%B3%D3%AC%D3%BB%D3%B4%D3%BB%D3%B1%D3%BC%D3%BB%D3%B4%D3%BB%D3%B4 

/* This function decodes the encoded URI and returns the encryted data string */
console.log(fip.decodingURI(fip.encodingURI('ӳӳӬӳӬӻӴӻӱӼӻӴӻӴ'))); // ӳӳӬӳӬӻӴӻӱӼӻӴӻӴ

/* The crypt function also decrypts the encrypted data */
console.log(fip.crypt('ӳӳӬӳӬӻӴӻӱӼӻӴӻӴ')); // llslsdkdncdkdk

// You can also put the Secret Key and Array of keys in the function directly
const data = {
    key: value,
    key1: value1,
    key2: value2
}
console.log(fip.crypt(data, 'Secret key', ['array', 'of', 'keys.', 'Please', 'this', 'is', 'compulsory'])); // Sample string to encrypt --> result = ӳӳӬӳӬӻӴӻӱӼӻӴӻӴ

```


## Open Issues / Contributions

You can open issues for things which you thing I did wrong. Or better you can contribute to this project. We will happy to have your contributions. Thank you

## License

