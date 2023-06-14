// select display screen
const screenValues= document.getElementById('display')
let operandCount=0
// add click event to all number inputs
document.querySelectorAll('.number').forEach((input)=>{
    input.addEventListener('click',handleInputs)
})

// function to get and handle input values
function handleInputs(e){
    let value=event.target.innerText
    screenValues.innerText+=value
}

// function to clear display
function handleClear(){
screenValues.innerText=''
}

// fucntion to handle operations
function handleOperation(operand){
    if(screenValues.innerText==''){
        return;
    }
    
    if(operandCount<1){
        operandCount=1
        screenValues.innerText+=`${ operand }`
        console.log(screenValues,'papa');
        return;
    }
    if(operandCount>0){
        handleEvaluate()
        console.log(screenValues,'killer');

        operandCount=0
        screenValues.innerText+=`${ operand }`
        return
    }
}

// fucntion to eveluate inputs
function handleEvaluate(){
    let arguments=screenValues.innerText
    screenValues.innerText=eval(arguments)
    console.log(arguments);
}
