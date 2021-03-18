
const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

// get input from inputfield

function getUserInput() {
    return parseInt(userInput.value);
}


//generates and output log in screen
function createandwritelog(operator, resultBeforeCalc, calcNumber) {
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`
    outputResult(currentResult, calcDescription);// from vendor file
}

function writeCreateLog(operationIdentifier, previousResult, operationNumber, latestResult) {
    const logEntry = {
        operation: operationIdentifier,
        prevResult: previousResult,
        number: operationNumber,
        newResult: latestResult
    };
    logEntries.push(logEntry);
    console.log(logEntries);
}

function calculateResult(calculationType) {
    const enteredNumber = getUserInput();

    if (calculationType !== 'ADD' && 
        calculationType !== 'SUBSTRACT' && 
        calculationType !== 'MULTIPLY' && 
        calculationType !== 'DIVISION' ||
        !enteredNumber 
        ) {
            return;
    }

    
    const initialResult = currentResult;
    let mathOperator;
    if (calculationType == 'ADD') {
        currentResult += enteredNumber;
        mathOperator = '+';
    } else if (calculationType === 'SUBSTRACT') {
        currentResult -= enteredNumber;
        mathOperator = '-';
    } else if (calculationType === 'MULTIPLY') {
        currentResult *= enteredNumber;
        mathOperator = '*';
    } else if (calculationType === 'DIVISION') {
        currentResult /= enteredNumber;
        mathOperator = '/';
    }

    


    createandwritelog(mathOperator, initialResult, enteredNumber);
    writeCreateLog(calculationType, initialResult, enteredNumber, currentResult);
}

function add() {
    calculateResult('ADD');

}

function substract() {
    calculateResult('SUBSTRACT');
}

function multiply() {

    calculateResult('MULTIPLY');
}

function division() {

    calculateResult('DIVISION');
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', substract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', division);





