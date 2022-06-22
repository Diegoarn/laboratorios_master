console.log("************** CHALLENGES *********************");
console.log("Use folder 02 challenges to practice with challenge exercises");
console.log("You can add new files as long as they are imported from index.ts");


const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

const showMessage = async ([time, message]) => {
  await delay(time);
  console.log(message);
};

const triggers = [
  async () => await showMessage([200, "third"]),
  async () => await showMessage([100, "second"]),
];

const run = triggers => {
    triggers.forEach(t => t());
  console.log("first");
 
};

run(triggers);