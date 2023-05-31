class Stars {
    x = 0;
    y = 0;
    z = 0;
    size = 0;
    canvasWidth = 0;
    canvasHeight = 0;
  constructor(canvasWidth, canvasHeight, size) {
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
    this.x = (Math.random() - 0.5) * this.canvasWidth;
    this.y = (Math.random() - 0.5) * this.canvasHeight;
    this.z = -this.canvasWidth/2;
    this.t = this.canvasWidth / 2;
    this.l = this.canvasHeight / 2;
    this.size = size;
}


   show(ctx) {
    ctx.beginPath();
    let sx = mapNumber(this.x/this.z, 0,1,0, this.t)
    let sy = mapNumber(this.y/this.z, 0,1,0, this.l)
    ctx.arc(sx, sy, this.size, 0, 2 * Math.PI);
    ctx.fillStyle = 'rgb(255,255,255)';
    ctx.fill();
    ctx.stroke();
  }

  update() {
      let temp = this.z;
    this.z -= 7;
    if (this.z < 0){
        this.z = (Math.random() - 0.5) * this.canvasWidth;
         this.x = (Math.random() - 0.5) *this.canvasWidth;
         this.y = (Math.random() - 0.5) * this.canvasHeight;

    }


  }
}

function mapNumber(number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}



export default Stars;
