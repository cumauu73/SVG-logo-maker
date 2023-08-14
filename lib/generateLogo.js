// Importing shapes from lib
import * as Shapes from "../lib/shapes.js"

// function to generate SVG files using choices from inquirer
export function generateLogo(logoOptions) {
    // variable storing whatever shape is chosen via inquirer prompt
    const Shape = Shapes[logoOptions.shapeChoice]

    // return SVG XML code
    return `<svg version="1.1"
    width="300" height="200"
    xmlns="http://www.w3.org/2000/svg">
    ${new Shape(logoOptions.shapeColorChoice).render()}
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${logoOptions.textColorChoice}">${logoOptions.textChoice}</text>
</svg>`
}