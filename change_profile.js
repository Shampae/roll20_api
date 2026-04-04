// https://github.com/Shampae/roll20_api/blob/main/change_profile.js

//명령어 사용법: !pf -저널명 -표정명
//시작 전 준비: 이미지 변수화, 변수 적용하는 case문 작성
//프로필에 사용할 이미지 전부 변수로 저장

/*
리스트 선택 매크로

!pf -저널명
-?{선택|
선택지,표정명|
기본,기본|
...}

*/

const charactor = {
    "표정명": "롤20서버 업로드한 프사 링크넣고 중간부분 /thumb.png? 로 수정"
}

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
                    /* 캐릭터별로 생성
                    case "저널명":
                        cha[0].set('avatar', 캐릭터 변수명[index]);
                        sendChat("", "/desc <div style='display: block; height: 0px; margin: -35px 0 -15px 0; padding: 0; font-size: 0px; line-height: 0px; overflow: hidden; visibility: hidden;'>.</div>");
                        break;
                    case ""
                    */
                    
                    // 예시코드
                    case "저널명" :
                        cha[0].set('avatar', charactor[index]);
                        sendChat("", "/desc <div style='display: block; height: 0px; margin: -35px 0 -15px 0; padding: 0; font-size: 0px; line-height: 0px; overflow: hidden; visibility: hidden;'>.</div>");
                        break;
                        
                }
            } catch (err) {
                sendChat("ERROR", "/w gm 오류 발생: " + err.message);
            }
        }
    }
});
});
