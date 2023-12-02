// string
const name ="rohit"
const repoCount =50

//console.log(name + repoCount +" value")

console.log(`Hello my name is ${name} and my  repo count is ${repoCount}`);  // string interpollation

const gameName = new String('hitesh-hc-c om') //string as a object

console.log(gameName[0]);
console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0,4)
console.log(newString);


const anotherString =gameName.slice(-8,4)
console.log(anotherString);

const newStringOne ="hitesh  lnkln m ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url =`https://hitesh.com%20rohit`


 console.log(url.replace('%20','-'));   

 console.log(url.includes("hit"));
  

console.log(gameName.split('-'));
console.log(gameName)



