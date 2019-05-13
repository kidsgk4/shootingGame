/* 최상위 객체를 정의한다 !!! 
type:주인공 HERO
		총알 : BULLET
		적군 : ENEMY
*/
class GameObject{
    constructor(type,container,x,y,width,height,velX,velY,targetX,targetY,bg,src){
        this.type=type;
		this.container = container;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.velX = velX;
        this.velY = velY;
        this.targetX = targetX;
        this.targetY = targetY;
        this.bg = bg;
        this.src = src;
        this.a = 0.1; //혹시모를 중력 적용시 사용할 예정..

        this.div = document.createElement("div");
        this.img = document.createElement("img");
        this.div.style.position = "absolute";
        this.div.style.left = this.x+"px";
        this.div.style.top = this.y+"px";
        this.div.style.width = this.width+"px";
        this.div.style.height = this.height+"px";
        this.div.style.background = this.bg;
		this.div.name=0;
        //이미지관련 설정
        if(this.src !=""){//이미지가 있을때만
            this.img.src = this.src;
            this.img.style.width = this.width+"px";
            this.img.style.height = this.height+"px";
            this.div.appendChild(this.img);
        }
        this.container.appendChild(this.div);
    }
    //tick();//불완전한 메서드를 보유하게 되는 클래스를 추상클래스..

    //설령 부모가 그 행동을 정해놓을지라도 이 클래스를 상속받는 자식은 부모의 메서드를 무시할 수 있는데,,,이러한 메서드 재정의 기법을 override라고 한다..
    tick(){
        this.x = this.x+this.velX;//계산용이기 때문에 px 안붙임
        this.y = this.y+this.velY;
    }
    render(){
        this.div.style.left = this.x+"px";
        this.div.style.top = this.y+"px";
    }
}