class Taxi {
    constructor(name) {
        this.price = 1;
        this.name = name;
        this.earnings = 0;
        this.mileage = 0;
    }
    intro() {
        console.log(`Sveiki, as ${this.name} ir kilometro kaina su manimi yra ${this.price.toFixed(2)} Eur.`);
    }

    updatePrice(newPrice) {
        this.price = newPrice;
        console.log(`${this.name} nustate nauja kilometro kaina - ${newPrice.toFixed(2)} Eur.`);
    }

    ride(distanceCovered) {
        this.mileage += distanceCovered;
        this.earnings += distanceCovered * this.price;
    }

    stats() {
        console.log(`${this.name} nuvaziavo ${this.mileage} km ir uzdirbo ${this.earnings.toFixed(2)} Eur.`);
    }
}

module.exports = Taxi;