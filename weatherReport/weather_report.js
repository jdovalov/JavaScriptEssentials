function showweatherDetails(event) {
	event.preventDefault();
	  
	const city = document.getElementById('city').value;
	const apiKey = document.getElementById('key').value;
	const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

	fetch(apiUrl)
		.then(response => response.json())
		.then(data => {
			const weatherInfo = document.getElementById('weatherInfo');
			weatherInfo.innerHTML = 
				`<h2>Weather in ${data.name}</h2>
				<p>Temperature: ${data.main.temp} &#8451;</p>
				<p>Weather: ${data.weather[0].description}</p>`;
		})
		.catch(error => {
			console.error('Error fetching weather:', error);
			const weatherInfo = document.getElementById('weatherInfo');
			weatherInfo.innerHTML = `<p>Failed to fetch weather. Please try again.</p>`;
		});
		
}

function showweatherDetailsCoords(event) {
	event.preventDefault();
	  
	var lat = document.getElementById('lat').value;
	if ( lat.endsWith("N") ){
		lat = +lat.substring(0,lat.length-1)
	} else if ( lat.endsWith("S") ){
		lat = -lat.substring(0,lat.length-1)
	}
	var lon = document.getElementById('lon').value;
	if ( lon.endsWith("E") ){
		lon = +lon.substring(0,lon.length-1)
	} else if ( lon.endsWith("W") ){
		lon = -lon.substring(0,lon.length-1)
	} else {
		lon = +lon;
	}
	const apiKey = document.getElementById('key').value;
	const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`

	fetch(apiUrl)
		.then(response => response.json())
		.then(data => {
			const weatherInfo = document.getElementById('weatherInfo');
			weatherInfo.innerHTML = 
				`<h2>Weather in ${data.name}</h2>
				<p>Temperature: ${data.main.temp} &#8451;</p>
				<p>Weather: ${data.weather[0].description}</p>`;
		})
		.catch(error => {
			console.error('Error fetching weather:', error);
			const weatherInfo = document.getElementById('weatherInfo');
			weatherInfo.innerHTML = `<p>Failed to fetch weather. Please try again.</p>`;
		});
		
}


 document.getElementById('weatherForm').addEventListener('submit',showweatherDetails );
 document.getElementById('weatherFormCoords').addEventListener('submit',showweatherDetailsCoords );