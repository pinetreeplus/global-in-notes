# Java Intermediate

- [Java Intermediate](#java-intermediate)
  - [OOP 개념](#oop-개념)
    - [Class와 Instance란](#class와-instance란)
    - [Inheritance란](#inheritance란)
    - [Encapsulation이란](#encapsulation이란)
    - [기타 OOP 개념](#기타-oop-개념)
  - [자바의 Class](#자바의-class)
    - [constructor로 Class 만들기](#constructor로-class-만들기)
    - [Interface](#interface)
    - [abstract Class](#abstract-class)
    - [Java Bean](#java-bean)
  - [Java의 Access](#java의-access)
    - [static](#static)
    - [Access Modifier(public/protected/default/private)](#access-modifierpublicprotecteddefaultprivate)
  - [Java package 관리](#java-package-관리)
    - [package란?](#package란)
    - [Design Pattern](#design-pattern)


## OOP 개념

이 섹션의 경우 필요한 개념만 간단히 짚고 넘어가겠습니다. [자세한 내용은 여기서](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects/Object-oriented_programming)

OOP는 Object-Oriened Programming의 약자로 시스템을 Object의 집합으로써 모델링 하는것을 뜻 합니다. 이 때 각 Object는 시스템의 일정 부분을 나타냅니다.

Object는 다른 코드에서 사용될 수 있도록 인터페이스를 제공하는 것이며, 해당 Object를 쓰는 시스템의 다른 부분은 그 Object 내부가 어떻게 돌아가는지 알 필요가 없습니다.

Java는 OOP 중에서도 Class에 기반한 언어입니다.

### Class와 Instance란

OOP에서 문제를 모델링할 때, Object가 어떤 식으로 구성될지 추상적인 정의를 내리며 이를 `Class`라고 부릅니다.

예를 들어 시스템에 `교수`가 있다고 하면 다음과 같은 표현 이 가능합니다(다음은 실제 언어가 아니고 pseudo-code입니다.).

```
class 교수
    properties
        이름
        교과목
    methods
        채점(시험지)
        자기소개()
    constructor
        교수(이름, 교과목)        
```

이 때 교수 `Class`는 `이름`과 `교과목`이란 property를 가지고 있습니다. 그리고 `시험지`의 `채점()`과 `자기소개()` 행위를 하는 method를 가지고 있습니다.

이는 특정 `교수`가 아니라 **교수의 템플릿이며 이게 Class**입니다. 실제 교수 `Trump`를 추가하고 싶다면 **해당 `Class`의 Instance를 생성해야 합니다.**(`Trump`라는 Object가 시스템에 추가됨)
. 이를 하는 특수한 method를 `constructor`라고 부릅니다.

### Inheritance란

위 예제에서 학교에 `학생`, `교직원`, `방문객` Class도 추가하고 싶다고 합시다. 이 떼 각각의 Class를 만들 

**Multiple Inheritance**는 말그대로 여러번 inherit 받는다는겁니다.

### Encapsulation이란

**`public` 인터페이스와 `private`한 내부 상태를 분명히 나누는 것** 을 Encapsulation이라고 부릅니다.

Object는 다른 코드가 사용 가능한 `public`한 Interface를 제공합니다. 하지만 Object 자기만의 internal state(내부 상태)는 다른 Object에서 접근 불가 하며 자기 자신의 method로만 access 가능합니다. 이를 internal state가 `private` 하다고 표현합니다.

이는 개발시 내부 구조 변경을 해도 Object를 업데이트 할 필요가 없어서 효율적입니다.

### 기타 OOP 개념

- Overloading:
- Overriding:
- Polymorphism:

## 자바의 Class

여기서부터는 OOP 개념이 아닌 Java에서의 사용법입니다.

- `Class`:
- Field
- Constructor
- Method
- this
- new

### constructor로 Class 만들기

### Interface

### abstract Class

### Java Bean

## Java의 Access

### static

### Access Modifier(public/protected/default/private)

## Java package 관리

### package란?

`import`

- Record
- extends
- super
- final
- implements
- default method

- instanceof
- Sealed
- Pattern Matching, 

### Design Pattern
- Design Pattern:
- Singleton (Pattern):
- Factory (Pattern):
- Proxy (Pattern):
- Builder (Pattern):
