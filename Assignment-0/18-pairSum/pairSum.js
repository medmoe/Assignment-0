function pairSum(nums, target) {
  // Insert code here
	if(nums.length <= 1){
		throw "error";
	}else{
		return helper(nums, target, 0, nums.length - 1);
	}

}
function helper(nums, target, i, j){
	if(i == j){
		return false;
	}
	var sum = nums[i] + nums[j];
	if(sum > target){
		return helper(nums, target, i, j - 1);
	}else if ( sum < target){
		return helper(nums, target, i + 1, j);
	}else{
		return true;
	}
}
		

// Do not edit this line;
module.exports = pairSum;
