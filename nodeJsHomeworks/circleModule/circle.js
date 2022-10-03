const PI = 3.14;

function circleArea(r) {
    console.log('area is', (PI * r * r));
}

function circleCircumference(r) {
    console.log('circumference is', (2 * PI * r));
}

module.exports = {
    circleArea,
    circleCircumference
}