module scenes{
    export class StartScene extends objects.Scene{
        // Variables
        private background:objects.Background;
        private welcomeLabel: objects.Label;
        private startButton: objects.Button;

        private backgroundMusic: createjs.AbstractSoundInstance;

        
        //Constructor
        constructor(assetManager:createjs.LoadQueue){
            super(assetManager);
            this.Start();
        }
        
        public Start():void{
            // Initialize our objects for this scene
            this.background = new objects.Background(this.assetManager);

            this.welcomeLabel = new objects.Label("Welcome to George's Maze", "30px", "Fantasy",
            "#FF0000", 300,250,true)

            this.startButton = new objects.Button(this.assetManager, "startButton",200,500);
            createjs.Sound.stop();
            this.backgroundMusic = createjs.Sound.play("start_music");
            this.backgroundMusic.loop = -1;
            this.backgroundMusic.volume = 1;

            this.Main();
        }

        public Update():void{
            
        }

        private startButtonClick():void{
            //Change our state from start to game
            objects.Game.currentScene = config.scene.GAME;
        }

        public Main():void{
            this.addChild(this.background);
            this.addChild(this.welcomeLabel);
            this.addChild(this.startButton);
            this.startButton.on("click", this.startButtonClick);
        }
    }
}