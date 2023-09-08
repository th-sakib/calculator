const textField = document.getElementById('text');
const calculatorButton = document.getElementsByTagName('span');
const clearButton = document.getElementById('clear-all');
const deleteButton = document.getElementById('delete');
const equalButton = document.getElementById('equal');
const multiply = document.getElementById('multiply');

document.getElementById('load').addEventListener('load', function () {
    textField.value = "";
})

for (let button of calculatorButton) {
    button.addEventListener('click', (element) => {
        // element.target.outerText
        textField.value += element.target.outerText;
    })
}

// AC button functionality
clearButton.addEventListener('click', function () {
    textField.value = "";
})

// Delete button functionality
deleteButton.addEventListener('click', function () {
    // const textArray = Array.from(textField.value);

    textField.value = textField.value.slice(0, textField.value.length - 1);
})

// multiply button functionality
// multiply.addEventListener('click', function(){
//     textField.Value += "*";

// })

// Equal button functionality
equalButton.addEventListener('click', function () {
    if(textField.value.includes("X")){
        let newValue = textField.value.replace("X", "*");
        textField.value = eval(newValue);
    } else {   
        textField.value = eval(textField.value);
    }
    
})