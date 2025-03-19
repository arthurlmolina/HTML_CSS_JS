
function add(num) {
    let display = document.getElementById('resp');

    //if a number is clicked, the display is cleared
    if (display.textContent === 'Display') {
        display.textContent = '';
    }
    
    display.textContent += num;

    OPERATORS = ['=', '-', '*', '/'];

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