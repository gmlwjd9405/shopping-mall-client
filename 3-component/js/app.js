import SearchModel from './models/SearchModel.js'
import KeywordModel from './models/KeywordModel.js'
import HistoryModel from './models/HistoryModel.js'

import FormComponent from './components/FormComponent.js' // 추가
import ResultComponent from './components/ResultComponent.js' // 추가
import ListComponent from './components/ListComponent.js' // 추가
import TabComponent from './components/TabComponent.js' // 추가

// 파라미터로 Object를 넘겨준다.
new Vue({
  /* selector의 id를 app으로 넘겨준다. */
  el: '#app', // element:  Vue instance가 html 어디에 마운트될 것인지 설정 

  /* 데이터 값을 저장 */
  data: {
    query: '', // 입력데이터를 받아서 저장 -> props를 통해 다른 컴포넌트로 값 전달 
    submitted: false, // 검색했는지 여부 

    tabs: ['추천 검색어', '최근 검색어'],
    selectedTab: '',

    searchResult: [], // 검색 결과의 데이터 
    keywords: [], // 추천 검색어 
    history: [], // 최근 검색어 
  },

  /* Component 저장 */
  components: {
    'search-form': FormComponent,
    'search-result': ResultComponent,
    'list': ListComponent,
    'tabs': TabComponent, 

  },

  /* (Lifecyle) vue instance가 생성될 때 호출되는 함수 */
  created() {
    this.selectedTab = this.tabs[0]
    this.fetchKeyword()
    this.fetchHistory()
  },

  /* DOM과 binding할 함수 정의 */
  methods: {
    onSubmit(query) {
      // FormComponent의 $emit에서 넘겨준 inputValue값을 query에 저장
      this.query = query

      // e.preventDefault의 역할 (화면 갱신을 막는다.) - vue에서 처리 
      this.search()
    },
    onReset() {
      this.resetForm()
    },
    onClickTab(tab) {
      this.selectedTab = tab
    },
    onClickKeyword(keyword) {
      this.query = keyword // 입력한 값을 저장(binding)
      this.search()
    },
    onClickHistory(keyword) {
      this.query = keyword // 입력한 값을 저장(binding)
      this.search()
    },
    onClickRemoveHistory(keyword) {
      HistoryModel.remove(keyword)
      this.fetchHistory()
      // 이벤트 전파 발생 
    },
    fetchKeyword() {
      KeywordModel.list().then(data => {
        this.keywords = data
      })
    },
    fetchHistory() {
      HistoryModel.list().then(data => {
        this.history = data
      })
    },
    resetForm() {
      this.query = ''
      // 검색 결과 숨기기 
      this.submitted = false
      this.searchResult = []
    },
    search() {
      SearchModel.list().then(data => {
        this.submitted = true // 검색함 
        this.searchResult = data
      })
      HistoryModel.add(this.query)
      this.fetchHistory()
    },
  }

})