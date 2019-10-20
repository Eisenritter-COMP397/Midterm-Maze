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
            this.y = 290;
            this.x = 656;
        }
        //Update//
        public Update() {
            this.Move();
            this.CheckBounds(); // <-- Check collisions
        }
        public Reset() {
            
        }
        public Move() {
            //this.x = objects.Game.stage.mouseX;
            //When I use "objects.Game.keyboardManager" it is a reference 
            // to the global keyboardmanager object
            if(objects.Game.keyboardManager.moveLeft)
            {
                if(managers.WallDetection.BoxCast(this,this.x -this.halfW- 1,this.y)!=0){
                this.x -= 1;
                }
            }
            if(objects.Game.keyboardManager.moveRight)
            {
                if(managers.WallDetection.BoxCast(this,this.x + 1,this.y)!=0){
                    this.x += 1;
                }
            }
            if(objects.Game.keyboardManager.moveUp)
            {
                if(managers.WallDetection.BoxCast(this,this.x,this.y-this.halfH-1)!=0){
                    this.y -= 1;
                    }
            }
            if(objects.Game.keyboardManager.moveDown)
            {
                if(managers.WallDetection.BoxCast(this,this.x,this.y + 1)!=0){
                    this.y += 1;
                    }
            }
        }
        public CheckBounds() 
        {
            //Right Boundary
            if(this.x>=668-this.halfW){
                this.x = 668-this.halfW;
            }
            //Left Boundary
            if(this.x<= this.halfW){
                this.x = this.halfW;
            }
            //Bottom Boundary
            if(this.y>=668-this.halfH){
                this.y = 668-this.halfH;
            }
            //Bottom Boundary
            if(this.y<= this.halfH){
                this.y = this.halfH;
            }
        }
    }
}