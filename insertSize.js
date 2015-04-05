var allRows = document.getElementsByClassName("sectxt");

for(var i = 0 ; i < allRows.length ; i++) {
	try {
		var allCols = allRows[i].getElementsByClassName("brdr");
		var hall;
		var hallSize = "Unknown";
		for(var j = 0 ; j < allCols.length - 1 ; j++) {
			hall = allCols[j].textContent.trim() + " " + allCols[j+1].textContent.trim();
			if(typeof roomDict[hall] != 'undefined') {
				hallSize = roomDict[hall];
				break;
			}
		}

		addHover(allRows[i], hallSize);
		
		
	}catch(err) {
		//console.log("Error caught");
	}
}

function addHover(element, title) {
	element.title=title;
}