var haloObj = function () {
    this.x = [];
    this.y = [];
    this.alive = [];
    this.r = [];
}
haloObj.prototype.num = 5;
haloObj.prototype.init = function () {
    for (var i = 0; i < this.num; i++) {
        this.x[i] = 0;
        this.y[i] = 0;
        this.alive[i] = false;
        this.r[i] = 0;
    }
}
haloObj.prototype.draw = function () {
    for (var i = 0; i < this.num; i++) {
        if (this.alive[i]) {
            this.r[i] += 1;
            if (this.r[i] > 100) {
                this.alive[i] = false;
            }
            var alpha = 1 - this.r[i] / 100
            ctx1.save();
            ctx1.shadowBlur = 2;
            ctx1.lineWidth = 3;
            ctx1.shadowColor = "white";
            ctx1.beginPath();
            ctx1.arc(this.x[i], this.y[i], this.r[i], 0, Math.PI * 2, true);
            ctx1.closePath();
            ctx1.strokeStyle = "rgba(210, 110, 39, " + alpha + ")";
            ctx1.stroke();
            ctx1.restore();
        }
    }

}

//触发机制
haloObj.prototype.born = function (x, y) {
    for (var i = 0; i < this.num; i++) {
        if (!this.alive[i]) {
            this.alive[i] = true;
            this.x[i] = x;
            this.y[i] = y;
            this.r[i] = 20;
            return;
        }
    }
}