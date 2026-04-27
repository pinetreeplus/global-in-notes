# Java Intermediate

- [Java Intermediate](#java-intermediate)
  - [OOP 개념](#oop-개념)
    - [Class와 Instance(Object)이란](#class와-instanceobject이란)
    - [Inheritance란](#inheritance란)
    - [Polymorphism이란](#polymorphism이란)
    - [Encapsulation이란](#encapsulation이란)
  - [Java의 Class](#java의-class)
    - [Class의 구조](#class의-구조)
    - [constructor로 Class 만들기](#constructor로-class-만들기)
  - [Java OOP](#java-oop)
  - [Interface](#interface)
    - [Java Bean](#java-bean)
  - [Access Modifier](#access-modifier)
    - [public](#public)
    - [protected](#protected)
    - [default](#default)
    - [private](#private)
  - [기타 modifier](#기타-modifier)
    - [sealed](#sealed)
  - [Java package 관리](#java-package-관리)
    - [package란?](#package란)
    - [sealed](#sealed-1)
  - [Design Pattern](#design-pattern)
    - [Design Pattern 종류](#design-pattern-종류)
    - [Java에서 흔히 쓰이는 패턴](#java에서-흔히-쓰이는-패턴)
    - [Gang of Four](#gang-of-four)


## OOP 개념

이 섹션의 경우 필요한 개념만 간단히 짚고 넘어가겠습니다. [자세한 내용은 여기서](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects/Object-oriented_programming)

OOP는 Object-Oriened Programming의 약자로 시스템을 Object의 집합으로써 모델링 하는것을 뜻 합니다. 이 때 각 Object는 시스템의 일정 부분을 나타냅니다.

Object는 다른 코드에서 사용될 수 있도록 인터페이스를 제공하는 것이며, 해당 Object를 쓰는 시스템의 다른 부분은 그 Object 내부가 어떻게 돌아가는지 알 필요가 없습니다.

Java는 OOP 중에서도 Class에 기반한 언어입니다.

### Class와 Instance(Object)이란

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

Instance는 좀 더 Class와의 관계에 초점(Class로부터 Instantiate됨)을 둔 것이고 Object는 생성된 객체로서 바라보는 표현으로 서로 interchangeable(바꿔서 호환되게)하게 사용하곤 합니다.

### Inheritance란

위 예제에서 학교에 `학생` Class도 추가하고 싶다고 합시다. 이 떼 `교수`, `학생` 등이 비슷한 종류(인간)이라는 걸 표현하고 싶을 수 있습니다. 이 경우 Inheritance(상속)이 사용 가능합니다. `인간` Class가 인간의 공통적인 특징을 가지고 있고, `교수`와 `학생` class가 그를 inherit(상속) 받도록 아래와 같이 pseudo-code를 만들어 봅시다

```
class 인간
    properties
        이름
    constructor
        인간(이름)
    methods
        자기소개()

class 교수 : extends 인간
    properties
        교과목
    constructor
        교수(이름, 교과목)
    methods
        채점(시험지)
        자기소개()

class 학생 : extends 인간
    properties
        입학연도
    constructor
        학생(이름, 입학연도)
    methods
        자기소개()
```

`교수`와 `학생`이 properties에 이름이 없는데 `constructor()`에서 이름을 사용 가능한 것을 알 수 있습니다. 이는 `인간` Class를 `extends`를 통해 Inherit(상속)해 parent(부모)인 `인간`의 property와 method를 받았기 때문입니다.

`교수`와 `학생`은 `인간`에게서 상속받지 않은 내용(`이름`,`입학연도`)를 각자의 property로 설정하였습니다.

### Polymorphism이란

위 예시에서 분명 `인간` Class가 `자기소개()` method를 가지고 있는데도 `교수`와 `학생` 역시 `자기소개()` method를 `declare(선언)` 했습니다. 

이는 `인간`의 `자기소개()` 공용 템플릿(e.g, 안녕! 난 타노스야)과는 다른 `학생`(e.g, 안녕하세요, 컴공 xx 학번 yyy입니다.)과 `교수`(e.g, 만나서 반갑습니다. zzz 교수입니다) 같은 child Class(parent에게서 inherit 받는 Class) 고유의 `자기소개()` 템플릿을 만들었기 때문입니다. 

**이렇게 child Class의 property나 method등이 parent Class의 것을 덮어쓰는 것을 `overriding`이라고 부릅니다.**

또한, 학생의 경우 경우에 따라(parameter에 따라) 똑같은 `자기소개()`도 다르게 할 수 있습니다. 예를 들어:

```
methods
    자기소개()
    자기소개(친구)
```

의 경우 똑같은 이름의 `자기소개()` 메서드가 아무런 parameter를 받지 않았을때는 위의 "안녕하세요, 컴공 xx 학번 yyy입니다.", `친구`라는 argument가 있을 시 "너 지금 시간 나냐" 식으로 다르게 반응 수 있습니다.

**이렇게 경우에 따라(일반적으로 패러미터의 종류) 똑같은 이름의 메세드가 다르게 구현되는 것을 `overloading`이라 합니다.**

Polymorphism(다형성)란 다양한 모습(Many forms)이란 단어로 이렇게 **하나의 인터페이스(method 등)이 여러 data type을 받을 수 있는 것을 의미합니다.**

### Encapsulation이란

**`public` 인터페이스와 `private`한 내부 상태를 분명히 나누는 것** 을 Encapsulation이라고 부릅니다.

Object는 다른 코드가 사용 가능한 `public`한 Interface를 제공합니다. 하지만 Object 자기만의 internal state(내부 상태)는 다른 Object에서 접근 불가 하며 자기 자신의 method로만 access 가능합니다. 이를 internal state가 `private` 하다고 표현합니다.

이는 개발시 내부 구조 변경을 해도 `public` 인터페이스가 그대로라면 Object를 업데이트 할 필요가 없어서 효율적입니다. 또한 Encapsulation은 외부에 공개할 필요가 없는 데이터를 숨기는 역할도 합니다.

Java에서는 내부 field를 `private`으로 declare(선언) 후 `Getter`(field 값을 가져옴)와 `Setter`(field 값을 설정)로 `public` 인터페이스를 제공하는 식으로 자주 구현되곤 합니다.

## Java의 Class

Java는 Object에 집착하는 OOP(Object-Oriented Programming) 언어 입니다. Primitive Type(Numerical 6종, `char`, `boolean`)를 제외한 Java의 모든 것은 Class 혹은 Object와 관계되어 있습니다. Java의 **모든 코드가 실행되는 `main()` method**도 Class 안에서만 돌아갑니다.

일반적으로 **하나의 파일 당 하나의 Class를 사용하는 것이 좋으며**, `public` Class의 경우 파일 당 1개씩만 declare(선언) 가능하며 파일 이름도 `<public-class-이름>.java`가 되어야 합니다. 

- 예외: 상위 Class 안 Inner Class의 경우 `public` Class로 declare(선언) 가능합니다. 
- 참고-1: Inner Class는 **Class 내부에서 declare(선언)되는 Class**입니다. Outer Class(Inner Class를 담고 있는 Class)와 밀접하게 관계된 helper function 등을 구현하는데 사용됩니다. 
- 참고-2: 여러개의 Class를 한 파일에 넣어도 Compile 시 별도의 `.class` 파일로 따로 저장됩니다.

### Class의 구조

Java의 Class를 분석해 봅시다.

```java

```

- `Class`:
- Field
- Constructor
- Method
- this
- new

### constructor로 Class 만들기



## Java OOP

이 섹션은 OOP의 개념이 아닌 Java에서의 사용법입니다.

**Multiple Inheritance**는 말그대로 여러번 inherit 받는다는겁니다.

## Interface


### Java Bean

## Access Modifier

### public

### protected

### default

### private

## 기타 modifier

### sealed

`sealed`

## Java package 관리

### package란?

`import`

- Record
- extends
- super
- final
- implements
- default method

### sealed

- instanceof
- Pattern Matching, 

## Design Pattern

더 깨끗하고 관리가 쉬운 시스템을 만들기 위해 **디자인 패턴(Design Pattern)이라는 재사용 가능한 템플릿**을 사용합니다. 이 디자인 패턴 템플릿은 Object의 생성, structure(구조), behavior (동작방식)과 관련된 issue(문제점)을 해결하기 위한 청사진을 제공합니다.

디자인 패턴은 더 효율적이고, scalable(확장/기능 추가가 쉽단 겁니다), 그리고 관리가 쉬운 시스템을 만드는데 다음과 같은 도움을 줍니다:

1. 재사용(Reusability): 패턴은 다양한 프로젝트 및 문제에 적용이 가능하여 비슷한 문제 해결에 필요한 시간과 노력을 줄입니다.
2. 표준화(Standardization): 개발자들이 서로 이해하는 템플릿을 제공하여 소통과 협업을 더 쉽게 합니다.
3. 효율성(Efficiency): 유명 디자인 패턴을 사용함으로써, 흔히 일어나는 문제에 해결책을 찾으려 머리 안 싸메고 더 빠르게 개발이 가능합니다.
4. 유연함(Flexibility): 패턴은 abstract(추상적)인 해결책/템플릿으로 다양한 시나리오와 요구사항에 맞춰 implement(구현) 될 수 있습니다.

[더 자세한 원본](https://www.geeksforgeeks.org/system-design/software-design-patterns/)

### Design Pattern 종류

디자인 패턴은... 엄청 많습니다. 크게 분류를 나눠 보자면:

1. 


### Java에서 흔히 쓰이는 패턴

- Singleton (Pattern):
- Factory (Pattern):
- Proxy (Pattern):
- Builder (Pattern):

### Gang of Four

유명한 사람들이고 유명한 패턴들입니다. [시간 나시면 보세요](https://www.geeksforgeeks.org/system-design/gang-of-four-gof-design-patterns/)