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
var scenes;
(function (scenes) {
    var PlayScene = /** @class */ (function (_super) {
        __extends(PlayScene, _super);
        // Constructor
        function PlayScene(assetManager) {
            var _this = _super.call(this, assetManager) || this;
            _this.Start();
            return _this;
        }
        PlayScene.prototype.Start = function () {
            // Initialize our objects for this scene
            this.background = new objects.Background(this.assetManager);
            this.Main();
        };
        PlayScene.prototype.Update = function () {
            // update the background
            this.background.Update();
        };
        PlayScene.prototype.nextButtonClick = function () {
            //Change our state from start to game
            objects.Game.currentScene = config.scene.OVER;
        };
        PlayScene.prototype.backButtonClick = function () {
            //Change our state from start to game
            objects.Game.currentScene = config.scene.START;
        };
        PlayScene.prototype.Main = function () {
            //Order Matters when adding game objects
            //Add items to our scenne
            this.addChild(this.background);
        };
        return PlayScene;
    }(objects.Scene));
    scenes.PlayScene = PlayScene;
})(scenes || (scenes = {}));
//# sourceMappingURL=play.js.map