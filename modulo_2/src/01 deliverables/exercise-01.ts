console.log("************** DELIVERABLE 01 *********************");

const letters: any = ["a", "b", "c", "d"];

const head = ([first]): any => first;
console.log("Primer elemento: " + head(letters));

const tail = ([, ...rest]) => rest;
console.log(tail(letters))

const init = (array) => array.slice(0,-1)
console.log(init(letters));

function last(array) { 
   return array[array.length - 1] };

console.log("Último elemento: " + last(letters));
console.log(letters);


