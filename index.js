// Add your Circle class here
class Circle {
    constructor(radius) {
        this.radius = radius 
    }

    get diameter() {
        return this.radius * 2
    }

    set diameter(value) {
        return this.radius = value / 2 
    }

    get circumference() {
        return this.diameter * Math.PI 
    }

    set circumference(value) {
        return this.radius = (value / 2) / Math.PI  
    }

    get area() {
        return (this.radius ** 2) * Math.PI 
    }

    set area(value) {

    }
}