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

<img src="https://postfiles.pstatic.net/MjAxOTA1MTNfMTg5/MDAxNTU3NzE1MTYzNzEw.f4yc6WnXZqxMfjTxVo4SkERP5MWrkGj1c528g8N7Oywg.DQQgWA0DAOA7AWgNuAEhPumCCBPb5TRfxkEfl5_a0OQg.PNG.kidsgk4/image.png?type=w580"/>
-방향키 조작 제어 게임
-오브젝트 매니저 총알 객체 구현한 슈팅게임
-적군과 히어로의 총알 충돌검사  - 충돌 시 배열에 담은 적군 객체 삭제
-아이템 객체 획득 시 조건 활용 히어로 이미지 변신 ( 3단계 중 마지막 단계 도달 시 히어로와 적군의 충돌검사 무시 적군객체만 삭제 전 단계까지는 충돌 시
게임 over)

<img src="https://postfiles.pstatic.net/MjAxOTA1MTNfMTM4/MDAxNTU3NzE1MjgxNDY2.Uph0ErvD1zrAyqtqdu8gBmniFjhKvk9NFtpC_knVuo8g.dpozsRLu8qcu3vWxGv5m_3ivaVFQMWxRQYwYNIHJ5Jsg.PNG.kidsgk4/image.png?type=w580"/>

<img src="https://postfiles.pstatic.net/MjAxOTA1MTNfMjQ5/MDAxNTU3NzE1NDE4Njky.CIq2tabLldD5cTemBHD7U6oWs0HpooQ1OqEhiqya2Twg.qQITBTWSpUcO5xaMAfjCrSqIUibhN_uijApgzMwcw_wg.PNG.kidsgk4/image.png?type=w580"/>

-아이템 일정 개수 획득시 이미지 전환

<img src="https://postfiles.pstatic.net/MjAxOTA1MTNfMTYw/MDAxNTU3NzE1NDk4NzMw.6UMJlKi1LKUJmyiWYLIXgFQC3T9rayHy-FVUktKbY9sg.fCmSfoRCUj9hY4YAD0uchUH0si7j865L9op0cofIvE0g.PNG.kidsgk4/image.png?type=w580"/>

<img src="https://postfiles.pstatic.net/MjAxOTA1MTNfNjAg/MDAxNTU3NzE4Nzg1MjE4.VZCwfqN_Gic8UM5fT1b71vahHbnUbTZ91lcrpzzBxdsg.vZ3letNdB--JjFF8OllRhD__v86IsaV-E-ZMlI4JR5Ug.PNG.kidsgk4/image.png?type=w580"/>


적군 배열 모두 삭제 시 보스 등장 
-보스에게 히어로의 총알 20회 충돌 시 보스 


