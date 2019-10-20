var managers;
(function (managers) {
    // this is the unique Wall detection class. It works by drawing a square to the destination where the player wants to move to, 
    // and if there are any black pixel within the square (AKA determines the edge of the maze wall), then the player will not be move 
    var WallDetection = /** @class */ (function () {
        function WallDetection() {
        }
        WallDetection.BoxCast = function (object1, destX, destY) {
            var canvas = document.getElementById("canvas");
            var ctx = canvas.getContext("2d");
            var imgData = ctx.getImageData(destX, destY, object1.halfW, object1.halfH);
            var canMove = 1;
            for (var i = 0; i < 4 * 10 * 10; i += 4) { // look at all pixels
                if (imgData.data[i] === 0 && imgData.data[i + 1] === 0 && imgData.data[i + 2] === 0) { // black
                    canMove = 0; // 0 means: the rectangle can't move
                    break;
                }
                else if (imgData.data[i] === 0 && imgData.data[i + 1] === 255 && imgData.data[i + 2] === 0) { // lime: #00FF00
                    canMove = 2; // 2 means: the end point is reached
                    break;
                }
            }
            return canMove;
        };
        return WallDetection;
    }());
    managers.WallDetection = WallDetection;
})(managers || (managers = {}));
//# sourceMappingURL=walldetection.js.map