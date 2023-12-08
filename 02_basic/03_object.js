// singleton -->constructor 
// object.create


// object literal se singleton  ni banne gaa
const mySym =Symbol("key1") 




const JsUser ={         //non singleton object
    name:"Hitesh",
    "full name":"jain",
    [mySym]:"myKey1",
    0:18,
    location:"jaipur",
    email:"rohitjain97130",
    isLogged:false,
    lastLoginDays:["Monday","Saturday"]

}
// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[0]);
// console.log(JsUser[mySym])


// JsUser.email="ritika.com"
// Object.freeze(JsUser)
// JsUser["email"]="nvknlk"
// console.log(JsUser);


JsUser.greeting = function(){
    console.log("Hello Js user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello Js user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());