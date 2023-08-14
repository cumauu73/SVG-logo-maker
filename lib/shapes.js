// Parent class
class Shape {
    // All shapes will have color values
    constructor(shapeColorChoice) {
        this.color = shapeColorChoice
    }
    // All shapes will have their own unique render function, child classes will overwrite this default one, else an error will be displayed
    render() {
        throw new Error("Child class must impliment render() method")
    }
}

// Child classes
class Circle extends Shape {
    render() {
        return `<circle cx="150" cy="105" r="70" fill="${this.color}" />`
    }
}

class Square extends Shape {
    render() {
        return `<rect x="90" y="45" width="120" height="120" fill="${this.color}" />`
    }
}

class Triangle extends Shape {
    render() {
        return `<polygon points="150, 20 245, 140 50, 140" fill="${this.color}" />`
    }
}

export { Circle, Square, Triangle }