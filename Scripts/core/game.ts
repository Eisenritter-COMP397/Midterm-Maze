//Immediate Invoked Anonymous Function
(function(){

    // Global Game Variables
    let canvas = document.getElementById("canvas");
    let stage:createjs.Stage;

    let assetManager:createjs.LoadQueue;
    let assetManifest: any[];

    // Store current scene and state number
    let currentScene:objects.Scene;
    let currentState:number;

    assetManifest=[

    ]

    function Init(){
        console.log("Initialization Start")
        //Start();

        // Loading assets and run when its ready
        assetManager = new createjs.LoadQueue();
        assetManager.installPlugin(createjs.Sound);
        assetManager.loadManifest(assetManifest);
        assetManager.on("complete",Start,this)
    }

    function Start(){
        console.log("Starting Application...");

        // Initialize CreateJS
        stage = new createjs.Stage(canvas);
        // Frequency of checks. Computationally expensive. Turn on in menus, Turn off in game.
        stage.enableMouseOver(20);
        createjs.Ticker.framerate = 60; //60 FPS
        createjs.Ticker.on("tick",Update);

        // Set up default scene
        // Create a global reference to our stage object
        objects.Game.stage = stage;
        objects.Game.currentScene = config.scene.START;
        currentState = config.scene.START;

        Main();
    }

    function Update(){
        // Has my state changed since the last check?
        if (currentState != objects.Game.currentScene) {
            console.log("Changing scenes to"+ objects.Game.currentScene);
            Main()
        }
        currentScene.Update();
        stage.update();
    }

    function Main(){
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
                    currentScene =  new scenes.PlayScene(assetManager);
                    stage.addChild(currentScene);
                break;
                case config.scene.OVER:
                        currentScene =  new scenes.OverScene(assetManager);
                        stage.removeAllChildren();
                        stage.addChild(currentScene);
                    console.log("Over State");
                break;            
        }
        currentState = objects.Game.currentScene;
    }
    window.onload = Init;
}
)();