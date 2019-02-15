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
}

FormView.showResetBtn = function(show = true) {
  this.resetEL.style.display = show ? 'block' : 'none'
}

// FormView를 controller에서 사용할 것이므로 
export default FormView

