const {compressSync, decompressSync} = require('@fstnetwork/cppzst');
class Fipamo {
	constructor(key, arrKeys) {
		this.key = key;
		this.arrkeys = arrKeys;
	}

	// Adding a method to the constructor
	greet(key = this.key, arrKeys = this.arrKeys) {
		return `${key} says hello.`;
	}

	// This function is responsible for encrypting the data.
	encode(s, k, l) {
		var enc = "";
		var str = "";
		// make sure that input is string
		str = s.toString();
		for (var i = 0; i < s.length; i++) {
			// create block
			var a = s.charCodeAt(i);
			// bitwise XOR
			var b = a ^ (k + l);
			enc = enc + String.fromCharCode(b);
		}

		return enc;
	}

	// This function converts individual letters to numbers
	convertLetterToNumber(str) {
		var out = 0, len = str.length;
		for (let pos = 0; pos < len; pos++) {
			out += (str.charCodeAt(pos) - 64) * Math.pow(26, len - pos - 1);
		}
		out = out.toString().replace(/\./g, '').replace(/e\+/g, '');
		return Number(out);
	}

	// This function passes the string into the encode method and loops through the arrkeys property. It does both the encrypting and decrypting.
	crypt(string, key = this.key, arrKeys = this.arrkeys) {
		if (typeof string === "string") {
			string = string
		} else {
			string = JSON.stringify(string);
		}
		let enc = '';
		let code;
		let convertedToStringOfNumbers = this.convertLetterToNumber(arrKeys.toString().replace(/,/g, ''));
		key = (isNaN(key)) ? this.convertLetterToNumber(key) : key;
		if (Array.isArray(arrKeys)) {
			let convertedToArrayOfNumbers = arrKeys.map((el) => {
				return this.convertLetterToNumber(el)
			});
			for (let j = 0; j < convertedToArrayOfNumbers.length; j++) {
				let ele = convertedToArrayOfNumbers[j];
				let ch = code || string;
				code = this.encode(ch, key, ele);
			}
			enc = code;
		} else {
			enc = this.encode(string, key, convertedToStringOfNumbers)
		}
		try {
			return JSON.parse(enc);
		} catch (err) {
			return enc;
		}
	}

	// This function encodes the generated token which is returned by encodingFunc so that it can be sent over HTTP requests.
	encodingURI(str) {
		return encodeURIComponent(str);
	}

	// This function decodes a Uniform Resource Identifier (URI) component previously created by encodeURIComponent or by a similar routine.
	decodingURI(str) {
		return decodeURIComponent(str);
	}

	// This function is used to encrypt and compress.
	compressCrypt(string, key = this.key, arrKeys = this.arrkeys) {
		const a = this.en(string)
		const l = this.crypt(a, key, arrKeys);
		return l;
	}

	//
	decompressCrypt(string, key = this.key, arrKeys = this.arrkeys) {
		const l = this.crypt(string, key, arrKeys);
		const d = this.de(l);
		return d;
	}


	compressAndEncrypt(string, key = this.key, arrKeys = this.arrkeys) {
		const l = this.crypt(string, key, arrKeys);
		const buf = Buffer.from(l);
		var output = compressSync(buf);
		return output;
	}

	decompressAndDecrypt(string, key = this.key, arrKeys = this.arrkeys) {
		const ish = Buffer.from(string);
		let decompressedString = decompressSync(ish);
		decompressedString = decompressedString.toString();
		const output = this.crypt(decompressedString, key, arrKeys);
		return output;
	}


	// Compress the string
	en(c) {
		var x = 'charCodeAt', b, e = {}, f = c.split(""), d = [], a = f[0], g = 256;
		for (b = 1; b < f.length; b++)c = f[b], null != e[a + c] ? a += c : (d.push(1 < a.length ? e[a] : a[x](0)), e[a + c] = g, g++, a = c); d.push(1 < a.length ? e[a] : a[x](0)); for (b = 0; b < d.length; b++)d[b] = String.fromCharCode(d[b]); return d.join("")
	}

	// Decompress the compress string
	de(b){var a,e={},d=b.split(""),c=d[0], f=d[0],g=[c],h=256, o=256;for(b=1;b<d.length;b++)a=d[b].charCodeAt(0),a=h>a?d[b]:e[a]?e[a]:f+c,g.push(a),c=a.charAt(0),e[o]=f+c,o++,f=a;return g.join("")}

}

module.exports = Fipamo;