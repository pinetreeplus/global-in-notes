# Java 초급 떼기

- [Java 초급 떼기](#java-초급-떼기)
  - [Type](#type)
    - [Primitive Type](#primitive-type)
    - [Non-Primitive Type](#non-primitive-type)
    - [Array](#array)
  - [변수](#변수)
  - [Control Statements](#control-statements)
    - [if statement](#if-statement)
    - [for statement](#for-statement)
    - [while statement](#while-statement)
    - [break과 continue](#break과-continue)
  - [Intermediate](#intermediate)
    - [OOP 개념](#oop-개념)
    - [Class란](#class란)
    - [Java의 Access](#java의-access)
    - [Design Pattern](#design-pattern)
  - [Advanced](#advanced)
    - [Concurrency/멀티쓰레딩](#concurrency멀티쓰레딩)
  - [JDBC(Java Database Connectivity):](#jdbcjava-database-connectivity)

## Type

프로그래밍 언어에서는 숫자, 문자열, 리스트, 참/거짓 등 여러가지 형태(타입)의 데이터를 변수로 설정 할 수 있습니다. 하위 섹션은 Java에서 사용되는 종류입니다.

### Primitive Type

값을 저장하는 **가장 기초적인 타입**들입니다.
- 총 8가지로 Numerical 6종(정수형:`byte`,`short`,`integer`,`long`, 실수형:`float`,`double`()), Non-Numerical 2종(`char`, `boolean`)이 있습니다.
  - **TD;LR: 정수는 `int`, 실수는 `float`, 한 글자는 `char`, `true`/`false`는 `boolean`.**
  - `byte`: 정수형으로 1 바이트(8비트)의 메모리를 가집니다. `-2^7` ~ `2^7-1`(`-128` ~ `127`)범위
  - `short`: 정수형 2Bytes(16bits). `2^15` ~ `2^15-1`
  - `integer`: 정수형 4Bytes(32bits). `2^31` ~ `2^31-1`
  - `long`: 정수형 8Bytes(64bits). `-2^63` ~ `-2^63-1` 
  - `float`: 실수형. 소숫점(decimal digits) 6~7자리
  - `double`: 실수형 Double Precision. 소숫점(decimal digits) 15~16자리
  - `char`: 하나의 문자나 ASCII 값을 저장합니다.
  - `boolean`: `true`나 `false`를 값으로 가집니다. `if`, `for`,`while`문 등은 조건(condition)부가 `true`여야 합니다. 
    - e,g. `if(a>10)`은 `a=9`일 경우 `if(false)`로 실행 안 함.
- 참고: `unsigned`의 경우 양수(0포함), `signed`의 경우 음수까지 포함입니다. `signed`의 경우 메모리 비트 하나가 양수/음수 표현에 사용되어 한쪽 방향 범위가 절반입니다. e.g, 8바이트의 경우 `signed`는 `-128` ~ `127`, `unsigned`의 경우 `0` ~ `255`.

### Non-Primitive Type

**Primitive Type이 아닌 것**으로 `String`, `Class`, `Array` 등이 있습니다. Class의 경우 별도로 자세히 다루겠습니다.

### Array

`Array`는 여러 값을 하나의 변수에 저장하기 위해 사용되는 타입입니다. [좀 더 자세한 설명](https://www.geeksforgeeks.org/java/arrays-in-java/)

Non Primitive 타입의 일종이며 배열이라고도 합니다. **여러 값을 하나의 변수에 저장하기 위해 사용되며 다른 타입 뒤 square bracket, []을 사용하며 선언(declare)합니다. Curly brace, {} 안 comma로 구분된 리스트에 값이 들어갑니다. index는 0부터 시작입니다!** 5개 들어있다면 index는 0~4입니다.

## 변수

## Control Statements

프로그래밍 언어에서는 참/거짓이나 지정된 조건동안 반복되는 control flow를 지정할 수 있습니다. Java에는 이에 다음과 같은 statement가 사용됩니다:

### if statement

`if(condition){}`이 `true`일 경우 `{}` 내부를 실행합니다.

### for statement

`for(init;condition;exec){}`형식의 반복문입니다 `init`은 초기실행코드, `exec`는 매 루프 실행코드이며 `condition`이 `true`일 동안 실행됩니다.

### while statement

`while(condition){}`의 `condition`이 참일 동안 반복합니다.

### break과 continue

**루프문에서 벗어날 때 `break`를 사용합니다.**
**루프 1개를 건너뛸때 `continue`를 사용합니다.**


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

- Nested Loop: 여러 루프문이 중첩되어 있는 것입니다. (e.g`for` 문 안에서 `for`문이 돌아감)


## Intermediate

### OOP 개념
- Overloading
- Overriding
- Encapsulation
- Inheritance
- Multiple Inheritance

### Class란
- `Class`:
- Field
- Constructor
- Method
- this
- new
- Instance

### Java의 Access
- static
- Access Modifier(public/protected/default/private)
- package
- import
- Java Bean
- Record
- extends
- super
- abstract
- final
- interface
- implements
- default method
- Polymorphism, 
- instanceof
- Sealed
- Pattern Matching, 

### Design Pattern
- Design Pattern:
- Singleton (Pattern):
- Factory (Pattern):
- Proxy (Pattern):
- Builder (Pattern):

## Advanced
- Object, Reflection API, Objects, Optional, 
- JVM, Class Loader, Runtime Data Areas(Heap/Stack/Method), Execution Engine, Garbage Collector, 
- Wrapper Class, Number, Boxing, 
- String, StringBuffer, StringBuilder, StringTokenizer, 
- Math, Random, BigDecimal, BigInteger, 
- Generic, Enum(Singleton?), Annotation, 
- Exception, RuntimeException, Checked Exception, try~catch~finally, throws, throw, 
- Collection, List(Array/Linked), Set(Hash/Tree), Map(Hash/Tree), Collections, Arrays, Compare, PECS, var, 
- Nested/Inner/Anonymous Class, Lamda, Functional Interface(CSFP), Functional Programing, Stream API, 
- LocalDate/Time, LocalDateTime, DateTimeFormatter, Duration, Period, 
- IO, NIO, Byte/Character Stream, Files, Paths, 
### Concurrency/멀티쓰레딩
- Thread, Process, Multi-threading, synchronized, Context Switching, ExecutorService, Virtual Thread, ReentrantLock, 
- Event-driven Asynchronous Programming

## JDBC(Java Database Connectivity): 
[JDBC](https://www.geeksforgeeks.org/java/introduction-to-jdbc/)는 는 어플리케이션이 DB(PostgreSQL, MySQL 등)와 통신하는 것을 돕는 API입니다. Java 프로그램이 DB에 연결, 쿼리 실행, 데이터를 retrieve하고 조작할 수 있게 헤 줍니다.

- Maven Repository
- Transaction(Commit/Rollback)
- SQL Injection
- PreparedStatement
- Batch

