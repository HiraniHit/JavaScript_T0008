//-------------- line -------------

let canvas1 = document.querySelector("#line")

canvas1.width = "200"
canvas1.height = "200"

let context1 = canvas1.getContext("2d")

context1.moveTo(0,0)
context1.lineTo(200,200)
context1.stroke()

//-------------- round -------------

let canvas3 = document.querySelector("#round")

canvas3.width = "200"
canvas3.height = "200"

let context3 = canvas3.getContext("2d")
context3.beginPath()
context3.arc(100,100,100,0,100)
context3.stroke()

//-------------- emoji -------------

let emoji_main_canvas = document.querySelector("#emoji_main_canvas")

emoji_main_canvas.width = "200"
emoji_main_canvas.height = "200"

let context_emoji_main_canvas = emoji_main_canvas.getContext("2d")

context_emoji_main_canvas.beginPath()
context_emoji_main_canvas.arc(100,100,100,20,100)
context_emoji_main_canvas.fillStyle = "rgba(245, 206, 66)"
context_emoji_main_canvas.fill()

context_emoji_main_canvas.beginPath()
context_emoji_main_canvas.arc(60,70,15,0,20)
context_emoji_main_canvas.stroke()
context_emoji_main_canvas.fillStyle = "rgba(0,0,0)"
context_emoji_main_canvas.fill()

context_emoji_main_canvas.beginPath()
context_emoji_main_canvas.arc(140,70,15,0,20)
context_emoji_main_canvas.stroke()
context_emoji_main_canvas.fillStyle = "rgba(0,0,0)"
context_emoji_main_canvas.fill()

context_emoji_main_canvas.fillStyle = "rgba(0,0,0)"
context_emoji_main_canvas.fillRect(62,130,80,5)

// ------------------ emoji 2 -------------------------

let emoji_main_canvas_stuke = document.querySelector("#emoji_main_canvas_stuke")

emoji_main_canvas_stuke.width = "200"
emoji_main_canvas_stuke.height = "200"

let context_emoji_main_canvas_stuke = emoji_main_canvas_stuke.getContext("2d")

context_emoji_main_canvas_stuke.beginPath()
context_emoji_main_canvas_stuke.arc(100,100,100,20,100)
context_emoji_main_canvas_stuke.fillStyle = "rgba(245, 206, 66)"
context_emoji_main_canvas_stuke.fill()

context_emoji_main_canvas_stuke.fillStyle = "rgba(0,0,0)"
context_emoji_main_canvas_stuke.fillRect(50,66,30,5)

context_emoji_main_canvas_stuke.fillStyle = "rgba(0,0,0)"
context_emoji_main_canvas_stuke.fillRect(120,66,30,5)

context_emoji_main_canvas_stuke.fillStyle = "rgba(0,0,0)"
context_emoji_main_canvas_stuke.fillRect(62,130,80,5)

//--------------- pingPong ------------------

let pingPong = document.querySelector("#pingPong")

pingPong.height = "600"
pingPong.width = "400"

let context_pingPong = pingPong.getContext("2d")

context_pingPong.fillStyle = "rgba(0,0,0)"
context_pingPong.fillRect(0,0,400,600)

context_pingPong.fillStyle = "white"
context_pingPong.fillRect(165,20,70,10)

context_pingPong.fillStyle = "white"
context_pingPong.fillRect(165,570,70,10)

context_pingPong.beginPath()
context_pingPong.setLineDash([8])
context_pingPong.moveTo(0,300)
context_pingPong.lineTo(400,300)
context_pingPong.strokeStyle ="white"
context_pingPong.stroke()

context_pingPong.beginPath()
context_pingPong.arc(200,300,10,2*Math.PI,false)
context_pingPong.fillStyle = "white"
context_pingPong.fill()

context_pingPong.font ="30px Arial"
context_pingPong.fillText("10",20,270)

context_pingPong.font ="30px Arial"
context_pingPong.fillText("15",20,360)

