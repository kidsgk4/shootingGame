class Bullet extends GameObject{
    constructor(type,container,x,y,width,height,velX,velY,targetX,targetY,bg,src){
		super(type,container,x,y,width,height,velX,velY,targetX,targetY,bg,src);
		this.bossCounter = 0;
	}
    //오버라이드!!!
    //화면 밖으로 나가는 상황에 대한 판단은 부모 클래스의 tick()에 없다.따라서 현재 내 현실에 적용할 수 없으므로 부모의 tick을 나한테 맞게
    //커스터 마이징 해야한다...오버라이딩!!!
    tick(){
        this.x = this.x+this.velX;
        this.y = this.y+this.velY;

        //this.x 값을 증가시켜 나가다가, 적군과 충돌했다면 제거
       for(var i=0; i<objectManager.objectArray.length; i++){
		var obj=objectManager.objectArray[i];
	   //obj의 정체가 적군인 경우에만 ENEMY 인 경우에만...
		if(obj.type=="ENEMY"){
			if(collisionCheck(this,obj)){ //충돌했다면..
				objectManager.removeObject(obj);
				objectManager.removeObject(this);
				}
		}
		if(obj.type=="BOSS"){
			if(collisionCheck(this,obj)){ //충돌했다면..
				console.log("보스 만남");
				this.bossCounter++;
				stt+=this.bossCounter;
				//console.log(this.bossCounter);
				objectManager.removeObject(this);
				console.log(stt);
				
			    if(stt >=35){
					console.log("10대 맞음");
					objectManager.removeObject(obj);
					gameover();
				}
			}
		}
	}
		

	
		//적군을 무사히 피한경우,화면 밖으로 나가면 제거
        if(this.x+this.width>screen.width){
            objectManager.removeObject(this);
        }
			
	}
}