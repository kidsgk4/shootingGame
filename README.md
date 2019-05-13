# shootingGame


-주요 적용기술
<br>
- setTimeout() 을 이용한 GameLoop 구현 
<br>
- 모든 게임 객체들의 최상위 클래스인 GameObject 를 정의하여 tick(), render() 메서드를 재정의하도록 객체 설계 
<br>
-모든 게임 오프젝트의 등장, 소멸을 처리해주는 ObjectManager 클래스 정의 

<br>
<img src="https://postfiles.pstatic.net/MjAxOTA1MTNfMzMg/MDAxNTU3NzE1MTQzODEx.ON8r9DyxKTPsW9M7duA6IcTT-MWd8Q3dRM5coOFdpV8g.XBmQsSf11T49TaxURtp2849E2QwLmytzrfOU3aR4YE8g.PNG.kidsgk4/image.png?type=w580"/>
-모든 게임 오프젝트의 등장, 소멸을 처리해주는 ObjectManager 클래스 정의

<img src="https://postfiles.pstatic.net/MjAxOTA1MTRfNzEg/MDAxNTU3NzY1MzMyMjE2.L199Gcer7zx5OGsWw9H4pTAEGmuR-Yc2kgIhQ4WL2FIg.2gK-_LrFR4IVIF07tKxdip000D6XHQUChyO_eUJdr70g.PNG.kidsgk4/image.png?type=w580"/>
<br>
-1.등장된 총알 객체 와 적군 객체 충돌 시 ObjectManager 에 의해 소멸 처리 , 일정 범위 이상 벗어날 경우 적군,아이템,총알 모두 소멸 처리
<br>
-2.방향키로 조작 되는 캐릭터와 적군,아이템 충돌검사 처리 / 3단계 이미지 적용 전 적군 과 충돌처리 시 패배.
<br>
-3.아이템과 캐릭터 충돌시 아이템만 소멸.
<br>
-아이템 객체 획득 시 조건 활용 히어로 이미지 변신 ( 3단계 중 마지막 단계 도달 시 히어로와 적군의 충돌검사 무시 조건, 객체간 충돌 시 적군객체만 삭제)
<br>
<img src="https://postfiles.pstatic.net/MjAxOTA1MTRfMjE1/MDAxNTU3NzY1ODQ2Njgw.WXfIT4BUtITlCzBBmtDCYNMJ4SdmdAbpGSb6iCpEs1gg.UCy7Sij91znv7xCIWoVZ-XTZh4uiMEAI7RPDHk2m_3gg.PNG.kidsgk4/image.png?type=w580"/>
<br>
-1.아이템 일정 개수 획득시 이미지 전환<br>
-2.아이템 획득 시 카운터 증가
<p>
<br>
<img src="https://postfiles.pstatic.net/MjAxOTA1MTRfMjY1/MDAxNTU3NzY2MTMxNzcz.KqyFom-EFiZOOV-8e00XhFxRU-iAv6WPOw7eIMzE5bEg.e2NuptEovUvfUmBpJeo6egdd1GUghZ8hJXiXB938SIgg.PNG.kidsgk4/image.png?type=w580"/>
</p>
<br>
-1.아이템 일정 개수 추가 획득시 마지막 이미지 전환
<br>
-2.이 상황에선 히어로와 적군 충돌시 적군 객체만 소멸
<br>

<img src="https://postfiles.pstatic.net/MjAxOTA1MTNfNjAg/MDAxNTU3NzE4Nzg1MjE4.VZCwfqN_Gic8UM5fT1b71vahHbnUbTZ91lcrpzzBxdsg.vZ3letNdB--JjFF8OllRhD__v86IsaV-E-ZMlI4JR5Ug.PNG.kidsgk4/image.png?type=w580"/>
<br>
적군 배열 모두 소멸 시 보스 등장 
<br>
-보스에게 히어로의 총알 20회 충돌 시 보스 소멸
