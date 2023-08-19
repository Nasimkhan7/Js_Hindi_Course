let score = "33"
console.log(typeof score);

let valueInNumber =Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);



let scope = "12avd"  
let valuesNumber =Number(scope)
console.log(valuesNumber);  // NaN outPut

// "33" string to convert in number => 33
// "12avd" => output NaN not a Number

// boolean convert  true => 1 ;false => 0;
 //=========conversion ==============
let isLoggedIn  =1;
let booleanLoggedIn = Boolean(isLoggedIn)
console.log(booleanLoggedIn);

// 1 => true
// 0 => false
// ""=> false
// "Nasimkhan " => true

 //=========conversion last ==============

// string conversion====

let someNumber = 33
let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);
  
// ************************** Oprations *********************
let value = 5
let negValue = -value;
// console.log(negValue)
// console.log(2+2)
// console.log(2-2)
// console.log(2*2)
// console.log(2**2)
// console.log(2/2)
// console.log(2%2)

let str1 = "hello";
let str2 = " Nasim khan"

let str3 = str1 + str2
console.log(str3)

console.log(+ true)
console.log(+ "")

let num1 , num2,num3 

let gameCounter = 100;
gameCounter++; // prifix=====
++gameCounter // post Fix====
console.log(gameCounter);