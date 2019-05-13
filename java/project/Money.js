class Money extends GameObject{
		constructor(type,container,x,y,width,height,velX,velY,targetX,targetY,bg,src){
		super(type,container,x,y,width,height,velX,velY,targetX,targetY,bg,src);
	}tick(){
		    this.x = this.x+this.velX;//계산용이기 때문에 px 안붙임
			this.y = this.y+this.velY;
		        if(this.x+this.width<0){	
            objectManager.removeObject(this);
		 }
		}
}