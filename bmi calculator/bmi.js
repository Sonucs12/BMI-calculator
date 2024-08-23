const form = document.querySelector("form")
const resetButton = document.querySelector('.reset');
const normalWeight = document.querySelector("#normal-weight");
const overWeight = document.querySelector("#over-weight");
const underWeight = document.querySelector("#under-weight");
const obesity = document.querySelector("#obesity");


const heightInput = document.querySelector('#height-data');
const weightInput = document.querySelector('#weight-data');
const resultElement = document.querySelector('#result-data');
const guideElements = document.querySelectorAll('.guide p');

resetButton.addEventListener('click', () => {
  heightInput.value = '';
  weightInput.value = '';
 
  result.innerText = ("Your BMI");
  resultElement.style.color = 'gray';
  resultElement.style.backgroundColor = 'black';
  guideElements.forEach((element) => {
    element.style.color = 'darkgrey';
  });
});
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const height = parseInt(document.querySelector("#height-data").value);
    const weight = parseInt(document.querySelector("#weight-data").value);
    const result = (document.querySelector("#result-data"));

    const normalWeight = document.querySelector("#normal-weight");
    const overWeight = document.querySelector("#over-weight");
    const underWeight = document.querySelector("#under-weight");

    if (height === " " || height < 0 || isNaN(height)) {
        result.innerText = ("Please enter a valid number");
    }
    else if (weight === " " || weight < 0 || isNaN(weight)) {
        result.innerText = ("Please enter a valid number");
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(1);
        result.innerText =bmi;
        result.style.fontWeight = "bold";
        result.style.color = "white";
        result.style.fontSize = "1.5rem";
    

        const newLocal1 = 18.5;
        const newLocal2 = 18.6;
        const newLocal3 = 24.9;
        const newLocal4 = 25.0;
        const newLocal5 = 29.9;
        const newLocal6 = 30.0;
        if (bmi <= newLocal1) {
            underWeight.style.color = "black"
            overWeight.style.color = "darkgrey"
            normalWeight.style.color = "darkgrey"
            obesity.style.color = "darkgrey"

        } else if (newLocal2 <= bmi && bmi <= newLocal3) {
            normalWeight.style.color = "green"
            overWeight.style.color = "darkgrey"
            underWeight.style.color = "darkgrey"
            obesity.style.color = "darkgrey"

        } else if (newLocal4 <= bmi && bmi <= newLocal5) {
            overWeight.style.color = "red"
            normalWeight.style.color = "darkgrey"
            underWeight.style.color = "darkgrey"
            obesity.style.color = "darkgrey"

        }
        else if (bmi >= newLocal6){
            normalWeight.style.color = "darkgrey"
            underWeight.style.color = "darkgrey"
            overWeight.style.color = "darkgrey"
            obesity.style.color = "blue"
        }
        else{
            normalWeight.style.color = "darkgrey"
            underWeight.style.color = "darkgrey"
            overWeight.style.color = "darkgrey"
            obesity.style.color = "darkgrey"

        }
    }

})