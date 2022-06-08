console.log("************** DELIVERABLE 03 *********************");

const a = {
    name: "Lucia",
    surname: "Ramone",
    country: "Spain",
}
const b = {
    name: "Lucas",
    surname: "Scott",
    age: 31,
    married: true
};

function clone(obj) {
    const copySource = { ...obj }
    return copySource;
}

function merge(obj1, obj2) {
    const mergeObj = { ...obj2, ...obj1};
    return mergeObj;
}
 

console.log(clone(a));
console.log(merge(a,b));
