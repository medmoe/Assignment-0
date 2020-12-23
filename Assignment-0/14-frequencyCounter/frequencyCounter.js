function frequencyCounter(word) {
  // Insert code here;
	var chars = new Object();
	var i;
	var char;
	for(i = 0; i < word.length; i++){
		char = word.charAt(i);
		if(char in chars){
			chars[char]++;
		}else{
			chars[char] = 1;
		}
	}
	return chars;
}

// Do not edit this line;
module.exports = frequencyCounter;
