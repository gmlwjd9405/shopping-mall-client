import KeywordView from './KeywordView.js'

const tag = '[HistoryView]'
const HistoryView = Object.create(KeywordView)

HistoryView.messages = {
  NO_KEYWORDS: '검색 이력이 없습니다.'
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

HistoryView.bindRemoveBtn = function () {
  // el은 Array가 아니기 때문에 from을 통해 유사 배열을 만든다.
  // 각각의 button에 이벤트 리스너를 bind한다.
  Array.from(this.el.querySelectorAll('button.btn-remove')).forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation()
      // 부모 element에서 keyword를 가져온다.
      this.onRemove(btn.parentElement.dataset.keyword)
    })
  })
}

HistoryView.onRemove = function (keyword) {
  this.emit('@remove', { keyword })

}

// MainController에서 HistoryView를 사용
export default HistoryView