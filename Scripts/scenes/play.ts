module scenes{
    export class PlayScene extends objects.Scene{
        //Variables
        //private playLabel: objects.Label;
        //private nextButton: objects.Button;
        //private backButton: objects.Button;
        private background: objects.Background;

        // Constructor
        constructor(assetManager:createjs.LoadQueue){
            super(assetManager);
            this.Start();
        }

        public Start():void{
            // Initialize our objects for this scene

            this.background = new objects.Background(this.assetManager);

            this.Main();
        }

        public Update():void{
            // update the background
            this.background.Update();
        }

        private nextButtonClick():void{
            //Change our state from start to game
            objects.Game.currentScene = config.scene.OVER;
        }

        private backButtonClick():void{
            //Change our state from start to game
            objects.Game.currentScene = config.scene.START;
        }

        public Main():void{
            //Order Matters when adding game objects
            //Add items to our scenne
            this.addChild(this.background);
        }
    }
}