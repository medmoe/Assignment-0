function sumOfNumsWithinARange(nums, start, end) {
  // Insert code here;
	var counter = 0;
	var i ;
	for(i = 0; i < nums.length; i ++ ){
		if(nums[i] >= start && nums[i] <= end){
			counter++;
		}
	}
	return counter;
}

// Do not edit this line;
module.exports = sumOfNumsWithinARange;
