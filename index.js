/*Практика 27.10*/

function Auto(name, maxSpeed) {
    this.name = name;
    this.maxSpeed = maxSpeed;
    this.speed = 0;

    this.accelerate = function(accelerate) {
        this.speed = this.speed = accelerate;
        if(this.speed > this.maxSpeed) {
            this.speed = this.maxSpeed
        }
            return this.speed;
    }
}

const auto1 = new Auto('Audi', '240', '0', '120', '50', 'stop');