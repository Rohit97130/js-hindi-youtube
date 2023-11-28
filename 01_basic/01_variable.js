const accountId = 144553
let accountEmail= "hitesh@google"
var accountPassword ="123456" 
accountCity= "jaipur"             // this is not right way

let accountState;

// accountId =2  ->not allowed
accountEmail ="hc@hc.com"
accountPassword ='1234455'
accountCity= "rohit"

console.log(accountId);
/*
prefer not to use var 
beacuse of the issue in block scope and funtional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);
console.log(accountEmail);
