
function add(num) {
    let display = document.getElementById('resp');

    //if a number is clicked, the display is cleared
    if (display.textContent === 'Display') {
        display.textContent = '';
    }

    //let num = display.textContent.slice(-1);
    let lastChar = display.textContent.slice(-1);
    let penultimateChar = display.textContent.slice(-2, -1);

    //slice(-1) returns the last character of the string
    const OPERATORS = ['+', '-', '*', '/'];


    //verify if the last char is a operator
    if (OPERATORS.includes(lastChar)) {
        //if the new char is a operator too
        if (OPERATORS.includes(num)) {
            //allow add "-" after other operator (for negative numbers)
            if ((num === '-' && lastChar !== '-')) {
                display.textContent += num;
            } else {
                //replace the last operator for the new one
                display.textContent = display.textContent.slice(0, -1) + num;
                //slice(0, -1) returns the string without the last character
            }
        } else{
            //add normally when the last char is not a operator
            display.textContent += num;
        }
    } else {
        //add normally when the last char is not a operator
        display.textContent += num;
    }


}

function calculate() {
    const display = document.getElementById('resp');
    let expression = display.textContent;

    if (expression === 'Display') {
        return;
    }

    //use try when the expression can be invalid and catch when the error is resolved 
    try {
        //remove the operator in the last of expression
        const OPERATORS = ['+', '-', '*', '/'];
        while (OPERATORS.includes(expression.slice(-1))) {
            expression = expression.slice(0, -1);
        }
        if (expression === '') {
            display.textContent = 'Display';
            return;
        }

        //replace what is not a number or operator for for a void string ''

        let sanitizedExpression = expression.replace(/[^0-9+*-/]/g, '');

        /* 
        / / = delimiters of the regEx
        [^ ] = is a negation
        0-9 = all numbers
        +*-/ = all operators
        g = global, to replace all ocurrences
        resuming, all that is not a number and operator is replaced by ''
        */

        //calculate the expression
        let result = new Function('return ' + sanitizedExpression)();
        display.textContent = result;
    } catch (error) {
        display.textContent = 'ERROR';
    }
}