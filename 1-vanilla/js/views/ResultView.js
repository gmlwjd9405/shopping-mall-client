import View from './View.js'

const tag = '[ResultView]'
const ResultView = Object.create(View)

ResultView.setup = function (el) {
  this.init(el) // 내부 속성으로 element를 가짐 

}

// 서버에서 검색 결과 데이터를 받아서 동적으로 DOM을 만들어 주는 함수
ResultView.render = function (data = []) {
  console.log(tag, 'render()', data)
  this.el.innerHTML = data.length ? this.getSearchResultHtml(data) : '검색 결과가 없습니다.'
}

ResultView.getSearchResultHtml = function (data) {
  debugger
}

// MainController에서 ResultView를 사용할 것이므로 
export default ResultView