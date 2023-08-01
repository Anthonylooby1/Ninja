class Ninja {
    constructor(name,health = 9, speed = 3, strength = 3) {
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;

    }

    sayName() {
        console.log(`Ninja name is ${this.name}`)
        return;
    }

    showStats() {
        console.log(`Ninja stats are ${this.name}`)
        console.log(`Ninja stats are ${this.health}`)
        console.log(`Ninja stats are ${this.speed}`)
        console.log(`Ninja stats are ${this.strength}`)
        return;
    }

    drinkSake() {
        this.health += 10;
        console.log(`health is now ${this.health}`)
        return;
    }
}
const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
