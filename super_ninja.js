class Ninja {
    constructor(name,health = 9, speed = 3, strength = 3) {
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;

    }

    sayName() {
        console.log(`Ninja name is ${this.name}`)
        return this;
    }

    showStats() {
        console.log(`Ninja stats are ${this.name}`)
        console.log(`Ninja stats are ${this.health}`)
        console.log(`Ninja stats are ${this.speed}`)
        console.log(`Ninja stats are ${this.strength}`)
        return this;
    }

    drinkSake() {
        this.health += 10;
        console.log(`health is now ${this.health}`)
        return this;
    }
}
const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();

class Sensei extends Ninja {
    constructor (name) {
        super(name, 200, 10, 10)
        // this.health = 200
        // this.speed = 10
        // this.strength = 10
        this.wisdom = 10
    }

    speakWisdom() {
        super.drinkSake();
        console.log("What one programmer can do in one month, two programmers can do in two months")
        return this;
    }
}
const sensei1 = new Sensei('Tod')
console.log(sensei1)
sensei1.speakWisdom();
sensei1.showStats();

//eric, kye, christian, daisy, vivianna, josh fellow collaborators
