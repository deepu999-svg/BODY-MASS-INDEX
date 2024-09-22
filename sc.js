function calculateBMI() {
    const hg = document.getElementById('hg').value;
    const wg = document.getElementById('wg').value;
   

    if (hg > 0 && wg > 0) {
        const bmi = (wg / ((hg / 100) ** 2)).toFixed(2);
        let type = '';

        if (bmi < 18.5) {
            type = 'Underweight';
        } else if (bmi >= 18.5 && bmi < 24.9) {
            type = 'Normal weight';
        } else if (bmi >= 25 && bmi < 29.9) {
            type = 'Overweight';
        } else {
            type = 'Obesity';
        }

        document.getElementById('scr').innerText = `Your BMI is ${bmi} (${type})`;
    } else {
        document.getElementById('scr').innerText = 'Please enter valid height and weight';
    }
}
