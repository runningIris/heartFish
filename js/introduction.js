var introObj = function () {
    this.x;
    this.y;
    this.width;
    this.height;
    this.rules = [];
}

introObj.prototype.init = function () {
    this.x = 150;
    this.y = 80;
    this.width = 500;
    this.height = 400;
    this.rules[0] = "               游戏规则"
    this.rules[1] = "# 鼠标控制鱼妈妈的运动;";
    this.rules[2] = "# 鱼妈妈可以吃红色和蓝色的果实;";
    this.rules[3] = "# 在鱼宝宝完全变白之前";
    this.rules[4] = "   鱼妈妈必须要喂鱼宝宝";
    this.rules[5] = "# 如果鱼宝宝的身体变白了，那它就死翘翘了";
    this.rules[6] = "   活活被你饿死的！";
    this.rules[7] = "# 分数系统: 红色 = 10分； 蓝色20分";
}

introObj.prototype.draw = function () {
    //draw a rectangle background
    ctx1.save();
    ctx1.globalAlpha = 0.6;
    ctx1.strokeStyle = "#DDDDDD";
    ctx1.shadowBlur = 20;
    ctx1.shadowColor = "#DDAADD";
    ctx1.fillRect(this.x, this.y, this.width, this.height);
    ctx1.restore();

    //draw rules
    ctx1.save();
    ctx1.font = "20px Tw Cen MT";
    ctx1.textAlign = "left";
    ctx1.fillStyle = "#B03060";
    for (var i = 0; i < 9; i++) {
        ctx1.fillText(this.rules[i], this.x + 30, this.y + (i + 1) * 40);
    }
    ctx1.restore();
}
