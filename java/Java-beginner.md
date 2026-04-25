# Java Beginners

- [Java Beginners](#java-beginners)
  - [기초적인 구조](#기초적인-구조)
  - [연산자(operator)](#연산자operator)
    - [Arithmetic operator(수학 연산자)](#arithmetic-operator수학-연산자)
    - [Assignment Operator(할당 연산자)](#assignment-operator할당-연산자)
    - [Comparison Operator(비교 연산자)](#comparison-operator비교-연산자)
  - [Type](#type)
    - [Primitive Type](#primitive-type)
    - [Non-Primitive Type](#non-primitive-type)
  - [변수](#변수)
    - [변수의 생성](#변수의-생성)
  - [Array](#array)
  - [String](#string)
    - [주석(comment)](#주석comment)
  - [Control Statements](#control-statements)
    - [if statement](#if-statement)
    - [for statement](#for-statement)
    - [while statement](#while-statement)
    - [break과 continue](#break과-continue)
    - [Nested Loop](#nested-loop)
  - [기초적인 I/O(입출력)](#기초적인-io입출력)

## 기초적인 구조

자바를 실행하기 위해서는 `main()` 메서드가 있어야 합니다. IDE에서 `psvm`을 치고 자동완성한다면 다음과 같이 뜰 겁디나.

```java
public static void main(String[] args){
//내용
  System.out.println("Hello World");
}
```

어차피 다들 자동완성 하고 나중에 배우니 어렵게 생각 마시고 `main()`이라는거 안에 `{}` 사이 있는 내용만 실행된다 알고 계시면 됩니다. 
Java의 경우 Frontend에서 배웠던 HTML/CSS/JS와 달리 statement 뒤 세미콜론(`;`)이 필수입니다.

## 연산자(operator)

**값(value)과 값 사이에 작업**을 하기 위해서 연산자(operator)를 사용합니다.

### Arithmetic operator(수학 연산자)

- `+`: 더하기
- `-`: 빼기
- `*`: 곱셈
- `/`: 나누기(`int`형 사용시 소수부분 잘림)
- `%`: Modulus(나머지)
- `++`: value `1` 더하기
- `--`: value `1` 뺘기

```java
int x = 10;
int y = 3;

System.out.println(x * y); // 30
System.out.println(x / y); // 3

int z = 5;
++z;
System.out.println(z); // 6
--z;
System.out.println(z); // 5
```

### Assignment Operator(할당 연산자)

한 마디로 변수 value(값)를 우측 value와 연산해 변수에 할당(assign)하는 연산자입니다. 변수에 값 assign시 등에 `=`는 항상 쓰입니다.

- `=`: 우측 값을 할당
- `+=`: 우측값을 더한 만큼을 좌측에 할당
- `-=`: 우측값을 뺀 만큼을 좌측에 할당
- `*=`: 우측값을 곱한 만큼을 좌측에 할당
- `/=`: 우측값으로 나눈 만큼을 좌측에 할당(`int`는 소수부 버림)
- `%=`: 좌측갑을 우측값으로 나눈 나머지 만큼을 좌측에 할당

```java
int savings = 100; // saving에 100 assign
savings += 50; // savings에 50 추가
System.out.println("Total savings: " + savings);
```

### Comparison Operator(비교 연산자)

## Type

프로그래밍 언어에서는 숫자, 문자열, 리스트, 참/거짓 등 여러가지 형태(타입)의 데이터를 변수로 설정 할 수 있습니다. 하위 섹션은 Java에서 사용되는 Type의 종류입니다.

### Primitive Type

값을 저장하는 **가장 기초적인 타입**들입니다.

총 8가지로 **Numerical(숫자형)** 6종(정수형:`byte`,`short`,`integer`,`long`, 실수형:`float`,`double`()), **Non-Numerical** 2종(`char`, `boolean`)이 있습니다.

**TD;LR: 정수는 `int`, 실수는 `float`, 한 글자는 `char`, `true`/`false`는 `boolean`.**

**정수형**

- `byte`: 정수형으로 1 바이트(8비트)의 메모리를 가집니다. `-2^7` ~ `2^7-1`(`-128` ~ `127`)범위
- `short`: 정수형 2Bytes(16bits). `2^15` ~ `2^15-1`
- `integer`: 정수형 4Bytes(32bits). `2^31` ~ `2^31-1`
- `long`: 정수형 8Bytes(64bits). `-2^63` ~ `-2^63-1` 

**실수형**

- `float`: 실수형. 소숫점(decimal digits) 6~7자리
- `double`: 실수형 Double Precision. 소숫점(decimal digits) 15~16자리

**Non-Numerical**

- `char`: 하나의 문자나 ASCII 값을 저장합니다.
- `boolean`: `true`나 `false`를 값으로 가집니다. `if`, `for`,`while`문 등은 조건(condition)부가 `true`여야 합니다. 
  - e,g. `if(a>10)`은 `a=9`일 경우 `if(false)`로 실행 안 함.

참고: `unsigned`의 경우 양수(0포함), `signed`의 경우 음수까지 포함입니다. `signed`의 경우 메모리 비트 하나가 양수/음수 표현에 사용되어 한쪽 방향 범위가 절반입니다. e.g, 8바이트의 경우 `signed`는 `-128` ~ `127`, `unsigned`의 경우 `0` ~ `255`.

### Non-Primitive Type

**Primitive Type이 아닌 것**으로 `String`, `Class`, `Array` 등이 있습니다. Object를 참조(refer)하기에 Reference 타입이라고도 불립니다. `String`, `Array`, `Class`의 경우 별도로 자세히 다루겠습니다.

## 변수

**변수는 데이터를 저장하기 위한 컨테이너**입니다. Java는 변수의 선언시부터 타입을 엄격히 따지는 **Strongly Typed** 언어로 JavaScript럼 문자열과 숫자를 더해도 알아서 타입 변환 해주지 않습니다.

### 변수의 생성

JavaScript의 `var`(추가된게 있기는 합니다...), `let`, `const`(Java는 `final` 자체로 변수를 생성하지 않습니다.)와 달리 Java의 경우 `<Type명> 변수명`의 형식으로 변수를 선언(declare)합니다. 변수를 생성했다면 **`=`를 통해 값을 할당** 가능합니다(`==`는 동일한지 확인하는 operator입니다.).

```java
/// myNum이랑 이름의 int Type 변수의 선언
int myNum;

// 변수가 선언된 후 15를 assign
// int형으로 선언되었으므로 실수나 문자등을 줄 시 에러가 납니다.
myNum = 15;

// 선언과 할당 동시에!
int yourNum = 10;
```

## Array

**`Array`는 여러 값을 하나의 변수에 저장하기 위해 사용되는 타입입니다.** [좀 더 자세한 설명](https://www.geeksforgeeks.org/java/arrays-in-java/)

Non Primitive 타입의 일종이며 배열이라고도 합니다. **다른 타입 뒤 square bracket(`[]`)을 사용하며 선언(declare)합니다. Curly brace(`{}`) 안 comma로 구분된 리스트에 값이 들어갑니다. index는 `0`부터 시작입니다!** 5개 들어있다면 index는 0~4입니다.

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

## String

`String` 역시 Non Primitive 타입의 일종입니다. 한 글자만을 표현하는 `char`와 달리 문자열을 표현합니다.

### 주석(comment)

Java의 한 줄 주석(Comment)는 `//`, 여러 줄 주석(Multi-Line Comment)는 `/*`와 `*/` 사이의 내용입니다.

```java
/* 세 줄
짜리
 주석*/

// 한줄 주석
```

## Control Statements

프로그래밍 언어에서는 참/거짓이나 지정된 조건동안 반복되는 control flow를 지정할 수 있습니다. 

`if` 문(statement)는 **조건문 (conditional branch)**이며 `for`과 `while`은 **반복문 (iterative structure)**이며 각각의 회차를 **iteration**이라 합니다. `for`과 `while`등은 간단히 **loop**라고도 합니다.

### if statement

`if (condition){}`의 형태를 하고 있습니다. `condition`은 `true`/`false` 형태로 표현될 수 있어야 하며 `true`일 경우 코드가 실행됩니다. `else if`는 이전이 모두 `false`일 때 대조하며 `else`는 이전 flow가 모두 `false`일 경우 처리할 내용입니다.

```java
int weather = 2; // 1 = raining, 2 = sunny, 3 = cloudy

if (weather == 1) {
  System.out.println("Bring an umbrella.");
} else if (weather == 2) {
  System.out.println("Wear sunglasses.");
} else {
  System.out.println("Just go outside normally.");
}
```

### for statement

`for(init;condition;exec){}`형식의 반복문입니다 `init`은 초기실행코드, `exec`는 매 루프 실행코드이며 `condition`이 `true`일 동안 실행됩니다.

```java
for (int i = 0; i < 5; i++) {
  System.out.println(i);
}
```

### while statement

`while(condition){}`의 `condition`이 참일 동안 반복합니다. `while(true)`의 경우 따로 종료 않는 한 무한 반복합니다.

```java
int i = 0;
while (i < 5) {
  System.out.println(i);
  i++;
}
```

### break과 continue

**루프문에서 벗어날 때 `break`를 사용합니다.**
**루프 1개를 건너뛸때 `continue`를 사용합니다.**

```java
for (int i = 0; i < 6; i++) {
  if (i == 2) {
    continue;
  }
  if (i == 4) {
    break;
  }
  System.out.println(i);
}
```

위 예제에서 `i==2`인 경우 `2`를 프린트하지 않고(`for`의 `i==2` iteration의 나머지를 스킵) `i==3`으로 넘어가며, `i==4`인 경우 `for` loop 자체에서 벗어납니다. 5부터 실행 x

### Nested Loop

Nested Loop는 **여러 루프문이 중첩**되어 있는 것입니다 (e.g`for` 문 안에서 `for`문이 돌아감).

## 기초적인 I/O(입출력)

