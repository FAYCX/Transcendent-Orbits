let angle = 0;
let r = 200;
let rOffset = 0;
let pointsSlider, spacingSlider;
let loopsLabel, spacingLabel;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  
  colorMode(HSB, 180);
  noFill();
  
  //slider controls the number of points
  pointsSlider = createSlider(10, 200, 50, 1); 
  pointsSlider.position(windowWidth / 3, height - 50);
  
  //slider controls the spacing between the points
  spacingSlider = createSlider(PI / 2, TWO_PI, PI, 0.05);
  spacingSlider.position(windowWidth / 1.3, height - 50);

  //HTML elements for labels
  loopsLabel = createDiv('Number of Loops:');
  loopsLabel.style('color', 'white');
  loopsLabel.position(windowWidth / 3 - 130, height - 50);

  spacingLabel = createDiv('Spacing Control:');
  spacingLabel.style('color', 'white');
  spacingLabel.position(windowWidth / 1.3 - 130, height - 50);
}

function draw() {
  background(0);
  
  rotateX(angle);
  rotateY(angle * 0.1);
  rotateZ(angle * 0.2);
  
  let loops = pointsSlider.value();
  let points = 50;
  let spacing = spacingSlider.value();
  
  rOffset += 0.02;
  let dynamicR = r + 50 * sin(rOffset);
  
  beginShape();
  for (let j = 0; j < loops; j++) {
    let theta = j * (TWO_PI / loops);
    for (let i = 0; i < points; i++) {
      let hueValue = map(i / 2 + j / 2, 0, points + loops, 0, 255);
      stroke(hueValue, 255, 255, 80);
      
      let x = dynamicR * sin(i * spacing) * cos(theta);
      let y = dynamicR * sin(i * spacing) * sin(theta);
      let z = dynamicR * cos(i * spacing);
      vertex(x, y, z);
    }
  }
  endShape(CLOSE);
  
  angle += 0.03;
}
