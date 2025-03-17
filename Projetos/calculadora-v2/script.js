function add(num) {

    const DISPLAY = document.getElementById('resp');

    //if a number is clicked, the DISPLAY is cleared
    if (DISPLAY.textContent === 'Display') {
        DISPLAY.textContent = ' ';
    }

    const LAST_CHAR = DISPLAY.textContent.slice(-1);
    const PENULTIMATE_CHAR = DISPLAY.textContent.slice(-2, -1);

    //slice(-1) returns the last character of the string
    const OPERATORS = ['+', '-', '*', '/'];

    // don't allow add an operator as a fisrt character (except for "-")
    if (DISPLAY.textContent.trim() === '' && OPERATORS.includes(num) && num !== '-') {
        DISPLAY.textContent = 'Display';
        return;
    }

    //verify if the last char is a operator
    if (OPERATORS.includes(LAST_CHAR)) {

        //if the new char is a operator too
        if (OPERATORS.includes(num)) {
            //special case: if has already a sequence of operators, as: '120+-
            if (OPERATORS.includes(PENULTIMATE_CHAR) && LAST_CHAR === '-') {
                return; // prevent replace the operator '-' when it is second operator in sequence
            }

            //allow add "-" after other operator (for negative numbers)
            if (num === '-' && LAST_CHAR !== '-') {
                DISPLAY.textContent += num;
            } else {
                //replace the last operator for the new one
                DISPLAY.textContent = DISPLAY.textContent.slice(0, -1) + num;
                //slice(0, -1) returns the string without the last character
            }
        } else {
            //as is not a operator, it just add the number normally
            DISPLAY.textContent += num;
        }
    } else {
        //add normally when the last char is not a operator
        DISPLAY.textContent += num;
    }
}   

function calculate(){
    const DISPLAY = document.getElementById('resp');
    let expression = DISPLAY.textContent;

    if (expression === 'Display'){
        return;
    }

    //use try when the expression can be invalid and catch when the error is resolved 
    try{
        //remove the operator in the last of expression
        const OPERATORS = ['+', '-', '*', '/'];
        while (OPERATORS.includes(expression.slice(-1))){
            expression = expression.slice(0, -1);
        }
        if (expression === ''){
            DISPLAY.textContent = 'Display';
            return;
        }
        
        //replace what is not a number or operator for for a void string ''

        //create a regEx HERE

        /* 
        / / = delimiters of the regEx
        [^ ] = is a negation
        0-9 = all numbers
        +*-/ = all operators
        g = global, to replace all ocurrences
        resuming, all that is not a number and operator is replaced by ''
        */


        //calculate the expression
        const RESULT = calculateExpression(expression); 
        DISPLAY.textContent = RESULT;
    } catch (error){
        DISPLAY.textContent = 'ERROR';
    }
}




function calculateExpression(expression){
    return new Function('return ' + expression)();
}