function calculateBMI() {
    let weight = parseFloat(document.getElementById('weight').value);
    let height = parseFloat(document.getElementById('height').value);

    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        alert('Please enter valid values for weight and height.');
        return;
    }

    let bmi = weight / (height * height);
    let resultText = 'Your BMI is: ' + bmi.toFixed(2);

    let category = '#';
    if (bmi <  18.4) {
        category = 'Underweight';
    } else if (bmi <24.9) {
        category = 'Normal Weight';
    } else if (bmi <29.9) {
        category = 'Overweight';
    } else {
        category = 'Obese';
    }

    resultText += ' (' + category + ')';

    document.getElementById('result').textContent = resultText;
}