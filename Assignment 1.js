

let myLet=10;
console.log(myLet);
myLet=20;
console.log(myLet);



const myConst = 3.14;
console.log(myConst);

// we cant re-assign and  re-declare the variables that are defined.

// myConst=2.71;

console.log(myConst)


const area_of_circle=Math.PI*(5**2);
console.log(area_of_circle);



const a=1;
const F = (a*9/5)+32;
console.log(F);







// OPERATOR



// Pre-increment
let  y=5;
let x=++y;
console.log(x)


// post-increment

let E= 10;
let r1 = E++;
console.log(r1)




//decrement

let  dec=10;
let d=--dec;
console.log(d)


// post decrement

let G= 10;
let count = G--;
console.log(count)




// Comparison oprator

const H=2;
const b=4;
console.log(H==b)
console.log(H!=b)
console.log(H===b)
console.log(H!==b)
console.log(H>b)
console.log(H<b)
console.log(H>=b)
console.log(H<=b)




//Logical operatores

const m=5;
const num2=6;
const nnum3=19;
if (num1<num2 && num2<nnum3){
    console.log(true)
}
else if (num1<num2 || num2<nnum3){
    console.log(false)
}

console.log(!(num1<num2 && num2>nnum3))


// TERNARY OPERATOR

let m = require("readline-sync");
m=m.questionInt("Enter the number")

let num2 = require("readline-sync");
num2=num2.questionInt("Enter the number")

const larger = (m>num2)?m:num2;
console.log(larger)




// DATATYPE IN JS


// NUMBER

const num = 10;
console.log(typeof num)

//STRING

const str = "Tamanna";
console.log(typeof str)

//UNDEFINED

let NEW;
console.log(typeof NEW);


//NULL DATATYPE

const nu = null;
console.log(nu)


// BOOLEAN

const r = true;
console.log(typeof r)


// SYMBOL


const symbol1 = Symbol("Tamanna");
let obj={
    a:12,
    b:14,
    c:symbol1
}
console.log(obj)



//object

let obj1={
    a:12,
    b:14,
    c:[1,2,3]
}
console.log(obj1)


// BIGINT


const bigInt = BigInt(9007199254740991);
console.log(bigInt);



// type conversion 

//implicity 

let n = 15;
let s = "Tanu";
console.log(n+s)


let n1=15;
let n2="15";
console.log(n2+n1)



const n3 = 15;
const n4 = "10";
console.log(n3-n4)
console.log(n3*n4)
console.log(n3/n4)



//Explicity 

const type = Number("15");
console.log(typeof type)



const type1 = String(155);
console.log(typeof type1)



const type2=Boolean(12);
console.log(typeof type2)



const type3=Number(true);
console.log(type3)



// create two veriable

const nm1=10;
const nm2="5";
const nm1AsString=String(nm1);
const nm2AsNumber = Number(nm2);

//sum of two numbers


const sum = nm1AsString+nm2AsNumber;
console.log(sum)


//product of two numbers


const product = nm1*nm2;
console.log(product)

