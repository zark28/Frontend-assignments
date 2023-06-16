// select display screen
const screenValues= document.getElementById('display')
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
     screenValues.innerText+=`${ operand }`
}

// fucntion to eveluate inputs
function handleEvaluate(){
    let arguments=screenValues.innerText
    screenValues.innerText=eval(arguments)
    console.log(arguments);
}
