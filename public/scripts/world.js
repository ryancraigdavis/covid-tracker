// Submit buttons
//document.getElementById("update").addEventListener("click", getCountry);


// Builds the variables
var totalRecovered = document.getElementById("total-recovered")
var totalRecoveredH4 = document.createElement("h4");

var totalCases = document.getElementById("total-cases")
var totalCasesH4 = document.createElement("h4");

var totalDead = document.getElementById("total-dead")
var totalDeadH4 = document.createElement("h4");

var casesCountry = document.getElementById("cases-country")
var casesCountryH4 = document.createElement("h4");

var deadCountry = document.getElementById("dead-country")
var deadCountryH4 = document.createElement("h4");

var recoveredCountry = document.getElementById("recovered-country")
var recoveredCountryH4 = document.createElement("h4");

var predictionCasesCountry = document.getElementById("prediction-cases-country")
var predictionCasesCountryH4 = document.createElement("h4");

function getWorldData(){
	// Includes api grabbing of case data

	// Date help from 2 stack overflows with many revisions
	// https://stackoverflow.com/questions/1296358/subtract-days-from-a-date-in-javascript
	// https://stackoverflow.com/questions/27939773/tolocaledatestring-short-format

	var today = new Date();
	var prevDay = new Date();

	today.setDate(today.getDate());
	today = today.toLocaleDateString('fr-CA', { year: 'numeric', month: '2-digit', day: '2-digit' });
	prevDay.setDate(prevDay.getDate() - 5);
	prevDay = prevDay.toLocaleDateString('fr-CA', { year: 'numeric', month: '2-digit', day: '2-digit' });

	var timelineUrl = 'https://cors-anywhere.herokuapp.com/https://covid19-api.org/api/timeline'

  	// Creates the response
	var req = new XMLHttpRequest();
	req.open("GET", timelineUrl, true);
	req.withCredentials = false;
	req.onload = function (e) {
	  	if (req.readyState === 4) {
	    	if (req.status === 200) {

    			var data = JSON.parse(req.responseText)
    			console.log(data)

    			totalRecoveredResult = document.createTextNode(data[0].total_recovered)
    			totalRecoveredH4.appendChild(totalRecoveredResult)
    			totalRecovered.appendChild(totalRecoveredH4)

    			totalDeadResult = document.createTextNode(data[0].total_deaths)
    			totalDeadH4.appendChild(totalDeadResult)
    			totalDead.appendChild(totalDeadH4)

    			totalCasesResult = document.createTextNode(data[0].total_cases)
    			totalCasesH4.appendChild(totalCasesResult)
    			totalCases.appendChild(totalCasesH4)


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

function getCountryData(){
	// Same newsfeed function from the main page but with a different endpoint for grabbing country specific news
	// Includes api grabbing of case data

	// Date help from 2 stack overflows with many revisions
	// https://stackoverflow.com/questions/1296358/subtract-days-from-a-date-in-javascript
	// https://stackoverflow.com/questions/27939773/tolocaledatestring-short-format

	var today = new Date();
	var prevDay = new Date();

	// Get the country
	var country = document.getElementById("countrycode").value

	if (country === undefined) {
		country = 'US'
	};

	today.setDate(today.getDate());
	today = today.toLocaleDateString('fr-CA', { year: 'numeric', month: '2-digit', day: '2-digit' });
	prevDay.setDate(prevDay.getDate() - 5);
	prevDay = prevDay.toLocaleDateString('fr-CA', { year: 'numeric', month: '2-digit', day: '2-digit' });

	var countryUrl = 'https://cors-anywhere.herokuapp.com/https://covid19-api.org/api/timeline/'+country

  	// Creates the response
	var req = new XMLHttpRequest();
	req.open("GET", countryUrl, true);
	req.withCredentials = false;
	req.onload = function (e) {
	  	if (req.readyState === 4) {
	    	if (req.status === 200) {

    			var data = JSON.parse(req.responseText)
    			console.log(data)

    			recoveredCountryResult = document.createTextNode(data[0].cases)
    			recoveredCountryH4.appendChild(recoveredCountryResult)
    			recoveredCountry.appendChild(recoveredCountryH4)

    			deadCountryResult = document.createTextNode(data[0].cases)
    			deadCountryH4.appendChild(deadCountryResult)
    			deadCountry.appendChild(deadCountryH4)

    			casesCountryResult = document.createTextNode(data[0].cases)
    			casesCountryH4.appendChild(casesCountryResult)
    			casesCountry.appendChild(casesCountryH4)

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

function getPredictionData(){
	// Same newsfeed function from the main page but with a different endpoint for grabbing country specific news
	// Includes api grabbing of case data

	// Date help from 2 stack overflows with many revisions
	// https://stackoverflow.com/questions/1296358/subtract-days-from-a-date-in-javascript
	// https://stackoverflow.com/questions/27939773/tolocaledatestring-short-format

	var today = new Date();
	var prevDay = new Date();

	// Get the country
	var country = document.getElementById("countrycode").value

	if (country === undefined) {
		country = 'US'
	};

	today.setDate(today.getDate());
	today = today.toLocaleDateString('fr-CA', { year: 'numeric', month: '2-digit', day: '2-digit' });
	prevDay.setDate(prevDay.getDate() - 5);
	prevDay = prevDay.toLocaleDateString('fr-CA', { year: 'numeric', month: '2-digit', day: '2-digit' });

	var countryUrl = 'https://cors-anywhere.herokuapp.com/https://covid19-api.org/api/prediction/'+country

  	// Creates the response
	var req = new XMLHttpRequest();
	req.open("GET", countryUrl, true);
	req.withCredentials = false;
	req.onload = function (e) {
	  	if (req.readyState === 4) {
	    	if (req.status === 200) {

    			var data = JSON.parse(req.responseText)
    			console.log(data)

    			predictionCasesCountryResult = document.createTextNode(data[0].cases)
    			predictionCasesCountryH4.appendChild(predictionCasesCountryResult)
    			predictionCasesCountry.appendChild(predictionCasesCountryH4)

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
getCountryData();
getWorldData();
getPredictionData();











