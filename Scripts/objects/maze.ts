module objects{
    export class Maze extends objects.GameObjects{
        //Constructor
        constructor(assetManager:createjs.LoadQueue){
            super(assetManager,"maze");

            this.Start();

        }
        //Functions
        //Initializing our variables with default values
        public Start():void{
            this.y = this.halfH;
            this.x = this.halfW;
            
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
        }
    }
}