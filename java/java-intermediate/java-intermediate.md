# Java Intermediate

- [Java Intermediate](#java-intermediate)
  - [OOP 개념](#oop-개념)
    - [Class와 Instance(Object)이란](#class와-instanceobject이란)
    - [Inheritance란](#inheritance란)
    - [Polymorphism이란](#polymorphism이란)
    - [Encapsulation이란](#encapsulation이란)
  - [Java의 Class](#java의-class)
    - [Class의 구조](#class의-구조)
    - [constructor 기초](#constructor-기초)
    - [Record](#record)
  - [Java의 Inheritance](#java의-inheritance)
    - [Java의 Interface](#java의-interface)
    - [Abstract Class](#abstract-class)
    - [JavaBeans](#javabeans)
  - [Access Modifier](#access-modifier)
    - [Access Modifer의 설명](#access-modifer의-설명)
  - [Non Access Modifier](#non-access-modifier)
    - [static](#static)
    - [final](#final)
    - [abstract](#abstract)
    - [sealed](#sealed)
  - [Java package 관리](#java-package-관리)
    - [package란?](#package란)
  - [Pattern Matching](#pattern-matching)
  - [Design Pattern](#design-pattern)
    - [Design Pattern 종류](#design-pattern-종류)
    - [Singleton Pattern](#singleton-pattern)
    - [Factory Pattern](#factory-pattern)
    - [Proxy Pattern](#proxy-pattern)
    - [Builder Pattern](#builder-pattern)


## OOP 개념

이 섹션의 경우 필요한 개념만 간단히 짚고 넘어가겠습니다. [자세한 내용은 여기서](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects/Object-oriented_programming)

OOP는 Object-Oriented Programming의 약자로 시스템을 Object의 집합으로써 모델링 하는것을 뜻 합니다. 이 때 각 Object는 시스템의 일정 부분을 나타냅니다.

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
public class User {
  // field인 name과 isAdmin을 private으로 설정
  private String name;
  private boolean isAdmin;

  // name을 argument로 받아 Object를 만드는 constructor
  public User(String name){
    this.name = name;
  }

  public String greet(String opponentName){
    // String.format()은 parameter 많이 받는 문자열 구성하는데 +나 concat()보다 보기 쉽습니다.
    // 참고로 %s는 String 타입이며 2개가 "" 사이에 있고 각각 뒤에 따라오는 parameter 2개를 받습니다. 
    // %d, %f, 는 각각 int형, float형
    String salutation = String.format("안녕하세요 %s! 전 %s", opponentName, this.name);
    // salutation 값을 return합니다.
    return salutation;
  }
}
```
한 구간씩 천천히 가봅시다:

`public class User`: User라는 **`class`를 declare**합니다. 
- 참고:`public`으로 설정됨에 따라 타 Class에서 접근 가능합니다.

`private String name;`, `private boolean isAdmin`: 각각 `String`, `boolean` 타입의 **field** `name`과 `isAdmin`을 설정합니다. **Class 안의 변수를 attribute 혹은 field**라 부릅니다.
- 참고: `private`으로 설정한 이유는 internal state를 `private`하게 유지하기 위해서입니다.
  
`public User(String name)`: 위 Class를 기반으로 **Instance(Object)를 생성하는 constructor입니다**. 
- 참고:`public`의 경우 이 생성 인터페이스를 타 코드가 실행 가능하게 하기 위해서입니다.

`this.name`: Class 내의 `this` 키워드는 argument로 받은 `name`이 아닌, `User` Class의 field인 `name`이라는 뜻입니다. **`this`가 붙는 경우 Class/Object 내부의 field/method**라 생각하시면 됩니다.

`public String greet(String opponentName)`: `User` Class가 사용할 수 있는 method로 String을 하나 받아서 인사를 하는겁니다. 

- 참고: `opponentName`처럼 이어지는 각 단어의 앞을 대문자화 하는 것을 CamelCase라고 합니다. Java의 일반적인 스타일의 경우 Class/파일의 경우 첫 단어도 대문자, 변수나 method에 경우 첫 단어는 소문자 시작, 다음 단어부터 대문자입니다. 

**Class/Object 내의 field나 method에 접근하기 위해선 `<Class/Object-이름>.<field-이름>`, `<Class/Object-이름>.<method-이름>()` 처럼 dot(`.`)을 붙입니다.**

### constructor 기초

위에서 만든 `User` Class 내부에 똑같이 `User()`라는 특수한 function(method는 아닙니다)이 보일 것입니다. 이렇게 이름이 Class명과 같은 내부 function을 **constructor라고 하며 Instance(Object)를 생성하는 역할을 합니다.**. 아래 예제에서 `User`, `Main` Class는 동일한 package 내(아니라면 `import` 필요)의 별도의 `User.java`, `Main.java`에 저장되어 있다고 합시다.

```java
// User Class입니다.
public class User {
  private String name;
  private boolean isAdmin;
  public String greet(String opponentName){
    String salutation = String.format("안녕하세요 %s! 전 %s", opponentName, this.name);
    return salutation;
  }
  
  // name만 받는 constructor
  public User(String name){
    this.name = name;
    this.isAdmin = false;
  }

  // name과 isAdmin을 받는 constructor
  public User(String name, boolean isAdmin){
    this.name = name;
    this.isAdmin = isAdmin;
  }

  // name 필드의 Getter
  public String getName() {
      return name;
  }
  
  // name 필드의 Setter
  public void setName(String name) {
      this.name = name;
  }

}
```
```java
public class Main{
  public static void main(String[] args){
    User gumiho = new User("구미호");
    User serral = new User("세랄", true);

    System.out.println(gumiho.greet(serral.getName())); // 안녕하세요 세랄! 전 구미호
    System.out.println(serral.greet(gumiho.getName())); // 안녕하세요 구미호! 전 세랄
    
  }
}
```

역시 한 블록씩 넘어가 봅시다. 편의상 `name`만 받는 constructor를 1번 constructor, `name`과 `isAdmin`을 받는 constructor를 2번이라 하겠습니다.

- `public User(String name)`: argument로 이름만을 설정하고 있는 constructor입니다. `isAdmin`은 기본적으로 `false`로 설정합니다.
- `public User(String name, boolean isAdmin)`: argument로 이름과 관리자 모두를 받는 constructor입니다. `isAdmin`을 받는 boolean 값에 따라 다르게 설정합니다.

예시처럼 **한 Class내에서 받는 argument의 종류와 수에 따라 다른 constructor를 declare(선언)이 가능**합니다. 이는 overloading(constructor, method 등 어떤 기능이 여러 종류의 input을 받을 수 있음)의 예시입니다.

- `public String getName()`, `public void setName(String name)`: [Encapsulation](#encapsulation이란)에서 설명한 Java의 Getter Setter입니다.

**`new` 키워드는 새로운 Instance(Object)를 Instantiate(생성)할 때 사용합니다**(네, Array도 Object입니다).

- `User gumiho = new User("구미호");`: Constructor 1을 사용하여 `구미호` Instance(Object)를 생성합니다. Constructor 1은 Instrance `isAdmin` 값이 `false`입니다.
- `User serral = new User("세랄", true);`: Constructor 2를 사용하여 `세랄`을 소환합니다. Constructor 2는 `isAdmin`의 argument 값(value)에 따라 관리자를 설정합니다.

- `gumiho.greet(serral.getName())`: Getter인 `getName()`을 사용하여 구미호가 세랄에게 인사합니다.
- `serral.greet(gumiho.getName())`: 세랄이 구미호에게 인사합니다.

### Record

[dev.Java의 Record 문서](https://dev.java/learn/records/)

Record는 **Immutable(변하지 않는) 데이터를 저장**하기 위한 특수한 class라 생각 할 수 있습니다. `class` modifier 대신 `record`를 사용합니다. 

class 내에 `final` modifier를 사용하여 field를 생성할 수도 있지만 그 작업을 더 쉽게 해줍니다. 

먼저 일반 class로 `final` 키워드를 사용하여 변하지 않는 데이터를 저장해 봅시다:

```java
public class Game{
  // final은 JS의 const와 비슷하게 값을 고정시키는 modifier입니다. 
  // JS의 const와 같이 Object를 reference(참조)하는 경우 그 내부 field는 변경될 수 있습니다.
  private final String gameName;
  private final String genre;

  public Game(String gameName, String genre){
    this.gameName = gameName;
    this.genre = genre;
  }
}
```

해당 클래스는 `new`로 `Game` 오브젝트를 생성 후 게임 이름과 장르 수정이 불가능합니다.

위 class는 다음과 같은 한 줄짜리 `record`와 유사하게 동작합니다.

```java
public record Game(String gameName, String genre) {}
```

`record`로 생성을 할 시:
 
- Record의 필드 수와 종류와 일치하는 constructor(Canonical Constructor)를 자동으로 생성해줍니다. 
  - 위의 경우 `Game(String gameName, String genre)`
- Compiler가 `toString()`, `equals()`, `hashCode()` 등의 field에 많이 쓰이는 method 역시 추가해줍니다. (IDE에서 class에 템플릿으로 해주는 것과 비슷)
- Accessor Method(Getter의 공식 표현)역시 `<field-이름>()`의 형태로 자동으로 생성해 줍니다.  따라서 다음처럼 Record의 필드에 Access(접근) 가능합니다.

```java
Game rimWorld = new Game("림월드", "콜로니 시뮬레이션");
// field명과 동일한 이름의 자동 생성된 Getter, gameName()과 genre()
System.out.println(String.format("%s는 %s 게임입니다.", rimworld.gameName(), rimworld.genre()))
```

Record는 [Compact Constructor](https://dev.java/learn/records/#compact)를 이용해 조건에 따라 Canonical constructor를 커스텀 할 수 있습니다.

후에 나올 내용이지만 `Record`는 이미 `java.lang.Record`를 `extends`(상속) 받기 때문에 다른 class 등을 `extends` 할 수 없습니다. Interface를 `implements`하는 것은 가능.

- 참고1: IDE(Integrated Development Environment)는 VSCodium, IntelliJ, Eclipse와 같이 개발에 필요한 기능(텍스트 편집, IntelliSense, 디버깅, 빌드 등)을 통합한 소프트웨어입니다.
- 참고2: compiler는 인간이 쓰는 코드를 byte 코드로 변경하는 소프트웨어. Java 컴파일러의 경우 JVM이 실행가능하도록 `.java`를 `.class` 바이트 코드로 변환

## Java의 Inheritance

Java에서는 class가 다른 class에서 derive(파생)될 수 있으며 이 경우 **그 class의 field와 method를 inherit(상속)** 받습니다.

- Inherit을 해준 **원본 class는**: parent class, superclass, base class
- Inherit을 받아 **derive된 class는**: child class, subclass, derived class 등으로 부릅니다.

class A가 class B를 inherit하려면 `class A extends B` 식으로 `extends`를 사용하여 class를 declare하면 됩니다. 예시로:

```java
public class Warrior{
  private String name;
  
  public
}

```
```java
// 위 Warrior와 다른 파일, 같은 package에 있다 합시다.

```

`super` 키워드는 해당 class의 parent(부모) class를 부르는 말입니다.

**Multiple Inheritance**는 말그대로 여러번 inherit 받는다는겁니다. 

Java는 한 class는 하나의 class만 `extends` 가능합니다. `Record`는 이미 `java.lang.Record`을 `extends`한 상태로 추가로 `extends` 불가합니다. Interface의 경우 여러 interface를 `extends`할 수 있지만 class는 `extends`할 수 없습니다.

### Java의 Interface

그 자체로 Object로 사용될 일은 없지만 다른 **class를 위한 템플릿이 필요하다면 [interface](https://dev.java/learn/interfaces/defining-interfaces/)를 사용**합니다.

- `implements`: Class가 구현할 템플릿을 interface에서 받아 오는 것입니다. Interface는 다른 interface를 `implements` 할 수 없습니다(`extends`는 가능). 

```java
public interface Game{
  // TODO
}
```

`abstract` 키워드는 
abstract method는 

### Abstract Class

[Abstract class](https://dev.java/learn/inheritance/abstract-classes/)는 interface와 비슷하게 instantiate되지 못하지만 타 class에 `extends` 될 수 있는 class입니다.

```java
abstract class Game{
  //TODO
}
```

### JavaBeans

[JavaBeans](https://en.wikipedia.org/wiki/JavaBeans)는 다음과 같은 규칙을 따르는 Java class를 일컫습니다(`import`하는 특정 라이브러리 등이 아님):

- `public`한 default constructor(argument가 없는 constructor)가 있어야 합니다.
- Class의 property가 `get`, `set`, `is`,`to`와 `access methods`(Getter), `mutator methods`(Setter)를 표준화된 naming convention(이름 짓는 관습)에 따라 access 가능해야 합니다.
- Class가 serializable해야 합니다. (`java.io.Serializable` 등 사용)


## Access Modifier

Access Modifier란 Java의 Class, method, variable, constructor 등의 **접근 권한**을 설정하는 keyword입니다. Encapsulation과 깊은 관계가 있습니다.

**Access Modifier**는 프로그래밍시 접근 권한을 설정하는 개발 용도로 **보안 기능으로 사용되는 것이 아닙니다.**

### Access Modifer의 설명

Access Modifier 키워드를 따로 설정하지 않으면 해당 Class, method, property는 `default`로 설정이 됩니다. 

`default` modifier는 `package-private`이라고도 불리는데 이는 **같은 package 내에서는 접근이 가능하지만, 다른 패키지에서는 접근이 불가**해서 입니다.

`public` 키워드로 declare(선언)된 class, method, property는 **모든 package의 모든 class에서 접근이 가능**합니다. 모든 Access 키워드 중 가장 덜 제한적(restrictive)입니다.

`private` 키워드로 declare(선언)된 method, property, constructor는 **같은 class에서만 접근 가능**합니다. 모든 Access 키워드 중 가장 제한적(restrictive)입니다.

`protected`로 declare(선언)된 method, property, constructor는 **1. 같은 패키지에서나(package-private와 같은 범위)**나 **2.해당 Class의 child Class에서** 접근 가능합니다.

## Non Access Modifier

위에서 배운 Modifier 외 Non-Access Modifier도 여러 종류가 있습니다.

### static

method가 특정 object가 아니라 class 직속이라는 겁니다. 새 Object(Instance, 실체)를 만들 필요 없이 Class(템플릿)에서 바로 call(호출) 가능

### final

변화를 제한하기 위한 keyword입니다. 새 value를 assign할 수 없지만, Object등에 붙은 경우 Object 내부의 value는 변경 될 수 있습니다.

### abstract

추상화를 위해 사용됩니다. Class와 method에 적용 가능합니다.

`abstract` class의 경우

- Instance를 생성 불가
- `abstract`와 일반 method 모두 가질 수 있음
- constructor를 가질 수 있음(inherit용, 직접 instantiate 불가)
- field를 가질 수 있음
- Interface를 `implements` 가능

`abstract` method의 경우

- Body(코드 구동부)가 없음
- `abstract` method는 `abstract` class만이 declare(선언) 가능

### sealed

Inheritance(상속)을 정교하게 관리하기 위해 사용합니다. 

## Java package 관리

### package란?

[Java에서 package](https://en.wikipedia.org/wiki/Java_package)는 class들을 namespace로 묶어서 관리합니다. `default`(access modifer 없을 시 기본)과 `protected` class의 경우 같은 패키지 내에서 access 가능합니다.

`package` 키워드로 

`import` 키워드로 같은 package 내의 class를 가져올시 namespace 없이 해당 class를 access 가능합니다;

## Pattern Matching

- instanceof
- Pattern Matching, 

## Design Pattern

더 깨끗하고 관리가 쉬운 시스템을 만들기 위해 **디자인 패턴(Design Pattern)이라는 재사용 가능한 템플릿**을 사용합니다. 이 디자인 패턴 템플릿은 Object의 생성, structure(구조), behavior (동작방식)과 관련된 issue(문제점)을 해결하기 위한 청사진을 제공합니다.

디자인 패턴은 더 효율적이고, scalable(확장/기능 추가가 쉽단 겁니다), 그리고 관리가 쉬운 시스템을 만드는데 다음과 같은 도움을 줍니다:

1. 재사용(Reusability): 패턴은 다양한 프로젝트 및 문제에 적용이 가능하여 비슷한 문제 해결에 필요한 시간과 노력을 줄입니다.
2. 표준화(Standardization): 개발자들이 서로 이해하는 템플릿을 제공하여 소통과 협업을 더 쉽게 합니다.
3. 효율성(Efficiency): 유명 디자인 패턴을 사용함으로써, 흔히 일어나는 문제에 해결책을 찾으려 머리 안 싸메고 더 빠르게 개발이 가능합니다.
4. 유연함(Flexibility): 패턴은 abstract(추상적)인 해결책/템플릿으로 다양한 시나리오와 요구사항에 맞춰 implement(구현) 될 수 있습니다.

[위 내용은 G4G의 article 중 하나를 요약한 것입니다](https://www.geeksforgeeks.org/system-design/software-design-patterns/)

**Gang of Four**: 디자인 패턴의 창시자격인 유명 사람들의 유명한 패턴들입니다. [시간 나시면 보세요](https://www.geeksforgeeks.org/system-design/gang-of-four-gof-design-patterns/)

### Design Pattern 종류

디자인 패턴은... 엄청 많습니다. 크게 분류를 나눠 보자면:

### Singleton Pattern

### Factory Pattern

### Proxy Pattern

### Builder Pattern