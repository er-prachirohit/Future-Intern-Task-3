document.getElementById('convertButton').addEventListener('click', function() {
    const tempInput = document.getElementById('tempInput').value;
    const inputUnit = document.getElementById('inputUnit').value;
    const outputUnit = document.getElementById('outputUnit').value;
    const resultArea = document.getElementById('resultArea');

    // Validate input
    if (isNaN(tempInput) || tempInput.trim() === '') {
        resultArea.innerHTML = 'Please enter a valid number!';
        return;
    }

    const tempValue = parseFloat(tempInput);
    let convertedTemp;

    // Convert input temperature to Celsius first
    if (inputUnit === "Celsius") {
        convertedTemp = tempValue;
    } else if (inputUnit === "Fahrenheit") {
        convertedTemp = (tempValue - 32) * 5/9; // Fahrenheit to Celsius
    } else if (inputUnit === "Kelvin") {
        convertedTemp = tempValue - 273.15; // Kelvin to Celsius
    }

    // Convert from Celsius to desired output unit
    if (outputUnit === "Celsius") {
        // Already in Celsius
    } else if (outputUnit === "Fahrenheit") {
        convertedTemp = (convertedTemp * 9/5) + 32; // Celsius to Fahrenheit
    } else if (outputUnit === "Kelvin") {
        convertedTemp = convertedTemp + 273.15; // Celsius to Kelvin
    }

    // Display result with proper units
    if (outputUnit === "Kelvin") {
        resultArea.innerHTML = `Converted Temperature: ${convertedTemp.toFixed(2)} K`;
    } else {
        resultArea.innerHTML = `Converted Temperature: ${convertedTemp.toFixed(2)} °${outputUnit.charAt(0)}`;
    }
});
