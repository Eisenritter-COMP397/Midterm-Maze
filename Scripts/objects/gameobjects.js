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
    var GameObjects = /** @class */ (function (_super) {
        __extends(GameObjects, _super);
        //Constructor
        function GameObjects(assetManager, imageString) {
            var _this = _super.call(this, assetManager.getResult(imageString)) || this;
            _this.name = imageString;
            _this.Init();
            return _this;
        }
        // Method
        GameObjects.prototype.Init = function () {
            // Initialize all the properties of my objects
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.halfW = this.width * 0.5;
            this.halfH = this.height * 0.5;
            this.regX = this.halfW;
            this.regY = this.halfH;
            this.isColliding = false;
        };
        GameObjects.prototype.Start = function () { };
        GameObjects.prototype.Update = function () { };
        GameObjects.prototype.Reset = function () { };
        GameObjects.prototype.Move = function () { };
        GameObjects.prototype.CheckBounds = function () { };
        return GameObjects;
    }(createjs.Bitmap));
    objects.GameObjects = GameObjects;
})(objects || (objects = {}));
//# sourceMappingURL=gameobjects.js.map