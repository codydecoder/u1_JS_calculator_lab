//Number Keys
const one = document.querySelector('#one')
const two = document.querySelector('#two')
const three = document.querySelector('#three')
const four = document.querySelector('#four')
const five = document.querySelector('#five')
const six = document.querySelector('#six')
const seven = document.querySelector('#seven')
const eight = document.querySelector('#eight')
const nine = document.querySelector('#nine')
const zero = document.querySelector('#zero')

const display = document.querySelector('.display')

//Number clicks
one.addEventListener('click', () => {
    display.innerHTML = (parseInt(display.innerHTML) + 1);
})

//Operator Keys
const addBtn = document.getElementById('add')
const subtractBtn = document.getElementById('subtract')
const multiplyBtn = document.getElementById('multiply')
const divideBtn = document.getElementById('divide')
const decimal = document.getElementById('decimal')
const clear = document.getElementById('clear')

//Equals Key
const equalsBtn = document.querySelector('.equals')



 