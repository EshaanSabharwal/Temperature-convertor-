document.getElementById('convert-btn').addEventListener('click', function() {
    const temperature = parseFloat(document.getElementById('temperature').value);
    const unit = document.getElementById('unit').value;

    if (isNaN(temperature)) {
        alert('Please enter a valid number for temperature.');
        return;
    }

    let convertedTemperature;
    switch (unit) {
        case 'celsius':
            convertedTemperature = (temperature - 32) * (5 / 9);
            break;
        case 'fahrenheit':
            convertedTemperature = (temperature * (9 / 5)) + 32;
            break;
        case 'kelvin':
            convertedTemperature = temperature + 273.15;
            break;
    }

    document.getElementById('result').textContent = `Converted temperature: ${convertedTemperature.toFixed(2)} ${unit.toUpperCase()}`;
});