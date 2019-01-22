const convertLetterToNumber = (str) => {
  var out = 0, len = str.length;
  for (pos = 0; pos < len; pos++) {
    out += (str.charCodeAt(pos) - 64) * Math.pow(26, len - pos - 1);
  }
  out = out.toString().replace(/\./g, '').replace(/e\+/g, '');
  return Number(out);
}

//var testCase = ["A","B","C","Z","AA","AB","BY","aa"];

//var converted = testCase.map(function(obj) {
//  return convertLetterToNumber(obj);
//});

var jsEncode = {
	encode: (s, k, l) => {
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
};

const tryme = (string, key, arrKeys) => {
	let enc = '';
    let code;
	let convertedToStringOfNumbers = convertLetterToNumber(arrKeys.toString().replace(/,/g, ''));
    k = (isNaN(key)) ? convertLetterToNumber(key) : key;
	if(Array.isArray(arrKeys)){
    	let convertedToArrayOfNumbers = arrKeys.map((el) => {
            	return convertLetterToNumber(el)
        });
        for(let j=0; j<convertedToArrayOfNumbers.length; j++){
        	let ele = convertedToArrayOfNumbers[j];
        	let ch = code || string;
        	code = jsEncode.encode(ch, key, ele);
        }
        enc = code;
    }else{
    	enc = jsEncode.encode(string, key, convertedToStringOfNumbers)
    }
    return enc;
}