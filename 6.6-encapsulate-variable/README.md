# 6.6 변수 캡슐화하기 (Encapsulate Variable)

변수를 캡슐화하여 변수를 변경하고 사용하는 코드를 감시할 수 있는 통로를 만든다.

## 데이터 캡슐화

데이터를 변경하고 사용하는 코드를 감시할 수 있는 확실한 통로가 되어주기 때문에 데이터 변경 전이나 검증이나 변경 후 추가 로직을 쉽게 끼어 넣을 수 있다. 데이터의 유효범위가 넓을수록 캡슐화해야 한다.

## 불변 데이터

불변 데이터는 가변 데이터보다 캡슐화할 이유가 적다. 데이터가 변경될 일이 없어서 갱신 전 검증 같은 추가 로직이 자리할 곤간을 마련할 필요가 없기 때문이다. 게다가 불변 데이터는 옮길 필요 없이 그냥 복제하면 된다. 그래서 원본 데이터를 참조하는 코드를 변경할 필요도 없고, 데이터를 변형시키는 코드를 걱정할 일도 없다.

## 언제 해야 하는가?

* 변수에 접근할 수 있는 범위가 넓을 때

## 어떻게 해야 하는가?

1. 변수로의 접근과 갱신을 전담하는 캡슐화 함수를 만든다.
2. 정적 검사를 수행한다.
3. 변수를 직접 참조하던 부분을 모두 적절한 캡슐화 함수 호출로 바꾼다. 하나씩 바꿀 때마다 테스트한다.
4. 변수의 접근 범위를 제한한다.
5. 테스트 한다.
6. 변수 값이 레코드라면 레코드 캡슐화하기를 적용할지 고려해본다.

## Sources

* https://refactoring.com/catalog/encapsulateVariable.html
