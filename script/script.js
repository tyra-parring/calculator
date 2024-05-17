
// let buttons = document.getElementsByTagName('buttons')

// for(let button of buttons){
//     button.addEventListener('click',()=>{
//         alert(button.value)
// })
// }
document.addEventListener("DOMContentLoaded", function() {
    // Get the display element
    var display = document.querySelector('input[name="display"]');

    // Get all the buttons
    var buttons = document.querySelectorAll('.calculator input[type="button"]');

    // Add click event listener to each button
    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
            var value = this.value;

            // Handle different button clicks
            switch (value) {
                case 'CE':
                    // Clear the display
                    display.value = '';
                    break;
                case '⌫':
                    // Backspace
                    display.value = display.value.slice(0, -1);
                    break;
                case '=':
                    // Evaluate the expression
                    try {
                        display.value = eval(display.value);
                    } catch (error) {
                        display.value = 'Error';
                    }
                    break;
                default:
                    // Append the clicked button value to the display
                    display.value += value;
                    break;
            }
        });
    });
});
