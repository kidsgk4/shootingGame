//자바스크립트에게 랜덤한 값을 요청한다!!
//내장 객체: Array, Math, Date ...
//앞으로 객체를 배우게 되면, 내장 객체를 사용할 예정, 자바스크립트에서는 개발자가 개발시 사용 빈도가 높은 기능들을 이미 잘 만들어서 제공해놓은 객체를 지원하는데, 이들을 가르켜 내장객체라 한다!!

/*------------------------------------------------------------------------------ 
   사용법 : getRandom 호출시 당신이 원하는 수를 넣으세요
   ex) getRandom(5)를 넣으면 0~4를 랜덤으로 반환받습니다.
--------------------------------------------------------------------------------*/
function getRandom(num){
   var r = Math.random();   
   var n = parseInt(r*num); // 숫자가 4라 적혀잇으면 3.~~까지만 출력parseInt를 사용해서 소숫점들을 버리고 하드코딩을 방지하기위해 배열의 길이를 x 
   return n; //함수 중 return에 값을 명시하여 호출한 자가 그 값을 반환받도록 처리하는 함수를 return값이 있는 함수, 반환값이 있는 함수
}



//ex) 2,7 --> 2~~6까지 나온다
// getRandomByRange(2,7);
function getRandomByRange(min,max){
    return parseInt(Math.random()*(max-min))+min;
}

/*------------------------------------------------------------------------------------------ 
시간 문자열 처리 함수
호출자는 아래의 사항을 숙지하고 쓰세요...

->인수로 넘긴 n이 10보다 작으면 앞에 "0" 문자를 조합해서 결과를 반환해주자!!
--------------------------------------------------------------------------------------------*/
function getTimeString(n){
   if(n<10){
      n = "0" + n;
   }
   return n;
}
/*------------------------------------------------------------------------------------------ 
사전에 충돌을 판단
--------------------------------------------------------------------------------------------*/
/* ------------------------------------------------ ----
매개 변수 1 : 나체 
매개 변수 2 : 상대방 객체
매개 변수 3 : 예측 된 x 좌표
매개 변수 4 : 예측 된 y 좌표
-------------------------------------------------- - */
function hitTest(me, target , nextX , nextY) {
	//두물체간 충돌 여부 판단 
	nextX=parseInt(nextX);
	nextY=parseInt(nextY);
	//var result1=(me_x+nextX >= target_x) && (me_x+nextX <= (target_x+target_width));//나의 x좌표위치가 타겟의 x range 내에 있는지 판단 
	//var result2=((me_x+me_width+nextX) >= target_x) && ((me_x+me_width+nextX) <= (target_x+target_width));  //나의 가로폭이 타겟의 가로폭 내에 있는지 판단
	//var result3=((me_y+nextY) >= target_y) && ((me_y+nextY) <= (target_y+target_height));//나의 y좌표위치가 타겟의 세로폭 내에 있는지 판단
	//var result4=((me_y+me_height+nextY) >= target_y) && ((me_y+me_height+nextY) <= (target_y+target_height));//나의 y폭이 타겟의 세로폭 내에 있는지 판단
	var result=((me.x+me.width >=target.x) && (me.x <=target.x+target.width) ) &&  ( (me.y+me.height >= target.y) && (me.y<=target.y+target.height) )
	return result;
}

/*------------------------------------------------------------------------------------------ 
인수1 : 나 객체
인수2 : 상대방 객체 
사후에 충돌을 판단
--------------------------------------------------------------------------------------------*/
function collisionCheck(me, target) {
   //나의 너비가 상대의 범위에 있는지 체크
   var horizon1=me.x+me.width >= target.x; //좌측에서 우측으로 접근시
   var horizon2=me.x <= target.x+target.width; //우측에서 좌측으로 접근시
   //나의 높이가 상대의 범위에 있는지 체크
   var vertical1=(me.y+me.height >= target.y); //위에서 아래로 접근시
   var vertical2=(me.y <= target.y+target.height); //아래에서 위로 접근시
   
   return (horizon1 && horizon2) && (vertical1 && vertical2);
}


/*------------------------------------------------------------------------------------------ 
원하는 달이 몇일까지 있는지 구하는 함수!!
ex) 사용자가 알고싶은 달이 2018년 5월일 경우 
     getLastDateOfMonth(2018,4);
--------------------------------------------------------------------------------------------*/
function getLastDateOfMonth(year,month){
   var d = new Date();
   //조작하기
   d.setFullYear(year);
   d.setMonth(month+1); //자바스크립트에서는 마지막날을 구할 수 없기 때문에 정보를 다음달로 넘어간 후 0일을 구한다..
   d.setDate(0);
   //함수 호출자에게 원하는 데이터를 반환 시켜준다 !!
   return d.getDate();
}

/*------------------------------------------------------------------------------------------ 
해당 월의 시작요일 구하기
ex) Date 객체를 5월로 세팅하고, 날짜는 1일로 세팅한다
     요일을 물어본다..
    주의) 호출시 5월이 궁금하다면 숫자는 4로 넘긴다!!
--------------------------------------------------------------------------------------------*/

function getStartDayOfMonth(year,month){
   var d = new Date(); //현재 날짜이므로 조작이 필요하다.
   d.setFullYear(year);
   d.setMonth(month);
   d.setDate(1); //그 월의 시작일로 조작 1

   return d.getDay();
}

/*------------------------------------------------------------------------------------------ 
어떤 대상이든, 방향(left,right,up,down)만 넘겨주면 알아서 크기를 게산해주는 함수
센서가 의존할 주인 객체의 크기정보 : x,y,width,height
ex) getSensorSize("left",주인의 정보);
--------------------------------------------------------------------------------------------*/
function getSensorSize(side , x, y, width, height ){
   var border=3; //막대들의 두께
   var colTypePadding=2//세로형 막대 들여쓰기 퍼센트 %
   var rowTypePadding=2//가로형 막대 들여쓰기 퍼센트 %
   var rowTypeWidth=96 //가로형 막대 너비 퍼센트 %
   var json={};

   json["type"]=side;
   
   //좌측일 경우 
   
   if(side =="LEFT"){ //세로형
      json["x"]=x-1; //2픽셀 바깥으로
      json["y"]=y+(height*(colTypePadding/100)); //2% 밑으로
      json["width"]=border;
      json["height"]=height*(96/100); //96%
   }else if(side =="RIGHT"){//세로형
      json["x"]=x+width;
      json["y"]=y+(height*(colTypePadding/100)); //2% 밑으로
      json["width"]=border;
      json["height"]=height*(96/100); //96%
   }else if(side =="UP"){//가로형
      json["x"]=x+(width*(rowTypePadding/100)); //들여쓰기 정도
      json["y"]=y-border; //위쪽으로 2픽셀
      json["width"]=width*(rowTypeWidth/100); 
      json["height"]=border;
   }else if(side =="DOWN"){//가로형
      json["x"]=x+(width*(rowTypePadding/100)); //들여쓰기 정도
      json["y"]=(y+height); //아래로 2픽셀
      json["width"]=width*(rowTypeWidth/100); 
      json["height"]=border;
   }
      //console.log(json);
      return json;
   }