# string

- [string](#string)
  - [String CRUD](#string-crud)
    - [C(Create)](#ccreate)
    - [R(Read)](#rread)
    - [U(Update)](#uupdate)
  - [String 연결하기](#string-연결하기)
    - [더하기 사용](#더하기-사용)
    - [concat 사용](#concat-사용)
  - [기타 methods](#기타-methods)

`String` 역시 Non Primitive 타입의 일종입니다. 한 글자만을 표현하는 `char`와 달리 문자열을 표현합니다. 

## String CRUD

`String`은 사실 `Object`이며 사용할 수 있는 다양한 `method`가 있습니다.

### C(Create)

`String`을 만들기 위해서는 일반 변수 선언처럼 한 후 `"`으로 감싸주면 됩니다. `'`는 `char`에서만 사용 가능합니다.

```java
String greeting = "Hello";
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

### 더하기 사용

더 쓰기 편합니다.

```java
String firstName = "John";
String lastName = "Doe";
System.out.println(firstName + " " + lastName);
```

### concat 사용

이런거도 있습니다.

```java
String a = "Java ";
String b = "is ";
String c = "fun!";
String result = a.concat(b).concat(c);
System.out.println(result);
```

## 기타 methods

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