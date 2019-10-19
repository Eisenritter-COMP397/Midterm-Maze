module objects{
    export class Player extends objects.GameObjects{
        //Variables
        // Constructor

        constructor(assetManager:createjs.LoadQueue){
            super(assetManager, "player");
            this.Start();
        }
        //Methods
        public Start():void{
            this.y = 300;
            this.x = 500;
        }
        //Update//
        public Update() {
            this.Move();
            this.CheckBounds(); // <-- Check collisions
        }
        public Reset() {
            
        }
        public Move() {
            this.x = objects.Game.stage.mouseX;
        }
        public CheckBounds() 
        {
            //Right Boundary
            if(this.x>=480-this.halfW){
                this.x = 480-this.halfW;
            }
            //Left Boundary
            if(this.x<= this.halfW){
                this.x = this.halfW;
            }
        }
    }
}