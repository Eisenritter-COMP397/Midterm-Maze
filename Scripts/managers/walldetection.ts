module managers{
    export class WallDetection{
        public static BoxCast(object1: objects.GameObjects, destX:number, destY:number){
            var canvas : any = document.getElementById("canvas");
            var ctx : CanvasRenderingContext2D=canvas.getContext("2d");
            var imgData: ImageData = ctx.getImageData(destX,destY,object1.halfW,object1.halfH);
            var canMove =1;
            
            for (var i = 0; i < 4 * 10*10; i += 4) { // look at all pixels
                if (imgData.data[i] === 0 && imgData.data[i + 1] === 0 && imgData.data[i + 2] === 0) { // black
                    canMove = 0; // 0 means: the rectangle can't move
                    break;
                }
                else if (imgData.data[i] === 0 && imgData.data[i + 1] === 255 && imgData.data[i + 2] === 0) { // lime: #00FF00
                    canMove = 2; // 2 means: the end point is reached
                    break;
                }
            }
            return canMove;
    } 
   }
   
}