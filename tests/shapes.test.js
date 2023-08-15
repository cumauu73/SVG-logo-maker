import { Shape, Circle, Square, Triangle } from "../lib/shapes.js"

describe("Circle Class", () => {
    it("should return a string containing code for an SVG circle", () => {
        const circle = new Circle()
        expect(circle.render()).toEqual(`<circle cx="150" cy="105" r="80" fill="${circle.color}" />`)
    })

})

describe("Square Class", () => {
    it("should return a string containing code for an SVG circle", () => {
        const square = new Square()
        expect(square.render()).toEqual(`<rect x="85" y="40" width="130" height="130" fill="${square.color}" />`)
    })

})

describe("Triangle Class", () => {
    it("should return a string containing code for an SVG circle", () => {
        const triangle = new Triangle()
        expect(triangle.render()).toEqual(`<polygon points="150, 10 280, 140 20, 140" fill="${triangle.color}" />`)
    })

})