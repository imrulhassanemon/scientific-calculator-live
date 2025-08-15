const display = document.getElementById("inputBox");
const buttons = document.querySelectorAll("button");

let currentValue = "";

const arr = Array.from(buttons)

// const evaluateResult  = ()=>{
//     const valueAfterEval = eval(currentValue)
//     const convertedValue = currentValue.replace('x', '*')
//     const result = valueAfterEval.toString();
//     display.value = result;


//     console.log(convertedValue);

// }
const evaluateResult = () => {
    const convertedValue = currentValue.replace(/x/g , '*').replace('÷', '/'); // Replace all 'x'
    const valueAfterEval = eval(convertedValue);
    const result = valueAfterEval.toString();
    display.value = result;
    console.log(valueAfterEval)
    console.log(convertedValue);
}



arr.forEach(button => {
    button.addEventListener("click", (e) => {
        const value = button.innerText
        console.log(currentValue)
        
        if(value == 'AC'){
            currentValue = "";
            display.value = currentValue;
        }else if(value == '='){
            evaluateResult();
        }
        else{
            currentValue += value;
            display.value = currentValue;
        }
       
    });
});