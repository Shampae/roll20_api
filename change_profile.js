

//명령어 사용법: !pf -시트상의 캐릭터 이름 -표정1
//예시: !pf -얀 -기본
//시작 전 준비: 캐릭터별 이미지변수생성, 코드삽입

// !!! 주석에 # 처리 해둔 부분을 GM이 직접 수정해야 합니다 !!!
//예시변수들은 지워도 무관합니다. 주석처리 되어있기 때문에 그대로 두어도 영향을 끼치진 않습니다.



//프로필에 사용할 이미지 전부 변수로 저장. 캐릭터 별로 전부 생성해 주세요
//만약 동작하지 않는다면, 링크의 max.png? 부분을 thumb.png? 로 변경해 주세요
const 캐릭터변수명 = {
    "표정1": "링크",
    "표정2": "링크",
    "표정3": "링크"
}

//예시코드
/*const yann = {
    "기본": "https://files.d20.io/images/473767125/hFPejpqL--i6N3RneFAX3g/thumb.png?1769791538",
    "웃음": "https://files.d20.io/images/476616935/GJUYszzrK5gE0_aA3Kd8Qw/thumb.png?1771599228"
}*/

on("chat:message", function(msg) {
    if (msg.type == "api") {
        if (msg.content.indexOf("!pf") == 0) {
            try {
                let split = msg.content.split(' -');
                if (split.length < 3) {
                    sendChat("ERROR", "/w GM 형식오류");
                    return;
                }
                let cha = findObjs({name:split[1], type:'character'}); // 캐릭터 찾음
                let index = split[2]; // key가져옴
                if (cha.length < 1) {
                    sendChat("ERROR", "/w GM 이름오류");
                    return;
                }
                
                let name = split[1];
                switch (name) {
                    // 아래의 코드를 적용할 전원으로 만들어 주세요
                    case "시트상의 캐릭터 이름":
                        cha[0].set('avatar', #캐릭터변수명[index]);
                        sendChat("", "/desc <div style='display: block; height: 0px; margin: -35px 0 -15px 0; padding: 0; font-size: 0px; line-height: 0px; overflow: hidden; visibility: hidden;'>.</div>");
                        break;
                    case "시트상의 캐릭터 이름(두번째 캐릭터)":
                        cha[0].set('avatar', #캐릭터변수명(두번째 캐릭터)[index]);
                        sendChat("", "/desc <div style='display: block; height: 0px; margin: -35px 0 -15px 0; padding: 0; font-size: 0px; line-height: 0px; overflow: hidden; visibility: hidden;'>.</div>");
                        break;
                    
                    // 예시코드
                    /*case "얀" :
                        cha[0].set('avatar', yann[index]);
                        sendChat("", "/desc <div style='display: block; height: 0px; margin: -35px 0 -15px 0; padding: 0; font-size: 0px; line-height: 0px; overflow: hidden; visibility: hidden;'>.</div>");
                        break;
                    */
                }
            } catch (err) {
                sendChat("ERROR", "/w gm 오류 발생: " + err.message);
            }
            
        }
    }
});
