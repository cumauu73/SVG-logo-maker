// Parent class
export class Shape {
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
export class Circle extends Shape {
    render() {
        return `<circle cx="150" cy="105" r="80" fill="${this.color}" />`
    }
}

export class Square extends Shape {
    render() {
        return `<rect x="85" y="40" width="130" height="130" fill="${this.color}" />`
    }
}

export class Triangle extends Shape {
    render() {
        return `<polygon points="150, 10 280, 140 20, 140" fill="${this.color}" />`
    }
}