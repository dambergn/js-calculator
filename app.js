'use strict';

let key1 = document.getElementById('key1')

key1.onclick = function(event){
  event.preventDefault();
  console.log('key 1 was clicked.')
};

console.log('js loaded')