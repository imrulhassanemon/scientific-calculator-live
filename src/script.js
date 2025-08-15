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
    const convertedValue = currentValue
    .replace(/x/g , '*')
    .replace(/÷/g, '/')
    .replace('%', '*0.01')
    .replace('Sin', 'Math.sin')
    .replace('log', 'Math.log10')
    .replace('ln', 'Math.log')
    .replace('π', 'Math.PI')
    .replace('cos', 'Math.cos')
    .replace('e', 'Math.E')
    .replace('tan', 'Math.tan')
    .replace('√', `Math.sqrt`)
    // .replace(/log\(([^)]+)\)/gi, 'Math.log10($1)');
    ; // Replace all 
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
        
        try{
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
        }catch{
            currentValue = 'INVALID SYNTAX';
            display.value = currentValue;
        }
       
    });
});