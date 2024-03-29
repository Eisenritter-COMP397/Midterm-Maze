module scenes{
    export class PlayScene extends objects.Scene{
        //Variables
        //private playLabel: objects.Label;
        //private nextButton: objects.Button;
        //private backButton: objects.Button;
        private maze: objects.Maze;
        private player: objects.Player;
        private exit: objects.Exit;

        private backgroundMusic: createjs.AbstractSoundInstance;

        // Constructor
        constructor(assetManager:createjs.LoadQueue){
            super(assetManager);
            this.Start();
        }

        public Start():void{
            // Initialize our objects for this scene

            this.maze = new objects.Maze(this.assetManager);
            this.player = new objects.Player(this.assetManager);
            this.exit = new objects.Exit(this.assetManager);

            // Initialize Sound
            createjs.Sound.stop();
            this.backgroundMusic = createjs.Sound.play("play_music");
            this.backgroundMusic.loop = -1; //Loop Music infinite times
            this.backgroundMusic.volume = 1;
            
            this.Main();
        }

        public Update():void{
            this.player.Update();
            //console.log(managers.Collision.Check(this.player, this.exit));
            if(managers.Collision.Check(this.player, this.exit)){
                objects.Game.currentScene = config.scene.OVER;
            };
            
        }

        public Main():void{
            //Order Matters when adding game objects
            //Add items to our scenne
            this.addChild(this.maze);
            this.addChild(this.player);
            this.addChild(this.exit);
        }
    }
}