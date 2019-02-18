import View from './View.js'

const tag = '[ResultView]'
const ResultView = Object.create(View)

ResultView.setup = function (el) {
  this.init(el) // 내부 속성으로 element를 가짐 

}

// 서버에서 검색 결과 데이터를 받아서 동적으로 DOM을 만들어 주는 함수
ResultView.render = function (data = []) {
  console.log(tag, 'render()', data)
  this.el.innerHTML = data.length ? this.getSearchResultsHtml(data) : '검색 결과가 없습니다.'
  this.show() // 중요!
}

// innerHTML에 들어갈 html 문자열만 return
ResultView.getSearchResultsHtml = function (data) {
  // reduce: 배열 안의 요소를 하나의 문자열로 연결 
  return data.reduce((html, item) => {
    html += this.getSearchItemHtml(item)
    return html // 추가된 li를 반환 
  }, '<ul>') + '</ul>'
}

// img + txt (SearchModel.js의 형태) 로 이루어진 li을 return 
ResultView.getSearchItemHtml = function (item) {
  return `<li>
    <img src="${item.image}">
    <p>${item.name}</p>
   </li>`
}

// MainController에서 ResultView를 사용할 것이므로 
export default ResultView