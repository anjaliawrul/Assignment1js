//consditional 

// largest number


const num=12;
const num1=15;
const num2=10;

if ( num>num1 && num>num2){
    console.log(`largest number is : ${num}`)
}
else if (num1>num && num1>num2){
    console.log(`largest number is : ${num1}`)
}
else{
    console.log(`largest number is : ${num2}`)
}


// leap year

let year = require("readline-sync");
year = year.questionInt("Enter the  number:-")


if (year%100==0){
    if (year%400==0){
        console.log("this is leap year")
    }
    else{
        console.log("this is not leap year")
    }
}
else if (year%4==0){
    console.log("this is leap year")
}
else{
    console.log("this is not leap year")
}


// switch case

let years = require("readline-sync");
years= years.questionInt("Enter the  number:-")

switch(years){
    case 1:
        console.log("31");
        break
    case 2:
        console.log("28");
        break
    case 3:
        console.log("31");
        break
     case 4:
        console.log("30");
        break
    case 5:
        console.log("31");
        break
    case 6:
        console.log("30");
        break
    case 7:
        console.log("31");
        break
    case 8:
        console.log("31");
        break
    case 9:
        console.log("30");
        break
    case 10:
        console.log("31");
        break
    case 11:
        console.log("30");
        break
    case 12:
        console.log("31");
        break
    default:
        console.log(" it is not valid")
}



for (let i=1;i<=10;i++){
    if(i%2!=0){
        console.log("odd number",i)
    }

}

// Sum of all element

const sum = [1,2,3,4,5,6,7,8,9,10,11,12];
let a=0;
for (let i of sum){
    a+=i
}
console.log(a)


    
//for in loop

const obj={name:"Anjali",age:20}
for (let i in obj){
    console.log(i)
    console.log(obj[i])
}

// create a Array

const arr = [1,2,3,4,5,6,7,8,9,10];
const arr1=[];
for (let i of arr){
    if (i%2==0){
        arr1.push(i)
    }
}
console.log(arr1)

// do while loop                                                                                                                                                        

let i=0;
let sum1=0;
do{
    if (i%2==0){
        sum1+=i;
    }
    i++
}while (i<=500);
console.log(sum1);
