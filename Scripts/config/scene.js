var config;
(function (config) {
    var scene;
    (function (scene) {
        scene[scene["START"] = 0] = "START";
        scene[scene["GAME"] = 1] = "GAME";
        scene[scene["OVER"] = 2] = "OVER";
    })(scene = config.scene || (config.scene = {}));
})(config || (config = {}));
//# sourceMappingURL=scene.js.map