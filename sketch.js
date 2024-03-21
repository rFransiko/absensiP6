let judul;
let nama;
let tombol;
let hello;
let objek;
let jalan = false;
let gravForce;
let windForce;


function setup() {
  createCanvas(windowWidth, windowHeight);
  
  tombol = createButton('Jalankan/Pause')
  tombol.position(65,150)
  
  objekPos = createVector(width/6,height/2);
  objekVel = createVector(0,0);
  objekAcc = createVector(0,0);
  objekMass = 10;
  objek = new Mover(objekPos, objekVel, objekAcc, objekMass);
  
  gravForce = createVector(0, objek.mass*0.1);
  windForce = createVector(0.5, 0);
}


function draw() {
  background(200);
  judul = createElement('h1', 'Simulasi Hk Newton')
  judul.position(60, 15)
  judul = createElement('h4', 'Nama : R.Fransisko Barimbing')
  judul.position(60,50)
  judul= createElement('h4', 'Nim : 122160047')
  fill('white')
  
  judul.position(90,65)
  objek.display();
  
  var Cd = 0.0002;
  var diam1 = (2*objek.mass);
  var A1 = PI*diam1/2;
  var frictionForce = objek.velocity.copy();
  frictionForce.normalize()
  frictionForce.mult(-1* (frictionForce.mag()**2) *A1*Cd)

  
  objek.applyForce(gravForce);
  objek.applyForce(windForce);
  objek.applyForce(frictionForce);
  
  
  
  tombol.mousePressed(run);
  
  if (jalan){
    objek.update();
  }
  
}


function run(){
  // objek.update();
  if (jalan){
    jalan = false;
  }
  else{
    jalan = true
  }
}

class Mover {
  constructor(loc, vel, acc, m){
    this.location = loc;
    this.mass = m;
    this.velocity = vel;
    this.acceleration = acc;
  }
  update(){
    this.velocity.add(this.acceleration);
    this.location.add(this.velocity);
  }
  display(){
    noStroke();
    fill('red')
    ellipse(this.location.x, this.location.y, 7*this.mass, 3*this.mass);
  }  
  
  applyForce(force){
    force.div(this.mass)
    this.acceleration.add(force);
  }

}