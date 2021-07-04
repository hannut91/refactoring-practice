# 6.11 단계 쪼개기 (Split Phase)

서로 다른 두 대상을 한꺼번에 다루는 코드 각가을 별개 모듈로 나눈다.

## 언제 해야 하는가?

* 하나의 코드에서 두 개의 관심사를 다루고 있을 때

## 어떻게 해야 하는가?

동작을 여러 단계로 쪼개고, 각 단계에서 입력값을 다루기 편한 형태로 가공한다.

1. 두 번째 단계에 해당하는 코드를 독립 함수로 추출한다.
2. 테스트 한다.
3. 중간 데이터 구조를 만들어서 앞에서 추출한 함수의 인수로 추가한다.
4. 테스트 한다.
5. 추출한 두 번째 단계 함수의 매개변수를 하나씩 검토한다. 그중 첫 번째 단계에서 사용되는 것은 중간 데이터 구조로 옮긴다. 하나씩 옮길 때 마다 테스트 한다.
6. 첫 번째 단계 코드를 함수로 추출하면서 중간 데이터 구조로 반환하도록 만든다.

## Sources

* https://refactoring.com/catalog/splitPhase.html