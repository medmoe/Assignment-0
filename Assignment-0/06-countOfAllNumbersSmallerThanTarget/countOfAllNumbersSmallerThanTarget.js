function countOfAllNumbersSmallerThanTarget(nums, target) {
  // Insert code here;
	var counter = 0 ;
	var i ;
	for(i = 0; i < nums.length; i++){
		if(nums[i] < target){
			counter++;
		}
	}
	return counter;
}

// Do not edit this line;
module.exports = countOfAllNumbersSmallerThanTarget;
