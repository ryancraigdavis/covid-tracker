// Submit buttons
//document.getElementById("submit").addEventListener("click", getWeather);




// Builds the newsfeed table for the get request
var newsfeedContainer = document.getElementById("newsfeed")
var newsTable = document.createElement("table");
var tableBody = document.createElement("tbody");
var row = document.createElement("tr");

function getNews(){

	// Date help from 2 stack overflows with many revisions
	// https://stackoverflow.com/questions/1296358/subtract-days-from-a-date-in-javascript
	// https://stackoverflow.com/questions/27939773/tolocaledatestring-short-format

	var today = new Date();
	var prevDay = new Date();

	today.setDate(today.getDate());
	today = today.toLocaleDateString('fr-CA', { year: 'numeric', month: '2-digit', day: '2-digit' });
	prevDay.setDate(prevDay.getDate() - 5);
	prevDay = prevDay.toLocaleDateString('fr-CA', { year: 'numeric', month: '2-digit', day: '2-digit' });

	// Initial variables from the api

	var token = '037f406421894032b61806702bf08053'
	// Due to CORS issues, the url is first sent to a Heroku proxy where a CORS header is appended
  	var url = 'https://cors-anywhere.herokuapp.com/http://newsapi.org/v2/everything?q=covid19&from='+prevDay+'&to='+today+'&sortBy=popularity&apiKey='+token

  	// Creates the response
	var req = new XMLHttpRequest();
	req.open("GET", url, true);
	req.withCredentials = false;
	req.onload = function (e) {
	  	if (req.readyState === 4) {
	    	if (req.status === 200) {

    			// Data for the table - code similar to Week 6
    			var data = JSON.parse(req.responseText)

    			for (var i = 0; i < 9; i++) {
				  	var row = document.createElement("tr");
			    	var cell = document.createElement("td");
			    	var cellText = document.createTextNode("From "+data.articles[i].source.name+": "+data.articles[i].title);
			    	cell.appendChild(cellText);
			    	row.appendChild(cell);
			    	cell.style.border = "thin solid black";
				    // Appends rows to the table
				  	tableBody.appendChild(row);
				}
				// Appends the table to the body of the html
				newsTable.appendChild(tableBody);
				newsfeedContainer.appendChild(newsTable);


	    	} else {
	      		console.error(req.statusText);
	    	}
	  	}
	};
	req.onerror = function (e) {
	  console.error(req.statusText);
	};
	req.send(null); 
};
// Function automatically calls on page load
getNews();