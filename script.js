    /* This is the JavaScript section that makes the calculator work. */

    // Get the display element from the HTML.
    const display = document.getElementById('display');

    // This function adds a number or operator to the display screen.
    function appendToDisplay(value) {
        display.value += value;
    }

    // This function clears the display screen completely.
    function clearDisplay() {
        display.value = '';
    }

    // This function deletes the last character from the display (backspace).
    function deleteLast() {
        display.value = display.value.slice(0, -1);
    }

    // This function calculates the expression shown on the display.
    function calculate() {
        try {
            // 'eval()' is a powerful but risky function that evaluates a string as code.
            // For a simple calculator it's okay, but for complex apps, it's better to write a custom math parser.
            
            // We replace the display characters with math operators before evaluating.
            const expression = display.value.replace(/×/g, '*').replace(/÷/g, '/');
            const result = eval(expression);
            
            // If the result is not a valid number (e.g., from 0/0), show an error.
            if (isNaN(result) || !isFinite(result)) {
                display.value = 'Error';
            } else {
                display.value = result;
            }

        } catch (error) {
            // If the calculation is invalid (e.g., "5++2"), show an error.
            display.value = 'Error';
        }
    }
