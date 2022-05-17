// Undefined
// let x = 9;
// console.log(x);
// console.log(typeof x);
// console.log(x);
// console.log(typeof x);

//Null
// let x = null;
// console.log(x);
// let y;
// console.log(x == y);
// console.log(x === y);

// Function Scope and Block Scope
// function a() {
//   let x = 10;
// }
// function b() {
//   console.log(x);
// }
// a();
// b();
// let x = 10;
// function a() {
//   x = x + 5;
// }
// function b() {
//   console.log(x);
// }
// a();
// b();

// Difference between rest and spread operator
// Rest Operator
// function sum(...nums) {
//   console.log(nums);
// }
// function sum() {
//   console.log(arguments);
// }
// sum(4, 5);
// sum(5, 6, 7, 8);
// Spread Operator
// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = [...arr1, 6, 7, 8];
// console.log(arr2);
// let arr1 = [45, 56, 48, 32, 99, 55];
// console.log(Math.max(...arr1));

// When you get Infinity or -INfinity as output?
// console.log(Number.POSITIVE_INFINITY);
// console.log(Number.NEGATIVE_INFINITY);
// console.log(9e4);
//9*1 0000
// console.log(-9e4);
// console.log(9e400);
// console.log(-9e400);
// console.log(Number.MAX_VALUE * 2);
// console.log(-Number.MAX_VALUE * 2);
// console.log(1 / 0);

// When do you get NaN as output?
// let a = 5;
// let b = "value";
// console.log(NaN == NaN);
// if (!isNaN(a * b)) {
//   console.log("Valid");
// } else {
//   console.log("Invalid");
// }
// console.log(a * b == NaN);
// console.log(isFinite(a * b));
// console.log(isFinite(5 * 4));
// console.log(isFinite(Number.MAX_VALUE * 4));
// console.log(isFinite(Infinity));

// Explain must know points of arrow function
// function Declaration
// function test() {
//   //
// }
// test();
// function Expression
// const test = function () {
//   //
// };
// test();
// Arrow Function
// const test = (a, b) => {
//   console.log(a + b);
// };
// test(5, 6);
// const text = (a) => {
//   console.log(a);
// };
// text(1);
// const sum = (a, b) => a + b;
// console.log(sum(5, 6));

// IIFE (ES 5)
// Function Expression
// (function () {
//   console.log("IIFE");
// })();

// // Arrow Function
// (() => {
//   console.log("IIAF");
// })();

// const obj = {
//   test: () => {
//     console.log(this);
//   },
// };
// obj.test();

// const tes = () => {
//   console.log(arguments);
// };
// tes();
// const tes = (...a) => {
//   console.log(a);
// };
// tes(4, 6, 8);
// const tes = () => {
//   console.log("Hi");
// };
// const objs = new tes();
// const tes = function () {
//   console.log("Hi");
// };
// const objs = new tes();

// How does a "closure" work in Javascript

// one way of calling child function

// function outer() {
//   function inner() {
//     console.log("Inner called...");
//   }
//   inner();
// }
// outer();

// second way of calling child function

// function outer() {
//   function inner() {
//     console.log("Inner called...");
//   }
//   return inner;
// }
// const cl = outer();
// cl();

// function outer() {
//   function inner() {
//     console.log("Inner called...");
//   }
//   return inner;
// }
// const cl = outer();
// cl();

// function outer() {
//   return function () {
//     console.log("Inner called...");
//   };
// }
// const cl = outer();
// cl();

// const outer = () => {
//   return () => {
//     console.log("Inner called...");
//   };
// };
// const cl = outer();
// cl();

// const addCounter = () => {
//   let counter = 0;
//   return () => {
//     counter++;
//     return counter;
//   };
// };
// const cl = addCounter();
// console.log(cl());
// console.log(cl());
// console.log(cl());

// How can sum(5)(6) return 11?
// const sum = function (a) {
//   return function (b) {
//     return a + b;
//   };
// };
// const cl = sum(5);
// const ans = cl(6);
// console.log(ans);
// const sum = (a) => (b) => a + b;
// const ans = sum(5)(6);
// console.log(ans);

