console.log("************** DELIVERABLE 02 *********************");

const greetings = ["hello", "hey", "alo"];
const goodbye = ["bye", "ciao", "adiós"];
const letter = ["a", "b", "c", "d"];


const concat = (arr1, arr2) => [...arr1, ...arr2];

console.log(concat(greetings,goodbye));

const concatMulti = (...multiArray) => {
    return [...multiArray];
  }
  
 console.log(concatMulti(...goodbye, ...letter, ...greetings));











