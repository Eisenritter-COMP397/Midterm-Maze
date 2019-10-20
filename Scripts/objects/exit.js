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
    var Exit = /** @class */ (function (_super) {
        __extends(Exit, _super);
        // Variables
        // Constructor
        function Exit(assetManager) {
            var _this = _super.call(this, assetManager, "exit") || this;
            _this.Start();
            return _this;
        }
        // Methods
        Exit.prototype.Start = function () {
            this.y = 303;
            this.x = 655;
        };
        Exit.prototype.Update = function () {
        };
        Exit.prototype.Reset = function () { };
        Exit.prototype.Move = function () {
        };
        Exit.prototype.CheckBounds = function () {
        };
        return Exit;
    }(objects.GameObjects));
    objects.Exit = Exit;
})(objects || (objects = {}));
//# sourceMappingURL=exit.js.map