//-------------- grediat -------------

let canvas4 = document.querySelector("#grediat")

canvas4.width = "200"
canvas4.height = "200"

let context4 = canvas4.getContext("2d")

let grediat = context4.createLinearGradient(0,0,200,0)
grediat.addColorStop(0,"red")
grediat.addColorStop(1,"white")

context4.fillStyle = grediat
context4.fillRect(0,0,200,200)


//-------------- text -------------

let canvas5 = document.querySelector("#text")

canvas5.width = "200"
canvas5.height = "200"

let context5 = canvas5.getContext("2d")

context5.font="40px Arial"
context5.strokeText("Hit",70,110)

// --------------- box ----------------
let canvas6 = document.querySelector("#box")

canvas6.height = "200"
canvas6.width = "200"

let context6 = canvas6.getContext("2d")

context6.fillStyle = "rgba(200,0,0,1)"
context6.fillRect(20,20,100,100)

context6.fillStyle = "rgba(400,300,0,0.4)"
context6.fillRect(80,80,100,100)
///----------- chess --------------------


let canvas2 = document.getElementById("myCanvas");
let context = canvas2.getContext("2d");
context.fillStyle = "black";

context.fillRect(0, 0, 100,100);
context.fillRect(200,0,100,100)
context.fillRect(400,0,100,100)
context.fillRect(600,0,100,100)

context.fillRect(100,100,100,100)
context.fillRect(300,100,100,100)
context.fillRect(500,100,100,100)
context.fillRect(700,100,100,100)

context.fillRect(200,200,100,100)
context.fillRect(0,200,100,100)
context.fillRect(400,200,100,100)
context.fillRect(600,200,100,100)

context.fillRect(300,300,100,100)
context.fillRect(100,300,100,100)
context.fillRect(500,300,100,100)
context.fillRect(700,300,100,100)

context.fillRect(400,400,100,100)
context.fillRect(0,400,100,100)
context.fillRect(200,400,100,100)
context.fillRect(600,400,100,100)

context.fillRect(500,500,100,100)
context.fillRect(100,500,100,100)
context.fillRect(300,500,100,100)
context.fillRect(700,500,100,100)

context.fillRect(600,600,100,100)
context.fillRect(0,600,100,100)
context.fillRect(400,600,100,100)
context.fillRect(200,600,100,100)

context.fillRect(700,700,100,100)
context.fillRect(100,700,100,100)
context.fillRect(300,700,100,100)
context.fillRect(500,700,100,100)

//something web site

let website = document.querySelector("#web")

website.width = "600"
website.height ="1000"

let web_context = website.getContext("2d")

//nav

web_context.fillStyle = "rgb(3, 1, 59)"
web_context.fillRect(0,0,600,80)

web_context.font="20px Arial white"
web_context.fillStyle ="rgb(255,255,255)"
web_context.fillText("LOGO",20,45)

web_context.font="20px Arial white"
web_context.fillStyle ="rgb(255,255,255)"
web_context.fillText("Home",420,45)

web_context.font="20px Arial white"
web_context.fillStyle ="rgb(255,255,255)"
web_context.fillText("Portfolio",490,45)

//1st - sec

web_context.fillStyle = "rgb(194, 239, 255)"
web_context.fillRect(0,80,600,300)

web_context.font="20px Arial white"
web_context.fillStyle ="rgb(0,0,0)"
web_context.fillText("Main Content",240,230)

//2nd - sec

web_context.fillStyle = "rgb(255, 246, 209)"
web_context.fillRect(0,380,600,300)

//
web_context.fillStyle = "rgb(255,255,255)"
web_context.fillRect(20,430,150,200)

web_context.fillStyle = 'rgb(255, 246, 209)'
web_context.roundRect(30,450,130,80,[10,10,10,10])
web_context.fill()

web_context.fillStyle = 'rgb(222, 222, 222)'
web_context.fillRect(30,545,130,10)

