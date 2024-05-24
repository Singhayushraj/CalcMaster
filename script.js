let input=document.getElementById('inputBox');
let buttons=document.querySelectorAll('button');
let string="";
let arr=Array.from(buttons);

function isValidExpression(expression) {
    const validCharacters = /^[0-9+\-*/. ]*$/;
    return validCharacters.test(expression);
}

arr.forEach((button)=>{
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            if (isValidExpression(string)) {
                try {
                    string = eval(string);
                    input.value = string;
                } catch (error) {
                    input.value = "Error";
                    string = "";
                }
            } else {
                input.value = "Invalid Input";
                string = "";
            }
        } else if (e.target.innerHTML == 'AC') {
            string = "";
            input.value = string;
        } else if (e.target.innerHTML == 'DEL') {
            string = string.substring(0, string.length - 1);
            input.value = string;
        } else {
            string += e.target.innerHTML;
            input.value = string;
        }
    })
})