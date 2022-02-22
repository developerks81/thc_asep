// 2) c) i) Create a factorial function in JavaScript.
function factorial(num) {
    if (num == 0) {
        return 1;
    } else {
        return num * factorial(num-1);
    }
};

console.log('--- Test for 2) c) i) ---');
// Please change "val" to test with other values.
const val = 5;
console.log(factorial(val));

// ii) Create a countdown function which counts down from 10 to 1 every 2 second interval.
function countDown(num) {
    for (let i = num; i >= 0; i -= 2) {
        console.log(i);
    }
    return 'Countdown completed';
};

console.log('--- Test for 2) c) ii) ---')
console.log(countDown(10));

// iii) Create a fibonacci function in JavaScript.
let arr = [];
let num1 = 0, num2 = 1;

function fibonacci(num, arr) {
    for (let i = 0; i < num; i++) {
        if (arr.length < 2 && !(num1 in arr)) {
            arr.push(num1);
        } else if (arr.length < 2 && !(num2 in arr)) {
            arr.push(num2);
        } else {
            arr.push(arr[i-1] + arr[i-2]);
        }
    }
    return arr;
};

console.log('--- Test for 2) c) iii) ---');
// Please change "val1" to test with other values.
const val1 = 5;
console.log(fibonacci(val1, arr));