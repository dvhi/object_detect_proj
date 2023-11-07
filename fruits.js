var status;
var cocoSSD;
var img;

function preload() {
    img = loadImage("path/to/fruits.jpg");
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    centerCanvas();

    status = select("#status");
    status.html("Detecting Objects");

    cocoSSD = ml5.objectDetector('cocossd', modelLoaded);
}

function modelLoaded() {
    status.html("Model Loaded!");
    cocoSSD.detect(img, gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        select("#detected-objects").html(results.length);
    }
}

function centerCanvas() {
    let x = (windowWidth - width) / 2;
    let y = (windowHeight - height) / 2;
    canvas.position(x, y);
}
