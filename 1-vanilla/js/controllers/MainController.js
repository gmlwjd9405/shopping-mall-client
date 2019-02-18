import FormView from '../views/FormView.js'
import ResultView from '../views/ResultView.js'

import SearchModel from '../models/SearchModel.js'

const tag = '[MainController]' // 디버깅을 위한 태그

export default {
  init() { 
    // console.log(tag, 'init()')
    
    // form에 해당하는 element를 넘겨준다.
    FormView.setup(document.querySelector('form')) // tag name
      .on('@submit', e => this.onSubmit(e.detail.input)) // chaining 이용 
      .on('@reset', e => this.onResetForm())

    // 해당 id에 해당하는 element를 넘겨준다.
    ResultView.setup(document.querySelector('#search-result')) // id
  },

  // Server에 검색 결과를 요청하는 api를 호출
  search(query) {
    console.log(tag, 'search()', query)
    // call search api (임시적으로 SearchModel에 저장해둔 데이터를 가져옴)
    SearchModel.list(query).then(data => {
      this.onSearchResult(data)
    })
  },

  // Entet -> 입력 데이터를 받아서 검색 요청
  onSubmit(input) {
    console.log(tag, 'onSubmit()', input)
    this.search(input)
  },

  onResetForm() {
    console.log(tag, 'onResetForm()')
  },

  // Server로부터 받은 검색 결과를 화면에 출력 
  onSearchResult(data) {
    ResultView.render(data)
  },
}