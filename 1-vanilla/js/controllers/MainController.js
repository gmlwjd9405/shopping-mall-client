import FormView from '../views/FormView.js'
import ResultView from '../views/ResultView.js'
import TabView from '../views/TabView.js'
import KeywordView from '../views/KeywordView.js'

import SearchModel from '../models/SearchModel.js'
import KeywordModel from '../models/KeywordModel.js'

const tag = '[MainController]' // 디버깅을 위한 태그

export default {
  init() { 
    // console.log(tag, 'init()')
    
    // form에 해당하는 element를 넘겨준다. chaining 이용 
    FormView.setup(document.querySelector('form')) // tag name
      .on('@submit', e => this.onSubmit(e.detail.input)) 
      .on('@reset', e => this.onResetForm())

    // 해당 id에 해당하는 element를 넘겨준다.
    ResultView.setup(document.querySelector('#search-result')) // id

    TabView.setup(document.querySelector('#tabs')) // id
      .on('@change', e => this.onChangeTab(e.detail.tabName))
    this.selectedTab = '추천 검색어' // 초기 활성화 tab

    KeywordView.setup(document.querySelector('#search-keyword')) // id
      .on('@click', e => this.onClickKeyword(e.detail.keyword))

    this.renderView()
  },

  // controller가 가지고 있는 모든 View들을 한 번에 그려주는 함수
  renderView() {
    console.log(tag, 'renderView()')
    TabView.setActiveTab(this.selectedTab)

    if (this.selectedTab === '추천 검색어') { 
      this.fetchSearchKeyword()
    } else {
      
    }

    ResultView.hide() // 처음엔 감춘다.
  },

  fetchSearchKeyword() {
    KeywordModel.list().then(data => { // 해당 데이터를 가져와 화면에 뿌려준다.
      KeywordView.render(data)
    })
  },

  // Enter -> 입력 데이터를 받아서 검색 요청
  onSubmit(input) {
    console.log(tag, 'onSubmit()', input)
    this.search(input)
  },

  // 검색폼이 초기화 및 검색 결과 삭제
  onResetForm() {
    console.log(tag, 'onResetForm()')
    ResultView.hide() // View의 hide
  },

  // Server에 검색 결과를 요청하는 api를 호출
  search(query) {
    console.log(tag, 'search()', query)
    // call search api (임시적으로 SearchModel에 저장해둔 데이터를 가져옴)
    SearchModel.list(query).then(data => {
      this.onSearchResult(data)
    })
  },
  
  // Server로부터 받은 검색 결과를 화면에 출력 
  onSearchResult(data) {
    // 기존에 있던 TabView와 KeywordView를 없앤다.
    TabView.hide()
    KeywordView.hide()
    
    ResultView.render(data)
  },

  onChangeTab(tabName) {
    debugger
  },

  // 검색 결과 리스트 목록에서 키워드 선택 시 호출되는 함수 
  onClickKeyword(keyword) {
    this.search(keyword)
  }
}