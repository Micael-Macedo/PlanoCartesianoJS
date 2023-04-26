function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    background(255)
    createPlanoCartesiano()

    let mouse = calcMouse()

    desenharLinhas(mouse);


}

function desenharLinhas(mouse) {
    stroke(255, 0, 0);
    strokeWeight(5);
    point(mouse.x, mouse.y);
    strokeWeight(1);
    line(0, mouse.y, mouse.x, mouse.y);
    line(mouse.x, 0, mouse.x, mouse.y);
}

function calcMouse() {
    return{
        x: mouseX - (width / 2), 
        y: mouseY - (height / 2)
    }
}

function createPlanoCartesiano() {
    translate(width / 2, height / 2)
    stroke(0, 0, 0);
    strokeWeight(2)
    line(-width, 0, width / 2, 0);
    line(0, -height / 2, 0, 0);

    strokeWeight(1)
    for (let index = 0; index < (width / 2); index += 50) {
        line(index, -height, index, height);
        line(-index, -height, -index, height);
    }
    for (let index = 0; index < (height / 2); index += 50) {
        line(-width, index, width, index);
        line(-width, -index, width, -index);
    }
}
