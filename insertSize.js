var allRows = document.querySelectorAll(".sectxt");

for(var i = 0 ; i < allRows.length ; i++)
{
	try
	{
		var allCols = allRows[i].querySelectorAll(".brdr");
		var hall = allCols[7].textContent + " " + allCols[8].textContent;
		hall = hall.trim();
		var hallSize = roomDict[hall];
		if(typeof hallSize != 'undefined')
		{
			allCols[11].textContent += " (" + hallSize + ")";
		}
		
	}catch(err)
	{
		//console.log("Error caught");
	}
}