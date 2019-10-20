var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var objects;
(function (objects) {
    var Player = /** @class */ (function (_super) {
        __extends(Player, _super);
        //Variables
        // Constructor
        function Player(assetManager) {
            var _this = _super.call(this, assetManager, "player") || this;
            _this.Start();
            return _this;
        }
        //Methods
        Player.prototype.Start = function () {
            this.y = 290;
            this.x = 656;
        };
        //Update//
        Player.prototype.Update = function () {
            this.Move();
            this.CheckBounds(); // <-- Check collisions
        };
        Player.prototype.Reset = function () {
        };
        Player.prototype.Move = function () {
            //this.x = objects.Game.stage.mouseX;
            //When I use "objects.Game.keyboardManager" it is a reference 
            // to the global keyboardmanager object
            if (objects.Game.keyboardManager.moveLeft) {
                if (managers.WallDetection.BoxCast(this, this.x - this.halfW - 1, this.y) != 0) {
                    this.x -= 1;
                }
            }
            if (objects.Game.keyboardManager.moveRight) {
                if (managers.WallDetection.BoxCast(this, this.x + 1, this.y) != 0) {
                    this.x += 1;
                }
            }
            if (objects.Game.keyboardManager.moveUp) {
                if (managers.WallDetection.BoxCast(this, this.x, this.y - this.halfH - 1) != 0) {
                    this.y -= 1;
                }
            }
            if (objects.Game.keyboardManager.moveDown) {
                if (managers.WallDetection.BoxCast(this, this.x, this.y + 1) != 0) {
                    this.y += 1;
                }
            }
        };
        Player.prototype.CheckBounds = function () {
            //Right Boundary
            if (this.x >= 668 - this.halfW) {
                this.x = 668 - this.halfW;
            }
            //Left Boundary
            if (this.x <= this.halfW) {
                this.x = this.halfW;
            }
            //Bottom Boundary
            if (this.y >= 668 - this.halfH) {
                this.y = 668 - this.halfH;
            }
            //Bottom Boundary
            if (this.y <= this.halfH) {
                this.y = this.halfH;
            }
        };
        return Player;
    }(objects.GameObjects));
    objects.Player = Player;
})(objects || (objects = {}));
//# sourceMappingURL=player.js.map