import View from './View.js'

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
}

// 버튼을 보여주는 함수
FormView.showResetBtn = function(show = true) {
  this.resetEL.style.display = show ? 'block' : 'none'
}

FormView.bindEvents = function() {
  this.inputEL.addEventListener('keyup', e => this.onKeyup(e))
}

// 입력한 문자열이 있는 경우에만 버튼이 나오도록 
FormView.onKeyup = function() {
  this.showResetBtn(this.inputEL.value.length)
  
}


// FormView를 controller에서 사용할 것이므로 
export default FormView

