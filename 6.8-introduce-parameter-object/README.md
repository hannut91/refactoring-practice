# 6.8 매개변수 객체 만들기 (Introduce Parameter Object)

매개변수를 객체로 만든다. 데이터 뭉치를 데이터 구조로 묶으면 데이터 사이의 관계가 명확해진다. 같은 데이터 구조를 사용하는 모든 함수가 원소를 참조할 대 똑같은 이름을 사용하기 때문에 일관성도 높아진다.

## 언제 해야 하는가?

* 매개변수가 많아져서 복잡성이 증가할 때
* 매개변수가 관계가 있어서 구조로 묶을 수 있을 때

## 어떻게 해야 하는가?

* 적당한 데이터 구조가 아직 마련되어 있지 않다면 새로 만든다.
* 테스트한다.
* 함수 선언 바꾸기로 새 데이터 구조를 매개변수로 추가한다.
* 테스트한다.
* 함수 호출 시 새로운 데이터 구조 인스턴스를 넘기도록 수정한다. 하나씩 수정할 때마다 테스트한다.
* 기존 매개변수를 사용하던 코드를 새 데이터 구조의 원소를 사용하도록 바꾼다.
* 다 바꿨다면 기존 매개변수를 제거하고 테스트한다.

## Sources

* https://refactoring.com/catalog/introduceParameterObject.html