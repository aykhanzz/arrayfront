'use strict';



let array = [1, 2, 3]; 
let n = 9;
for (let i = 0; i < n; i++) {

  let second = array.slice(-3);

  let sum = second.reduce((acc, curr) => {
      return acc + curr;
    })

  array.push(sum);
}

console.log(array);