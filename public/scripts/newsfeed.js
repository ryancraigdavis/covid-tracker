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

    			// This loop goes through each of the articles and creates a table with the image, title, source, link,
    			// and description appended to each row of the table.
    			for (var i = 0; i < 9; i++) {
    				// Creates the rows and cells
				  	var row = document.createElement("tr");
			    	var cell1 = document.createElement("td");
			    	var cell2 = document.createElement("td");
			    	var cell3 = document.createElement("td");
			    	var cell4 = document.createElement("td");

			    	// These are the variables created from the API data
			    	var articleTitle = document.createTextNode("From "+data.articles[i].source.name+": "+data.articles[i].title);
			    	var articleDescription = document.createTextNode(data.articles[i].description);
			    	var articleUrl = data.articles[i].url
			    	var articleImageLink = data.articles[i].urlToImage

			    	// These variables are for the url link and image
			    	var articleImage = document.createElement('img');
			    	articleImage.src = articleImageLink;
			    	var articleLink = document.createElement('a');
				    articleLink.appendChild('Click to Go');
				    articleLink.title = 'Click to Go';
				    articleLink.href = articleUrl;
				    articleLink.target = '_blank'

				    // Appending the variables to the cells
				    cell1.appendChild(articleImage);
			    	cell2.appendChild(articleTitle);
			    	cell3.appendChild(articleDescription);
			    	cell4.appendChild(articleDescription);
			    	row.appendChild(cell1);
			    	row.appendChild(cell2);
			    	row.appendChild(cell3);
			    	row.appendChild(cell4);
				    // Appends rows to the table
				  	tableBody.appendChild(row);
				}
				// Appends the table to the body of the html
				newsTable.appendChild(tableBody);
				newsfeedContainer.appendChild(newsTable);


	    	} else {
	      		console.error(req.statusText);
	      		document.getElementById('newsfeed-bad-api').innerHTML += 
				'<h3>Too Many API Requests</h3><p>Unfortunately the API has received too many requests, please wait a bit and try again</p>'
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