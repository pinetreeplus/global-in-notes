# data structures

- [data structures](#data-structures)
  - [Complexity (복잡도)](#complexity-복잡도)
    - [Time Complexity (시간 복잡도)](#time-complexity-시간-복잡도)
    - [Space Complexity (공간 복잡도)](#space-complexity-공간-복잡도)
  - [List](#list)
  - [Stack](#stack)
  - [Queue](#queue)
  - [Tree](#tree)
  - [Heap](#heap)
  - [Map](#map)

비전공자여도 프로그래밍 시 데이터 구조의 기본을 모르면 `Map`과 같은 라이브러리를 필요할 때 사용하기 힘듭니다. 사칙연산 수준의 수학만으로 간단히 개념만 잡고 가겠습니다.

`for` loop 안에 `for` loop를 넣었는데 너무 느리다, 사람들 정보를 저장하고 검색해보고 싶은데 어떻게 해야 되지? 등이 궁금하시다면 Data structure를 알아야 합니다.

## Complexity (복잡도)

데이터 구조를 분석하기 위해선 간단히 Complexity (복잡도란)에 대해 알아야 합니다.

알로기즘의 complexity란 그걸 실행하기 위해 필요한 리소스(자원)의 양을 말합니다.

지금 알아야 할 건 **Big O notation(`O()`)**뿐입니다. `O(1)`, `O(n)`, `O(nlogn)`, `O(n^2)` 등으로 표현 되며


참고: Big O, small o, big omega, small omega 등 다양한 notation이 있습니다.

### Time Complexity (시간 복잡도)

**걸리는 시간**을 기준으로 algorithm의 complexity를 계산한 것입니다. 일반적으로 complexity를 계산할 때 사용하는 기준입니다.

### Space Complexity (공간 복잡도)

**필요한 메모리**를 기준으로 algorithm의 complexity를 계산한 것입니다.

중요하기는 하나 메모리가 부족한 경우가 아니라면 (e.g, 임베디드, 초거대 데이터 계산) 대부분의 경우 메모리를 덜 쓰고 1시간 걸리는거보다 10초만에 작업이 끝나는 걸 선호합니다. 

따라서 흔히 complexity를 계산한다고 할 때 time complexity를 위주로 보며 space complexity는 참고 자료 정도로 쓰이는 정도입니다.

## List

List는

## Stack

**LIFO(Last In Last Out)**

## Queue

**FIFO(First In First Out)**

## Tree

## Heap

## Map