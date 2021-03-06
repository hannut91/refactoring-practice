# 6.1 함수 추출하기 (Extract Function)

코드 조각을 찾아 무슨 일을 하는지 파악한 다음, 독립된 함수로 추출하고 목적에 맞는 이름을 붙인다.

## 언제 해야 하는가?

* 코드를 보고 무슨 일을 하는지 파악이 어려울 때 `무슨 일`에 걸맞는 이름을 짓는다.

## 어떻게 해야 하는가?

* `어떻게`가 아닌 `무엇을`하는지가 잘 드러나는 함수를 새로 만든다.
* 추출할 코드를 원본 함수에서 복사하여 새 함수에 붙여넣는다.
* 추출한 코드 중 원본 함수의 지역 변수를 참조하거나 추출한 함수의 유효범위를 벗어나는 변수는 없는지 검사한다. 있다면 매개변수로 전달한다.
* 변수를 다 처리했다면 컴파일 한다.
* 원본 함수에서 추출한 코드 부분을 새로 만든 함수를 호출하는 문장으로 바꾼다.
* 테스스트 한다.
* 다른 코드에 방금 추출한 것과 똑같거나 비슷한 코드가 없는지 살핀다. 있다면 방금 추출한 새 함수를 호출하도록 바꿀지 검토한다.

## Sources

* https://refactoring.com/catalog/extractFunction.html