web_context.fillStyle = 'rgb(222, 222, 222)'
web_context.fillRect(30,565,130,10)
web_context.fillStyle = 'rgb(222, 222, 222)'
web_context.fillRect(30,580,130,10)
web_context.fillStyle = 'rgb(222, 222, 222)'
web_context.fillRect(30,595,130,10)
//
web_context.fillStyle = "rgb(255,255,255)"
web_context.fillRect(225,430,150,200)

web_context.fillStyle = 'rgb(255, 246, 209)'
web_context.roundRect(235,450,130,80,[10,10,10,10])
web_context.fill()

web_context.fillStyle = 'rgb(222, 222, 222)'
web_context.fillRect(235,545,130,10)

web_context.fillStyle = 'rgb(222, 222, 222)'
web_context.fillRect(235,565,130,10)
web_context.fillStyle = 'rgb(222, 222, 222)'
web_context.fillRect(235,580,130,10)
web_context.fillStyle = 'rgb(222, 222, 222)'
web_context.fillRect(235,595,130,10)
//
web_context.fillStyle = "rgb(255,255,255)"
web_context.fillRect(430,430,150,200)

web_context.fillStyle = 'rgb(255, 246, 209)'
web_context.roundRect(440,450,130,80,[10,10,10,10])
web_context.fill()

web_context.fillStyle = 'rgb(222, 222, 222)'
web_context.fillRect(440,545,130,10)

web_context.fillStyle = 'rgb(222, 222, 222)'
web_context.fillRect(440,565,130,10)
web_context.fillStyle = 'rgb(222, 222, 222)'
web_context.fillRect(440,580,130,10)
web_context.fillStyle = 'rgb(222, 222, 222)'
web_context.fillRect(440,595,130,10)

//3rd sec

web_context.fillStyle = "rgb(235, 244, 246)"
web_context.fillRect(0,680,600,300)

//map

web_context.fillStyle = "rgb(198, 247, 195)"
web_context.fillRect(330,700,250,200)

web_context.font ="20px Arial"
web_context.fillStyle = "rgb(0,0,0)"
web_context.fillText("Map",430,810)


//form

//name
web_context.font="16px Arial"
web_context.fillStyle = "rgb(0,0,0)"
web_context.fillText("Name :",20,720)

web_context.fillStyle ="rgb(222, 222, 222)"
web_context.fillRect(90,700,200,30)

//email

web_context.font="16px Arial"
web_context.fillStyle = "rgb(0,0,0)"
web_context.fillText("Email :",20,770)

web_context.fillStyle ="rgb(222, 222, 222)"
web_context.fillRect(90,750,200,30)

//phone
web_context.font="16px Arial"
web_context.fillStyle = "rgb(0,0,0)"
web_context.fillText("Phone :",20,820)

web_context.fillStyle ="rgb(222, 222, 222)"
web_context.fillRect(90,800,200,30)

//submit button

web_context.beginPath()
web_context.fillStyle ="rgb(35, 2, 105)"
web_context.roundRect(110,865,120,30,[25,25,25,25])
web_context.fill()

web_context.font="16px Arial"
web_context.fillStyle = "rgb(255,255,255)"
web_context.fillText("Submit",145,885)

//footer
web_context.fillStyle = "rgb(3, 1, 59)"
web_context.fillRect(0,920,600,80)

web_context.font ="15px Arial"
web_context.fillStyle = "rgb(255,255,255)"
web_context.fillText("@Trems and Condition Applied",200,965)


//img put

const img = new Image()

img.src = "https://www.google.cm/url?sa=i&url=https%3A%2F%2Fstackoverflow.com%2Fquestions%2F493296%2Fcss-display-an-image-resized-and-cropped&psig=AOvVaw0p6p0UmTpEDnOuSy36aZ-r&ust=1720181497246000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIDVn8qtjYcDFQAAAAAdAAAAABAE"
