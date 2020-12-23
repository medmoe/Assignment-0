function countOfAllBooleans(arr) {
  // Insert code here;
	var i ;
	var counter = 0;
	for(i = 0; i < arr.length; i++){
		if(typeof arr[i] === "boolean"){
			counter++;
		}
	}
	return counter;
}

// Do not edit this line;
module.exports = countOfAllBooleans;
