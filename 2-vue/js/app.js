// 파라미터로 Object를 넘겨준다.
new Vue({
  // selector의 id를 app으로 넘겨준다.
  el: '#app', // element: Vue instance가 html 어디에 마운트될 것인지 설정 
  data: {
    query: '' // query: 입력데이터를 받아서 저장
  },
  // DOM과 binding할 함수 정의 
  methods: {
    onSubmit(e) {
      // e.preventDefault의 역할 (화면 갱신을 막는다.)
    }
  }

})