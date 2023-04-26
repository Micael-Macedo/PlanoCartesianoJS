var c = document.getElementById("arcCanvas")
var ctx = c.getContext("2d")

ctx.beginPath();
ctx.strokeStyle = "#cccccc";
ctx.moveTo(100,100);
ctx.lineTo(100,300);
ctx.lineTo(300,300);
ctx.stroke();
ctx.closePath();

ctx.beginPath()
ctx.strokeStyle = "black"
ctx.moveTo(100,100)
ctx.arcTo(100,300,300,300, 25)
ctx.stroke()
ctx.closePath()