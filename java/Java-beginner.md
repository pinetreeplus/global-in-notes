# Java Beginners

- [Java Beginners](#java-beginners)
  - [기초적인 구조](#기초적인-구조)
  - [연산자(operator)](#연산자operator)
    - [Arithmetic operator(수학 연산자)](#arithmetic-operator수학-연산자)
    - [Assignment Operator(할당 연산자)](#assignment-operator할당-연산자)
    - [Comparison Operator(비교 연산자)](#comparison-operator비교-연산자)
    - [Logical Operator (논리 연산자)](#logical-operator-논리-연산자)
  - [Type](#type)
    - [Primitive Type](#primitive-type)
    - [Non-Primitive Type](#non-primitive-type)
  - [변수](#변수)
  - [Array](#array)
  - [String](#string)
    - [R(Read)](#rread)
    - [U(Update)](#uupdate)
  - [String 연결하기](#string-연결하기)
    - [기타 String methods](#기타-string-methods)
    - [주석(comment)](#주석comment)
  - [Control Statements](#control-statements)
    - [if statement](#if-statement)
    - [for statement](#for-statement)
    - [while statement](#while-statement)
    - [break과 continue](#break과-continue)
    - [switch statement](#switch-statement)
    - [Nested Loop](#nested-loop)
  - [Method](#method)

## 기초적인 구조

자바를 실행하기 위해서는 `main()` 메서드가 있어야 합니다. IDE에서 `psvm`을 치고 자동완성한다면 다음과 같이 뜰 겁니다.

```java
public class Main{
  public static void main(String[] args){
    //내용
    System.out.println("Hello World");
  }
}

```

어차피 자동완성되고 나중에 배우니 어렵게 생각 마시고 `main()`이라는거 안에 `{}` 사이 있는 내용만 실행된다 알고 계시면 됩니다. 

`main()`은 `Class` 안에 있어야 하며 파일명 역시 Class 이름과 같아야 합니다(확장자의 경우 `.java`). Java의 경우 Frontend에서 배웠던 HTML/CSS/JS와 달리 statement 뒤 세미콜론(`;`)이 필수입니다.

터미널에 내용을 출력하는 부분은 `System.out.println("Hello World");`로 `System.out` 안에 `println()`이라는 출력을 하는 메서드가 있는 것입니다.

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
int x = 20;
int y = 6;

System.out.println(x * y); // 120
System.out.println(x / y); // 3

int z = 10;
++z;
System.out.println(z); // 11
--z;
System.out.println(z); // 10
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
int gold = 10; // gold에 10 assign
gold += 5; // gold에 5 추가
System.out.println("획득한 gold: " + gold);
```

### Comparison Operator(비교 연산자)

**두 value를 비교**할 때 쓰입니다(`if()`의 condition부 등). `return`(반환)하는 값은 `true`, `false`입니다.

JavaScript와 달리 다른 Type을 비교할 수 없습니다. JS의 `===`, `>==` 등이 default라 보시면 됩니다.

- `==`: 양측의 값이 같다 
- `!=`: 같지 않다
- `>`: 크다
- `<`: 작다
- `>=`: 이상
- `<=`: 이하

```java
int age = 10;

System.out.println(age >= 10); // true
System.out.println(age < 10);  // false
```

### Logical Operator (논리 연산자)

여러 조건을 충족하는지 확인 하기 위해 사용할 연산자입니다(e.g, 얘는 10살 넘고 한국에 사나?).

3개가 있으며 `AND`, `OR`, `NOT`에 해당합니다. `return`(반환)하는 값은 `true`, `false`입니다.

- `&&`: 논리 `AND`
- `||`: 논리 `OR`
- `!`: 논리 `NOT`

논리게이트에 익숙하지 않으시면:

- A `AND` B 는 양측이 모두 참이면 `true`, 그 외 `false`
- A `OR` B 는 양측 중 하나라도 참이면 `true`, 모두 거짓일 때만 `false`
- `NOT` A는 A가 `true`였을 시 `false`, `false` 였을 시 `true`가 됨

```java
boolean isLoggedIn = true;
boolean isAdmin = false;

// 로그인 돼 있으면서 Admin이 아니면 Regular User(둘 다 충족해야)
System.out.println("일반 유저: " + (isLoggedIn && !isAdmin));
// 로그인 돼 있거나 Admin이 아니면 Access 있음.(둘 중 하나라도 충족 시)
System.out.println("권한 있음: " + (isLoggedIn || isAdmin));
// 로그인이 안 되어 있을 시. isLoggedIn의 반대를 출력 합니다.
System.out.println("로그인 안 됨: " + (!isLoggedIn));
```

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

참고: `unsigned`의 경우 양수(0포함), `signed`의 경우 음수까지 포함입니다. `signed`의 경우 메모리 비트 하나가 양수/음수 표현에 사용되어 한쪽 방향 범위가 절반입니다. e.g, 8비트의 경우 `signed`는 `-128` ~ `127`, `unsigned`의 경우 `0` ~ `255`.

### Non-Primitive Type

**Primitive Type이 아닌 것**으로 `String`, `Class`, `Array` 등이 있습니다. Object를 참조(refer)하기에 Reference 타입이라고도 불립니다. `String`, `Array`, `Class`의 경우 별도로 자세히 다루겠습니다.

## 변수

**변수는 데이터를 저장하기 위한 컨테이너**입니다. Java는 변수의 선언시부터 타입을 엄격히 따지는 **Strongly Typed** 언어로 JavaScript럼 문자열과 숫자를 더해도 알아서 타입 변환 해주지 않습니다.

JavaScript의 `var`(추가된게 있기는 합니다...), `let`, `const`(Java는 `final` 자체로 변수를 생성하지 않습니다.)와 달리 Java의 경우 `<Type명> 변수명`의 형식으로 변수를 선언(declare)합니다. 변수를 생성했다면 **`=`를 통해 값을 할당** 가능합니다(`==`는 동일한지 확인하는 operator입니다.).

```java
/// myNum이랑 이름의 int Type 변수의 선언
int myNum;

// 변수가 선언된 후 15를 assign
// int형으로 선언되었으므로 실수나 문자등을 줄 시 에러가 납니다.
myNum = 1;

// 선언과 할당 동시에!
int anotherNum = 10;
```

## Array

**`Array`는 여러 값을 하나의 변수에 저장하기 위해 사용되는 타입입니다.**

Non Primitive 타입의 일종이며 배열이라고도 합니다. **다른 타입 뒤 square bracket(`[]`)을 사용하며 선언(declare)합니다. Curly brace(`{}`) 안 comma로 구분된 리스트에 값이 들어갑니다. index는 `0`부터 시작입니다!** 5개 들어있다면 index는 0~4입니다.

`<Array-이름>[index]`의 형태로 해당 Array의 `index`번째 value에 접근 가능합니다.

```java
// declaration과 동시에 assignment 진행
int[] testNum = {1, 2, 3};

// declaration과 assignment 따로
String[] cars;
cars = new String[]{"Tess", "Landlover", "Aki"};
```

``` java
// declaration, 메모리 공간(String 3개) 할당, assignment 다 따로
String[] cars;
cars = new String[3];

// 0번은 "Volvo"
cars[0] = "Tess";
// 1번은 "Volkawagen"
cars[1] = "Landlover"; 
// 2번은 "Hyundai"
cars[2] = "Aki"; 

// cars Array의 1번 index 출력, Volkswagen
System.out.println(cars[1]);
```

## String

`String` 역시 Non Primitive 타입의 일종입니다. 한 글자만을 표현하는 `char`와 달리 문자열을 표현합니다. `String`은 사실 `Object`이며 사용할 수 있는 다양한 `method`가 있습니다.

String을 만들기 위해서는 일반 변수 선언처럼 한 후 `"`으로 감싸주면 됩니다. `'`는 `char`에서만 사용 가능합니다.

```java
String greeting = "안녕!";
```

`length()`로 String의 길이를 가져올 수 있으며 `+` 연산자를 `String` 사이에 사용하여 연결 할 수 있습니다.

```java
// 길이
String txt = "TEXTLENGTH";
System.out.println("txt의 길이는: " + txt.length());

// 이름 합치기
String firstName = "도날드";
String lastName = "마쿠";
System.out.println(firstName + " " + lastName);
```

### R(Read)

- `length()`: `String`의 글자 수(공백 포함) return
```java
String txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
System.out.println("txt의 길이는: " + txt.length());
```
- `indexOf()`: 특정 문자열의 시작 index를 return 합니다. 첫 번째 occurence만입니다.
```java
String txt = "Please locate where 'locate' occurs!";
System.out.println(txt.indexOf("locate")); // Outputs 7
```

- `charAt()`: 특정 index의 문자를 return 합니다.
```java
String txt = "Hello";
System.out.println(txt.charAt(0));  // H
```

- `subString()`:주어진 index사이의 문자열을 return합니다. 2번째 parameter는 end 이후 부분으로 option이며 지정 안 할시 끝까지입니다.
```java
String myStr = "Hello, World!";
System.out.println(myStr.substring(7, 12));// 7~11(12번째 전까지) index의 substring. World 출력
```

### U(Update)

사실 업데이트가 아니라 새 `Object`를 만드는 겁니다. `String` Object 자체는 Immutable 합니다.

- `String` 바꾸기: 새 값을 `=`로 할당하면 됩니다.

```java
String greeting = "Hello";
greeting="Bye";
```

- `replace()`: 문자열을 일괄 변경합니다.
```java
String myStr = "Hello";
System.out.println(myStr.replace('l', 'p'));// "Heppo"가 됨
```

- `toUpperCase()`/`toLowerCase()`: 대문자로/소문자로.

- `trim()`은 앞 뒤 공백을 지웁니다.
```java
String txt = "   Hello World   ";
System.out.println(txt.trim()); //Hellow World 출력
```

## String 연결하기

`String` 사이 `+` 연산자나 `concat()`를 사용하여 연결할 수 있으며 이를 **concatenation**이라 합니다.

```java
String firstName = "John";
String lastName = "Doe";
System.out.println(firstName + " " + lastName);
```

```java
String a = "Java ";
String b = "is ";
String c = "fun!";
String result = a.concat(b).concat(c);
System.out.println(result);
```

또한 `String.format()`을 사용하여 `String` 외에도 `,`로 구분된 복수의 argument를 받을 수 있습니다.

```java
String name = "HAL-9001"
int yearOfBirth = 2001;

// %s는 String, %f는 Float, %d는 Integer를 받습니다.
System.out.println(String.format("안녕하세요 전 %s이며 %d", name, yearOfBirth));
```

### 기타 String methods

- `equalsIgnoreCase()`: 대소문자를 무시합니다.
- `euals()`: 두 문자열을 비교합니다.
```java
String txt1 = "Hello";
String txt2 = "Hello";

String txt3 = "Greetings";
String txt4 = "Great things";

System.out.println(txt1.equals(txt2));  // true
System.out.println(txt3.equals(txt4));  // false
```

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
int magica = 2;

if (magica == 2) {
  System.out.println("대마법사");
} else if (magica == 1) {
  System.out.println("마법사");
} else {
  System.out.println("머글");
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

만약 condition과 무관하게 1회 실행 후 `while()`문을 돌리고 싶다면 `do{}`를 사용합니다. 그 외에는 그냥 `while`에 들어갈 반복문 block이 `do{}` 안에 있다 보면 됩니다.

```java
int i = 5;
// 0 프린트 후 ++;
do {
  System.out.println(i);
  i++;
} // i==6 상태로 while문 시행.
while (i < 4);
```

위 예제에서 원래라면 `i==5`이므로 `while` loop가 한 번도 돌지 않을겁니다. 하지만 `do` 안에 있으므로 `while `의 condition과 상관 없이`5`를 한 번은 출력할 것입니다.

### break과 continue

**루프문에서 벗어날 때 `break`를 사용합니다.**
**루프 1개를 건너뛸때 `continue`를 사용합니다.**

```java
for (int i = 0; i < 6; i++) {
  if (i == 1) {
    continue;
  }
  if (i == 3) {
    break;
  }
  System.out.println(i);
} // 최종 출력: "0", "2"
```

위 예제에서 `i==1`인 경우 `1`을 프린트하지 않고(`for`의 `i==1` iteration의 나머지를 스킵) `i==3`으로 넘어가며, `i==3`인 경우 `for` loop 자체에서 벗어납니다. 4부터 실행 x

### switch statement

`switch` 역시 `if`문 처럼 conditional branch의 일종입니다. `expression`부에 argument가 주어지면 그에 맞는 case로 점프하는 거라 생각하면 됩니다. `break`를 사용하지 않을 시 점프한 해당 `case`에서 끝나지 않고 그 하위 `case`와 `default`까지 모두 돕니다. 모든 `case`가 맞지 않다면 `default`를 실행합니다.

예시:

```java
String code = "black";
switch (code) {
  case "red":
    System.out.println("코드 레드");
    break;
  case "black":
    System.out.println("코드 블랙");
  default:
    System.out.println("이상 무!");
} // break를 case 2에 넣지 않아 "코드 블랙"과 "이상 무!" 모두 출력
```

### Nested Loop

Nested Loop는 **여러 루프문이 중첩**되어 있는 것입니다 (e.g`for` 문 안에서 `for`문이 돌아감).

참고: Nested Loop의 경우 2개의 경우 `O(n^2)`, 3개이면 `O(n^3)` 식으로 `Time Complexity(시간 복잡도)`가 올라갑니다. 입력 데이터(`n`부분)이 작다면 상관 없지만 커진다면:

- 순서를 유지할 필요가 없다면 `Map` 구조의 적합한 Data Structure (탐색시 Time Complexity `O(1)`).
- 순서가 필요하거나 범위를 지정해야 하는 경우 `Tree` 중에서 찾는게 좋을 수 있습니다.
- Nested Loop를 쓰는 경우에도 목적 완료시 `break` 등을 통해 loop를 빠져나오게 하는 편이 Average Complexity 라도 줄일 수 있습니다.

만약 아주 적은 메모리(e.g, 임베디드)밖에 없다면 `Map`이 Space Complexity(공간 복잡도)면에서 무리가 갈 수 있지만 현대 세상에서는 1초와 1분 차이가 메모리 몇 MB보다 중요합니다.

## Method

Java의 **메서드(method)는 호출(call) 되었을때 실행되는 코드 블록**입니다. 비슷한 개념으로 함수(function)가 있는데:

- **함수(function)**: 특정 작업을 처리하고 값(value)를 반환(return)할 수 있는 코드 블록. 일반적으로 독립적.
- **메서드(method)**: OOP(Object-Oriented Programming) 언어에서 Class나 Object와 연관되어 있는 function. Object의 데이터를 조작하거나 Class의 필드나 다른 메서드에 접근 가능.

이므로 function이 독립적으로 존재 불가하고 method가 Class 안에서만 declare(선언) 가능한 Java에서는 거의 method라는 말만 들을 것입니다. 처음 `main()`을 배울 떄 `Main` Class라는 껍데기가 있어야 했던 이유입니다.

```java
public class Main {
  static void myMethod() {
    // 실행할 코드
    System.out.println("메서드가 생성됨!");
  }
  public static void main(String[] args){
    // static이므로 같은 Class 내에서 myMethod()로 실행 가능
    myMethod();
  } 
}
```

위 예시 코드를 살펴 보자면:

**`public class Main`**:

- `public`: 다른 Class들이 자유로이 해당 Class에 Access (접근) 가능하다는 Access Modifier입니다. `private` 등의 타 Access Modifier의 경우 나중에 배웁니다.
- `class`: 클래스를 만듦을 의미합니다.
- `Main`: 클래스의 이름입니다. 이는 Java 파일의 이름이어야 합니다(e.g, `Main.java`).

**`static void myMethod()`**

- `static`: method가 특정 object가 아니라 Class 직속이라는 겁니다. 새 Object(Instance, 실체)를 만들 필요 없이 Class(템플릿)에서 바로 call(호출) 가능
- `void`: `return`(반환)하는 value(값)이 없다는 것을 의미합니다. `int`, `float`,`String` 등을 반환할 시 해당 Type을 적어둡니다. `String[]`이나 Object 등도 return 가능합니다.
- `myMethod()`: 생성된 메서드의 이름입니다. 메서드는 모두 이름 뒤 `()`를 붙여야 합니다(`()`까지가 이름이라 생각하기).
- `()` 내부: `,`로 나뉜 argument를 줄 수 있습니다.

그럼 **`public static void main(String[] args)`**도 분석이 가능할 겁니다. `public`하고 `static`하며 return 값이 `void`(==없는) `main()` 함수이며 `String[]` 배열인 argument `args`를 parameter로 받는 다는 겁니다. `args`의 경우 말했듯 String의 Array이며 IDE 등에서 설정 가능합니다.

같은 Class 내부라면 `static` method를 바로 `<method-이름>()` 형식으로 실행 가능합니다. 만약 `myMethod()`가 `static`이 아니었다면(`==` Class가 아닌 Object 소속이라면) `new` 키워드로 새 Instance(Object)를 만든 후 사용이 가능합니다.

다른 Class인 경우 해당 Class를 `import`한 후 사용할 수 있습니다.