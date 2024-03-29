module objects{
    export class Background extends createjs.Bitmap{
        //Variables
        private speedY:number; // Speed of background scrolling on Y-axis
        //Constructor
        constructor(assetManager:createjs.LoadQueue){
            super(assetManager.getResult("background"));

            this.Start();

        }
        //Functions
        //Initializing our variables with default values
        public Start():void{
        }
        // Updated 60 times per seconds (60FPS)
        public Update():void{
        }
        // Resets the position of the object
        public Reset():void{
        }
        // Move the object
        public Move():void{
        }
        // Collision Detection
        public CheckBound():void{
            if(this.y>=0){
                this.Reset();
            }
        }
    }
}