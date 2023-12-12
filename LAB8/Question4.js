
function Animal(name,speed){
    this.name=name;
    this.speed=speed;
}

Animal.prototype.run=function(speed){
    this.speed=speed;
}

let animal1=new Animal("Tiger",70);
let animal2=new Animal("Dog",40);

Animal.prototype.compareBySpeed = function(a1, a2) {
    if (a1.speed === a2.speed) {
        console.log("have the same speed");
    } else if (a1.speed > a2.speed) {
        console.log(`${a1.name} is faster than ${a2.name}`);
    } else {
        console.log(`${a2.name} is faster than ${a1.name}`);
    }
};

function Rabbit(name){
    this.name=name;

}

Object.setPrototypeOf(Rabbit.prototype,Animal.prototype);

Rabbit.prototype.hide = function() {
    console.log(`${this.name} hides.`);
};

let rabbit1=new Rabbit("bunny");

rabbit1.hide();
rabbit1.run(5);

