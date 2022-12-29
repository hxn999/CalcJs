let numberPad = document.querySelectorAll('.btn');
const screen = document.querySelector('#screen');
let clickSound = new Audio('./attachment/click.wav');
const clear = document.querySelector('#cl')
const product = document.querySelector('#crs')
const clearAll = document.querySelector('#c')
const minus = document.querySelector('#min')
const plus = document.querySelector('#pls')
const equal = document.querySelector('#grey')
const devide = document.querySelector('#dv');
const square = document.querySelector('#sq');
const squareRoot = document.querySelector('#sqr');
let memory = []
let opMemory = []
let sumUp = ''

// adding digit strings
// memory.forEach(e => {
//     sumUp += e
// });

// console.log(sumUp)



//      printing on screen
numberPad.forEach(e => {
    e.onclick = ()=>{
        let eId = e.id;
        let span = document.getElementById(eId);
        console.log(eId)
        let digit = span.innerText;

        memory.push(digit)
        sumUp = ''
        memory.forEach(e => {
            console.log(e)
            sumUp += e
        });
        console.log(sumUp)
        console.log(memory)

        screen.innerHTML = sumUp ;
        clickSound.play();
    }
});



//     Arithmetics 

//     clearing all digits in screen
clearAll.onclick = ()=>{
    screen.innerHTML = '' ;
    memory = [];
    opMemory = [];
}
//      backspace
clear.onclick = ()=>{
    memory.pop()
    sumUp = ''
    memory.forEach(e => {
        console.log(e)
        sumUp += e
    });
    screen.innerHTML = sumUp ;
}


//       addition operation
plus.onclick = ()=>{
    let variable = screen.innerHTML ;
    variable = parseFloat(variable);
    opMemory.push(variable,1)
    console.log(variable , opMemory)
    screen.innerHTML = ''
    memory = []

}
minus.onclick = ()=>{
    let variable = screen.innerHTML ;
    variable = parseFloat(variable) ;
    opMemory.push(variable,-1);
    console.log(variable , opMemory)
    screen.innerHTML = ''
    memory = []

}
product.onclick = ()=>{
    let variable = screen.innerHTML ;
    variable = parseFloat(variable) ;
    opMemory.push(variable,'x');
    console.log(variable , opMemory)
    screen.innerHTML = ''
    memory = []
}
devide.onclick = ()=>{
    let variable = screen.innerHTML ;
    variable = parseFloat(variable) ;
    opMemory.push(variable,'d');
    console.log(variable , opMemory)
    screen.innerHTML = ''
    memory = []
}
square.onclick = ()=>{
    let variable = screen.innerHTML ;
    variable = parseFloat(variable) ;
    let result = variable*variable ; 
    result = result.toString();
    screen.innerText = result;
    opMemory = []
    memory = []
}

// result

equal.onclick = ()=>{
    let variable = screen.innerHTML ;
    variable = parseFloat(variable) ;
    opMemory.push(variable);
    let state = opMemory[1]

    let result ;
    if(state === 'x'){
        result = opMemory[0]*opMemory[2]
        console.log(result)
        result = result.toString();
        screen.innerText = result;
    }
    else if(state === 'd'){
        result = opMemory[0]/opMemory[2]
        console.log(result)
        result = result.toString();
        screen.innerText = result;
    }else{
        result = opMemory[0]+(opMemory[1]*opMemory[2])
        console.log(result)
        result = result.toString();
        screen.innerText = result;
    }
    opMemory = []
    memory = []
}
