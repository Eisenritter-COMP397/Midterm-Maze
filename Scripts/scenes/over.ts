module scenes{
    export class OverScene extends objects.Scene{
        //Variables
        private overLabel: objects.Label;
        private backButton: objects.Button;

        // Constructor
        constructor(assetManager:createjs.LoadQueue){
            super(assetManager);
            this.Start();
        }

        public Start():void{
            // Initialize our objects for this scene
            this.overLabel = new objects.Label("Game Over", "60px", "Consolas",
            "#000000",320,240,true)


            this.backButton = new objects.Button(this.assetManager, "backButton",100,340);
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
            this.addChild(this.overLabel);
            this.addChild(this.backButton);
            this.backButton.on("click", this.backButtonClick);
        }
    }
}