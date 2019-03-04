<template>
  <div>
    <header>
      <h2 class="container">검색</h2>
    </header>

    <div class="container">
        <!-- App.js의 Vue instance로부터 값(query)을 받는다. (즉, SearchForm 외부에서 값을 받는다.) -->
        <search-form v-bind:value="query" v-on:@submit="onSubmit" v-on:@reset="onReset"></search-form>
        <!-- 검색한 경우에만 출력하도록 -->
        <div class="content">
          <div v-if="submitted">
            <!-- App.js의 Vue instance로부터 값을 받는다. -->
            <search-result v-bind:data="searchResult" v-bind:query="query"></search-result>
          </div>
          <div v-else>
            <!-- 속성을 정의할 때는 - (ex. selected-tab) -->
            <tabs v-bind:tabs="tabs" v-bind:selected-tab="selectedTab" v-on:@change="onClickTab"></tabs>

            <div v-if="selectedTab === tabs[0]">
              <list v-bind:data="keywords" type="keywords" v-on:@click="onClickKeyword"></list>
            </div>
            <div v-else>
              <list v-bind:data="history" type="history" v-on:@click="onClickKeyword" v-on:@remove="onClickRemoveHistory"></list>
            </div>
          </div>
        </div>
    </div>
  </div>

</template>

<script>
import SearchModel from './models/SearchModel.js'
import KeywordModel from './models/KeywordModel.js'
import HistoryModel from './models/HistoryModel.js'

import FormComponent from './components/FormComponent.vue'
import ResultComponent from './components/ResultComponent.vue';
import ListComponent from './components/ListComponent.vue';
import TabComponent from './components/TabComponent.vue';

export default {
  name: 'app',
  data () {
    return {
      query: '', // 입력데이터를 받아서 저장 -> props를 통해 다른 컴포넌트로 값 전달 
      submitted: false, // 검색했는지 여부 

      tabs: ['추천 검색어', '최근 검색어'],
      selectedTab: '',

      searchResult: [], // 검색 결과의 데이터 
      keywords: [], // 추천 검색어 
      history: [], // 최근 검색어 
    }
  },
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

}
</script>

<style>
</style>
