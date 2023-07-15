// Java Script trick questions

// GUESS THE OUTPUTS OF THE FOLLOWING QUESTION

// 1. (hosting rule)

// function fruits() {
//   console.log(name);
//   console.log(price);

//   var name = "apple";
//   let price = 20;
// }
// fruits();

// 2. // (last value of i compared with condition  was printed when the setTimeout executed because of var keyword as it has global scope)

// for (var i = 0; i <= 3; i++) {
//   setTimeout(() => setTimeout(() => console.log(i), 1000));
// }

// 3.
// for (let i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), 1000);
// }

// 4.
// console.log(+true);
// console.log(typeof +true);

// 5.
// let a = !"Ravish";
// console.log(a);
// console.log(typeof a);

//6.
// let data = "size";
// const bird = {
//   size: "small",
// };
// console.log(bird[data]);
// console.log(bird["size"]);
// console.log(bird.size);
// console.log(bird.data);

// 7
// let c = { name: "peter" };
// let d;
// d = c;
// c.name = "ravish";
// console.log(d.name);

//8
// var x;
// var x = 10;
// console.log(x);

//9
// var x;
// let x = 20;
// console.log(x);

//10
// let a = 3;
// let b = new Number(a); //converted to object
// console.log(a == b);
// console.log(a === b);

//11
// var naam;
// let naam;
// const naam
// console.log(naam);

//12
// function fruit() {
//   console.log("woof!");
// }
// fruit.name = "apple";
// console.log(fruit());

//13
// function sum(a, b) {
//   return a + b;
// }
// console.log(sum(1, "2"));

//14
// let number = 0;
// console.log(number++);
// console.log(++number);
// console.log(number++);

// 15
// function getAge(...args) {
//   console.log(typeof args);
// }
// getAge(21);

// let args = [10, 20, 30];
// function getAge(...values) {
//   console.log(values);
// }
// getAge(...args);

//16
// function getAge() {
//   "use strict";
//   age = 21;
//   console.log(age);
// }
// getAge();

//17
// const sum = eval("5+10*10");
// console.log(sum);

//18
// how long is cool_secret accessible?
// sessionStorage.setItem("cool_secret", 123);

// 19
// const obj = { 1: "a", 2: "b", 3: "c" };
// console.log(obj.hasOwnProperty("1"));
// console.log(obj.hasOwnProperty(1));

// 20
// const obj = { a: "one", b: "two", a: "repeat" };
// console.log(obj);

//21
// for (let i = 1; i < 5; i++) {
//   if (i === 3) continue;

//   console.log(i);
// }

//22
// const foo = () => console.log("first");
// const bar = () => console.log("second");
// const baz = () => console.log("Third");

// bar();
// foo();
// baz();

// 23
// const person = { name: "lydia" };
// function sayHi(age) {
//   return `${this.name} is ${age}`;
// }
// console.log(sayHi.call(person, 21));
// console.log(sayHi.bind(person, 21));

//24
// function sayHi() {
//   return (() => 0)();
// }
// console.log(typeof sayHi());

//25
// console.log(typeof typeof 1);

//26
// const numbers = [1, 2, 3];
// numbers[9] = 11;
// console.log(numbers);

//27
// const numbers = [1, 2, 3];
// numbers[3] = numbers;
// console.log(numbers);

//28
// Everything in javascript is either a...
// a. primitive or object
// b  functin or object
// c. trick question! only object
// d. number or object

//29
// console.log(!!null);
// console.log(!!"");
// console.log(!!1);

// 30
// console.log(setInterval(() => console.log("hi"), 1000));
// console.log(setInterval(() => console.log("hi"), 1000));
// console.log(setInterval(() => console.log("hi"), 1000));

// 31
// console.log([..."ravish"]);

//32
// let data = 2 + 1 + "1";
// console.log(typeof data);
// console.log(data);
// console.log(typeof 8 + 1 + "1");

//33
// console.log(typeof []);
// console.log([] == []);
// console.log(3 == 3);

//34
// let data = [1, 2, 3].map((num) => {
//   if (typeof num === "number") return;
//   return num * 2;
// });
// console.log(data);

//35
// function getInfo(member) {
//   member.name = "Ravish";
// }
// const person = { name: "cyko" };
// getInfo(person);
// console.log(person);

// 36
// function Car() {
//   this.make = "tata";
//   return { make: "kia" };
// }
// const myCar = new Car();
// console.log(myCar.make);

//37
// (() => {
//   let x = (y = 10);
// })();
// console.log(typeof x);

//38
// (() => {
//   let x = (y = 10);
// })();
// console.log(y);

// 39
// (() => {
//   let x = 10;
// })(() => {
//   let x = 100;
// });

//40
// (() => {
//   let x = (y = 10);
// })();

// (() => {
//   let x = (y = 20);
// })();
// console.log(y);

//41
// let x = 100;
// (() => {
//   var x = 20;
// })();
// console.log(x);

//42
// console.log(!true - true);

//43
// console.log(true + +"10");
