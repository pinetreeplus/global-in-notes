# java

- [java](#java)
    - [다차원 Array](#다차원-array)
    - [Array 조작](#array-조작)
  - [Control Flow Statements](#control-flow-statements)
    - [If](#if)
    - [for](#for)
    - [while](#while)
    - [break/continue](#breakcontinue)
  - [OOP와 Class](#oop와-class)

### 다차원 Array
Sd

### Array 조작

## Control Flow Statements
프로그래밍 언어에서는 참/거짓이나 지정된 조건동안 반복되는 control flow를 지정할 수 있습니다. Java에는 이에 다음과 같은 statement가 사용됩니다:

### If
TL;DR: If (condition){}의 형태를 하고 있습니다. condition은 true/false 형태로 표현될 수 있어야 하며 true일 경우 코드가 실행됩니다. else if는 이전이 모두 false일 때 대조하며 else는 이전 flow가 모두 false일 경우 처리할 내용입니다.

int weather = 2; // 1 = raining, 2 = sunny, 3 = cloudy

if (weather == 1) {
  System.out.println("Bring an umbrella.");
} else if (weather == 2) {
  System.out.println("Wear sunglasses.");
} else {
  System.out.println("Just go outside normally.");
}

### for
for(init;condition;exec)형식의 반복문입니다.
init은 초기실행코드 (일반적으로 int i=0;등으로 초기화), exec는 매 루프 실행코드 (일반적으로 증가;i++)이며 condition이 true일 동안 실행됩니다.(일반적으로 i<특정값).

for (int i = 0; i < 5; i++) {
  System.out.println(i);
}

### while
while(condition)의 condition이 참일 동안 반복합니다.

while(true)의 경우 따로 종료 않는 한 무한 반복합니다.

int i = 0;
while (i < 5) {
  System.out.println(i);
  i++;
}

### break/continue
루프문에서 벗어날 때 break를 사용합니다. 루프 1개를 건너뛸때 continue를 사용합니다.

for (int i = 0; i < 6; i++) {
  if (i == 2) {
    continue;
  }
  if (i == 4) {
    break;
  }
  System.out.println(i);
}

위 예제에서 i==2인 경우 2를 프린트하지 않고(for i==2의 나머지를 스킵) i==3으로 넘어가며, i==4인 경우 for loop 자체에서 벗어납니다. 5부터 실행 x

## OOP와 Class
OOP의 경우 필요한 개념만 짚고 개발에 필요한 내용으로 넘어가겠습니다.

Nested Loop:

