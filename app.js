/*
- Input temp in field and take calculate it's value with a c to f equation you find online

- Click convert and have it dynamically display the results in the p element. (Blank degrees celisus is equal to blankk degrees farenheit)

- Add Celsius to farenheit formula - Multiply temp input value by 1.8 and then add 32

-Take the value of temp input and do the c to f formula on it and spit out the answer dynamically in the p element.


*/

//UI Variables
const tempInput = document.querySelector('#temp-input');
const convertBtn = document.querySelector('#convert-btn');
const tempParagraph = document.querySelector('.converted-temp-paragraph');
const calcMessage = ``



//Event listener for mousedown input
convertBtn.addEventListener('click', convertCelsiusToFarenheit);

convertCelsiusToFarenheit();

function convertCelsiusToFarenheit(e) {

    if(tempInput.value === '') {
        tempParagraph.style.display = 'none';
    } else {
        tempParagraph.style.display = 'block';
        tempParagraph.style.textAlign = 'center';
       
    }

    const calculation = tempInput.value*1.8+32;

    const message = document.createElement('p');
    message.className = ('calculation-paragraph');
    message.appendChild(document.createTextNode(calculation));
    tempParagraph.appendChild(message);

    e.preventDefault();
    

}


