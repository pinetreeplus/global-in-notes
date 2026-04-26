# kakao html 리뷰

- [kakao html 리뷰](#kakao-html-리뷰)
  - [Abstract](#abstract)
  - [html-css 리뷰](#html-css-리뷰)
  - [스크립트와 event 리뷰](#스크립트와-event-리뷰)
  - [개선점](#개선점)

## Abstract

해당 코드는 카카오톡 레이아웃을 참고하여 사용자의 입력을 받아 자동응답을 하고 있습니다.  

## html-css 리뷰

`body`와 `.phone-container`에 전체 레이아웃에 적용될 폰트, 백그라운드 색상과 inner-box 레이아웃이 설정되어 있습니다. 전체적으로 outer display 타입은 `flex`로 적용하였고 하위 Element에 `display`가 따로 설정된 것이 없기에 그대로 적용되어 보입니다.

`.phone-container`의 경우 메시지가 표시되는 창으로 `flex`의 main axis가 수직방향 으로 설정되어 있습니다.

`.input-bar`의 `<div>`는 그 children으로 `<input>`과 `<button>` Element를 1개씩 포함하고 있고 사용자에게서 메시지를 입력 받을 수 있도록 하고 있습니다. 

`.left` `.right` `.bubbl`은 처음 document가 로드 되었을 떄에는 해당 클래스를 가진 Element가 없습니다. 이후 유저의 입력을 받고 새 Element가 추가 되는 방식입니다.

## 스크립트와 event 리뷰

`addMessage(text, side)` 의 경우 사용자 입력 및 스크립트에서 넘겨받은 `text` parameter를 기반으로 해당 텍스트를 `insertAdjacentHTML()`을 이용하여 `#chatbox` Element의 내의 마지막에 삽입하고 있습니다. 

`btn.addEventListner()`의 경우 `#send-btn`이 `click` Event를 fire할 시 input이 아무 내용 없을 경우 종료, 그 외의 경우 사용자의 메시지를 `addMessage()`를 사용하여 우측에 표기하고 `1000 ms` 후 `자동응답: `을 prefix하여 좌측에 `"addMessage()"`를 사용하여 자동응답합니다.

마지막으로 `keypress` Event를 감지중인 리스너의 경우 `Enter`키가 눌릴시 `btn.click()`를 실행하여 엔터시 `#send-btn`의 `click` Event를 실행합니다. 

## 개선점

현재 해당 코드는 `insertAdjacentHTML()`을 사용하여 사용자의 입력을 받고 있습니다. 이는 HTML을 Parsing하기에 XSS의 통로가 될 수 있으므로 그대로 되돌려 주기보다 입력받은 값을 안전하게 처리할 필요가 있습니다.