function calculate(operator){

    let num1 = document.getElementById('num1').value
    let num2 = document.getElementById('num2').value
    var result;

    if(num1 == '' || num2 == ''){
        document.getElementById('result').innerText = 'ENTER NUMBER!'
    }
    else {
        switch (operator){
            case '+':
                result = num1 + num2
                break
            case '-':
                 result = num1 - num2
                break
            case '*':
                 result = num1 * num2
                 break
            case '/':
                 result = num1 / num2
                 break
        }
        document.getElementById('result').innerText = result
    }
}
