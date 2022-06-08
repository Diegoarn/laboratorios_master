console.log("************** DELIVERABLE 05 *********************");


class slotMachine {
random1: boolean = true;
random2: boolean = true;
random3: boolean = true;
count: number = 1;

play(){
this.random1 = Math.random() >= 0.5;
this.random2 = Math.random() >= 0.5;
this.random3 = Math.random() >= 0.5;
    if (this.random1 && this.random2 && this.random3 ) {
        console.log("Congratulations!, you won " + this.count + " coins.");
        this.count = 1;
    } else {
    this.count = this.count +1;
     console.log("Good luck next time!");
    }
}
};

let machine1 =  new slotMachine();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();







