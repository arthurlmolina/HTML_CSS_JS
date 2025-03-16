document.addEventListener('DOMContentloaded', function() { /*Running script after the page has loaded fully*/
    const display = document.getElementById('resp');

    //variables to store values and state
    let firstNumber = null;
    let operator = null;
    let newNumber = true;
    let result = null; 

    // function to update the display
    function updateDisplay(value){
        display.textContent = value;
    }

    // initialize the display
    updateDisplay('0');

    // add event to the number buttons
    ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'].forEach(function(id, indice){
        document.getElementById(id).addEventListener('click', function(){
            // if we are starting a new number, clear the display
            if (newNumber){
                updateDisplay('');
                newNumber = false;
            }
            //add the digit to the display
            updateDisplay(display.textContent + indice);
        });
    });
    //add event to the operator buttons
    ['adicao', 'sub', 'mult', 'divid'].forEach(function(id){
        //if there ir an operator and it is not a new number, calculate the result
        if (operator && !newNumber){
            calcular();
        }

        //store the first number and the operator
        firstNumber = parseFloat(display.content);
        operator = this.textContent;
        newNumber = true;
    });

    //add event to the result button
    document.getElementById('result').addEventListener('click', function(){
        calcular();
    });

    //function to calculate the result
    function calcular(){
        if (operator === null || newNumber){
            return;
        }
    }
});