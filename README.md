
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
const App = require("fipamo");

var app = new App();

const key = "lol", arrKeys = ["a", "b", "c", "d", "e"];
let encryptedString = "", testString = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus rhoncus nisi, at porttitor mi pretium id. Integer vitae euismod arcu. Proin non libero in magna gravida euismod eget ac ante. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam gravida mi tincidunt elit tincidunt, nec blandit felis rutrum. Praesent ac iaculis ante. Nullam tincidunt nisi pretium, eleifend dui nec, tristique massa. Pellentesque molestie commodo eros, sit amet sollicitudin nunc ultrices a. Etiam luctus dignissim accumsan.`


const encryptWithoutCompression = () => {

    encryptedString = app.crypt("hello world", key, arrKeys);

    return encryptedString

}

console.log(encryptWithoutCompression(), "----- Encrypt Without Compression \n\n"); // 礫礦礯礯礬祣礴礬礱礯礧



const decryptWithoutCompression = () => {

    return app.crypt(encryptedString, key, arrKeys);

}

console.log(decryptWithoutCompression(), "----- Decrypt Without Compression \n\n"); // hello world


const encryptWithCompression = () => {

    encryptedString = app.compressCrypt(testString, key, arrKeys);

    return encryptedString

}

const compressedPayload = encryptWithCompression()

console.log(compressedPayload, "----- Encrypt With Compression \n\n"); // 礏礬礱礦礮祣礪礳礰礶硇礧礬礯硂祣礰礪礷祣礢礮礦礷祯祣礠礬礭礰礦礠礷硕礶礱硐礧硅礪礰礠礪礭礤祣礦礯硒祭祣礇硘硝祣礯礶硜礶礰祣礱礫硘礠硹祣礭硤礪硛礢硑礳硂礷礷硒硍礮礪祣礳硁砏硊硆礧硲礊礭硣礤礦硠礵硒礢礦确礶硤礮礬礧硐礱砃硲礓礱礬硩码硘硵礪礡砞礬硆礭祣礮礢礤礭礢祣礤礱礢砜礧砼礦砧礰砥砫礦砟硑礢礠硐砙礦砯硭礯礦磑礰礲礶砡礫礢礡砣砙砹硂磜祣礷礱硤砏磙砡硞礭硝礷砂硕码硢硸磲砸磕硋礢磆祣礥硗礦硸磌磦硡礳硤确砟礰礷礢礰硲礂硬磙硗磃磁磇砼砌磦硩硪礧礶磢硭硒碖礭碔碚硔磱磓礡礯礢礭硦硑礥碘硸礱礶磥硊砯磁磽磔磍磓礪磌礶硬磼磑硲礍確碦硇砏碝礪碛磢砀硓砒砐礪硊硛硭礦礪碩碤祣碛砓磮礠硛磥磫礪磩砹碊礰礢磗礯磕磛筟砥磴砏砡硙礮磉破砵礰硛硓磍硖硑礰硏硬硪磬硦砺礭碚磓確筚礠磽硐硲礆砏碌硴硺硸硦砾硤硓硇磌砃礮筜礭祭祉祉砚砘砞碆磲磕笊砲砺礢砩礶磡筡碇硂砽硁硲礎砢笂砽硸碦硂礦磲筭硌碟磾碪砞硖砙砖筍筓磔研祣碽碝砒砉砼磬礱碀硸礵硭筞磴礶磺砼碴砃碹硲礐礦磈硑磤硋磷磕笹磬硇硬砶砭硆礮礳砞硦磲砜篈礱磁祣篈礯祣碭磦砉硂碲砢磯磍碎磘磍砰礤確砼筲硐筰篲礯笃礪磽碾碌筜碀磔码硤礯硛硙硟磭硢硠箑硞硜箖箍礡礫砕筳笂磕篙筟礳碦笂磁硑篢砵篖硹篥碤笎砡笞磬硸硞礮硛礪篦篤箄硑磄硌砤礢磴砠筎碅碋硸筕码签笩礢硡碇礷篷硠筗筛础礳砂磙碇箷篭硭硛磂磀筇砼箑硦篝砖筄礪笇笅篣磌硩碴硌箣砞硤筟磔箴硛砜碋砡笓硊笐确礻磦篙磪磘确礷硲礌砩砓礵笢筈穆砄礬箠磔砄砷磳硑砸笏笉碇礳笢範箄磢砥磛硛笭笂範硿筇礪篐砂礮硹穊穈磷笠硅硋硇硡砽穊硝稏箰篔确砀硇穅硬篽碦笘碄碊祣磜砶碤碳祣礓磞硞筡磳磎篭稅稧筝筣

const decryptWithCompression = () => {

    encryptedString = app.decompressCrypt(encryptedString, key, arrKeys);

    return encryptedString

} 

const decompressedPayload = decryptWithCompression();

console.log(decompressedPayload, "----- Decrypt With Compression \n\n"); // Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus rhoncus nisi, at porttitor mi pretium id. Integer vitae euismod arcu. Proin non libero in magna gravida euismod eget ac ante. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam gravida mi tincidunt elit tincidunt, nec blandit felis rutrum. Praesent ac iaculis ante. Nullam tincidunt nisi pretium, eleifend dui nec, tristique massa. Pellentesque molestie commodo eros, sit amet sollicitudin nunc ultrices a. Etiam luctus dignissim accumsan.

```


## Tests
```
npm test
```

![Fipamo test screen](https://drive.google.com/file/d/1B2u5jTh_zu48r7di3iGpp3etPKZUPhdz/view?usp=sharing)



## Open Issues / Contributions

You can open issues for things which you thing I did wrong. Or better you can contribute to this project. We will happy to have your contributions. Thank you

## License

