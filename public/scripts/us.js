function getUsData(country,countryName){
	// Takes a country code as an input and produces a set of charts based on that country
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
    			var removeChart = document.getElementById('dead-country-chart');
				removeChart.parentNode.removeChild(removeChart);
				document.getElementById('dead-country-dashboard').innerHTML += 
				'<canvas id="dead-country-chart" width="350" height="350"></canvas>'

				// Now we create the chart object, and pass through the data
    			var ctx = document.getElementById('dead-country-chart').getContext('2d');
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
				            text: countryName+' Deaths for Previous 2 Months'
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
    			var removeChart = document.getElementById('recovered-country-chart');
				removeChart.parentNode.removeChild(removeChart);
				document.getElementById('recovered-country-dashboard').innerHTML += 
				'<canvas id="recovered-country-chart" width="350" height="350"></canvas>'

				// Now we create the chart object, and pass through the data
    			var ctx = document.getElementById('recovered-country-chart').getContext('2d');
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
				            text: countryName+' Recovered for Previous 2 Months'
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
    			var removeChart = document.getElementById('cases-country-chart');
				removeChart.parentNode.removeChild(removeChart);
				document.getElementById('cases-country-dashboard').innerHTML += 
				'<canvas id="cases-country-chart" width="350" height="350"></canvas>'

				// Now we create the chart object, and pass through the data
    			var ctx = document.getElementById('cases-country-chart').getContext('2d');
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
				            text: countryName+' Cases for Previous 2 Months'
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

				// Chart for US % of total cases data
				// First we must clear any chart already there - https://stackoverflow.com/questions/3387427/remove-element-by-id
    			var removeChart = document.getElementById('percent-pie-chart');
				removeChart.parentNode.removeChild(removeChart);
				document.getElementById('percent-pie-dashboard').innerHTML += 
				'<canvas id="percent-pie-chart" width="350" height="350"></canvas>'

				// These two variables are specific to the pie chart, the second is the total active cases
				// The first is the regular number of total cases but with the comma separators added
				// I used this code snippet: 
				// https://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript
				var totalCasesTitle = data[0].cases.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
				var active = data[0].cases - data[0].recovered - data[0].deaths

				// Now we create the chart object, and pass through the data
    			var ctx = document.getElementById('percent-pie-chart').getContext('2d');
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
    			var removeChart = document.getElementById('dead-country-chart');
				removeChart.parentNode.removeChild(removeChart);
				document.getElementById('dead-country-dashboard').innerHTML += 
				'<canvas id="dead-country-chart" width="350" height="350"></canvas>'
				var ctx = document.getElementById('dead-country-chart').getContext('2d');

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
    			var removeChart = document.getElementById('recovered-country-chart');
				removeChart.parentNode.removeChild(removeChart);
				document.getElementById('recovered-country-dashboard').innerHTML += 
				'<canvas id="recovered-country-chart" width="350" height="350"></canvas>'
				var ctx = document.getElementById('recovered-country-chart').getContext('2d');

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
    			var removeChart = document.getElementById('cases-country-chart');
				removeChart.parentNode.removeChild(removeChart);
				document.getElementById('cases-country-dashboard').innerHTML += 
				'<canvas id="cases-country-chart" width="350" height="350"></canvas>'
				var ctx = document.getElementById('cases-country-chart').getContext('2d');

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
    			var removeChart = document.getElementById('percent-pie-chart');
				removeChart.parentNode.removeChild(removeChart);
				document.getElementById('percent-pie-dashboard').innerHTML += 
				'<canvas id="percent-pie-chart" width="350" height="350"></canvas>'
				var ctx = document.getElementById('percent-pie-chart').getContext('2d');

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

function getPredictionData(country,countryName){
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
    			var removeChart = document.getElementById('prediction-country-chart');
				removeChart.parentNode.removeChild(removeChart);
				document.getElementById('prediction-country-dashboard').innerHTML += 
				'<canvas id="prediction-country-chart" width="350" height="350"></canvas>'

				// Now we create the chart object, and pass through the data
    			var ctx = document.getElementById('prediction-country-chart').getContext('2d');

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
				            text: countryName+' 1 Week Case Prediction'
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
    			var removeChart = document.getElementById('prediction-country-chart');
				removeChart.parentNode.removeChild(removeChart);
				document.getElementById('prediction-country-dashboard').innerHTML += 
				'<canvas id="prediction-country-chart" width="350" height="350"></canvas>'
				var ctx = document.getElementById('prediction-country-chart').getContext('2d');

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

function getDifferenceData(country,countryName){
	// Takes a country code as an input and shows the latest changes in cases
	// Data from: https://covid19-api.org/

	dayDiff = new Date();

	dayDiff.setDate(dayDiff.getDate() - 1);
	dayDiff = dayDiff.toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' });

	var countryUrl = 'https://cors-anywhere.herokuapp.com/https://covid19-api.org/api/diff/'+country

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
    			var removeChart = document.getElementById('difference-chart');
				removeChart.parentNode.removeChild(removeChart);
				document.getElementById('difference-dashboard').innerHTML += 
				'<canvas id="difference-chart" width="350" height="350"></canvas>'

				// Now we create the chart object, and pass through the data
    			var ctx = document.getElementById('difference-chart').getContext('2d');

				var diffChart = new Chart(ctx, {
				    type: 'bar',
				    data: {
				        labels: ['Cases: '+data.new_cases_percentage+'% Change', 'Recovered: '+data.new_recovered_percentage+'% Change', 
				        'Deaths: '+data.new_deaths_percentage+'% Change'],
				        datasets: [{
				        	fill: false,
				            label: 'Change since '+dayDiff,
				            data: [data.new_cases, data.new_recovered, data.new_deaths],
				            backgroundColor: [
				            	'rgba(255, 0, 0, 1)', 'rgba(0, 187, 255, 1)', 'rgba(249, 193, 50, 1)'
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
				            text: 'Change since '+dayDiff
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
    			var removeChart = document.getElementById('difference-chart');
				removeChart.parentNode.removeChild(removeChart);
				document.getElementById('difference-dashboard').innerHTML += 
				'<canvas id="difference-chart" width="350" height="350"></canvas>'
				var ctx = document.getElementById('difference-chart').getContext('2d');

				var diffChart = new Chart(ctx, {
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

function getUsLaborData(){
	// Creates a chart of latest month by month Unemployment data
	// Data from: https://www.bls.gov/developers/

	dayLabor = new Date();

	dayLabor.setDate(dayLabor.getDate() - 1);
	dayLabor = dayLabor.toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' });

	var laborUrl = 'https://cors-anywhere.herokuapp.com/http://api.bls.gov/publicAPI/v1/timeseries/data/LNS14000000'

  	// Creates the response
	var req = new XMLHttpRequest();
	req.open("GET", laborUrl, true);
	req.withCredentials = false;
	req.onload = function (e) {
	  	if (req.readyState === 4) {
	    	if (req.status === 200) {

    			var data = JSON.parse(req.responseText)
    			var laborData = data.Results.series[0].data
    			console.log(laborData)

    			// Chart for past 3 months of unemployment data
    			// First we must clear any chart already there - https://stackoverflow.com/questions/3387427/remove-element-by-id
    			var removeChart = document.getElementById('labor-chart');
				removeChart.parentNode.removeChild(removeChart);
				document.getElementById('labor-dashboard').innerHTML += 
				'<canvas id="labor-chart" width="350" height="350"></canvas>'

				// Now we create the chart object, and pass through the data
    			var ctx = document.getElementById('labor-chart').getContext('2d');

				var laborChart = new Chart(ctx, {
				    type: 'line',
				    data: {
				        labels: [laborData[4].periodName+' - '+laborData[4].year, laborData[3].periodName+' - '+laborData[3].year, 
				        laborData[2].periodName+' - '+laborData[2].year, laborData[1].periodName+' - '+laborData[1].year, 
				        laborData[0].periodName+' - '+laborData[0].year],
				        datasets: [{
				        	fill: false,
				            label: 'Unemployment %',
				            data: [laborData[4].value, laborData[3].value, laborData[2].value, laborData[1].value, 
				            laborData[0].value],
				            backgroundColor: [
				            	'rgba(186, 98, 234, 1)', 'rgba(186, 98, 234, 1)', 'rgba(186, 98, 234, 1)', 
				            	'rgba(186, 98, 234, 1)', 'rgba(186, 98, 234, 1)'
				            ],
				            borderColor: [
				            	'rgba(186, 98, 234, 1)', 'rgba(186, 98, 234, 1)', 'rgba(186, 98, 234, 1)', 
				            	'rgba(186, 98, 234, 1)', 'rgba(186, 98, 234, 1)'  
				            ],
				            borderWidth: 1
				        }]
				    },
				    options: {
				    	title: {
				            display: true,
				            fontSize: 20,
				            fontColor: 'white',
				            text: 'BLS US Unemployment %'
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
    			var removeChart = document.getElementById('labor-chart');
				removeChart.parentNode.removeChild(removeChart);
				document.getElementById('labor-dashboard').innerHTML += 
				'<canvas id="labor-chart" width="350" height="350"></canvas>'
				var ctx = document.getElementById('labor-chart').getContext('2d');

				var diffChart = new Chart(ctx, {
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

function getOtherData(){
	// Creates a chart of vaccine candidates and state shutdowns
	// Data from: https://en.wikipedia.org/wiki/COVID-19_vaccine


	// Chart for past 3 months of unemployment data
	// First we must clear any chart already there - https://stackoverflow.com/questions/3387427/remove-element-by-id
	var removeChart = document.getElementById('vaccine-chart');
	removeChart.parentNode.removeChild(removeChart);
	document.getElementById('vaccine-dashboard').innerHTML += 
	'<canvas id="vaccine-chart" width="350" height="350"></canvas>'

	// Now we create the chart object, and pass through the data
	var ctx = document.getElementById('vaccine-chart').getContext('2d');

	var vaccineChart = new Chart(ctx, {
	    type: 'bar',
	    data: {
	        labels: ['Non-replicating viral vector', 'RNA-based', 'DNA-based', 'Inactivated virus', 
	        'Undefined', 'Protein subunit', 'Replicating viral vector', 'Virus-like particle', 
	        'Live attenuated virus', 'Replicating bacterial vector'],
	        datasets: [{
	        	fill: false,
	            label: 'Pre-Clinical',
	            data: [15, 19, 11, 7, 36, 47, 13, 7, 3, 1],
	            backgroundColor: [
	            	'rgba(99, 223, 237, 1)', 'rgba(99, 223, 237, 1)', 'rgba(99, 223, 237, 1)', 
	            	'rgba(99, 223, 237, 1)', 'rgba(99, 223, 237, 1)', 'rgba(99, 223, 237, 1)', 
	            	'rgba(99, 223, 237, 1)', 'rgba(99, 223, 237, 1)', 'rgba(99, 223, 237, 1)', 'rgba(99, 223, 237, 1)'
	            ],
	            borderColor: [
	            	'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 
	            	'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)'
	            ],
	            borderWidth: 1
	        },
	        {
	        	fill: false,
	            label: 'Phase 1',
	            data: [0, 2, 1, 2, 4, 1, 0, 0, 0, 0],
	            backgroundColor: [
	            	'rgba(103, 252, 155, 1)', 'rgba(103, 252, 155, 1)', 'rgba(103, 252, 155, 1)', 
	            	'rgba(103, 252, 155, 1)', 'rgba(103, 252, 155, 1)', 'rgba(103, 252, 155, 1)', 
	            	'rgba(103, 252, 155, 1)', 'rgba(103, 252, 155, 1)', 'rgba(103, 252, 155, 1)', 'rgba(103, 252, 155, 1)'
	            ],
	            borderColor: [
	            	'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 
	            	'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)'
	            ],
	            borderWidth: 1
	        },
	        {
	        	fill: false,
	            label: 'Phase 2',
	            data: [2, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	            backgroundColor: [
	            	'rgba(242, 103, 252, 1)', 'rgba(242, 103, 252, 1)', 'rgba(242, 103, 252, 1)', 
	            	'rgba(242, 103, 252, 1)', 'rgba(242, 103, 252, 1)', 'rgba(242, 103, 252, 1)', 
	            	'rgba(242, 103, 252, 1)', 'rgba(242, 103, 252, 1)', 'rgba(242, 103, 252, 1)', 'rgba(242, 103, 252, 1)'
	            ],
	            borderColor: [
	            	'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 
	            	'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)'
	            ],
	            borderWidth: 1
	        }]
	    },
	    options: {
	    	title: {
	            display: true,
	            fontSize: 20,
	            fontColor: 'white',
	            text: 'Vaccine Candidates by Phase and Molecular Platform'
			},
	    	legend: {
	            labels: {
	                fontColor: 'white'
	            }
	        },
	        scales: {
	            yAxes: [{
	            	stacked: true,
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
	            	stacked: true,
	                ticks: {
	                	fontColor: 'white'
	                }
	            }]
	        }
	    }
	});

};

// US is passed for this Dashboard
getUsData('US','United States');
getDifferenceData('US','United States');
getPredictionData('US','United States');
getUsLaborData()
getOtherData()