function sumOfAllEvenNumbers(nums) {
  // Insert code here;
	var counter = 0;
	var i ;
	for(i = 0 ; i < nums.length; i++){
		if(nums[i] % 2 == 0){
			counter++;
		}
	}
	return counter;

}

// Do not edit this line;
module.exports = sumOfAllEvenNumbers;
