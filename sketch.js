let font;
let vehicles = [];

function preload() {
    font = loadFont("outward-block.ttf");
}

function setup() {
    createCanvas(600, 300);
    background(51);
    // textFont(font);
    // textSize(192);
    // fill(255);
    // noStroke();
    // text('train', 100, 200);

    var points = font.textToPoints("bored af", 100, 200, 192, {
        sampleFactor: 0.15,
    });

    for (var i = 0; i < points.length; i++) {
        var pt = points[i];
        var vehicle = new Vehicle(pt.x, pt.y);
        vehicles.push(vehicle);
        // stroke(255);
        // strokeWeight(8);
        // point(pt.x, pt.y);
    }
}

function draw() {
    background(51);
    for (var i = 0; i < vehicles.length; i++) {
        var v = vehicles[i];
        v.behaviors();
        v.update();
        v.show();
    }
}
