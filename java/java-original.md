# java

- [java](#java)
  - [타입](#타입)
    - [Primitive Type: 총 8가지](#primitive-type-총-8가지)
    - [Non-Primitive Type: 나머지 타입](#non-primitive-type-나머지-타입)
  - [Array](#array)
    - [다차원 Array](#다차원-array)
    - [Array 조작](#array-조작)
  - [Control Flow Statements](#control-flow-statements)
    - [If](#if)
    - [for](#for)
    - [while](#while)
    - [break/continue](#breakcontinue)
  - [OOP와 Class](#oop와-class)

## 타입
프로그래밍 언어에서는 숫자, 문자열, 리스트, 참/거짓 등 여러가지 형태(타입)의 데이터를 변수로 설정 할 수 있습니다.  아래는 Java에서 사용되는 종류입니다.

###  Primitive Type: 총 8가지 
값을 저장하는 가장 기초적인 타입들입니다. 크게 Numerical(숫자형)과 Non-numerical(숫자형x)로 나뉩니다.
TL;DR: 보통 int(정수), float(실수)를 많이 사용합니다. Boolean의 true, false를 가지고 char의 경우 문자 한 개를 저장합니다.

자세한 설명: 1byte=8bit=2의 8제곱=256개입니다. signed인 경우 음수도 포함하고 unsigned인 경우 양수만이라 생각하면 간단합니다. signed의 경우 bit의 -2^(bit수-1)~2^(bit수-1)-1 의 범위를 가집니다. 일반적인 경우 signed보다 unsigned의 범위가 한쪽 방향이면 2배입니다. e.g) 8 bit의 경우 signed는 -2^7 ~ 2^7-1, unsigned의 경우 0 ~ 2^8-1

1. Numerical: 정수(integer)와 실수(floating point number)로 나뉩니다.
  1. byte: 정수형 1바이트(8bit). (-2^7 ~ 2^7-1)-128 ~ 127 범위
  2. short: 정수형 2바이트(16bit). -2^15 ~ 2^15-1
  3. int: 정수형 4바이트(2^32비트). -2^31 ~ 2^31-1
  4. long: 정수형 8바이트(2^64비트). -2^63 ~ -2^63-1
  5. float: 실수형. 소숫점(decimal digits) 6~7자리
  6. double: 실수형. Double precision. 소숫점(decimal digits) 15~16자리
2. Non-Numerical:
   1.  boolean: true false를 값으로 가집니다. if, while문 등은 조건부가 true여야 합니다. (e g) if(a>10)은 a=9일 경우 if(false)로 실행 안 함.
   2.  char: 하나의 문자나 ASCII 값을 저장합니다.

### Non-Primitive Type: 나머지 타입
Primitive 타입 외의 전부이며 Object를 참조(refer)하기에 Reference 타입이라고도 불립니다. String(문자열)을 제외하고는 개발자가 만드는 것이며 Primitive 타입과는 달리 null 값을 가질 수 있습니다. Array, Class의 경우 Non-Primitive 타입이지만 타섹션에서 따로 자세히 다루겠습니다 

## Array
[좀 더 자세한 설명](https://www.geeksforgeeks.org/java/arrays-in-java/)

Non Primitive 타입의 일종이며 배열이라고도 합니다. **여러 값을 하나의 변수에 저장하기 위해 사용되며 다른 타입 뒤 square bracket, []을 사용하며 선언(declare)합니다. Curly brace, {} 안 comma로 구분된 리스트에 값이 들어갑니다. index는 0부터 시작입니다!** 5개 들어있다면 index는 0~4입니다.

```java
// declaration과 동시에 assignment 진행
int[] myNum = {10, 20, 30, 40};

// declaration과 assignment 따로
String[] cars;
String[] cars = new String[]{"Volvo", "BMW", "Ford", "Mazda"};

// declaration, 메모리 공간(String 3개) 할당, assignment 다 따로
String[] cars;
String[] cars = new String[3];

cars[0] = "Volvo";
cars[1] = "Volkawagen"; 
cars[2] = "Hyundai"; 
```
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

