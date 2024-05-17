
// let buttons = document.getElementsByTagName('buttons')

// for(let button of buttons){
//     button.addEventListener('click',()=>{
//         alert(button.value)
// })
// }
document.addEventListener("DOMContentLoaded", function() {
    // Getting display element
    var display = document.querySelector('input[name="display"]');

    // Getting all buttons
    var buttons = document.querySelectorAll('.calculator input[type="button"]');

    // Adding event listener to each button
    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
            var value = this.value;

            //different button
            switch (value) {
                case 'CE':
                    // Clearing the display
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
                    display.value += value;
                    break;
            }
        });
    });
});
