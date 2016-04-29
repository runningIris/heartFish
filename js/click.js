function beginClick(){
    if(mx > 495 && my > 420){
        gameBegin = true;
    }
}

function drawBeginButton(){
    /* °´Å¥¿ò
    ctx1.save();
    ctx1.fillStyle = "#DDCC99";
    ctx1.shadowBlur = 20;
    ctx1.shadowColor = "#DDBB99";
    ctx1.fillRect(550, 400, 100, 80);
    ctx1.restore();
    */
    ctx1.save();
    ctx1.fillStyle = "#123456";
    ctx1.shadowBlur = 20;
    ctx1.shadowColor = "#345678";
    ctx1.fillText("B E G I N", 575, 450);
    ctx1.restore();
}

function againClick(){
    
}