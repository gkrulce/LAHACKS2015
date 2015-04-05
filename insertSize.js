var allRows = document.getElementsByClassName("sectxt");

for(var i = 0 ; i < allRows.length ; i++) {
	try {
		var allCols = allRows[i].getElementsByClassName("brdr");
		var hall = allCols[7].textContent + " " + allCols[8].textContent;
		hall = hall.trim();
		var hallSize = roomDict[hall];
		if(typeof hallSize == 'undefined') {
			hallSize = "Unknown";
		}

		addHover(allRows[i], hallSize);
		
		
	}catch(err) {
		//console.log("Error caught");
	}
}

function addHover(element, title) {
	element.title=title;
}