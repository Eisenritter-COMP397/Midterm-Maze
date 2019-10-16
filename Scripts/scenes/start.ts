module scenes{
    export class StartScene extends objects.Scene{
        // Variables
        private background:objects.Background;
        
        //Constructor
        constructor(assetManager:createjs.LoadQueue){
            super(assetManager);
            this.Start();
        }
        
        public Start():void{
            // Initialize our objects for this scene
            this.background = new objects.Background(this.assetManager)
        }

        public Update():void{
            
        }

        public Main():void{
            this.addChild(this.background);
        }
    }
}