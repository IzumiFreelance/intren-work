document.getElementById('get-weather-btn').addEventListener('click', function() {
    const latitude = document.getElementById('latitude-input').value;
    const longitude = document.getElementById('longitude-input').value;
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                alert('Location not found or invalid input');
                return;
            }
            document.getElementById('weather-display').classList.remove('hidden');
            document.getElementById('location-name').innerText = `Latitude: ${latitude}, Longitude: ${longitude}`;
            const temperature = data.hourly.temperature_2m[0];
            document.getElementById('weather').innerText = `Temperature: ${temperature}°C`;
        })
        .catch(error => console.error('Error fetching the weather data:', error));
});
