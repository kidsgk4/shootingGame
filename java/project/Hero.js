class Hero extends GameObject{
	constructor(type,container,x,y,width,height,velX,velY,targetX,targetY,bg,src){
		super(type,container,x,y,width,height,velX,velY,targetX,targetY,bg,src);
		this.flag = false;
	}
	//오버라이드!!!
    //화면 밖으로 나가는 상황에 대한 판단은 부모 클래스의 tick()에 없다.따라서 현재 내 현실에 적용할 수 없으므로 부모의 tick을 나한테 맞게
    //커스터 마이징 해야한다...오버라이딩!!!
    tick(){
      if(this.x>0&&this.x<1400)
      {
         this.x=this.x+this.velX;
      }
      else if(this.x<=0&&this.velX>0)
      {
         this.x=this.x+this.velX;
      }
      else if(this.x >=1400 && this.velX<0)
      {
         this.x=this.x+this.velX;
      }
      if(this.y>0&&this.y<650)
      {
          this.y=this.y+this.velY;
      }
      else if(this.y<=0&&this.velY>0)
      {
         this.y=this.y+this.velY;
      }
      else if(this.y >=650 && this.velY<0)
      {
         this.y=this.y+this.velY;
      }

        //this.x 값을 증가시켜 나가다가, 적군과 충돌했다면 제거
       for(var i=0; i<objectManager.objectArray.length; i++){
		   var obj=objectManager.objectArray[i];
	   //obj의 정체가 적군인 경우에만 money 인 경우에만...
			if(this.div.name==0){
				if(obj.type=="MONEY"){
					if(collisionCheck(this,obj)){ //충돌했다면..
						objectManager.removeObject(obj);
						//objectManager.removeObject(this);
						score+=10;
						showScore();
						if(score==40){
							this.img.src="../res/e5.png";
						}
						else if(score==80){
							a=500;
							b=400;
							this.flag = true;
							console.log(this.flag);
							this.div.name=1;
							this.img.src = "../res/inzicaudi.png";
							this.div.style.width=a+"px";
							this.div.style.height=b+"px";
							this.img.style.width=a+"px";
							this.img.style.height=b+"px";
							if(obj.type=="ENEMY"){
								if(hitTest(this,obj,obj.x,obj.y)){ //충돌했다면..
									alert("적군 밟기");
								objectManager.removeObject(obj);
								}
							}
					}
				}
			}
		}else if(this.div.name==1){
			if(obj.type=="MONEY"){
					if(collisionCheck(this,obj)){ //충돌했다면..
						objectManager.removeObject(obj);
						//objectManager.removeObject(this);
						score+=10;
						showScore();
						
					
				 }
			}
			if(obj.type=="ENEMY"){
				if(collisionCheck(this,obj)){ //충돌했다면..
					//alert("적군 밟기");
				objectManager.removeObject(obj);
					}

				}
			}
	   }
	   if(!this.flag){
		for(var i=0; i<objectManager.objectArray.length; i++){
			var obj=objectManager.objectArray[i];
			if(obj.type=="ENEMY"){
				if(collisionCheck(this,obj)){
					//alert(obj);
					gameover();
				}
			}
		}
	   }
	   if(objectManager.objectArray.length==1){
			createBoss();
	}
		//적군을 무사히 피한경우,화면 밖으로 나가면 제거

    }
}