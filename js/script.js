const bmiBtn = document.getElementById('bmiBtn')
const displayCont = document.getElementById('displayCont')

bmiBtn.addEventListener('click',()=>{
    const ageInput = document.getElementById('age').value;
    const weightInput = parseFloat(document.getElementById('weight').value)
    const heightInput = parseFloat(document.getElementById('height').value/100)
    
    if(ageInput==='' || ageInput<=0 
        || weightInput==='' || weightInput<=0
    || heightInput===''|| heightInput<=0){
        return alert('Please fill out all fields correctly!')
    }

   const bmiResult =weightInput/ (heightInput*heightInput)

   let status = '';

    if (bmiResult < 18.5) {
        status = 'Underweight';
    } else if (bmiResult >= 18.5 && bmiResult <= 24.9) {
        status = 'Normal weight';
    } else if (bmiResult >= 25 && bmiResult <= 29.9) {
        status = 'Overweight';
    } else {
        status = 'Obese';
    }

    displayCont.innerHTML=`
     <hr>
    <h3>your age: ${ageInput}</h3>
    <h3>your BMI: ${bmiResult.toFixed(2)}</h3>
    <h3>you are: ${status} </h3>

    `

})