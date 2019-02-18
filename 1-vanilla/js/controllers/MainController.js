import FormView from '../views/FormView.js'

const tag = '[MainController]' // 디버깅을 위한 태그

export default {
  init() { 
    // console.log(tag, 'init()')
      // form에 해당하는 element를 넘겨준다.
     FormView.setup(document.querySelector('form'))
      .on('@submit', e => this.onSubmit(e.detail.input)) // chaining 이용 
  },

  onSubmit(input) {
    console.log(tag, 'onSubmit()', input)
  },
}