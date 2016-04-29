var babyObj = function () {
    this.x;
    this.y;
    this.angle;
    //this.babyEye = new Image();
    //this.babyBody = new Image();
    //this.babyTail = new Image();

    this.babyTailTimer = 0;  //计时器
    this.babyTailCount = 0;  //记帧器

    this.babyEyeTimer = 0;
    this.babyEyeCount = 0;
    this.babyEyeInterval = 1000;

    this.babyBodyTimer = 0;
    this.babyBodyCount = 0;

}
babyObj.prototype.init = function () {
    this.x = canWidth * 0.5 //- 50;
    this.y = canHeight * 0.5 //+ 50;
    this.angle = 0;
    //this.babyEye.src = "src/babyEye0.png";
    //this.babyBody.src = "src/babyFade0.png";
    //this.babyTail.src = "src/babyTail0.png";
}
babyObj.prototype.draw = function () {
    //lerp x,y
    this.x = lerpDistance(mom.x, this.x, 0.98);
    this.y = lerpDistance(mom.y, this.y, 0.98);

    //lerp angle
    var deltaY = mom.y - this.y;
    var deltaX = mom.x - this.x;
    var beta = Math.atan2(deltaY, deltaX) + Math.PI; //-Pi, Pi

    //lerp angle
    this.angle = lerpAngle(beta, this.angle, 0.6);

    //baby tail count

    this.babyTailTimer += (Math.random() * 20 + 10);

    if (this.babyTailTimer > 100) {
        this.babyTailCount = (this.babyTailCount + 1) % 8; //一直在0 ~ 7 之间循环
        this.babyTailTimer %= 100;   // babyTailTimer 还原
    }

    //baby eye 眨眼睛
    this.babyEyeTimer += (Math.random() * 20 + 10);
    if (this.babyEyeTimer > this.babyEyeInterval) {
        this.babyEyeCount = (this.babyEyeCount + 1) % 2;
        this.babyEyeTimer = this.babyEyeInterval;
        if (this.babyEyeCount == 0) {
            this.babyEyeInterval = Math.random() * 1500 + 2000; //[2000, 3500]
        } else {
            this.babyEyeInterval = 800;
        }
    }

    //baby body 身体变白
    this.babyBodyTimer += 15;
    if (this.babyBodyTimer > 300) {
        this.babyBodyCount = (this.babyBodyCount + 1);
        this.babyBodyTimer %= 300;
        if (this.babyBodyCount > 19) {
            this.babyBodyCount = 19;
            // game over
            data.gameOver = true;
        }

    }

    //ctx1
    ctx1.save();
    ctx1.translate(this.x, this.y);
    ctx1.rotate(this.angle);

    var babyBodyCount = this.babyBodyCount;
    ctx1.drawImage(babyBody[babyBodyCount], -20, -20);
    var babyTailCount = this.babyTailCount;
    ctx1.drawImage(babyTail[babyTailCount], 12, -15);
    var babyEyeCount = this.babyEyeCount;
    ctx1.drawImage(babyEye[babyEyeCount], -2, -1);

    ctx1.restore();
}