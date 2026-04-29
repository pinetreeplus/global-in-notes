# data structures

- [data structures](#data-structures)
  - [Complexity (복잡도)](#complexity-복잡도)
    - [Time Complexity (시간 복잡도)](#time-complexity-시간-복잡도)
    - [Space Complexity (공간 복잡도)](#space-complexity-공간-복잡도)
  - [ADT (Abstract Data Type)란](#adt-abstract-data-type란)
  - [List](#list)
  - [Stack](#stack)
  - [Queue](#queue)
  - [Tree](#tree)
  - [Heap](#heap)
  - [Map](#map)
    - [Hash Map](#hash-map)

비전공자여도 프로그래밍 시 데이터 구조의 기본을 모르면 `Map`과 같은 라이브러리를 필요할 때 사용하기 힘듭니다. 사칙연산 수준의 수학만으로 간단히 개념만 잡고 가겠습니다.

`for` loop 안에 `for` loop를 넣었는데 너무 느리다, 사람들 정보를 저장하고 검색해보고 싶은데 어떻게 해야 되지? 등이 궁금하시다면 Data structure를 알아야 합니다.

## Complexity (복잡도)

데이터 구조를 분석하기 위해선 간단히 [Complexity](https://en.wikipedia.org/wiki/Computational_complexity) (복잡도란)에 대해 알아야 합니다.

알로기즘의 complexity란 그걸 실행하기 위해 필요한 리소스(자원)의 양을 말합니다.

지금 알아야 할 건 **Big O notation(`O()`)**뿐입니다. `O(1)`, `O(n)`, `O(n logn)`, `O(n^2)` 등으로 표현 되며 여기서 n은 데이터의 양을 의미합니다. Big O의 경우 최악의 상황을 가정하는 것입니다. 

Worst Case(최악), Average Case(평균적), Best Case(최선의 경우)를 간단히 예로 들면:

- 진짜 잘 풀리면 로또 사자마자 당첨 가능! -> Best Case
- 아마 100명 랜덤으로 돌리면 50번쯤에 배정되지 않을까 -> Average Case
- 회사 지원자 10001명 중 10000명 뽑는데 10001등이야! -> Worst Case

우리는 알고리즘의 잘 풀릴때에 관심 있는게 아니라 최악의 경우 어떻게 작동할지를 원하므로 Worst Case를 표현하는 Big O를 대부분의 경우 사용합니다.

참고: Big O, small o, big omega, small omega 등 다양한 notation이 있습니다.

### Time Complexity (시간 복잡도)

**걸리는 시간**을 기준으로 algorithm의 complexity를 계산한 것입니다. 일반적으로 complexity를 계산할 때 사용하는 기준입니다.

예를 들어 0~n의 `for` loop를 1번 돌리면 n번의 iteration을 진행하니 `O(n)`, 2번 nesting 해서 돌리면 `O(n*n)==O(n^2)`, 3번 하면 `O(n^3)`

### Space Complexity (공간 복잡도)

**필요한 메모리**를 기준으로 algorithm의 complexity를 계산한 것입니다.

중요하기는 하나 메모리가 부족한 경우가 아니라면 (e.g, 임베디드, 초거대 데이터 계산) 대부분의 경우 메모리를 덜 쓰고 1시간 걸리는거보다 10초만에 작업이 끝나는 걸 선호합니다. 

따라서 흔히 complexity를 계산한다고 할 때 time complexity를 위주로 보며 space complexity는 참고 자료 정도로 쓰이는 정도입니다.

## ADT (Abstract Data Type)란

ADT는 실제 컴퓨터의 메모리를 잡아먹는 것이 아닌 abstract(추상적)으로 정의된 데이터 타입을 의미합니다.

예를 들어 Hash Map이란 ADT를 Java에서는 `HashMap`으로 구현합니다.

## List

[List]()는

## Stack

**LIFO(Last In Last Out)**

책이 쌓여 있다고(Stacked) 생각해 봅시다. 맨 위에 쌓인 책이 맨 먼저 나갑니다.

## Queue

**FIFO(First In First Out)**

식당에서 줄을 서 있다고(Queued) 생각해 봅시다. 먼저 들어온 사람이 먼저 서빙 받습니다.

## Tree

## Heap

Heap이란

## Map

**[Map](https://en.wikipedia.org/wiki/Associative_array)은 key/value pair(쌍)을 저장하는 ADT입니다.**

**Dictionary**(파이썬 등), **key-value store**(key와 value쌍으로 보관하는 성질), associative array(수학적인 정의), symbol table(컴파일러/시스템 수준에서 쓰이는 말) 등으로도 불립니다.

- 참고: Store(또는 data store)라는 표현을 자주 보게 될텐데 말 그대로 데이터 저장 공간을 의미합니다. Object나 Data Structure(Map, Array...), DB(SQLite, PostgreSQL, MongoDB, Redis 등), LocalStorage/SessionStorage(브라우저) 등의 다양한 데이터 스토리지 등을 말합니다.

Map의 경우 메모리를 써서 Time Complexity를 줄인다 생각하면 편합니다.

### Hash Map

**Hash function** //TODO
**hash value** //TODO

**일반적인 경우 Hash Map은 Search, Insert, Delete의 complexity가 O(1)입니다.**

**Hash Collision(충돌)의 경우 `O(n)`까지** Time Complexity가 갈 수 있으나 현대적인 Hash Map의 경우 이를 방지하기 위해 여러 장치가 되어 있습니다.