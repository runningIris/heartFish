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
    this.rules[0] = "               Game Rules:"
    this.rules[1] = "# the mouse controls the momfish's movement;";
    this.rules[2] = "# momfish eats blue fruits and orange fruits;";
    this.rules[3] = "# momfish feeds the babyfish before its body ";
    this.rules[4] = "   becomes completely white;";
    this.rules[5] = "# if babyfish's body becomes completely white,";
    this.rules[6] = "   it is starved to death and the game is over;";
    this.rules[7] = "#scoring system: orange fruit = 10 points,";
    this.rules[8] = "                         blue fruit = 20 points";
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