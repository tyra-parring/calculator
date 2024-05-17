
// let buttons = document.getElementsByTagName('buttons')

// for(let button of buttons){
//     button.addEventListener('click',()=>{
//         alert(button.value)
// })
// }
window.addEventListener("load", function() {
    var display = document.querySelector('input[name="display"]');

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
                    // Evaluating the expression
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
