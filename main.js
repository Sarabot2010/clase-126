cancion = "";
leftX = 0;
leftY = 0;
rightX = 0;
rightY = 0;
function preload() {
    cancion = loadSound("music.mp3");
}

function setup() {
    canvas = createCanvas(600,500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log("PoseNet se inicializo");
}

function draw() {
    image(video, 0, 0, 600, 500);
    fill('#52E67A');
    stroke('#FFFFFF')
    circle(leftX, leftY, 20);
    NumeroleftY = Number(leftY)
    remover_decimales = floor(NumeroleftY);
    volumen = remover_decimales/500;
    document.getElementById("volumen").innerHTML = "Volumen = "+volumen;
    cancion.setVolume(volumen)
}

function play() {
    cancion.play();
    cancion.setVolume(1);
    cancion.rate(1);
}

function gotPoses(results) {
    if(results.length > 0) {
        console.log(results);
        leftX = results[0].pose.leftWrist.x;
        leftY = results[0].pose.leftWrist.y;
        console.log("leftX= "+leftX+ "leftY= "+leftY);
        rightX = results[0].pose.rightWrist.x;
        rightY = results[0].pose.rightWrist.y;
        console.log("rightX= "+rightX+ "rightY= "+right1);
    }
}