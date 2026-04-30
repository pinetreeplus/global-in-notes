# cs basics

- [cs basics](#cs-basics)
  - [컴퓨터의 동작구조](#컴퓨터의-동작구조)
  - [소프트웨어의 동작구조](#소프트웨어의-동작구조)
  - [](#)
  - [Automata (오토마타)](#automata-오토마타)
    - [Finite State Machine (FSM)](#finite-state-machine-fsm)
    - [PushDown Automata (PDA)](#pushdown-automata-pda)

## 컴퓨터의 동작구조

**컴퓨터 binary(2개를 의미) 데이터를 처리하는 digital 기계입니다.**

- 참고1: Continuous(연속적)또는 analogous(아날로그한) 데이터는 실수(R) space 처럼 연속적인 범위를 다루는 것입니다. 저울을 생각해 보면 값이 바늘이 가르키는 값이 부드럽게 이어집니다. 
  - 참고2: 엄밀히 따지자면 컴퓨터의 부동소수점 표현은 실수가 아닙니다.
- 참고2: Discrete(이산적) 혹은 digital(디지털) 데이터는 정수(Z), 자연수(N)와 같이 딱딱 떨어지는 범위를 다룹니다. 우리가 쓰는 binary 컴퓨터, 날짜(1월 1일 -> 1월 2일) 등이 해당합니다.
  - 참고2-1: 정의에 따라 0은 N(자연수)에 포함될 수도 안 될 수도 있음. N<sub>0</sub>(0 포함하는 자연수), N<sup>+</sup>(양의 정수) 등으로 확실히 함.
- 참고3: Analogue 컴퓨팅(discrete 않고 연속적), Quantum 컴퓨팅(binary하지 않고 양자의 성질을 이용한 컴퓨팅) 등 binary 외에도 실험적/보조적인 컴퓨팅 방식이 있기는 합니다.

## 소프트웨어의 동작구조

게임 파일이 있다고 칩시다. 이를 누르면 게임이 실행됩니다.

이 때 게임 **파일(disk에 존재)은 (소프트웨어) 프로그램**이며 프로그램의 **메모리에 load된 instance를 프로세스**라고 부릅니다.

- 참고1: 게임 파일을 2번 눌러 2개 실행 시키면 instance(process)가 2개 있는겁니다.
- 참고2: process는 실행 상태에 따라 `Ready`, `Running`, `Blocked`등으로 나뉠 수 있습니다. 

## 

## Automata (오토마타)

IT는 빠르게 변하는거 같지만 컴퓨터가 데이터를 처리하는 방식은 오랫동안 그대로입니다.

### Finite State Machine (FSM)



### PushDown Automata (PDA)