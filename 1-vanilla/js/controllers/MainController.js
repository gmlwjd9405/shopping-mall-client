import FormView from '../views/FormView.js'

const tag = '[MainController]' // 디버깅을 위한 태그

export default {
  init() {
    console.log(tag, 'init()')
    FormView.setup(document.querySelector('form')) // form에 해당하는 element를 넘겨준다.
    
  }
}