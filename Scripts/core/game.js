//Immediate Invoked Anonymous Function
(function () {
    // Global Game Variables
    var canvas = document.getElementById("canvas");
    var stage;
    var assetManager;
    var assetManifest;
    var keyboardManager;
    var walldetectionManager;
    // Store current scene and state number
    var currentScene;
    var currentState;
    assetManifest = [
        { id: "maze", src: "./Assets/maze.gif" },
        { id: "background", src: "./Assets/background.jpg" },
        { id: "startButton", src: "./Assets/StartButton.png" },
        { id: "backButton", src: "./Assets/StartButton.png" },
        { id: "player", src: "./Assets/Player.png" },
        { id: "exit", src: "./Assets/Exit.png" },
        { id: "start_music", src: "./Assets/Sound/start.mp3" },
        { id: "play_music", src: "./Assets/Sound/gameplay.mp3" },
        { id: "blop", src: "./Assets/Sound/Blop.wav" }
    ];
    function Init() {
        console.log("Initialization Start");
        //Start();
        // Loading assets and run when its ready
        assetManager = new createjs.LoadQueue();
        assetManager.installPlugin(createjs.Sound);
        assetManager.loadManifest(assetManifest);
        assetManager.on("complete", Start, this);
    }
    function Start() {
        console.log("Starting Application...");
        // Initialize CreateJS
        stage = new createjs.Stage(canvas);
        // Frequency of checks. Computationally expensive. Turn on in menus, Turn off in game.
        stage.enableMouseOver(20);
        createjs.Ticker.framerate = 60; //60 FPS
        createjs.Ticker.on("tick", Update);
        // Set up default scene
        // Create a global reference to our stage object
        objects.Game.stage = stage;
        objects.Game.currentScene = config.scene.START;
        currentState = config.scene.START;
        Main();
    }
    function Update() {
        // Has my state changed since the last check?
        if (currentState != objects.Game.currentScene) {
            console.log("Changing scenes to" + objects.Game.currentScene);
            Main();
        }
        currentScene.Update();
        stage.update();
    }
    // Create our keyboard object and set the global reference
    keyboardManager = new managers.Keyboard;
    objects.Game.keyboardManager = keyboardManager;
    function Main() {
        console.log("Game Start...");
        // Finite State Machine
        switch (objects.Game.currentScene) {
            case config.scene.START:
                stage.removeAllChildren();
                currentScene = new scenes.StartScene(assetManager);
                stage.addChild(currentScene);
                break;
            case config.scene.GAME:
                console.log("Game State");
                stage.removeAllChildren();
                currentScene = new scenes.PlayScene(assetManager);
                stage.addChild(currentScene);
                break;
            case config.scene.OVER:
                currentScene = new scenes.OverScene(assetManager);
                stage.removeAllChildren();
                stage.addChild(currentScene);
                console.log("Over State");
                break;
        }
        currentState = objects.Game.currentScene;
    }
    window.onload = Init;
})();
//# sourceMappingURL=game.js.map