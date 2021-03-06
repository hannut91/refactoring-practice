# 6.4 변수 인라인 하기 (Inline Variable)

변수를 제거하고 표현식을 직접 사용한다.

## 언제 해야 하는가?

* 변수 이름이 원래 표현식과 다를 바 없을 때
* 변수가 주변 코드를 리팩터링하는데 방해가 될 때

## 어떻게 해야 하는가?

* 대입문의 우변에서 부작용(Side effect)가 발생하는지 확인한다.
* 변수가 불변으로 선언되지 않았다면 불변으로 만든 후 테스트한다. 이렇게 하면 변수에 값이 단 한 번만 대입되는지 확인할 수 있다.
* 이 변수를 가장 처음 사용하는 코드를 찾아서 대입문 우변의 코드로 바꾼다.
* 테스트한다.
* 변수를 사용하는 부분을 모두 교체할 때 까지 이 과정을 반복한다.
* 변수 선언문과 대입문을 지운다.
* 테스트 한다.

## Sources

* https://refactoring.com/catalog/inlineVariable.html
