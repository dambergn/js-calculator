'use strict';
// form and keyboard controls

let calculator = document.getElementById('calc-contain')
let key0 = document.getElementById('key0')
let key1 = document.getElementById('key1')
let key2 = document.getElementById('key2')
let key3 = document.getElementById('key3')
let key4 = document.getElementById('key4')
let key5 = document.getElementById('key5')
let key6 = document.getElementById('key6')
let key7 = document.getElementById('key7')
let key8 = document.getElementById('key8')
let key9 = document.getElementById('key9')

let clear = document.getElementById('clear')
let equals = document.getElementById('=')

let addition = document.getElementById('addition')
let subtract = document.getElementById('subtract')
let multiply = document.getElementById('multiply')
let divide = document.getElementById('divide')


// screen controls
calculator.onclick = function(e){
  e.preventDefault(); // Prevents page from refreshing when a button is clicked.
}

clear.onclick = function(){
  answer.value = ''
}

equals.onclick = function(){
  console.log(answer.value)
  answer.value = answer.value = eval(answer.value)
}

key0.onclick = function(){
  answer.value = answer.value += key0.value
}

key1.onclick = function(){
  answer.value = answer.value += key1.value
}

key2.onclick = function(){
  answer.value = answer.value += key2.value
}

key3.onclick = function(){
  answer.value = answer.value += key3.value
}

key4.onclick = function(){
  answer.value = answer.value += key4.value
}

key5.onclick = function(){
  answer.value = answer.value += key5.value
}

key6.onclick = function(){
  answer.value = answer.value += key6.value
}

key7.onclick = function(){
  answer.value = answer.value += key7.value
}

key8.onclick = function(){
  answer.value = answer.value += key8.value
}

key9.onclick = function(){
  answer.value = answer.value += key9.value
}

addition.onclick = function(){
  answer.value = answer.value += addition.value
}

subtract.onclick = function(){
  answer.value = answer.value += subtract.value
}

multiply.onclick = function(){
  answer.value = answer.value += multiply.value
}

divide.onclick = function(){
  answer.value = answer.value += divide.value
}

// Keyboard Controls
document.onkeydown = function (event) {
  if (event.keyCode === 96 || event.keyCode === 48) { //96 = num-0 || key-0
    answer.value = answer.value += key0.value
  } else if (event.keyCode === 97 || event.keyCode === 49) { // num-1 || key-1
    answer.value = answer.value += key1.value
  } else if (event.keyCode === 98 || event.keyCode === 50) { // num-2 || key-2
    answer.value = answer.value += key2.value
  } else if (event.keyCode === 99 || event.keyCode === 51){ // num-3 || key-3
    answer.value = answer.value += key3.value
  } else if (event.keyCode === 100 || event.keyCode === 52) { // num-4 || key-4
    answer.value = answer.value += key4.value
  } else if (event.keyCode === 101 || event.keyCode === 53) { // num-5 || key-5
    answer.value = answer.value += key5.value
  } else if (event.keyCode === 102 || event.keyCode === 54) { // num-6 || key-6
    answer.value = answer.value += key6.value
  } else if (event.keyCode === 103 || event.keyCode === 55) { // num-7 || key-7
    answer.value = answer.value += key7.value
  } else if (event.keyCode === 104 || event.keyCode === 56) { // num-8 || key-8
    answer.value = answer.value += key8.value
  } else if (event.keyCode === 105 || event.keyCode === 57) { // num-9 || key-9
    answer.value = answer.value += key9.value
  } else if (event.keyCode === 67) { // c clear
    answer.value = ''
  } else if (event.keyCode === 13 || event.keyCode === 187) { // num-enter || key-=
    answer.value = answer.value = eval(answer.value)
  } else if (event.keyCode === 107 || event.keyCode === 16 && event.keyCode === 187) { // num + || key +
    answer.value = answer.value += addition.value
  } else if (event.keyCode === 109 || event.keyCode === 189) { // num - || key -
    answer.value = answer.value += subtract.value
  } else if (event.keyCode === 106 || event.keyCode === 16 && event.keyCode === 56) { // num * || *
    answer.value = answer.value += multiply.value
  } else if (event.keyCode === 111 || event.keyCode === 191) { // num / || /
    answer.value = answer.value += divide.value
  }
};