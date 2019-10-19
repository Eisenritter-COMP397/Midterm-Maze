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
    var Maze = /** @class */ (function (_super) {
        __extends(Maze, _super);
        //Constructor
        function Maze(assetManager) {
            var _this = _super.call(this, assetManager, "maze") || this;
            _this.Start();
            return _this;
        }
        //Functions
        //Initializing our variables with default values
        Maze.prototype.Start = function () {
            this.y = this.halfH;
            this.x = this.halfW;
        };
        // Updated 60 times per seconds (60FPS)
        Maze.prototype.Update = function () {
        };
        // Resets the position of the object
        Maze.prototype.Reset = function () {
        };
        // Move the object
        Maze.prototype.Move = function () {
        };
        // Collision Detection
        Maze.prototype.CheckBound = function () {
        };
        return Maze;
    }(objects.GameObjects));
    objects.Maze = Maze;
})(objects || (objects = {}));
//# sourceMappingURL=maze.js.map