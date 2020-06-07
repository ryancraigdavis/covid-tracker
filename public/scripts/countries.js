function getFirstCountryData(country,countryName){
// Takes a country code and name as an input and produces a set of charts based on that country
// Data from: https://covid19-api.org/

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
    	if (req.status === 200 && (JSON.parse(req.responseText)).length !== 0) {

			var data = JSON.parse(req.responseText);

			// Chart for country death data for 2 months
			// Chart.js information from documentation
			// First we must clear any chart already there - https://stackoverflow.com/questions/3387427/remove-element-by-id
			var removeChart = document.getElementById('first-dead-country-chart');
			removeChart.parentNode.removeChild(removeChart);
			document.getElementById('first-dead-country-dashboard').innerHTML += 
			'<canvas id="first-dead-country-chart" width="350" height="350"></canvas>'

			// Now we create the chart object, and pass through the data
			var ctx = document.getElementById('first-dead-country-chart').getContext('2d');
			var casesChart = new Chart(ctx, {
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
			            text: 'Deaths for Previous 2 Months - '+countryName
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
			// First we must clear any chart already there - https://stackoverflow.com/questions/3387427/remove-element-by-id
			var removeChart = document.getElementById('first-recovered-country-chart');
			removeChart.parentNode.removeChild(removeChart);
			document.getElementById('first-recovered-country-dashboard').innerHTML += 
			'<canvas id="first-recovered-country-chart" width="350" height="350"></canvas>'

			// Now we create the chart object, and pass through the data
			var ctx = document.getElementById('first-recovered-country-chart').getContext('2d');
			var recoveredChart = new Chart(ctx, {
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
			            text: 'Recovered for Previous 2 Months - '+countryName
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
			// First we must clear any chart already there - https://stackoverflow.com/questions/3387427/remove-element-by-id
			// Then we must add back the canvas - this is to prevent multiple charts from rendering in the same spot
			var removeChart = document.getElementById('first-cases-country-chart');
			removeChart.parentNode.removeChild(removeChart);
			document.getElementById('first-cases-country-dashboard').innerHTML += 
			'<canvas id="first-cases-country-chart" width="350" height="350"></canvas>'

			// Now we create the chart object, and pass through the data
			var ctx = document.getElementById('first-cases-country-chart').getContext('2d');
			var deathChart = new Chart(ctx, {
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
			            text: 'Cases for Previous 2 Months - '+countryName
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

			// Chart for country % of total cases data
			// First we must clear any chart already there - https://stackoverflow.com/questions/3387427/remove-element-by-id
			var removeChart = document.getElementById('first-country-pie-chart');
			removeChart.parentNode.removeChild(removeChart);
			document.getElementById('first-country-pie-dashboard').innerHTML += 
			'<canvas id="first-country-pie-chart" width="350" height="350"></canvas>'

			// These two variables are specific to the pie chart, the second is the total active cases
			// The first is the regular number of total cases but with the comma separators added
			// I used this code snippet: 
			// https://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript
			var totalCasesTitle = data[0].cases.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
			var active = data[0].cases - data[0].recovered - data[0].deaths

			// Now we create the chart object, and pass through the data
			var ctx = document.getElementById('first-country-pie-chart').getContext('2d');
			var percentPieChart = new Chart(ctx, {
			    type: 'pie',
			    data: {
			        labels: ['% Active', '% Dead', '% Recovered'],
			        datasets: [{
			            label: 'Current % of Total Cases',
			            data: [Math.round((active / data[0].cases)*10000)/100, 
			            Math.round((data[0].deaths / data[0].cases)*10000)/100, 
			            Math.round((data[0].recovered / data[0].cases)*10000)/100],
			            backgroundColor: [
			            	'rgba(0, 252, 33, 1)', 'rgba(255, 0, 0, 1)', 'rgba(0, 187, 255, 1)'
			            ],
			            borderColor: [
			            	'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)'   
			            ],
			            borderWidth: 1
			        }]
			    },
			    options: {
			    	title: {
			            display: true,
			            fontSize: 20,
			            fontColor: 'white',
			            text: '% of Total '+countryName+' Cases: '+totalCasesTitle
    				},
			    	legend: {
			            labels: {
			                fontColor: 'white'
			            }
			        }
			    }
			});

    	} else {
      		console.error(req.statusText);
      		// With a bad request, or no data available, we append that message to the box
			var removeChart = document.getElementById('first-dead-country-chart');
			removeChart.parentNode.removeChild(removeChart);
			document.getElementById('first-dead-country-dashboard').innerHTML += 
			'<canvas id="first-dead-country-chart" width="350" height="350"></canvas>'
			var ctx = document.getElementById('first-dead-country-chart').getContext('2d');

			var deadChart = new Chart(ctx, {
				options: {
			    	title: {
			            display: true,
			            fontSize: 20,
			            fontColor: 'white',
			            text: 'No Data Available'
			        }
			    }
			});

			// With a bad request, or no data available, we append that message to the box
			var removeChart = document.getElementById('first-recovered-country-chart');
			removeChart.parentNode.removeChild(removeChart);
			document.getElementById('first-recovered-country-dashboard').innerHTML += 
			'<canvas id="first-recovered-country-chart" width="350" height="350"></canvas>'
			var ctx = document.getElementById('first-recovered-country-chart').getContext('2d');

			var recoveredChart = new Chart(ctx, {
				options: {
			    	title: {
			            display: true,
			            fontSize: 20,
			            fontColor: 'white',
			            text: 'No Data Available'
			        }
			    }
			});

			// With a bad request, or no data available, we append that message to the box
			var removeChart = document.getElementById('first-cases-country-chart');
			removeChart.parentNode.removeChild(removeChart);
			document.getElementById('first-cases-country-dashboard').innerHTML += 
			'<canvas id="first-cases-country-chart" width="350" height="350"></canvas>'
			var ctx = document.getElementById('first-cases-country-chart').getContext('2d');

			var predChart = new Chart(ctx, {
				options: {
			    	title: {
			            display: true,
			            fontSize: 20,
			            fontColor: 'white',
			            text: 'No Data Available'
			        }
			    }
			});

			// With a bad request, or no data available, we append that message to the box
			var removeChart = document.getElementById('first-country-pie-chart');
			removeChart.parentNode.removeChild(removeChart);
			document.getElementById('first-country-pie-dashboard').innerHTML += 
			'<canvas id="first-country-pie-chart" width="350" height="350"></canvas>'
			var ctx = document.getElementById('first-country-pie-chart').getContext('2d');

			var predChart = new Chart(ctx, {
				options: {
			    	title: {
			            display: true,
			            fontSize: 20,
			            fontColor: 'white',
			            text: 'No Data Available'
			        }
			    }
			});
    	}
  	}
};
req.onerror = function (e) {
  console.error(req.statusText);
};
req.send(null);
};

function getSecondCountryData(country,countryName){
// Takes a country code and name as an input and produces a set of charts based on that country
// Data from: https://covid19-api.org/

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
    	if (req.status === 200 && (JSON.parse(req.responseText)).length !== 0) {

			var data = JSON.parse(req.responseText);

			// Chart for country death data for 2 months
			// Chart.js information from documentation
			// First we must clear any chart already there - https://stackoverflow.com/questions/3387427/remove-element-by-id
			var removeChart = document.getElementById('second-dead-country-chart');
			console.log(removeChart)
			removeChart.parentNode.removeChild(removeChart);
			document.getElementById('second-dead-country-dashboard').innerHTML += 
			'<canvas id="second-dead-country-chart" width="350" height="350"></canvas>'

			// Now we create the chart object, and pass through the data
			var ctx = document.getElementById('second-dead-country-chart').getContext('2d');
			var casesChart = new Chart(ctx, {
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
			            text: 'Deaths for Previous 2 Months - '+countryName
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
			// First we must clear any chart already there - https://stackoverflow.com/questions/3387427/remove-element-by-id
			var removeChart = document.getElementById('second-recovered-country-chart');
			removeChart.parentNode.removeChild(removeChart);
			document.getElementById('second-recovered-country-dashboard').innerHTML += 
			'<canvas id="second-recovered-country-chart" width="350" height="350"></canvas>'

			// Now we create the chart object, and pass through the data
			var ctx = document.getElementById('second-recovered-country-chart').getContext('2d');
			var recoveredChart = new Chart(ctx, {
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
			            text: 'Recovered for Previous 2 Months - '+countryName
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
			// First we must clear any chart already there - https://stackoverflow.com/questions/3387427/remove-element-by-id
			// Then we must add back the canvas - this is to prevent multiple charts from rendering in the same spot
			var removeChart = document.getElementById('second-cases-country-chart');
			removeChart.parentNode.removeChild(removeChart);
			document.getElementById('second-cases-country-dashboard').innerHTML += 
			'<canvas id="second-cases-country-chart" width="350" height="350"></canvas>'

			// Now we create the chart object, and pass through the data
			var ctx = document.getElementById('second-cases-country-chart').getContext('2d');
			var deathChart = new Chart(ctx, {
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
			            text: 'Cases for Previous 2 Months - '+countryName
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

			// Chart for country % of total cases data
			// First we must clear any chart already there - https://stackoverflow.com/questions/3387427/remove-element-by-id
			var removeChart = document.getElementById('second-country-pie-chart');
			removeChart.parentNode.removeChild(removeChart);
			document.getElementById('second-country-pie-dashboard').innerHTML += 
			'<canvas id="second-country-pie-chart" width="350" height="350"></canvas>'

			// These two variables are specific to the pie chart, the second is the total active cases
			// The first is the regular number of total cases but with the comma separators added
			// I used this code snippet: 
			// https://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript
			var totalCasesTitle = data[0].cases.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
			var active = data[0].cases - data[0].recovered - data[0].deaths

			// Now we create the chart object, and pass through the data
			var ctx = document.getElementById('second-country-pie-chart').getContext('2d');
			var percentPieChart = new Chart(ctx, {
			    type: 'pie',
			    data: {
			        labels: ['% Active', '% Dead', '% Recovered'],
			        datasets: [{
			            label: 'Current % of Total Cases',
			            data: [Math.round((active / data[0].cases)*10000)/100, 
			            Math.round((data[0].deaths / data[0].cases)*10000)/100, 
			            Math.round((data[0].recovered / data[0].cases)*10000)/100],
			            backgroundColor: [
			            	'rgba(0, 252, 33, 1)', 'rgba(255, 0, 0, 1)', 'rgba(0, 187, 255, 1)'
			            ],
			            borderColor: [
			            	'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)'   
			            ],
			            borderWidth: 1
			        }]
			    },
			    options: {
			    	title: {
			            display: true,
			            fontSize: 20,
			            fontColor: 'white',
			            text: '% of Total '+countryName+' Cases: '+totalCasesTitle
    				},
			    	legend: {
			            labels: {
			                fontColor: 'white'
			            }
			        }
			    }
			});

    	} else {
      		console.error(req.statusText);
      		// With a bad request, or no data available, we append that message to the box
			var removeChart = document.getElementById('second-dead-country-chart');
			removeChart.parentNode.removeChild(removeChart);
			document.getElementById('second-dead-country-dashboard').innerHTML += 
			'<canvas id="second-dead-country-chart" width="350" height="350"></canvas>'
			var ctx = document.getElementById('second-dead-country-chart').getContext('2d');

			var deadChart = new Chart(ctx, {
				options: {
			    	title: {
			            display: true,
			            fontSize: 20,
			            fontColor: 'white',
			            text: 'No Data Available'
			        }
			    }
			});

			// With a bad request, or no data available, we append that message to the box
			var removeChart = document.getElementById('second-recovered-country-chart');
			removeChart.parentNode.removeChild(removeChart);
			document.getElementById('second-recovered-country-dashboard').innerHTML += 
			'<canvas id="second-recovered-country-chart" width="350" height="350"></canvas>'
			var ctx = document.getElementById('second-recovered-country-chart').getContext('2d');

			var recoveredChart = new Chart(ctx, {
				options: {
			    	title: {
			            display: true,
			            fontSize: 20,
			            fontColor: 'white',
			            text: 'No Data Available'
			        }
			    }
			});

			// With a bad request, or no data available, we append that message to the box
			var removeChart = document.getElementById('second-cases-country-chart');
			removeChart.parentNode.removeChild(removeChart);
			document.getElementById('second-cases-country-dashboard').innerHTML += 
			'<canvas id="second-cases-country-chart" width="350" height="350"></canvas>'
			var ctx = document.getElementById('second-cases-country-chart').getContext('2d');

			var predChart = new Chart(ctx, {
				options: {
			    	title: {
			            display: true,
			            fontSize: 20,
			            fontColor: 'white',
			            text: 'No Data Available'
			        }
			    }
			});

			// With a bad request, or no data available, we append that message to the box
			var removeChart = document.getElementById('second-country-pie-chart');
			removeChart.parentNode.removeChild(removeChart);
			document.getElementById('second-country-pie-dashboard').innerHTML += 
			'<canvas id="second-country-pie-chart" width="350" height="350"></canvas>'
			var ctx = document.getElementById('second-country-pie-chart').getContext('2d');

			var predChart = new Chart(ctx, {
				options: {
			    	title: {
			            display: true,
			            fontSize: 20,
			            fontColor: 'white',
			            text: 'No Data Available'
			        }
			    }
			});
    	}
  	}
};
req.onerror = function (e) {
  console.error(req.statusText);
};
req.send(null);
};

function getFirstPredictionData(country,countryName){
// Takes a country code as an input and produces a prediction chart based on that country
// Data from: https://covid19-api.org/

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
			// First we must clear any chart already there - https://stackoverflow.com/questions/3387427/remove-element-by-id
			var removeChart = document.getElementById('first-prediction-country-chart');
			removeChart.parentNode.removeChild(removeChart);
			document.getElementById('first-prediction-country-dashboard').innerHTML += 
			'<canvas id="first-prediction-country-chart" width="350" height="350"></canvas>'

			// Now we create the chart object, and pass through the data
			var ctx = document.getElementById('first-prediction-country-chart').getContext('2d');

			var predChart = new Chart(ctx, {
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
			            text: '1 Week Case Prediction - '+countryName
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
      		// With a bad request, or no data available, we append that message to the box
			var removeChart = document.getElementById('first-prediction-country-chart');
			removeChart.parentNode.removeChild(removeChart);
			document.getElementById('first-prediction-country-dashboard').innerHTML += 
			'<canvas id="first-prediction-country-chart" width="350" height="350"></canvas>'
			var ctx = document.getElementById('first-prediction-country-chart').getContext('2d');

			var predChart = new Chart(ctx, {
				options: {
			    	title: {
			            display: true,
			            fontSize: 20,
			            fontColor: 'white',
			            text: 'No Data Available'
			        }
			    }
			});

    	}
  	}
};
req.onerror = function (e) {
  console.error(req.statusText);
};
req.send(null);
};

function getSecondPredictionData(country,countryName){
// Takes a country code as an input and produces a prediction chart based on that country
// Data from: https://covid19-api.org/

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
			// First we must clear any chart already there - https://stackoverflow.com/questions/3387427/remove-element-by-id
			var removeChart = document.getElementById('second-prediction-country-chart');
			removeChart.parentNode.removeChild(removeChart);
			document.getElementById('second-prediction-country-dashboard').innerHTML += 
			'<canvas id="second-prediction-country-chart" width="350" height="350"></canvas>'

			// Now we create the chart object, and pass through the data
			var ctx = document.getElementById('second-prediction-country-chart').getContext('2d');

			var predChart = new Chart(ctx, {
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
			            text: '1 Week Case Prediction - '+countryName
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
      		// With a bad request, or no data available, we append that message to the box
			var removeChart = document.getElementById('second-prediction-country-chart');
			removeChart.parentNode.removeChild(removeChart);
			document.getElementById('second-prediction-country-dashboard').innerHTML += 
			'<canvas id="second-prediction-country-chart" width="350" height="350"></canvas>'
			var ctx = document.getElementById('second-prediction-country-chart').getContext('2d');

			var predChart = new Chart(ctx, {
				options: {
			    	title: {
			            display: true,
			            fontSize: 20,
			            fontColor: 'white',
			            text: 'No Data Available'
			        }
			    }
			});

    	}
  	}
};
req.onerror = function (e) {
  console.error(req.statusText);
};
req.send(null);
};

// Functions automatically called on page load
// Germany is the default country passed
getFirstCountryData('DE','Germany');
getFirstPredictionData('DE','Germany');
getSecondCountryData('US','United States');
getSecondPredictionData('US','United States');

function getFirstCountryValue(code) {
// When the user selects a new country, the country chart functions
// are called again but with the new code
// These two varaibles split the passed value into a code and country name
var code1Value = code.value
var country1Code = code.value.substring(0,2)
var country1Name = code.value.substring(3,code1Value.length)

// Passes the new code and name and rebuilds the charts
	getFirstCountryData(country1Code,country1Name);
getFirstPredictionData(country1Code,country1Name);
}

function getSecondCountryValue(code) {
// When the user selects a new country, the country chart functions
// are called again but with the new code
// These two varaibles split the passed value into a code and country name
var code2Value = code.value
var country2Code = code.value.substring(0,2)
var country2Name = code.value.substring(3,code2Value.length)

// Passes the new code and name and rebuilds the charts
	getSecondCountryData(country2Code,country2Name);
getSecondPredictionData(country2Code,country2Name);
}