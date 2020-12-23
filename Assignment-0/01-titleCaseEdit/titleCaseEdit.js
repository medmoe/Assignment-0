function titleCaseEdit(title) {
  // Insert code here;
	var arr = title.split(" ");
	var i;
	for(i = 0; i < arr.length; i++){
		arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
	}
	return arr.join(" ");
}

// Do not edit this line;
module.exports = titleCaseEdit;