// const priceCalc = (price) => {
//   return (dPer) => {
//     return price * dPer;
//   };
// };
// getPrice();
// const discountAmount = priceCalc(300);
// console.log(discountAmount(0.5));
// console.log(discountAmount(0.3));
// console.log(discountAmount(0.2));

// Iterables and Iterators
// let arr = [4, 5, 6, 7];
// let itr = arr[Symbol.iterator]();
// console.log(itr);
// console.log(itr.next());
// console.log(itr.next());
// console.log(itr.next());
// console.log(itr.next());
// console.log(itr.next());
// for (let i of arr) {
//   console.log(i);
// }
// let obj = {
//   start: 10,
//   end: 15,
//   [Symbol.iterator]() {
//     return this;
//   },
//   next() {
//     if (obj.start <= obj.end) {
//       return { value: obj.start++, done: false };
//     } else {
//       return { done: true };
//     }
//   },
// };
// for (let i of obj) {
//   console.log(i);
// }
// let obj = {
//   start: 10,
//   end: 15,
//   *[Symbol.iterator]() {
//     for (let cnt = this.start; cnt <= this.end; cnt++) {
//       yield cnt;
//     }
//   },
// };
// for (let i of obj) {
//   console.log(i);
// }
// console.log([...obj]);
// const genFunction = function* () {
//   console.log("Hello");
//   yield "YieldValue";
//   console.log("World");
//   yield;
//   console.log("And Galaxy");
// };
// const gObj = [...genFunction()];
// console.log(gObj);
// const o = gObj.next();
// console.log(o);
// console.log(gObj.next());
// console.log(gObj.next());
// console.log(gObj.next());
// for (let o of gObj) {
//   console.log(o);
// }
// console.log(gObj);

// function* gen() {
//   console.log("Hi");
// }
// function* gen1() {
//   const g = gen();
//   g.next();
// }
// function* gen1() {
//   yield* gen();
// }
// const g1 = gen1();
// g1.next();
// function* fact() {
//   // if
//   // exit
//   yield* fact();
// }
// function* gen() {
//   yield "One";
//   yield "Two";
// }
// const gObj = gen();
// console.log(gObj.next());
// console.log(gObj.return("Condition done..."));
// console.log(gObj.next());

// Types of function ->
// function Statement
// define
// function sayHello(param) {
//   console.log("hello", param);
//   return "sttrfbj";
// }
// fn invocation
// sayHello(10);
// console.log(",,,,,,,,,,,,,,,,,,,,");
// sayHello("Hello");
// console.log(",,,,,,,,,,,,,,,,,,,,");
// sayHello([1, 2, 3, 4, 5]);
// console.log(",,,,,,,,,,,,,,,,,,,,");
// sayHello({ name: "Jasbir" });
// console.log(",,,,,,,,,,,,,,,,,,,,");
// let rVal = sayHello();
// console.log("rVal", rVal);
// function are first class citizens
// function are treated as a variable
// assignment
// let a = [1, 2, 3, 4, 5];
// let b = a;
// console.log(b);
// function expression
// let fnContainer = function fn() {
//   console.log("I am Expression");
//   console.log("I am a anonymous function");
// };
// fnContainer();
// IIFE -> Immediately Invoked Function Expression
// /require, pollution,
// (function fn() {
//   console.log("I am IIFE");
//   console.log("I will run on my own");
// })();
// Arrow Function -> syntax, react, this
// let fun = (num) => num * num;
// console.log(fun(5));
// // First Class Citizens
// functions are treated as a variable
// 1. assignment -> fn expression
// variables can be passed as a parameter
// 2. functions can be passed as a parameter -> fp, hof, callbacks
// variables can be return from a function
// 3. function can be returned from a function -> closure

function sayHello(param) {
  console.log("hello", param);
  param();
  return "sttrfbj";
}
// address
function smaller() {
  console.log("Hello i am a smaller");
}

// // sayHello([1, 2, 3, 4, 5]);
// let rVal = sayHello(smaller);
// console.log(rVal);
// Closure
function outer() {
  console.log("I am outer returning inner");
  return function () {
    console.log("I am inner");
  };
}

let rVal = outer();
console.log("Reval", rVal);
rVal();
