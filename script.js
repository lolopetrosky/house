const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let time = 0;
let mouseX = 0;
let mouseY = 0;

let doorWidth = 25;

canvas.addEventListener("mousemove", function(e) {
  mouseX = e.offsetX;
  mouseY = e.offsetY;
});

canvas.addEventListener("mousedown", function(e) {
  if(mouseX > 150 && mouseX < 175 && mouseY > 300 && mouseY < 350){
    if(doorWidth == 0) {
      setTimeout(closeDoor, 5);
    }
    else {
      setTimeout(openDoor, 5);
    }
  }   
});

canvas.width = 350;
canvas.height = 350;

setInterval(draw, 30);

function draw() {
  time++
  ctx.clearRect(0,0, canvas.width, canvas.height);
  
  ctx.beginPath();
  
  for (var i = 0; i < 100; i++) {
    let pos = i * 50;
    
    ctx.moveTo(pos, 0);
    ctx.lineTo(pos, canvas.width);
    ctx.fillText(pos, pos, 10);
    
    ctx.moveTo(0, pos);
    ctx.lineTo(canvas.height, pos);
    ctx.fillText(pos, 10, pos);
    
    ctx.beginPath();
    ctx.moveTo(175, 175);
    ctx.lineTo(175, 100 - mouseY / 5);
    ctx.lineTo(200, 110 - (time % 5) - mouseY / 5);
    ctx.lineTo(175, 120 - mouseY / 5);
    ctx.closePath();
    ctx.stroke();
    ctx.fillStyle = "hsl("+(mouseX % 360)+", 50%, 50%)";
    ctx.fill();
    
    ctx.beginPath();
    ctx.rect(162.5, 300, doorWidth, 50);
    ctx.closePath();
    ctx.stroke();
    ctx.fillStyle = "aqua";
    ctx.fill();
    
    ctx.beginPath();
    ctx.arc(mouseX, mouseY, 5, 0, Math.PI*2);
    ctx.fillStyle = "aqua";
    ctx.fill();
  }
  
  ctx.closePath();
  ctx.strokeStyle = "rgba(0, 0, 0, .1)";
  ctx.stroke();
  
  ctx.beginPath();
  ctx.rect(50,300,50,50);
  ctx.rect(250, 300, 50, 50);
  ctx.rect(75, 275, 25, 25);
  ctx.rect(250, 275, 25, 25);
  ctx.rect(125, 225, 100, 25);
  ctx.rect(150, 200, 50, 25);
  ctx.rect(162.5, 175, 25, 12.5);
  ctx.closePath();
  ctx.stroke();
  ctx.fillStyle = "pink";
  ctx.fill();
  
  ctx.beginPath();
  ctx.rect(100,250,50,100);
  ctx.rect(200, 250, 50, 100);
  ctx.rect(150,250,50,50);
  ctx.rect(150, 300, 12.5, 50);
  ctx.rect(187.5, 300, 12.5, 50);
  ctx.closePath();
  ctx.stroke();
  ctx.fillStyle = "purple";
  ctx.fill();    
}

function openDoor() {
  doorWidth -= 5;
  
  if(doorWidth != 0){
    setTimeout(openDoor, 5);
  }
}
function closeDoor() {
  doorWidth += 5;
  
  if(doorWidth != 25){
    setTimeout(closeDoor, 5);
  }
}