function setUnionOfAnyAmountOfSets(...args) {
  // Insert code here
	let union = new Set();
	for(let set of args){
		for(let s of set){
			union.add(s);
		}
	}
	return union;

}

// Do not edit this line;
module.exports = setUnionOfAnyAmountOfSets;
