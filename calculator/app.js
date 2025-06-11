let buttons = document.querySelectorAll('button');
let input = document.querySelector('input'); 

// Define operator symbols array
let operatorSymbols = ['+', '-', '*', '/'];

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        let buttonText = e.target.innerText;

        if (buttonText === "Clear") {
            input.value = '';
        }
        else if (buttonText === "Delete") {
            input.value = input.value.slice(0, -1);
        }
        else if (buttonText === "=") {
          try {
                // Prevent division by zero
                if (input.value.includes("/0")) {
                    document.querySelector("input").value =
                        "Cannot divide by zero";
                } else {
                    input.value = eval(input.value);
                
                }
            } catch (error) {
                document.querySelector("input").value = "Invalid input";
            }
        }
        else {
           
            // Handle operators
            if (operatorSymbols.includes(buttonText)) {
                // Get the last character of the current string
                let lastChar = input.value.slice(-1);
                
                // Check if the last character is also an operator symbol
                if (operatorSymbols.includes(lastChar)) {
                    // Don't add the operator if the last character is already an operator
                    return;
                }
                
                // Add the operator to the input
                input.value += buttonText;
            }
            else {
                // Handle numbers and other characters
                input.value += buttonText;
            }
        }
    });
});
