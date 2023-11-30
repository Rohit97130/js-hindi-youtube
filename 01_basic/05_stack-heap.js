// Stack(Primitive)->call by value ,Heap(Non-Primitive)->call by  reference


let myYoutubename ="hiteshchoudary"

let anothername =myYoutubename
anothername ="chai aur code"

console.log(myYoutubename);
console.log(anothername);

let userOne ={
    email:"user@gmail.com",
    upi: "user@ybl"
}
let userTwo = userOne

userOne.email ="hitesh@google.com"

console.log(userOne.email);
console.log(userTwo.email);

