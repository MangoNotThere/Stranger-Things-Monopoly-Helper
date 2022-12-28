var vLine=["Vecna strikes", "Vecna attacks", "Upside-down consumes", "Vecna takes", "Upside-down takes", "Vecna sinks", "Vecna kablooied", "The Upside-down engulfs","The Upside-down consumes","The Upside-down strikes"]
var places=["Wheeler House", "Henderson House", "Trailer Park", "Hawkins High","Video Store","Byers' House", "Lenora Hills High", "Rink-O-Mania", "Surfer Boy Pizza", "Police Station", "County Lane Cafe", "Pennhurst Assylum", "Suzie's House", "Silo Lab", "Yuri's Fish N Fly", "Kamchatka Church", "Russian Prison", "Counselor Kelly's House", "Hawkin's Cemetery", "Lovers' Lake","Hawkins Lab","Creel House"]
var vplace
var lc1=255
var lc2=255
var lc3=255
let d61
let d62
//double count
let dc=0
function setup() {
  
  createCanvas(windowWidth, windowHeight);
  background(0)
}

function draw() {
  noStroke()
  fill(255)
  textSize(windowHeight/20)
  text("Spin Clock",windowWidth/8,windowHeight/8)
  text("Roll Dice", windowWidth/8*5, windowHeight/8)
  strokeWeight(4)
  stroke(255)
  line(windowWidth/2,0,windowWidth/2,windowHeight/5*4-4)
  stroke(lc1,lc2,lc3)
  line(0,windowHeight/5*4,windowWidth,windowHeight/5*4)

  if(mouseIsPressed){
  mouseClicked()
}
}
function keyPressed(){
 
  if(key==='f'){
     background(0)
    strokeWeight(4)
    stroke(179, 18, 18)
    fill(0)
    rect(2,windowHeight/5*4,windowWidth-4,windowHeight-4)
    fill(255)
    textSize(windowHeight/25)
    noStroke()
    vplace=floor(random(1,22))
    text(vLine[floor(random(0, vLine.length))]+" "+vplace+", "+places[vplace-1]+"!",5,windowHeight/5*4+5,windowWidth-5,windowHeight)
  }

if(key==='j'){
      background(0)
    strokeWeight(4)
    stroke(45, 65, 240)
    fill(0)
    rect(2,windowHeight/5*4,windowWidth-4,windowHeight-4)
    fill(255)
    textSize(windowHeight/25)
    noStroke()
      d61=floor(random(1,6))
      d62 = floor(random(1,6))
      if(d61!==d62){
    text("You roll "+d61+" and "+d62+"! Move "+ (d61+d62)+" spaces!",5,windowHeight/5*4+5,windowWidth-5,windowHeight)
        dc=0
      }else{
        if(dc===3){
          text("Uh-oh!You roll a "+d61+" and a "+d62+"! Go to jail. Do not pass go. Do not collect $200.",5,windowHeight/5*4+5,windowWidth-5,windowHeight)
        }else{
        text("You roll "+d61+" and "+d62+". Doubles! Move "+ (d61+d62)+" spaces!",5,windowHeight/5*4+5,windowWidth-5,windowHeight)
        dc=dc+1
        }
        }
    lc1=45
    lc2=65
    lc3=240
    
  }
}

function mouseClicked(){
  if(mouseX<windowWidth/2){
    background(0)
    strokeWeight(4)
    stroke(179, 18, 18)
    fill(0)
    rect(2,windowHeight/5*4,windowWidth-4,windowHeight-4)
    fill(255)
    textSize(windowHeight/25)
    noStroke()
    vplace=floor(random(1,22))
    text(vLine[floor(random(0, vLine.length))]+" "+vplace+", "+places[vplace-1]+"!",5,windowHeight/5*4+5,windowWidth-5,windowHeight)
    lc1=179
    lc2=18
    lc3=18
  }
    if(mouseX>windowWidth/2){
      background(0)
    strokeWeight(4)
    stroke(45, 65, 240)
    fill(0)
    rect(2,windowHeight/5*4,windowWidth-4,windowHeight-4)
    fill(255)
    textSize(windowHeight/25)
    noStroke()
      d61=floor(random(1,6))
      d62 = floor(random(1,6))
      if(d61!==d62){
    text("You roll "+d61+" and "+d62+"! Move "+ (d61+d62)+" spaces!",5,windowHeight/5*4+5,windowWidth-5,windowHeight)
        dc=0
      }else{
        if(dc===3){
          text("Uh-oh!You roll a "+d61+" and a "+d62+"! Go to jail. Do not pass go. Do not collect $200.",5,windowHeight/5*4+5,windowWidth-5,windowHeight)
        }else{
        text("You roll "+d61+" and "+d62+". Doubles! Move "+ (d61+d62)+" spaces!",5,windowHeight/5*4+5,windowWidth-5,windowHeight)
        dc=dc+1
        }
        }
    lc1=45
    lc2=65
    lc3=240
    
  }
}
