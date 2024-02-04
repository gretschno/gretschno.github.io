var angle = 0;
var song; // Declare an audio file variable

function preload() {
  song = loadSound('gretschno_site_loop.aif');
}

function setup() {
  createCanvas(600, 600);
  song.loop(); // Start looping the audio
}

function draw() {
  background(0);
  stroke(255);
  strokeWeight(2);
  line(width / 2, height, width / 2, height - 100);
  translate(width / 2, (height / 4) * 3.5);

  angle = map(mouseX, 0, width, 0, TWO_PI);
  branch(110);
}

function branch(len) {
  line(0, 0, 0, -len);
  translate(0, -len);
  if (len > 4) {
    push();
    rotate(angle);
    branch(len * 0.7);
    pop();
    rotate(-angle);
    branch(len * 0.7);
  }
}

function mousePressed() {
  if (song.isPlaying()) {
    song.pause(); // Pause the audio if it's already playing
  } else {
    song.play(); // Play the audio if it's paused
  }
}
