import View from './View.js'

const tag = '[HistoryView]'
const HistoryView = Object.create(View)

HistoryView.setup = function (el) {
  this.init(el)
  
  return this
}

HistoryView.render = function (data = []) {
  this.el.innerHTML = data.length ? this.getHistorysHtml(data) : '최근 검색어가 없습니다.'
  
}

HistoryView.getHistorysHtml = function (data) {
  return data.reduce((html, item, index) => {
    html += `<li data-keyword="${item.keyword}">
    <span class="number">${index + 1}</span>
    ${item.keyword}</li>`

    return html
  }, '<ul class="list">') + '</ul>'
}

// MainController에서 HistoryView를 사용
export default HistoryView