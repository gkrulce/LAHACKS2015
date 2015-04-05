var allRows = Array.prototype.slice.call(document.getElementsByClassName("sectxt"));
var allRows2 = Array.prototype.slice.call(document.getElementsByClassName("nonenrtxt"));

allRows = allRows.concat(allRows2);

console.log(allRows.length);

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
			hall="??";
		}

		addHover(allRows[i], hallSize, hall);
		
		
	}catch(err) {
		//console.log("Error caught");
	}
}

function addHover(element, size, title) {
  element.className += ' the-row';
  var div = document.createElement('div');
  div.className = 'fance';
  div.textContent = 'Actual size of ' + title + ': ' + size;
  element.appendChild(div);
}
