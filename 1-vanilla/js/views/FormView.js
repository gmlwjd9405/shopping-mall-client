import View from './View.js'

/* 검색 결과를 보여주지 않아도 된다. MainController에게 알려주기만 하면 된다. */
const tag = '[FormView]'

// Object.create(): 지정된 프로토타입 객체 및 속성을 갖는 새 색체를 만든다.
// new View();와의 차이점??
const FormView = Object.create(View)

FormView.setup = function(el) {
  this.init(el)
  this.inputEL = el.querySelector('[type=text]')
  this.resetEL = el.querySelector('[type=reset]')
  this.showResetBtn(false) // 초기값은 숨김
  this.bindEvents()

  return this
}

// 버튼을 보여주는 함수
FormView.showResetBtn = function(show = true) {
  this.resetEL.style.display = show ? 'block' : 'none'
}

// keyup에 대한 이벤트 바인드
FormView.bindEvents = function() {
  this.on('submit', e => e.preventDefualt())
  this.inputEL.addEventListener('keyup', e => this.onKeyup(e))
}

// 1. 입력한 문자열이 있는 경우에만 버튼이 나오도록 
// 2. key가 enter이면 MainController에게 알림(ResultView가 결과를 보여줌)
FormView.onKeyup = function(e) {
  const enter = 13
  this.showResetBtn(this.inputEL.value.length)
  
  if (e.keyCode !== enter) return
  this.emit('@submit', { input: this.inputEL.value })
}

// FormView를 controller에서 사용할 것이므로 
export default FormView

