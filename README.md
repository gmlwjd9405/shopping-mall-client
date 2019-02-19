# shopping-mall-client
### vue.js를 이용한 쇼핑몰 검색 페이지 구현 
   
---

## Requirements
- 검색폼 구현
  - [x] 검색 상품명 입력 폼이 위치한다. 검색어가 없는 경우이므로 x 버튼을 숨긴다
  - [x] 검색어를 입력하면 x버튼이 보인다 
  - [x] 엔터를 입력하면 검색 결과가 보인다 (컨트롤러에게 위임 - vanilla js)
  - [x] x 버튼을 클릭하거나, 검색어를 삭제하면 검색 결과를 삭제한다 (컨트롤러에게 위임 - vanilla js)
- 검색 결과 구현
  - [x] 검색 결과가 검색폼 아래 위치한다
  - [x] 검색 결과가 보인다
  - [x] x 버튼을 클릭하면 검색폼이 초기화 되고, 검색 결과가 사라진다
- 탭 구현
  - [x] 추천 검색어, 최근 검색어 탭이 검색폼 아래 위치한다
  - [x] 기본으로 추천 검색어 탭을 선택한다
  - [x] 각 탭을 클릭하면 탭 아래 내용이 변경된다
- 추천 검색어 구현
  - [x] 번호, 추천 검색어 목록이 탭 아래 위치한다
  - [x] 목록에서 검색어를 클릭하면 선택된 검색어로 검색 결과 화면으로 이동
  - [x] 검색폼에 선택된 추천 검색어 설정
- 최근 검색어 구현
  - [x] 최근 검색어, 목록이 탭 아래 위치한다
  - [x] 목록에서 검색어를 클릭하면 선택된 검색어로 검색 결과 화면으로 이동
  - [x] 검색일자, 버튼 목록이 있다
  - [x] 목록에서 x 버튼을 클릭하면 선택된 검색어가 목록에서 삭제
  - [x] 검색시마다 최근 검색어 목록에 추가된다

## [Step1] MVC 패턴 (vanilla js)

## [Step2] MVVM 패턴 (Vue.js)
### ViewModel
- Model과 비슷하지만 다른 역할
- Model과 View 사이에 존재
    - View에 적합하게 가공된다.
    - View가 변경될 때마다 자동으로 즉시 반영(갱신)된다.
    - 하나의 View에는 하나의 ViewModel이 일대일로 매칭된다.
    - 즉, View가 많을 때는 여러 개의 ViewModel이 생긴다.
### Directive
- v-model 
    - **양방향 바인딩 지원**
    - 입력 데이터와 vue instance의 data 간의 binding하는 역할 
    - vue instance의 data에 값을 설정해두면 DOM의 input element에 설정된다.
- v-on 
    - DOM에서 일어나는 이벤트를 listen하는 역할 
    - vue instance의 함수와 binding
    - v-on:이벤트 종류="함수 이름"
        - `<form v-on:submit.prevent="onSubmit">`
        - .prevent: e.preventDefault의 역할 (화면 갱신을 막는다.)
        - `<form v-on:click.stop="onClickRemoveHistory(item.keyword)">`
        - .stop: 이벤트 전파(bubbling) 방지 
- v-if / v-else
    - 해당하는 값이 참일 때만 DOM을 출력하는 역할 
- v-for
    - 해당하는 값을 순차적으로 받아오는 역할
- v-bind
    - attribute의 값을 지정하는 역할     
    - `<img v-bind:src="item.image">`
    - v-bind:"지정한 속성"="{설정할 값: 설정 조건}
        - `<li v-for="tab in tabs" v-bind:class="{active: tab === selectedTab"> {{tab}} </li>`
### Lifecycle
- create()
    - vue instance가 생성될 때 호출되는 함수 

## [Step3] Component
 
---

## Development Environment
- Language
    - vanilla js
    - HTML, CSS
- [Vue.js](https://vuejs.org/)
- [lite-server](https://github.com/johnpapa/lite-server)

## References
* [김정환 - 실습 UI 개발로 배워보는 순수 javascript 와 VueJS 개발](https://www.inflearn.com/course/%EC%88%9C%EC%88%98js-vuejs-%EA%B0%9C%EB%B0%9C-%EA%B0%95%EC%A2%8C/)
