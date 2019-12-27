var rain = []
function setup() {
  createCanvas(400,400)
rain.push(new Raindrop());

}

function draw() {
  background("city.jpg")
  if (frameCount % 1 == 0) {
			rain.push(new Raindrop());
}
for (var i = 0; i < rain.length; i++) {
  rain[i].show();
  rain[i].update();
  if (rain[i].offscreen()){
    rain.splice(i,1)
    i--
  }
}

}

function Raindrop(){
  this.l = Math.floor(Math.random() * 5);
  this.x =Math.floor(Math.random() * 400);
  this.y = 0
  this.r = Math.floor(Math.random() * 15);
  this.speed = Math.floor(Math.random() * 8);
  this.actualspeed = this.speed + 1
  this.z = this.y - this.r - 10
  this.show = function () {
    line(this.x , this.y, this.x, this.z)
    stroke("green")
  }

  this.update = function () {
    if (this.r > 9 && this.speed < 5) {
      this.speed = 7
    }
    if (this.r < 6 && this.speed > 6) {
      this.speed = this.l + 1
    }

    this.y += this.actualspeed
    this.z += this.actualspeed
  }
  this.offscreen = function () {
    if (this.z > 400) {
      return true
    }else {
      return false
    }
  }
}
