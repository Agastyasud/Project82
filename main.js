var mouseevent="empty" 
var lastx,lasty 
canvas1=document.getElementById("Maincanvas");
asd=canvas1.getContext("2d")
color="red"
witdh=1
canvas1.addEventListener("mousedown",myfunction);
function myfunction(e) {
color=document.getElementById("textinput").value;
witdh=document.getElementById("textinput2").value;
radius=document.getElementById("textinput3").value;
mouseevent="mouseDown"}
canvas1.addEventListener("mousemove",mymovefunction);
function mymovefunction(e) {
    mousex=e.clientX-canvas1.offsetLeft;
 mousey=e.clientY-canvas1.offsetTop;
 if (mouseevent== "mouseDown") {
    asd.beginPath();
    asd.strokeStyle= color
    asd.lineWidth=4;
    console.log("Last position of mouse")
    console.log("x="+lastx+"y="+lasty)
    console.log("Current position of mouse")
    console.log("x="+mousex+"y="+mousey)
    asd.arc(mousex,mousey,radius,0,2*Math.PI);
    asd.stroke();
 }
}
canvas1.addEventListener("mouseup",myupfunction);
function myupfunction(e) {
mouseevent="mouseUp"}
canvas1.addEventListener("mouseleave",myleavefunction);
function myleavefunction(e) {
mouseevent="mouseleave"}
function Clear(){
asd.clearRect(0,0,600,600);
}