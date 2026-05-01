# algorithms

- [algorithms](#algorithms)
  - [sort (정렬)](#sort-정렬)
    - [bubble sort](#bubble-sort)
    - [merge sort](#merge-sort)
    - [quick sort](#quick-sort)
    - [insertion sort](#insertion-sort)
    - [heap sort](#heap-sort)

알고리즘은 데이터에 작업을 해 결과를 내는 함수입니다.

**개념과 시간 복잡도** 로 정리하겠습니다.

## sort (정렬)

정렬은 가장 기초적이고 많이 쓰이는 알고리즘 종료입니다.

인터뷰시 가장 많이 나올 sorting 알고리즘 5가지를 위주로 알아보겠습니다.

### bubble sort

<img src="./images/Bubblesort-edited-color.svg.png" width="500"/>

**input 받은 리스트를 돌면서, 현재 값을 다음 값과 비교하면서, 필요시 둘의 값을 swap(교체)하는 것입니다.**. 이 작업을 리스트가 더 이상 swap이 필요 없을때까지 반복합니다. 

**Worst case 시간복잡도는 비교와 swap(교체) 모두 `O(n^2)`입니다.**

- 참고1: 인터뷰에서 **Merge sort와 quick sort 대신 쓸 이유는 일반적으로 없고** 공간복잡도(메모리 이용량)가 `O(1)` 라는 것이 이득이기는 하나 둘의 시간 복잡도가 `O(n log n)`이어서 일반적으로 대체 됩니다.
- 참고2: Sinking sort라고도 불립니다

### merge sort

<img src="./images/Merge-sort-example-300px.gif" width="500"/>

### quick sort

<img src="./images/Sorting_quicksort_anim.gif" width="500"/>

### insertion sort

<img src="./images/Insertion_sort.gif" width="500"/>

### heap sort

<img src="./images/Sorting_heapsort_anim.gif" width="500"/>