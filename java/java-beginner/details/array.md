# array

- [array](#array)
  - [array란 무엇인가](#array란-무엇인가)
  - [다차원 Array](#다차원-array)
  - [Array를 loop하기](#array를-loop하기)

**`Array`는 여러 값을 하나의 변수에 저장하기 위해 사용되는 타입입니다.**

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

// 0번은 "Volvo"
cars[0] = "Volvo";
// 1번은 "Volvo"
cars[1] = "Volkawagen"; 
// 2번은 "Volvo"
cars[2] = "Hyundai"; 
```

## array란 무엇인가



## 다차원 Array

## Array를 loop하기

