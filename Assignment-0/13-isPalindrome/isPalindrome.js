function isPalindrome(word) {
  // Insert code here;
	if(word.length == 1){
		return true;
	}
	if(word.length == 2){
		if(word.charAt(0) === word.charAt(1)){
			return true;
		}else{
			return false;
		}
	}else{

		if(word.charAt(0) === word.charAt(word.length - 1)){
			return isPalindrome(word.slice(1, word.length - 1));
		}else{
			return false;
		}
	}
}

// Do not edit this line;
module.exports = isPalindrome;
