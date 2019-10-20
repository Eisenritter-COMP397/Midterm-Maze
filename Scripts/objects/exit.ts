module objects {
    export class Exit extends objects.GameObjects {
        // Variables
        // Constructor
        constructor(assetManager:createjs.LoadQueue) {
            super(assetManager, "exit");
            this.Start();
        }
        // Methods
        public Start():void {
            this.y = 232;
            this.x = 656;
        }
        public Update():void {
        }
        public Reset():void {}
        public Move():void {
        }
        public CheckBounds():void {
        }
    }
} 