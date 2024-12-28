let currentInput = ''; // Almacena la entrada actual del usuario
let operator = ''; // Almacena el operador actual
let previousValue = ''; // Almacena el valor anterior

// Función para agregar números a la pantalla
function appendNumber(number) {
    currentInput += number;
    updateScreen();
}

// Función para borrar todo
function clearResult() {
    currentInput = '';
    previousValue = '';
    operator = '';
    updateScreen();
}

// Función para borrar un dígito de la pantalla
function deleteLastDigit() {
    currentInput = currentInput.slice(0, -1);
    updateScreen();
}

// Configurar el operador seleccionado
function setOperator(op) {
    if (currentInput) {
        if (previousValue) {
            calculateResult(); // Realiza cálculo si ya hay un valor anterior
        }
        previousValue = currentInput; // Almacena el valor actual
        currentInput = '';
        operator = op; // Establece el operador
        updateScreen();
    }
}

// Función para realizar el cálculo con el operador actual
function calculateResult() {
    if (previousValue && currentInput && operator) {
        const num1 = parseFloat(previousValue);
        const num2 = parseFloat(currentInput);

        switch (operator) {
            case '+':
                currentInput = (num1 + num2).toString();
                break;
            case '-':
                currentInput = (num1 - num2).toString();
                break;
            case '*':
                currentInput = (num1 * num2).toString();
                break;
            case '/':
                if (num2 === 0) {
                    alert("Cannot divide by 0");
                    clearResult();
                    return;
                }
                currentInput = (num1 / num2).toString();
                break;
            default:
                return;
        }

        // Después de calcular, actualizamos los valores
        previousValue = currentInput; // Mantener el último resultado para operaciones consecutivas
        operator = '';
        updateScreen();
    }
}
// Actualiza la pantalla de resultados con el input actual
function updateScreen() {
    const resultScreen = document.getElementById('result');
    resultScreen.innerText = currentInput || ''; // Cambié '0' por una cadena vacía
}

function calculatePercentage() {
    if (currentInput){
        currentInput = (currentInput / 100).toFixed(6);
        updateScreen();
    }
}

function calculateSquareRoot() {
    if (currentInput) {
        if(parseFloat(currentInput) < 0) {
            alert("No se puede calcular la raíz cuadrada de un número negativo");
            clearResult();
        }else{
            currentInput = Math.sqrt(parseFloat(currentInput)).toFixed(6);
            updateScreen();
        }
            
    }
}

function calculatePower() {
    if(currentInput){
        if(previousValue){
            const base_number = parseFloat(previousValue);
            const exponent = parseFloat(currentInput);
            currentInput = Math.pow(base_number, exponent).toFixed(2);
            previousValue = currentInput;
            operator = '';
            updateScreen();   

        }else{
            previousValue = currentInput;
            currentInput = '';
            operator = '^';
            updateScreen();
        }
    }
}

function calculateFactorial() {
    if(currentInput){
        if(parseFloat(currentInput) < 0){
            alert("No se puede calcular el factorial de un número negativo");
            clearResult();
        }else{
            let result = 1;
            for(let i = 1; i <= parseFloat(currentInput); i++){
                result *= i;
            }
            currentInput = result;
            updateScreen();
        }
    }
}
function calculateFraction(){
    if(currentInput){
        if(parseFloat(currentInput) == 0){
            alert("No se puede calcular la fracción de un número 0");
            clearResult();
        }else{
            currentInput = (1 / parseFloat(currentInput)).toFixed(6);
            updateScreen();
        }
    }
}

