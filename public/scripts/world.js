// Submit buttons
//document.getElementById("update").addEventListener("click", getCountry);


// Builds the dashboard titles
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
	// Creates a date object and then pushes dates going back 2 months to an array

	dateRangeWorld = [];
	worldDay = new Date();

	for (var i = 0; i < 90; i++) {

		worldDay.setDate(worldDay.getDate() - 1);
		dateRangeWorld.push(worldDay.toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' }));
	};

	var timelineUrl = 'https://cors-anywhere.herokuapp.com/https://covid19-api.org/api/timeline'

  	// Creates the response
	var req = new XMLHttpRequest();
	req.open("GET", timelineUrl, true);
	req.withCredentials = false;
	req.onload = function (e) {
	  	if (req.readyState === 4) {
	    	if (req.status === 200) {

    			var data = JSON.parse(req.responseText)

    			// Chart for world death data for 2 months
    			// Chart.js information from documentation
    			var ctx = document.getElementById('dead-world-chart').getContext('2d');
				var myChart = new Chart(ctx, {
				    type: 'bar',
				    data: {
				        labels: [dateRangeWorld[59], dateRangeWorld[58], 
				        dateRangeWorld[57], dateRangeWorld[56], dateRangeWorld[55], dateRangeWorld[54], dateRangeWorld[53], dateRangeWorld[52], dateRangeWorld[51], 
				        dateRangeWorld[50], dateRangeWorld[49], dateRangeWorld[48], dateRangeWorld[47], dateRangeWorld[46], dateRangeWorld[45], dateRangeWorld[44], 
				        dateRangeWorld[43], dateRangeWorld[42], dateRangeWorld[41], dateRangeWorld[40], dateRangeWorld[39], dateRangeWorld[38], dateRangeWorld[37], 
				        dateRangeWorld[36], dateRangeWorld[35], dateRangeWorld[34], dateRangeWorld[33], dateRangeWorld[32], dateRangeWorld[31], dateRangeWorld[30], 
				        dateRangeWorld[29], dateRangeWorld[28], dateRangeWorld[27], dateRangeWorld[26], dateRangeWorld[25], dateRangeWorld[24], dateRangeWorld[23], 
				        dateRangeWorld[22], dateRangeWorld[21], dateRangeWorld[20], dateRangeWorld[19], dateRangeWorld[18], dateRangeWorld[17], dateRangeWorld[16], dateRangeWorld[15], 
				        dateRangeWorld[14], dateRangeWorld[13], dateRangeWorld[12], dateRangeWorld[11], dateRangeWorld[10], dateRangeWorld[9], dateRangeWorld[8], dateRangeWorld[7], 
				        dateRangeWorld[6], dateRangeWorld[5], dateRangeWorld[4], dateRangeWorld[3], dateRangeWorld[2], dateRangeWorld[1], dateRangeWorld[0]],
				        datasets: [{
				            label: '# of Deaths',
				            data: [data[59].total_deaths, data[58].total_deaths, data[57].total_deaths, data[56].total_deaths, data[55].total_deaths, data[54].total_deaths,
				            data[53].total_deaths, data[52].total_deaths, data[51].total_deaths, data[50].total_deaths, data[49].total_deaths, data[48].total_deaths,
				            data[47].total_deaths, data[46].total_deaths, data[45].total_deaths, data[44].total_deaths, data[43].total_deaths, data[42].total_deaths,
				            data[41].total_deaths, data[40].total_deaths, data[39].total_deaths, data[38].total_deaths, data[37].total_deaths, data[36].total_deaths,
				            data[35].total_deaths, data[34].total_deaths, data[33].total_deaths, data[32].total_deaths, data[31].total_deaths, data[30].total_deaths,
				            data[29].total_deaths, data[28].total_deaths, data[27].total_deaths, data[26].total_deaths, 
				            data[25].total_deaths, data[24].total_deaths, data[23].total_deaths, data[22].total_deaths, data[21].total_deaths, data[20].total_deaths, 
				            data[19].total_deaths, data[18].total_deaths, data[17].total_deaths, data[16].total_deaths, data[15].total_deaths, data[14].total_deaths, 
				            data[13].total_deaths, data[12].total_deaths, data[11].total_deaths, data[10].total_deaths, data[9].total_deaths, data[8].total_deaths, 
				            data[7].total_deaths, data[6].total_deaths, data[5].total_deaths, data[4].total_deaths, data[3].total_deaths, data[2].total_deaths, data[1].total_deaths, data[0].total_deaths],
				            backgroundColor: [
				            	'rgba(255, 0, 0, 1)', 'rgba(255, 0, 0, 1)', 'rgba(255, 0, 0, 1)', 'rgba(255, 0, 0, 1)', 
				            	'rgba(255, 0, 0, 1)', 'rgba(255, 0, 0, 1)', 'rgba(255, 0, 0, 1)', 'rgba(255, 0, 0, 1)', 
				            	'rgba(255, 0, 0, 1)', 'rgba(255, 0, 0, 1)', 'rgba(255, 0, 0, 1)', 'rgba(255, 0, 0, 1)', 
				            	'rgba(255, 0, 0, 1)', 'rgba(255, 0, 0, 1)', 'rgba(255, 0, 0, 1)', 'rgba(255, 0, 0, 1)', 
				            	'rgba(255, 0, 0, 1)', 'rgba(255, 0, 0, 1)', 'rgba(255, 0, 0, 1)', 'rgba(255, 0, 0, 1)', 
				            	'rgba(255, 0, 0, 1)', 'rgba(255, 0, 0, 1)', 'rgba(255, 0, 0, 1)', 'rgba(255, 0, 0, 1)', 
				            	'rgba(255, 0, 0, 1)', 'rgba(255, 0, 0, 1)', 'rgba(255, 0, 0, 1)', 'rgba(255, 0, 0, 1)', 
				                'rgba(255, 0, 0, 1)', 'rgba(255, 0, 0, 1)', 'rgba(255, 0, 0, 1)', 'rgba(255, 0, 0, 1)', 
				                'rgba(255, 0, 0, 1)', 'rgba(255, 0, 0, 1)', 'rgba(255, 0, 0, 1)', 'rgba(255, 0, 0, 1)', 
				                'rgba(255, 0, 0, 1)', 'rgba(255, 0, 0, 1)', 'rgba(255, 0, 0, 1)', 'rgba(255, 0, 0, 1)', 
				                'rgba(255, 0, 0, 1)', 'rgba(255, 0, 0, 1)', 'rgba(255, 0, 0, 1)', 'rgba(255, 0, 0, 1)', 
				                'rgba(255, 0, 0, 1)', 'rgba(255, 0, 0, 1)', 'rgba(255, 0, 0, 1)', 'rgba(255, 0, 0, 1)', 
				                'rgba(255, 0, 0, 1)', 'rgba(255, 0, 0, 1)', 'rgba(255, 0, 0, 1)', 'rgba(255, 0, 0, 1)', 
				                'rgba(255, 0, 0, 1)', 'rgba(255, 0, 0, 1)', 'rgba(255, 0, 0, 1)', 'rgba(255, 0, 0, 1)', 
				                'rgba(255, 0, 0, 1)', 'rgba(255, 0, 0, 1)', 'rgba(255, 0, 0, 1)', 'rgba(255, 0, 0, 1)'
				            ],
				            borderColor: [
				            	'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)',
				            	'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)',
				            	'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)',
				            	'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)',
				            	'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)',
				            	'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)',
				                'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 
				                'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 
				                'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 
				                'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 
				                'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 
				                'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 
				               
				            ],
				            borderWidth: 1
				        }]
				    },
				    options: {
				    	title: {
				            display: true,
				            fontSize: 20,
				            fontColor: 'white',
				            text: 'Total Deaths for Previous 2 Months'
        				},
				    	legend: {
				            labels: {
				                fontColor: 'white'
				            }
				        },
				        scales: {
				            yAxes: [{
				                ticks: {
				                	fontColor: 'white',
				                    beginAtZero: true,
				                    // Found the follow splitting function for chart.js here:
				                    // https://stackoverflow.com/questions/38800226/chart-js-add-commas-to-tooltip-and-y-axis
				                    userCallback: function(value, index, values) { 
								        value = value.toString();
								        value = value.split(/(?=(?:...)*$)/);
								        value = value.join(',');
								        return value;
    								}
				                }
				            }],
				            xAxes: [{
				                ticks: {
				                	fontColor: 'white'
				                }
				            }]
				        }
				    }
				});

				// Chart for world recovered data for 2 months
    			var ctx = document.getElementById('recovered-world-chart').getContext('2d');
				var myChart = new Chart(ctx, {
				    type: 'bar',
				    data: {
				        labels: [dateRangeWorld[59], dateRangeWorld[58], 
				        dateRangeWorld[57], dateRangeWorld[56], dateRangeWorld[55], dateRangeWorld[54], dateRangeWorld[53], dateRangeWorld[52], dateRangeWorld[51], 
				        dateRangeWorld[50], dateRangeWorld[49], dateRangeWorld[48], dateRangeWorld[47], dateRangeWorld[46], dateRangeWorld[45], dateRangeWorld[44], 
				        dateRangeWorld[43], dateRangeWorld[42], dateRangeWorld[41], dateRangeWorld[40], dateRangeWorld[39], dateRangeWorld[38], dateRangeWorld[37], 
				        dateRangeWorld[36], dateRangeWorld[35], dateRangeWorld[34], dateRangeWorld[33], dateRangeWorld[32], dateRangeWorld[31], dateRangeWorld[30], 
				        dateRangeWorld[29], dateRangeWorld[28], dateRangeWorld[27], dateRangeWorld[26], dateRangeWorld[25], dateRangeWorld[24], dateRangeWorld[23], 
				        dateRangeWorld[22], dateRangeWorld[21], dateRangeWorld[20], dateRangeWorld[19], dateRangeWorld[18], dateRangeWorld[17], dateRangeWorld[16], dateRangeWorld[15], 
				        dateRangeWorld[14], dateRangeWorld[13], dateRangeWorld[12], dateRangeWorld[11], dateRangeWorld[10], dateRangeWorld[9], dateRangeWorld[8], dateRangeWorld[7], 
				        dateRangeWorld[6], dateRangeWorld[5], dateRangeWorld[4], dateRangeWorld[3], dateRangeWorld[2], dateRangeWorld[1], dateRangeWorld[0]],
				        datasets: [{
				            label: '# of Recovered',
				            data: [data[59].total_recovered, data[58].total_recovered, data[57].total_recovered, data[56].total_recovered, data[55].total_recovered, data[54].total_recovered,
				            data[53].total_recovered, data[52].total_recovered, data[51].total_recovered, data[50].total_recovered, data[49].total_recovered, data[48].total_recovered,
				            data[47].total_recovered, data[46].total_recovered, data[45].total_recovered, data[44].total_recovered, data[43].total_recovered, data[42].total_recovered,
				            data[41].total_recovered, data[40].total_recovered, data[39].total_recovered, data[38].total_recovered, data[37].total_recovered, data[36].total_recovered,
				            data[35].total_recovered, data[34].total_recovered, data[33].total_recovered, data[32].total_recovered, data[31].total_recovered, data[30].total_recovered,
				            data[29].total_recovered, data[28].total_recovered, data[27].total_recovered, data[26].total_recovered, 
				            data[25].total_recovered, data[24].total_recovered, data[23].total_recovered, data[22].total_recovered, data[21].total_recovered, data[20].total_recovered, 
				            data[19].total_recovered, data[18].total_recovered, data[17].total_recovered, data[16].total_recovered, data[15].total_recovered, data[14].total_recovered, 
				            data[13].total_recovered, data[12].total_recovered, data[11].total_recovered, data[10].total_recovered, data[9].total_recovered, data[8].total_recovered, 
				            data[7].total_recovered, data[6].total_recovered, data[5].total_recovered, data[4].total_recovered, data[3].total_recovered, data[2].total_recovered, data[1].total_recovered, data[0].total_recovered],
				            backgroundColor: [
				            	'rgba(0, 187, 255, 1)', 'rgba(0, 187, 255, 1)', 'rgba(0, 187, 255, 1)', 'rgba(0, 187, 255, 1)', 
				            	'rgba(0, 187, 255, 1)', 'rgba(0, 187, 255, 1)', 'rgba(0, 187, 255, 1)', 'rgba(0, 187, 255, 1)', 
				            	'rgba(0, 187, 255, 1)', 'rgba(0, 187, 255, 1)', 'rgba(0, 187, 255, 1)', 'rgba(0, 187, 255, 1)', 
				            	'rgba(0, 187, 255, 1)', 'rgba(0, 187, 255, 1)', 'rgba(0, 187, 255, 1)', 'rgba(0, 187, 255, 1)', 
				            	'rgba(0, 187, 255, 1)', 'rgba(0, 187, 255, 1)', 'rgba(0, 187, 255, 1)', 'rgba(0, 187, 255, 1)', 
				            	'rgba(0, 187, 255, 1)', 'rgba(0, 187, 255, 1)', 'rgba(0, 187, 255, 1)', 'rgba(0, 187, 255, 1)', 
				            	'rgba(0, 187, 255, 1)', 'rgba(0, 187, 255, 1)', 'rgba(0, 187, 255, 1)', 'rgba(0, 187, 255, 1)', 
				                'rgba(0, 187, 255, 1)', 'rgba(0, 187, 255, 1)', 'rgba(0, 187, 255, 1)', 'rgba(0, 187, 255, 1)', 
				                'rgba(0, 187, 255, 1)', 'rgba(0, 187, 255, 1)', 'rgba(0, 187, 255, 1)', 'rgba(0, 187, 255, 1)', 
				                'rgba(0, 187, 255, 1)', 'rgba(0, 187, 255, 1)', 'rgba(0, 187, 255, 1)', 'rgba(0, 187, 255, 1)', 
				                'rgba(0, 187, 255, 1)', 'rgba(0, 187, 255, 1)', 'rgba(0, 187, 255, 1)', 'rgba(0, 187, 255, 1)', 
				                'rgba(0, 187, 255, 1)', 'rgba(0, 187, 255, 1)', 'rgba(0, 187, 255, 1)', 'rgba(0, 187, 255, 1)', 
				                'rgba(0, 187, 255, 1)', 'rgba(0, 187, 255, 1)', 'rgba(0, 187, 255, 1)', 'rgba(0, 187, 255, 1)', 
				                'rgba(0, 187, 255, 1)', 'rgba(0, 187, 255, 1)', 'rgba(0, 187, 255, 1)', 'rgba(0, 187, 255, 1)', 
				                'rgba(0, 187, 255, 1)', 'rgba(0, 187, 255, 1)', 'rgba(0, 187, 255, 1)', 'rgba(0, 187, 255, 1)'

				            ],
				            borderColor: [
				            	'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)',
				            	'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)',
				            	'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)',
				            	'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)',
				            	'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)',
				            	'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)',
				                'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 
				                'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 
				                'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 
				                'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 
				                'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 
				                'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 
				               
				            ],
				            borderWidth: 1
				        }]
				    },
				    options: {
				    	title: {
				            display: true,
				            fontSize: 20,
				            fontColor: 'white',
				            text: 'Total Recovered for Previous 2 Months'
        				},
				    	legend: {
				            labels: {
				                fontColor: 'white'
				            }
				        },
				        scales: {
				            yAxes: [{
				                ticks: {
				                	fontColor: 'white',
				                    beginAtZero: true,
				                    // Found the follow splitting function for chart.js here:
				                    // https://stackoverflow.com/questions/38800226/chart-js-add-commas-to-tooltip-and-y-axis
				                    userCallback: function(value, index, values) { 
								        value = value.toString();
								        value = value.split(/(?=(?:...)*$)/);
								        value = value.join(',');
								        return value;
    								}
				                }
				            }],
				            xAxes: [{
				                ticks: {
				                	fontColor: 'white'
				                }
				            }]
				        }
				    }
				});

				// Chart for world cases data for 2 months
    			var ctx = document.getElementById('cases-world-chart').getContext('2d');
				var myChart = new Chart(ctx, {
				    type: 'bar',
				    data: {
				        labels: [dateRangeWorld[59], dateRangeWorld[58], 
				        dateRangeWorld[57], dateRangeWorld[56], dateRangeWorld[55], dateRangeWorld[54], dateRangeWorld[53], dateRangeWorld[52], dateRangeWorld[51], 
				        dateRangeWorld[50], dateRangeWorld[49], dateRangeWorld[48], dateRangeWorld[47], dateRangeWorld[46], dateRangeWorld[45], dateRangeWorld[44], 
				        dateRangeWorld[43], dateRangeWorld[42], dateRangeWorld[41], dateRangeWorld[40], dateRangeWorld[39], dateRangeWorld[38], dateRangeWorld[37], 
				        dateRangeWorld[36], dateRangeWorld[35], dateRangeWorld[34], dateRangeWorld[33], dateRangeWorld[32], dateRangeWorld[31], dateRangeWorld[30], 
				        dateRangeWorld[29], dateRangeWorld[28], dateRangeWorld[27], dateRangeWorld[26], dateRangeWorld[25], dateRangeWorld[24], dateRangeWorld[23], 
				        dateRangeWorld[22], dateRangeWorld[21], dateRangeWorld[20], dateRangeWorld[19], dateRangeWorld[18], dateRangeWorld[17], dateRangeWorld[16], dateRangeWorld[15], 
				        dateRangeWorld[14], dateRangeWorld[13], dateRangeWorld[12], dateRangeWorld[11], dateRangeWorld[10], dateRangeWorld[9], dateRangeWorld[8], dateRangeWorld[7], 
				        dateRangeWorld[6], dateRangeWorld[5], dateRangeWorld[4], dateRangeWorld[3], dateRangeWorld[2], dateRangeWorld[1], dateRangeWorld[0]],
				        datasets: [{
				            label: '# of Cases',
				            data: [data[59].total_cases, data[58].total_cases, data[57].total_cases, data[56].total_cases, data[55].total_cases, data[54].total_cases,
				            data[53].total_cases, data[52].total_cases, data[51].total_cases, data[50].total_cases, data[49].total_cases, data[48].total_cases,
				            data[47].total_cases, data[46].total_cases, data[45].total_cases, data[44].total_cases, data[43].total_cases, data[42].total_cases,
				            data[41].total_cases, data[40].total_cases, data[39].total_cases, data[38].total_cases, data[37].total_cases, data[36].total_cases,
				            data[35].total_cases, data[34].total_cases, data[33].total_cases, data[32].total_cases, data[31].total_cases, data[30].total_cases,
				            data[29].total_cases, data[28].total_cases, data[27].total_cases, data[26].total_cases, 
				            data[25].total_cases, data[24].total_cases, data[23].total_cases, data[22].total_cases, data[21].total_cases, data[20].total_cases, 
				            data[19].total_cases, data[18].total_cases, data[17].total_cases, data[16].total_cases, data[15].total_cases, data[14].total_cases, 
				            data[13].total_cases, data[12].total_cases, data[11].total_cases, data[10].total_cases, data[9].total_cases, data[8].total_cases, 
				            data[7].total_cases, data[6].total_cases, data[5].total_cases, data[4].total_cases, data[3].total_cases, data[2].total_cases, data[1].total_cases, data[0].total_cases],
				            backgroundColor: [
				            	'rgba(249, 193, 50, 1)', 'rgba(249, 193, 50, 1)', 'rgba(249, 193, 50, 1)', 'rgba(249, 193, 50, 1)', 
				            	'rgba(249, 193, 50, 1)', 'rgba(249, 193, 50, 1)', 'rgba(249, 193, 50, 1)', 'rgba(249, 193, 50, 1)', 
				            	'rgba(249, 193, 50, 1)', 'rgba(249, 193, 50, 1)', 'rgba(249, 193, 50, 1)', 'rgba(249, 193, 50, 1)', 
				            	'rgba(249, 193, 50, 1)', 'rgba(249, 193, 50, 1)', 'rgba(249, 193, 50, 1)', 'rgba(249, 193, 50, 1)', 
				            	'rgba(249, 193, 50, 1)', 'rgba(249, 193, 50, 1)', 'rgba(249, 193, 50, 1)', 'rgba(249, 193, 50, 1)', 
				            	'rgba(249, 193, 50, 1)', 'rgba(249, 193, 50, 1)', 'rgba(249, 193, 50, 1)', 'rgba(249, 193, 50, 1)', 
				            	'rgba(249, 193, 50, 1)', 'rgba(249, 193, 50, 1)', 'rgba(249, 193, 50, 1)', 'rgba(249, 193, 50, 1)', 
				                'rgba(249, 193, 50, 1)', 'rgba(249, 193, 50, 1)', 'rgba(249, 193, 50, 1)', 'rgba(249, 193, 50, 1)', 
				                'rgba(249, 193, 50, 1)', 'rgba(249, 193, 50, 1)', 'rgba(249, 193, 50, 1)', 'rgba(249, 193, 50, 1)', 
				                'rgba(249, 193, 50, 1)', 'rgba(249, 193, 50, 1)', 'rgba(249, 193, 50, 1)', 'rgba(249, 193, 50, 1)', 
				                'rgba(249, 193, 50, 1)', 'rgba(249, 193, 50, 1)', 'rgba(249, 193, 50, 1)', 'rgba(249, 193, 50, 1)', 
				                'rgba(249, 193, 50, 1)', 'rgba(249, 193, 50, 1)', 'rgba(249, 193, 50, 1)', 'rgba(249, 193, 50, 1)', 
				                'rgba(249, 193, 50, 1)', 'rgba(249, 193, 50, 1)', 'rgba(249, 193, 50, 1)', 'rgba(249, 193, 50, 1)', 
				                'rgba(249, 193, 50, 1)', 'rgba(249, 193, 50, 1)', 'rgba(249, 193, 50, 1)', 'rgba(249, 193, 50, 1)', 
				                'rgba(249, 193, 50, 1)', 'rgba(249, 193, 50, 1)', 'rgba(249, 193, 50, 1)', 'rgba(249, 193, 50, 1)'

				            ],
				            borderColor: [
				            	'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)',
				            	'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)',
				            	'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)',
				            	'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)',
				            	'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)',
				            	'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)',
				                'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 
				                'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 
				                'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 
				                'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 
				                'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 
				                'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 
				               
				            ],
				            borderWidth: 1
				        }]
				    },
				    options: {
				    	title: {
				            display: true,
				            fontSize: 20,
				            fontColor: 'white',
				            text: 'Total Cases for Previous 2 Months'
        				},
				    	legend: {
				            labels: {
				                fontColor: 'white'
				            }
				        },
				        scales: {
				            yAxes: [{
				                ticks: {
				                	fontColor: 'white',
				                    beginAtZero: true,
				                    // Found the follow splitting function for chart.js here:
				                    // https://stackoverflow.com/questions/38800226/chart-js-add-commas-to-tooltip-and-y-axis
				                    userCallback: function(value, index, values) { 
								        value = value.toString();
								        value = value.split(/(?=(?:...)*$)/);
								        value = value.join(',');
								        return value;
    								}
				                }
				            }],
				            xAxes: [{
				                ticks: {
				                	fontColor: 'white'
				                }
				            }]
				        }
				    }
				});


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

	// Get the country
	var country = document.getElementById("countrycode").value

	if (country === undefined) {
		country = 'US'
	};

	dateRange = [];
	day = new Date();
	var count = 0;

	for (var i = 0; i < 90; i++) {

		day.setDate(day.getDate() - 1);
		dateRange.push(day.toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' }));
		count = count + 1;
	};

	var countryUrl = 'https://cors-anywhere.herokuapp.com/https://covid19-api.org/api/timeline/'+country

  	// Creates the response
	var req = new XMLHttpRequest();
	req.open("GET", countryUrl, true);
	req.withCredentials = false;
	req.onload = function (e) {
	  	if (req.readyState === 4) {
	    	if (req.status === 200) {

    			var data = JSON.parse(req.responseText)

    			// Chart for country death data for 2 months
    			// Chart.js information from documentation
    			var ctx = document.getElementById('dead-country-chart').getContext('2d');
				var myChart = new Chart(ctx, {
				    type: 'bar',
				    data: {
				        labels: [dateRange[59], dateRange[58], 
				        dateRange[57], dateRange[56], dateRange[55], dateRange[54], dateRange[53], dateRange[52], dateRange[51], 
				        dateRange[50], dateRange[49], dateRange[48], dateRange[47], dateRange[46], dateRange[45], dateRange[44], 
				        dateRange[43], dateRange[42], dateRange[41], dateRange[40], dateRange[39], dateRange[38], dateRange[37], 
				        dateRange[36], dateRange[35], dateRange[34], dateRange[33], dateRange[32], dateRange[31], dateRange[30], 
				        dateRange[29], dateRange[28], dateRange[27], dateRange[26], dateRange[25], dateRange[24], dateRange[23], 
				        dateRange[22], dateRange[21], dateRange[20], dateRange[19], dateRange[18], dateRange[17], dateRange[16], dateRange[15], 
				        dateRange[14], dateRange[13], dateRange[12], dateRange[11], dateRange[10], dateRange[9], dateRange[8], dateRange[7], 
				        dateRange[6], dateRange[5], dateRange[4], dateRange[3], dateRange[2], dateRange[1], dateRange[0]],
				        datasets: [{
				            label: '# of Deaths',
				            data: [data[59].deaths, data[58].deaths, data[57].deaths, data[56].deaths, data[55].deaths, data[54].deaths,
				            data[53].deaths, data[52].deaths, data[51].deaths, data[50].deaths, data[49].deaths, data[48].deaths,
				            data[47].deaths, data[46].deaths, data[45].deaths, data[44].deaths, data[43].deaths, data[42].deaths,
				            data[41].deaths, data[40].deaths, data[39].deaths, data[38].deaths, data[37].deaths, data[36].deaths,
				            data[35].deaths, data[34].deaths, data[33].deaths, data[32].deaths, data[31].deaths, data[30].deaths,
				            data[29].deaths, data[28].deaths, data[27].deaths, data[26].deaths, 
				            data[25].deaths, data[24].deaths, data[23].deaths, data[22].deaths, data[21].deaths, data[20].deaths, 
				            data[19].deaths, data[18].deaths, data[17].deaths, data[16].deaths, data[15].deaths, data[14].deaths, 
				            data[13].deaths, data[12].deaths, data[11].deaths, data[10].deaths, data[9].deaths, data[8].deaths, 
				            data[7].deaths, data[6].deaths, data[5].deaths, data[4].deaths, data[3].deaths, data[2].deaths, data[1].deaths, data[0].deaths],
				            backgroundColor: [
				            	'rgba(255, 0, 0, 1)', 'rgba(255, 0, 0, 1)', 'rgba(255, 0, 0, 1)', 'rgba(255, 0, 0, 1)', 
				            	'rgba(255, 0, 0, 1)', 'rgba(255, 0, 0, 1)', 'rgba(255, 0, 0, 1)', 'rgba(255, 0, 0, 1)', 
				            	'rgba(255, 0, 0, 1)', 'rgba(255, 0, 0, 1)', 'rgba(255, 0, 0, 1)', 'rgba(255, 0, 0, 1)', 
				            	'rgba(255, 0, 0, 1)', 'rgba(255, 0, 0, 1)', 'rgba(255, 0, 0, 1)', 'rgba(255, 0, 0, 1)', 
				            	'rgba(255, 0, 0, 1)', 'rgba(255, 0, 0, 1)', 'rgba(255, 0, 0, 1)', 'rgba(255, 0, 0, 1)', 
				            	'rgba(255, 0, 0, 1)', 'rgba(255, 0, 0, 1)', 'rgba(255, 0, 0, 1)', 'rgba(255, 0, 0, 1)', 
				            	'rgba(255, 0, 0, 1)', 'rgba(255, 0, 0, 1)', 'rgba(255, 0, 0, 1)', 'rgba(255, 0, 0, 1)', 
				                'rgba(255, 0, 0, 1)', 'rgba(255, 0, 0, 1)', 'rgba(255, 0, 0, 1)', 'rgba(255, 0, 0, 1)', 
				                'rgba(255, 0, 0, 1)', 'rgba(255, 0, 0, 1)', 'rgba(255, 0, 0, 1)', 'rgba(255, 0, 0, 1)', 
				                'rgba(255, 0, 0, 1)', 'rgba(255, 0, 0, 1)', 'rgba(255, 0, 0, 1)', 'rgba(255, 0, 0, 1)', 
				                'rgba(255, 0, 0, 1)', 'rgba(255, 0, 0, 1)', 'rgba(255, 0, 0, 1)', 'rgba(255, 0, 0, 1)', 
				                'rgba(255, 0, 0, 1)', 'rgba(255, 0, 0, 1)', 'rgba(255, 0, 0, 1)', 'rgba(255, 0, 0, 1)', 
				                'rgba(255, 0, 0, 1)', 'rgba(255, 0, 0, 1)', 'rgba(255, 0, 0, 1)', 'rgba(255, 0, 0, 1)', 
				                'rgba(255, 0, 0, 1)', 'rgba(255, 0, 0, 1)', 'rgba(255, 0, 0, 1)', 'rgba(255, 0, 0, 1)', 
				                'rgba(255, 0, 0, 1)', 'rgba(255, 0, 0, 1)', 'rgba(255, 0, 0, 1)', 'rgba(255, 0, 0, 1)'
				                // rgba(249, 193, 50, 1)
				            ],
				            borderColor: [
				            	'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)',
				            	'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)',
				            	'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)',
				            	'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)',
				            	'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)',
				            	'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)',
				                'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 
				                'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 
				                'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 
				                'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 
				                'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 
				                'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 
				               
				            ],
				            borderWidth: 1
				        }]
				    },
				    options: {
				    	title: {
				            display: true,
				            fontSize: 20,
				            fontColor: 'white',
				            text: country+' Deaths for Previous 2 Months'
        				},
				    	legend: {
				            labels: {
				                fontColor: 'white'
				            }
				        },
				        scales: {
				            yAxes: [{
				                ticks: {
				                	fontColor: 'white',
				                    beginAtZero: true,
				                    // Found the follow splitting function for chart.js here:
				                    // https://stackoverflow.com/questions/38800226/chart-js-add-commas-to-tooltip-and-y-axis
				                    userCallback: function(value, index, values) { 
								        value = value.toString();
								        value = value.split(/(?=(?:...)*$)/);
								        value = value.join(',');
								        return value;
    								}
				                }
				            }],
				            xAxes: [{
				                ticks: {
				                	fontColor: 'white'
				                }
				            }]
				        }
				    }
				});

				// Chart for country recovered data for 2 months
    			var ctx = document.getElementById('recovered-country-chart').getContext('2d');
				var myChart = new Chart(ctx, {
				    type: 'bar',
				    data: {
				        labels: [dateRange[59], dateRange[58], 
				        dateRange[57], dateRange[56], dateRange[55], dateRange[54], dateRange[53], dateRange[52], dateRange[51], 
				        dateRange[50], dateRange[49], dateRange[48], dateRange[47], dateRange[46], dateRange[45], dateRange[44], 
				        dateRange[43], dateRange[42], dateRange[41], dateRange[40], dateRange[39], dateRange[38], dateRange[37], 
				        dateRange[36], dateRange[35], dateRange[34], dateRange[33], dateRange[32], dateRange[31], dateRange[30], 
				        dateRange[29], dateRange[28], dateRange[27], dateRange[26], dateRange[25], dateRange[24], dateRange[23], 
				        dateRange[22], dateRange[21], dateRange[20], dateRange[19], dateRange[18], dateRange[17], dateRange[16], dateRange[15], 
				        dateRange[14], dateRange[13], dateRange[12], dateRange[11], dateRange[10], dateRange[9], dateRange[8], dateRange[7], 
				        dateRange[6], dateRange[5], dateRange[4], dateRange[3], dateRange[2], dateRange[1], dateRange[0]],
				        datasets: [{
				            label: '# of Recovered',
				            data: [data[59].recovered, data[58].recovered, data[57].recovered, data[56].recovered, data[55].recovered, data[54].recovered,
				            data[53].recovered, data[52].recovered, data[51].recovered, data[50].recovered, data[49].recovered, data[48].recovered,
				            data[47].recovered, data[46].recovered, data[45].recovered, data[44].recovered, data[43].recovered, data[42].recovered,
				            data[41].recovered, data[40].recovered, data[39].recovered, data[38].recovered, data[37].recovered, data[36].recovered,
				            data[35].recovered, data[34].recovered, data[33].recovered, data[32].recovered, data[31].recovered, data[30].recovered,
				            data[29].recovered, data[28].recovered, data[27].recovered, data[26].recovered, 
				            data[25].recovered, data[24].recovered, data[23].recovered, data[22].recovered, data[21].recovered, data[20].recovered, 
				            data[19].recovered, data[18].recovered, data[17].recovered, data[16].recovered, data[15].recovered, data[14].recovered, 
				            data[13].recovered, data[12].recovered, data[11].recovered, data[10].recovered, data[9].recovered, data[8].recovered, 
				            data[7].recovered, data[6].recovered, data[5].recovered, data[4].recovered, data[3].recovered, data[2].recovered, data[1].recovered, data[0].recovered],
				            backgroundColor: [
				            	'rgba(0, 187, 255, 1)', 'rgba(0, 187, 255, 1)', 'rgba(0, 187, 255, 1)', 'rgba(0, 187, 255, 1)', 
				            	'rgba(0, 187, 255, 1)', 'rgba(0, 187, 255, 1)', 'rgba(0, 187, 255, 1)', 'rgba(0, 187, 255, 1)', 
				            	'rgba(0, 187, 255, 1)', 'rgba(0, 187, 255, 1)', 'rgba(0, 187, 255, 1)', 'rgba(0, 187, 255, 1)', 
				            	'rgba(0, 187, 255, 1)', 'rgba(0, 187, 255, 1)', 'rgba(0, 187, 255, 1)', 'rgba(0, 187, 255, 1)', 
				            	'rgba(0, 187, 255, 1)', 'rgba(0, 187, 255, 1)', 'rgba(0, 187, 255, 1)', 'rgba(0, 187, 255, 1)', 
				            	'rgba(0, 187, 255, 1)', 'rgba(0, 187, 255, 1)', 'rgba(0, 187, 255, 1)', 'rgba(0, 187, 255, 1)', 
				            	'rgba(0, 187, 255, 1)', 'rgba(0, 187, 255, 1)', 'rgba(0, 187, 255, 1)', 'rgba(0, 187, 255, 1)', 
				                'rgba(0, 187, 255, 1)', 'rgba(0, 187, 255, 1)', 'rgba(0, 187, 255, 1)', 'rgba(0, 187, 255, 1)', 
				                'rgba(0, 187, 255, 1)', 'rgba(0, 187, 255, 1)', 'rgba(0, 187, 255, 1)', 'rgba(0, 187, 255, 1)', 
				                'rgba(0, 187, 255, 1)', 'rgba(0, 187, 255, 1)', 'rgba(0, 187, 255, 1)', 'rgba(0, 187, 255, 1)', 
				                'rgba(0, 187, 255, 1)', 'rgba(0, 187, 255, 1)', 'rgba(0, 187, 255, 1)', 'rgba(0, 187, 255, 1)', 
				                'rgba(0, 187, 255, 1)', 'rgba(0, 187, 255, 1)', 'rgba(0, 187, 255, 1)', 'rgba(0, 187, 255, 1)', 
				                'rgba(0, 187, 255, 1)', 'rgba(0, 187, 255, 1)', 'rgba(0, 187, 255, 1)', 'rgba(0, 187, 255, 1)', 
				                'rgba(0, 187, 255, 1)', 'rgba(0, 187, 255, 1)', 'rgba(0, 187, 255, 1)', 'rgba(0, 187, 255, 1)', 
				                'rgba(0, 187, 255, 1)', 'rgba(0, 187, 255, 1)', 'rgba(0, 187, 255, 1)', 'rgba(0, 187, 255, 1)'

				            ],
				            borderColor: [
				            	'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)',
				            	'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)',
				            	'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)',
				            	'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)',
				            	'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)',
				            	'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)',
				                'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 
				                'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 
				                'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 
				                'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 
				                'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 
				                'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 
				               
				            ],
				            borderWidth: 1
				        }]
				    },
				    options: {
				    	title: {
				            display: true,
				            fontSize: 20,
				            fontColor: 'white',
				            text: country+' Recovered for Previous 2 Months'
        				},
				    	legend: {
				            labels: {
				                fontColor: 'white'
				            }
				        },
				        scales: {
				            yAxes: [{
				                ticks: {
				                	fontColor: 'white',
				                    beginAtZero: true,
				                    // Found the follow splitting function for chart.js here:
				                    // https://stackoverflow.com/questions/38800226/chart-js-add-commas-to-tooltip-and-y-axis
				                    userCallback: function(value, index, values) { 
								        value = value.toString();
								        value = value.split(/(?=(?:...)*$)/);
								        value = value.join(',');
								        return value;
    								}
				                }
				            }],
				            xAxes: [{
				                ticks: {
				                	fontColor: 'white'
				                }
				            }]
				        }
				    }
				});

				// Chart for country cases data for 2 months
    			var ctx = document.getElementById('cases-country-chart').getContext('2d');
				var myChart = new Chart(ctx, {
				    type: 'bar',
				    data: {
				        labels: [dateRange[59], dateRange[58], 
				        dateRange[57], dateRange[56], dateRange[55], dateRange[54], dateRange[53], dateRange[52], dateRange[51], 
				        dateRange[50], dateRange[49], dateRange[48], dateRange[47], dateRange[46], dateRange[45], dateRange[44], 
				        dateRange[43], dateRange[42], dateRange[41], dateRange[40], dateRange[39], dateRange[38], dateRange[37], 
				        dateRange[36], dateRange[35], dateRange[34], dateRange[33], dateRange[32], dateRange[31], dateRange[30], 
				        dateRange[29], dateRange[28], dateRange[27], dateRange[26], dateRange[25], dateRange[24], dateRange[23], 
				        dateRange[22], dateRange[21], dateRange[20], dateRange[19], dateRange[18], dateRange[17], dateRange[16], dateRange[15], 
				        dateRange[14], dateRange[13], dateRange[12], dateRange[11], dateRange[10], dateRange[9], dateRange[8], dateRange[7], 
				        dateRange[6], dateRange[5], dateRange[4], dateRange[3], dateRange[2], dateRange[1], dateRange[0]],
				        datasets: [{
				            label: '# of Cases',
				            data: [data[59].cases, data[58].cases, data[57].cases, data[56].cases, data[55].cases, data[54].cases,
				            data[53].cases, data[52].cases, data[51].cases, data[50].cases, data[49].cases, data[48].cases,
				            data[47].cases, data[46].cases, data[45].cases, data[44].cases, data[43].cases, data[42].cases,
				            data[41].cases, data[40].cases, data[39].cases, data[38].cases, data[37].cases, data[36].cases,
				            data[35].cases, data[34].cases, data[33].cases, data[32].cases, data[31].cases, data[30].cases,
				            data[29].cases, data[28].cases, data[27].cases, data[26].cases, 
				            data[25].cases, data[24].cases, data[23].cases, data[22].cases, data[21].cases, data[20].cases, 
				            data[19].cases, data[18].cases, data[17].cases, data[16].cases, data[15].cases, data[14].cases, 
				            data[13].cases, data[12].cases, data[11].cases, data[10].cases, data[9].cases, data[8].cases, 
				            data[7].cases, data[6].cases, data[5].cases, data[4].cases, data[3].cases, data[2].cases, data[1].cases, data[0].cases],
				            backgroundColor: [
				            	'rgba(249, 193, 50, 1)', 'rgba(249, 193, 50, 1)', 'rgba(249, 193, 50, 1)', 'rgba(249, 193, 50, 1)', 
				            	'rgba(249, 193, 50, 1)', 'rgba(249, 193, 50, 1)', 'rgba(249, 193, 50, 1)', 'rgba(249, 193, 50, 1)', 
				            	'rgba(249, 193, 50, 1)', 'rgba(249, 193, 50, 1)', 'rgba(249, 193, 50, 1)', 'rgba(249, 193, 50, 1)', 
				            	'rgba(249, 193, 50, 1)', 'rgba(249, 193, 50, 1)', 'rgba(249, 193, 50, 1)', 'rgba(249, 193, 50, 1)', 
				            	'rgba(249, 193, 50, 1)', 'rgba(249, 193, 50, 1)', 'rgba(249, 193, 50, 1)', 'rgba(249, 193, 50, 1)', 
				            	'rgba(249, 193, 50, 1)', 'rgba(249, 193, 50, 1)', 'rgba(249, 193, 50, 1)', 'rgba(249, 193, 50, 1)', 
				            	'rgba(249, 193, 50, 1)', 'rgba(249, 193, 50, 1)', 'rgba(249, 193, 50, 1)', 'rgba(249, 193, 50, 1)', 
				                'rgba(249, 193, 50, 1)', 'rgba(249, 193, 50, 1)', 'rgba(249, 193, 50, 1)', 'rgba(249, 193, 50, 1)', 
				                'rgba(249, 193, 50, 1)', 'rgba(249, 193, 50, 1)', 'rgba(249, 193, 50, 1)', 'rgba(249, 193, 50, 1)', 
				                'rgba(249, 193, 50, 1)', 'rgba(249, 193, 50, 1)', 'rgba(249, 193, 50, 1)', 'rgba(249, 193, 50, 1)', 
				                'rgba(249, 193, 50, 1)', 'rgba(249, 193, 50, 1)', 'rgba(249, 193, 50, 1)', 'rgba(249, 193, 50, 1)', 
				                'rgba(249, 193, 50, 1)', 'rgba(249, 193, 50, 1)', 'rgba(249, 193, 50, 1)', 'rgba(249, 193, 50, 1)', 
				                'rgba(249, 193, 50, 1)', 'rgba(249, 193, 50, 1)', 'rgba(249, 193, 50, 1)', 'rgba(249, 193, 50, 1)', 
				                'rgba(249, 193, 50, 1)', 'rgba(249, 193, 50, 1)', 'rgba(249, 193, 50, 1)', 'rgba(249, 193, 50, 1)', 
				                'rgba(249, 193, 50, 1)', 'rgba(249, 193, 50, 1)', 'rgba(249, 193, 50, 1)', 'rgba(249, 193, 50, 1)'

				            ],
				            borderColor: [
				            	'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)',
				            	'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)',
				            	'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)',
				            	'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)',
				            	'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)',
				            	'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)',
				                'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 
				                'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 
				                'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 
				                'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 
				                'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 
				                'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 
				               
				            ],
				            borderWidth: 1
				        }]
				    },
				    options: {
				    	title: {
				            display: true,
				            fontSize: 20,
				            fontColor: 'white',
				            text: country+' Cases for Previous 2 Months'
        				},
				    	legend: {
				            labels: {
				                fontColor: 'white'
				            }
				        },
				        scales: {
				            yAxes: [{
				                ticks: {
				                	fontColor: 'white',
				                    beginAtZero: true,
				                    // Found the follow splitting function for chart.js here:
				                    // https://stackoverflow.com/questions/38800226/chart-js-add-commas-to-tooltip-and-y-axis
				                    userCallback: function(value, index, values) { 
								        value = value.toString();
								        value = value.split(/(?=(?:...)*$)/);
								        value = value.join(',');
								        return value;
    								}
				                }
				            }],
				            xAxes: [{
				                ticks: {
				                	fontColor: 'white'
				                }
				            }]
				        }
				    }
				});

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


	// Get the country
	var country = document.getElementById("countrycode").value

	if (country === undefined) {
		country = 'US'
	};

	dateRangePred = [];
	predDay = new Date();

	for (var i = 0; i < 14; i++) {

		predDay.setDate(predDay.getDate() + 1);
		dateRangePred.push(predDay.toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' }));
	};

	var countryUrl = 'https://cors-anywhere.herokuapp.com/https://covid19-api.org/api/prediction/'+country

  	// Creates the response
	var req = new XMLHttpRequest();
	req.open("GET", countryUrl, true);
	req.withCredentials = false;
	req.onload = function (e) {
	  	if (req.readyState === 4) {
	    	if (req.status === 200) {

    			var data = JSON.parse(req.responseText)

    			// Chart for predicted country cases data for 2 weeks
    			var ctx = document.getElementById('prediction-country-chart').getContext('2d');
				var myChart = new Chart(ctx, {
				    type: 'line',
				    data: {
				        labels: [dateRangePred[0], dateRangePred[1], dateRangePred[2], dateRangePred[3], 
				        dateRangePred[4], dateRangePred[5], dateRangePred[6]],
				        datasets: [{
				        	fill: false,
				            label: 'Predicted # of Cases',
				            data: [data[0].cases, data[1].cases, data[2].cases, data[3].cases, data[4].cases, data[5].cases, data[6].cases],
				            backgroundColor: [
				            	'rgba(249, 193, 50, 1)', 'rgba(249, 193, 50, 1)', 'rgba(249, 193, 50, 1)', 'rgba(249, 193, 50, 1)', 
				            	'rgba(249, 193, 50, 1)', 'rgba(249, 193, 50, 1)', 'rgba(249, 193, 50, 1)'
				            ],
				            borderColor: [
				            	'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)',
				            	'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)'
				               
				            ],
				            borderWidth: 1
				        }]
				    },
				    options: {
				    	title: {
				            display: true,
				            fontSize: 20,
				            fontColor: 'white',
				            text: country+' 1 Week Case Prediction'
        				},
				    	legend: {
				            labels: {
				                fontColor: 'white'
				            }
				        },
				        scales: {
				            yAxes: [{
				                ticks: {
				                	fontColor: 'white',
				                    beginAtZero: true,
				                    // Found the follow splitting function for chart.js here:
				                    // https://stackoverflow.com/questions/38800226/chart-js-add-commas-to-tooltip-and-y-axis
				                    userCallback: function(value, index, values) { 
								        value = value.toString();
								        value = value.split(/(?=(?:...)*$)/);
								        value = value.join(',');
								        return value;
    								}
				                }
				            }],
				            xAxes: [{
				                ticks: {
				                	fontColor: 'white'
				                }
				            }]
				        }
				    }
				});


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











