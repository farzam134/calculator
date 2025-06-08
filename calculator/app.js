// Set up a variable to store what user types
let string = "";

// Get all buttons
let buttons = document.querySelectorAll('button');

// Loop through each button
buttons.forEach(button => {
    button.addEventListener('click', (e) => {

        // Get the text content of the clicked button
        let buttonText = e.target.innerText;

        // Define operator symbols array
        let operatorSymbols = ['+', '-', '*', '/'];

        if (buttonText == "=") {
            try {
                // Prevent division by zero
                if (string.includes("/0")) {
                    document.querySelector("input").value =
                        "Error: Cannot divide by zero";
                } else {
                    string = eval(string);
                    document.querySelector("input").value = string;
                }
            } catch (error) {
                document.querySelector("input").value = "Invalid input";
            }
        }

    

        else if (buttonText == 'Clear') {
                string = "";
                document.querySelector('input').value = string;

            }

            else if (buttonText == 'Delete') {

                // Convert to string first, then remove the last character
                string = string.toString().slice(0, -1);
                document.querySelector('input').value = string;
            }


            else {

                // Check if the button clicked is an operator symbol
                if (operatorSymbols.includes(buttonText)) {

                    // Get the last character of the current string
                    let lastChar = string.toString().slice(-1);

                    // Check if the last character is also an operator symbol
                    if (operatorSymbols.includes(lastChar)) {
                        // Don't add the operator if the last character is already an operator
                        return;
                    }
                }

                // For number and operator buttons (only add if validation passes)
                string = string + buttonText;
                document.querySelector('input').value = string;
            }


        });
});

