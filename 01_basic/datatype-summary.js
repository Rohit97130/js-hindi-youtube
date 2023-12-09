// primitive datatype

//7 type : String,Number,Boolean , null, undefined , Symbol, BigInt

// javacript is a dynamically  typed language because the datatype of the variable determined by the value which is writtten  inside the variable
const score = 100 
const scoreValue =100.3

const isLoggedIn = false
const outsideTemp =null // it is COMPLETELY empty not zero(NOTHING)
let userEmail; // undefined


const id =Symbol('123')
const anotherId =Symbol('123')

// console.log(id== anotherId);

const bigNumber=34493749n







//Reference (non primitive)

// Array, Objects ,Function -> the returntype of the non primitive datatype is object in case of the function it is object funtion

const heros =["shaktiman", "naagraj" ,"doga"];
let myObj ={
    name:"rohit",
    age:22,
    r:function(){
        console.log("hitesh");
    }
}
// console.log(myObje);


const myFunction = function(){
    console.log("Helllo world");
    console.log("kjndfjkn");
}

// console.log(typeof myFunction);
myFunction()

// console.log(myFunction());

//https://262.ecma-international.org/5.1/#sec-11.4.3 documentation