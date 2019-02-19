import View from './View.js'

const tag = '[HistoryView]'
const HistoryView = Object.create(View)

HistoryView.messages = {
  NO_KEYWORDS: '검색 이력이 없습니다.'
}

HistoryView.setup = function (el) {
  this.init(el)

  return this
}

HistoryView.render = function (data = []) {
  this.el.innerHTML = data.length ? this.getKeywordsHtml(data) : this.messages.NO_KEYWORDS
}

HistoryView.getKeywordsHtml = function (data) {
  return data.reduce((html, item) => {
    html += `<li data-keyword="${item.keyword}">
    ${item.keyword}
    <span class="date">${item.date}</span>
    <button class="btn-remove"></button>
    </li>`

    return html
  }, '<ul class="list">') + '</ul>'

}

// MainController에서 HistoryView를 사용
export default HistoryView