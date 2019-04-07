class Fipamo {
    constructor(key, arrKeys) {
        this.key = key;
        this.arrkeys = arrKeys;
    }

    // Adding a method to the constructor
    greet(key=this.key, arrKeys=this.arrKeys){
        return `${key} says hello.`;
    }
    
    // This function is responsible for encrypting the data.
    encode(s, k, l){
		var enc = "";
		var str = "";
		// make sure that input is string
		str = s.toString();        
        for (var i = 0; i < s.length; i++) {
				// create block
				var a = s.charCodeAt(i);
				// bitwise XOR
				var b = a ^ (k+l);
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
    crypt(string, key=this.key, arrKeys=this.arrkeys) {
		if (typeof string === "string") {
			string = string
		} else {
			string = JSON.stringify(string);
		}
		let enc = '';
    	let code;
		let convertedToStringOfNumbers = this.convertLetterToNumber(arrKeys.toString().replace(/,/g, ''));
    	key = (isNaN(key)) ? this.convertLetterToNumber(key) : key;
		if(Array.isArray(arrKeys)){
    		let convertedToArrayOfNumbers = arrKeys.map((el) => {
            	return this.convertLetterToNumber(el)
        	});
        	for(let j=0; j<convertedToArrayOfNumbers.length; j++){
        		let ele = convertedToArrayOfNumbers[j];
        		let ch = code || string;
        		code = this.encode(ch, key, ele);
        	}		
        	enc = code;
    	}else{
    		enc = this.encode(string, key, convertedToStringOfNumbers)
		}
		try{
			return JSON.parse(enc);
		} catch(err){
			return enc;
		}
	}
    
    // This function encodes the generated token which is returned by encodingFunc so that it can be sent over HTTP requests.
    encodingURI(str){
    	return encodeURIComponent(str);
    }
    
    // This function decodes a Uniform Resource Identifier (URI) component previously created by encodeURIComponent or by a similar routine.
    decodingURI(str){
    	return decodeURIComponent(str);
    }
}

module.exports = Fipamo;