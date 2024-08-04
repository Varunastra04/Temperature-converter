function changePlaceholder() {
    const conversionType = document.getElementById('conversionType').value;
    const temperatureInput = document.getElementById('temperatureInput');
    
    if (conversionType === 'CtoF') {
        temperatureInput.placeholder = 'Enter Celsius';
    } else {
        temperatureInput.placeholder = 'Enter Fahrenheit';
    }
}

function convertTemperature() {
    const conversionType = document.getElementById('conversionType').value;
    const temperatureInput = document.getElementById('temperatureInput').value;
    const resultElement = document.getElementById('result');

    if (temperatureInput === "") {
        resultElement.innerText = "Please enter a value.";
        return;
    }

    let result;
    if (conversionType === 'CtoF') {
        result = (temperatureInput * 9/5) + 32;
        resultElement.innerText = `${temperatureInput}°C is equal to ${result.toFixed(2)}°F.`;
    } else {
        result = (temperatureInput - 32) * 5/9;
        resultElement.innerText = `${temperatureInput}°F is equal to ${result.toFixed(2)}°C.`;
    }
}

