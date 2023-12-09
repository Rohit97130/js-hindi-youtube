
function sayMyName() {
console.log("H");
console.log("I");
console.log("T");
console.log("H");
console.log("E");

}

//sayMyName()    //execution



// function addTwoNumber(number1,number2){
//     console.log( number1 +number2);
// }

function addTwoNumber(number1,number2){
    // let result= number1 +number2
    // return result;
    return number1+number2
}
// const result = addTwoNumber(3,5) 
// console.log("Result :", result)


function isloginName(userName="sam"){
        if(!userName){
            console.log("Please enter a username");
            return
        }
        return `${userName} just logged in`
    }

// console.log(isloginName());




// shopping card

function calculateCartPrice(vla1, val2 ,...num1){ //rest operator
    return num1
}
// console.log(calculateCartPrice(100,200,400,2000));



const user ={
    username:"hitesh",
    price:199
}

function handleObject(anyObject){
       console.log(`UserName is ${anyObject.username} and price is ${anyObject.price}`);
}
// handleObject(user)
handleObject({
    username:"sam",
    price:399
})


const myNewarray=[200,300,400,500]

function returnSecondValue(getArray){
      return getArray[1]
}
// console.log(returnSecondValue(myNewarray))
console.log(returnSecondValue([200,400,500,1000]));

