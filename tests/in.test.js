
const App = require("../index");

var lol = new App();

const key = "lol", arrKeys = ["a", "b", "c", "d", "e"];
let encryptedString, testString = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus rhoncus nisi, at porttitor mi pretium id. Integer vitae euismod arcu. Proin non libero in magna gravida euismod eget ac ante. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam gravida mi tincidunt elit tincidunt, nec blandit felis rutrum. Praesent ac iaculis ante. Nullam tincidunt nisi pretium, eleifend dui nec, tristique massa. Pellentesque molestie commodo eros, sit amet sollicitudin nunc ultrices a. Etiam luctus dignissim accumsan.

Integer eget lectus non arcu mollis ornare. Maecenas laoreet eros sit amet fermentum eleifend. Nunc porta turpis vel malesuada iaculis. Sed et risus elementum libero imperdiet viverra vel ut tortor. Praesent aliquet a ligula sit amet ultricies. Nam sapien nisl, consectetur consectetur nibh id, scelerisque placerat libero. Suspendisse lectus sem, imperdiet eu sodales eu, egestas nec nunc. Mauris tortor dui, tempus quis sem vel, gravida condimentum nisi. Etiam lacinia scelerisque enim, vitae accumsan ex tristique et. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris eu ipsum urna. Maecenas sed enim nec ligula egestas bibendum. Phasellus eget varius massa.`

// test('Encrypt Without Compression', () => {
//     expect(lol.crypt('hello world', key, arrKeys)).toBe("礫礦礯礯礬祣礴礬礱礯礧");
// });
// test('Decrypt Without Compression', () => {
//     expect(lol.crypt('hello world', key, arrKeys)).toBe("礫礦礯礯礬祣礴礬礱礯礧");
// });
// test('Encrypt With Compression', () => {
//     expect(lol.compressCrypt(testString, key, arrKeys)).toBe("礏礬礱礦礮祣礪礳礰礶硇礧礬礯硂祣礰礪礷祣礢礮礦礷祯祣礠礬礭礰礦礠礷硕礶礱硐礧硅礪礰礠礪礭礤祣礦礯硒祭祣礇硘硝祣礯礶硜礶礰祣礱礫硘礠硹祣礭硤礪硛礢硑礳硂礷礷硒硍礮礪祣礳硁砏硊硆礧硲礊礭硣礤礦硠礵硒礢礦确礶硤礮礬礧硐礱砃硲礓礱礬硩码硘硵礪礡砞礬硆礭祣礮礢礤礭礢祣礤礱礢砜礧砼礦砧礰砥砫礦砟硑礢礠硐砙礦砯硭礯礦磑礰礲礶砡礫礢礡砣砙砹硂磜祣礷礱硤砏磙砡硞礭硝礷砂硕码硢硸磲砸磕硋礢磆祣礥硗礦硸磌磦硡礳硤确砟礰礷礢礰硲礂硬磙硗磃磁磇砼砌磦硩硪礧礶磢硭硒碖礭碔碚硔磱磓礡礯礢礭硦硑礥碘硸礱礶磥硊砯磁磽磔磍磓礪磌礶硬磼磑硲礍確碦硇砏碝礪碛磢砀硓砒砐礪硊硛硭礦礪碩碤祣碛砓磮礠硛磥磫礪磩砹碊礰礢磗礯磕磛筟砥磴砏砡硙礮磉破砵礰硛硓磍硖硑礰硏硬硪磬硦砺礭碚磓確筚礠磽硐硲礆砏碌硴硺硸硦砾硤硓硇磌砃礮筜礭祭祉祉砚砘砞碆磲磕笊砲砺礢砩礶磡筡碇硂砽硁硲礎砢笂砽硸碦硂礦磲筭硌碟磾碪砞硖砙砖筍筓磔研祣碽碝砒砉砼磬礱碀硸礵硭筞磴礶磺砼碴砃碹硲礐礦磈硑磤硋磷磕笹磬硇硬砶砭硆礮礳砞硦磲砜篈礱磁祣篈礯祣碭磦砉硂碲砢磯磍碎磘磍砰礤確砼筲硐筰篲礯笃礪磽碾碌筜碀磔码硤礯硛硙硟磭硢硠箑硞硜箖箍礡礫砕筳笂磕篙筟礳碦笂磁硑篢砵篖硹篥碤笎砡笞磬硸硞礮硛礪篦篤箄硑磄硌砤礢磴砠筎碅碋硸筕码签笩礢硡碇礷篷硠筗筛础礳砂磙碇箷篭硭硛磂磀筇砼箑硦篝砖筄礪笇笅篣磌硩碴硌箣砞硤筟磔箴硛砜碋砡笓硊笐确礻磦篙磪磘确礷硲礌砩砓礵笢筈穆砄礬箠磔砄砷磳硑砸笏笉碇礳笢範箄磢砥磛硛笭笂範硿筇礪篐砂礮硹穊穈磷笠硅硋硇硡砽穊硝稏箰篔确砀硇穅硬篽碦笘碄碊祣磜砶碤碳祣礓磞硞筡磳磎篭稅稧筝筣");
// });
// test('Decrypt With Compression', () => {
//     expect(lol.decompressCrypt("礏礬礱礦礮祣礪礳礰礶硇礧礬礯硂祣礰礪礷祣礢礮礦礷祯祣礠礬礭礰礦礠礷硕礶礱硐礧硅礪礰礠礪礭礤祣礦礯硒祭祣礇硘硝祣礯礶硜礶礰祣礱礫硘礠硹祣礭硤礪硛礢硑礳硂礷礷硒硍礮礪祣礳硁砏硊硆礧硲礊礭硣礤礦硠礵硒礢礦确礶硤礮礬礧硐礱砃硲礓礱礬硩码硘硵礪礡砞礬硆礭祣礮礢礤礭礢祣礤礱礢砜礧砼礦砧礰砥砫礦砟硑礢礠硐砙礦砯硭礯礦磑礰礲礶砡礫礢礡砣砙砹硂磜祣礷礱硤砏磙砡硞礭硝礷砂硕码硢硸磲砸磕硋礢磆祣礥硗礦硸磌磦硡礳硤确砟礰礷礢礰硲礂硬磙硗磃磁磇砼砌磦硩硪礧礶磢硭硒碖礭碔碚硔磱磓礡礯礢礭硦硑礥碘硸礱礶磥硊砯磁磽磔磍磓礪磌礶硬磼磑硲礍確碦硇砏碝礪碛磢砀硓砒砐礪硊硛硭礦礪碩碤祣碛砓磮礠硛磥磫礪磩砹碊礰礢磗礯磕磛筟砥磴砏砡硙礮磉破砵礰硛硓磍硖硑礰硏硬硪磬硦砺礭碚磓確筚礠磽硐硲礆砏碌硴硺硸硦砾硤硓硇磌砃礮筜礭祭祉祉砚砘砞碆磲磕笊砲砺礢砩礶磡筡碇硂砽硁硲礎砢笂砽硸碦硂礦磲筭硌碟磾碪砞硖砙砖筍筓磔研祣碽碝砒砉砼磬礱碀硸礵硭筞磴礶磺砼碴砃碹硲礐礦磈硑磤硋磷磕笹磬硇硬砶砭硆礮礳砞硦磲砜篈礱磁祣篈礯祣碭磦砉硂碲砢磯磍碎磘磍砰礤確砼筲硐筰篲礯笃礪磽碾碌筜碀磔码硤礯硛硙硟磭硢硠箑硞硜箖箍礡礫砕筳笂磕篙筟礳碦笂磁硑篢砵篖硹篥碤笎砡笞磬硸硞礮硛礪篦篤箄硑磄硌砤礢磴砠筎碅碋硸筕码签笩礢硡碇礷篷硠筗筛础礳砂磙碇箷篭硭硛磂磀筇砼箑硦篝砖筄礪笇笅篣磌硩碴硌箣砞硤筟磔箴硛砜碋砡笓硊笐确礻磦篙磪磘确礷硲礌砩砓礵笢筈穆砄礬箠磔砄砷磳硑砸笏笉碇礳笢範箄磢砥磛硛笭笂範硿筇礪篐砂礮硹穊穈磷笠硅硋硇硡砽穊硝稏箰篔确砀硇穅硬篽碦笘碄碊祣磜砶碤碳祣礓磞硞筡磳磎篭稅稧筝筣", key, arrKeys)).toBe(testString);
// });

// encryption without compression
const folK = () => {
    try {
        encryptedString = lol.crypt("hello world ".repeat(10000), key, arrKeys);
        console.log(encryptedString, " ==== ", encryptedString.length, "======== Encrypted")
    } catch(err) {
        console.log(err);
    }
}

// encryption without compression
const dolK = () => {
    try {
        decryptString = lol.crypt(encryptedString, key, arrKeys);
        console.log(decryptString, "======== Decrypted")
    } catch(err) {
        console.log(err);
    }
}


// encryption with compression
const lolK = () => {
    try {
        encryptedString = lol.encrypt("hello world ".repeat(10000), key, arrKeys);
        console.log(encryptedString, " ==== ", encryptedString.length, "========")
    } catch(err) {
        console.log(err);
    }
}

// decryption with compression
const lokl = () => {
    try {
        const de = lol.decrypt(encryptedString, key, arrKeys);
    } catch(err) {
        console.log(err, "====== Error=======\n\n\n")
    }
}


folK();
dolK();

lolK();
lokl();


