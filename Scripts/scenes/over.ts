module scenes{
    export class OverScene extends objects.Scene{
        //Variables
        private overLabel: objects.Label;
        private backButton: objects.Button;
        private background: objects.Background;
        private backgroundMusic: createjs.AbstractSoundInstance;

        // Constructor
        constructor(assetManager:createjs.LoadQueue){
            super(assetManager);
            this.Start();
        }

        public Start():void{
            this.background = new objects.Background(this.assetManager);

            // Initialize our objects for this scene
            this.overLabel =  new objects.Label("Congratulations, you won the game!", "30px", "Fantasy",
            "#FF0000", 300,250,true)

            this.backButton = new objects.Button(this.assetManager, "backButton",200,500);

            createjs.Sound.stop();
            this.backgroundMusic = createjs.Sound.play("start_music");
            this.backgroundMusic.loop = -1;
            this.backgroundMusic.volume = 1;
            this.Main();


        }

        public Update():void{

        }

        private backButtonClick():void{
            //Change our state from start to game
            objects.Game.currentScene = config.scene.START;
        }

        public Main():void{
            //Add items to our scenne
            this.addChild(this.background);
            this.addChild(this.overLabel);
            this.addChild(this.backButton);
            
            this.backButton.on("click", this.backButtonClick);
        }
    }
}