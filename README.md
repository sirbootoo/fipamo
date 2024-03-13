
# Fipamo
Introducing Fipamo: a javascript pioneering encryption solution, powered by Bitwise XOR for formidable data protection. Fipamo offers seamless encryption and decryption of strings, bolstered by customizable keys to ensure maximum confidentiality. Notably, Fipamo features an adaptive security paradigm, confronting unauthorized access with escalating complexity, thus fortifying data integrity with each challenge. Embrace Fipamo today and embrace a paradigm shift in data security, where sophistication meets resilience in safeguarding your digital assets.

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
const App = require("fipamo");

var app = new App();

const key = "lol", arrKeys = ["a", "b", "c", "d", "e"];
let encryptedString = "", testString = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus rhoncus nisi, at porttitor mi pretium id. Integer vitae euismod arcu. Proin non libero in magna gravida euismod eget ac ante. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam gravida mi tincidunt elit tincidunt, nec blandit felis rutrum. Praesent ac iaculis ante. Nullam tincidunt nisi pretium, eleifend dui nec, tristique massa. Pellentesque molestie commodo eros, sit amet sollicitudin nunc ultrices a. Etiam luctus dignissim accumsan.`


const encryptWithoutCompression = () => {
    encryptedString = app.crypt("hello world", key, arrKeys);
    return encryptedString
}

console.log(encryptWithoutCompression(), "----- Encrypt Without Compression \n\n"); // 礫礦礯礯礬祣礴礬礱礯礧

const decrypt = () => {
    return app.crypt(encryptedString, key, arrKeys);
}

console.log(decrypt(), "----- Decrypt \n\n"); // hello world

```

#### With Compression
Compression works for large string

```js

const encryptWithCompression = (str) => {
    encryptedString = app.encrypt(str, key, arrKeys);
    return encryptedString;
}

const enc = encryptWithCompression("hello world".repeat(10000)); 

console.log(enc);

const decryptCompressedString = (str) => {
    decryptedString = app.decrypt(str, key, arrKeys);
    return decryptedString;
} 
console.log(decryptCompressedString(enc))

```


## Open Issues / Contributions

You can open issues for things which you thing I did wrong. Or better you can contribute to this project. We will happy to have your contributions. Thank you

## License
MIT
