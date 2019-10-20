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
    var OverScene = /** @class */ (function (_super) {
        __extends(OverScene, _super);
        // Constructor
        function OverScene(assetManager) {
            var _this = _super.call(this, assetManager) || this;
            _this.Start();
            return _this;
        }
        OverScene.prototype.Start = function () {
            this.background = new objects.Background(this.assetManager);
            // Initialize our objects for this scene
            this.overLabel = new objects.Label("Congratulations, you won the game!", "30px", "Fantasy", "#FF0000", 300, 250, true);
            this.backButton = new objects.Button(this.assetManager, "backButton", 200, 500);
            createjs.Sound.stop();
            this.backgroundMusic = createjs.Sound.play("start_music");
            this.backgroundMusic.loop = -1;
            this.backgroundMusic.volume = 1;
            this.Main();
        };
        OverScene.prototype.Update = function () {
        };
        OverScene.prototype.backButtonClick = function () {
            //Change our state from start to game
            objects.Game.currentScene = config.scene.START;
        };
        OverScene.prototype.Main = function () {
            //Add items to our scenne
            this.addChild(this.background);
            this.addChild(this.overLabel);
            this.addChild(this.backButton);
            this.backButton.on("click", this.backButtonClick);
        };
        return OverScene;
    }(objects.Scene));
    scenes.OverScene = OverScene;
})(scenes || (scenes = {}));
//# sourceMappingURL=over.js.map