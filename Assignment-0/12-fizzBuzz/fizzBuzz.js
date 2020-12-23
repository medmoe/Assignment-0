function fizzBuzz(start, end) {
  // Insert code here;
	var output = [];
	while( start <= end ){
		if(start % 3 == 0){
			if(start % 5 == 0){
				output.push("FizzBuzz");
			}else{
				output.push("Fizz");
			}
		}else{
			if(start % 5 == 0){
				output.push("Buzz");
			}else{
				output.push(start);
			}
		}
		start++;
	}
	return output;
}

// Do not edit this line;
module.exports = fizzBuzz;
