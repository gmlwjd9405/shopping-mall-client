import View from './View.js'

const tag = '[KeywordView]'
const KeywordView = Object.create(View)

KeywordView.setup = function (el) {
  this.init(el)
  
}

// 데이터를 받아서 화면에 뿌려주는 함수
KeywordView.render = function (data = []) {
  this.el.innerHTML = data.length ? this.getKeywordsHtml(data) : '추천 검색어가 없습니다.'
  this.show()
}

// innerHTML에 들어갈 html 문자열(txt + inddex) return
KeywordView.getKeywordsHtml = function (data) { 
  return data.reduce((html, item, index) => {
    html += `<li>
    <span class="number">${index + 1}</span>
    ${item.keyword}</li>`

    return html
  }, '<ul class="list">') + '</ul>'
}

// MainController에서 KeywordView를 사용할 것이므로 
export default KeywordView