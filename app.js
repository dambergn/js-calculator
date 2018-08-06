'use strict';

let calculator = document.getElementById('calculator')

let key1 = document.getElementById('key1')
let key2 = document.getElementById('key2')
let key3 = document.getElementById('key3')
let key4 = document.getElementById('key4')
let key5 = document.getElementById('key5')
let key6 = document.getElementById('key6')
let key7 = document.getElementById('key7')
let key8 = document.getElementById('key8')
let key9 = document.getElementById('key9')
let key0 = document.getElementById('key0')
let key00 = document.getElementById('key00')
let key_point = document.getElementById('key-point')
let key_minusE = document.getElementById('key-minusE')
let key_plusE = document.getElementsByClassName('key-plusE')


calculator.onclick = function(event){
  event.preventDefault();
  let key = document.getElementById('key1').value
  console.log(document.getElementById(key))
}

// key1.onclick = function(event){
//   console.log(key1.value)
// };

key2.onclick = function(event){
  event.preventDefault();
  console.log('key 2 was clicked.')
};

key3.onclick = function(event){
  event.preventDefault();
  console.log('key 3 was clicked.')
};


key_plusE.onclick = function(event){
  event.preventDefault();
  console.log('key plusE was clicked.')
};

// console.log('js loaded')