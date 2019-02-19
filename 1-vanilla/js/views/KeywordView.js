import View from './View.js'

const tag = '[KeywordView]'
const KeywordView = Object.create(View)

KeywordView.setup = function (el) {
  this.init(el)

  return this
}

// 데이터를 받아서 화면에 뿌려주는 함수
KeywordView.render = function (data = []) {
  this.el.innerHTML = data.length ? this.getKeywordsHtml(data) : '추천 검색어가 없습니다.'
  this.bindClickEvent() // DOM 생성 후에 이벤트를 바인드해야 함.

  this.show()
}

// innerHTML에 들어갈 html 문자열(txt + inddex) return
KeywordView.getKeywordsHtml = function (data) {
  return data.reduce((html, item, index) => {
    // 클릭한 키워드 문자열을 알아내기 위해 data-keyword를 binding
    html += `<li data-keyword="${item.keyword}">
    <span class="number">${index + 1}</span>
    ${item.keyword}</li>`

    return html
  }, '<ul class="list">') + '</ul>'
}

KeywordView.bindClickEvent = function () {
  // el은 Array가 아니기 때문에 from을 통해 유사 모델을 만든다.
  // 각각의 li에 이벤트 리스너를 bind한다.
  Array.from(this.el.querySelectorAll('li')).forEach(li => {
    li.addEventListener('click', e => this.onClickKeyword(e))
  })
}

KeywordView.onClickKeyword = function (e) {
  // 클릭한 키워드 문자열(위의 getKeywordsHtml에서 binding함)을 가져온다.
  const { keyword } = e.currentTarget.dataset
  console.log(keyword)

  // 검색 결과 페이지로 이동하기 위해 MainController에게 알림 
  this.emit('@click', { keyword })
}



// MainController에서 KeywordView를 사용할 것이므로 
export default KeywordView