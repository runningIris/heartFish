var can1;
var can2;
var ctx1;
var ctx2;

document.body.onload = game;
function game()
{
    init();
}
function init()
{
    //获得canvas context
    can1 = document.getElementById("canvas1"); //fishes; UI; dust; circle; 
    ctx1 = can1.getContext();
    can2 = document.getElementById("canvas2"); //backgroung; ane; fruits;
    ctx2 = can2.getContext();
}