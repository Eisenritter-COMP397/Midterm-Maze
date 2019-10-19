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
            this.y = 300;
            this.x = 500;
        };
        //Update//
        Player.prototype.Update = function () {
            this.Move();
            this.CheckBounds(); // <-- Check collisions
        };
        Player.prototype.Reset = function () {
        };
        Player.prototype.Move = function () {
            this.x = objects.Game.stage.mouseX;
        };
        Player.prototype.CheckBounds = function () {
            //Right Boundary
            if (this.x >= 480 - this.halfW) {
                this.x = 480 - this.halfW;
            }
            //Left Boundary
            if (this.x <= this.halfW) {
                this.x = this.halfW;
            }
        };
        return Player;
    }(objects.GameObjects));
    objects.Player = Player;
})(objects || (objects = {}));
//# sourceMappingURL=player.js.map