import View from './View.js'

const tag = '[TabView]'
const TabView = Object.create(View)

TabView.setup = function (el) {
  this.init(el) // 내부 속성으로 element를 가짐 
}

// tabName에 해당하는 tab을 활성화하는 함수 
TabView.setActiveTab = function (tabName) {
  // querySelectorAll: li에 해당하는 전체 데이터 반환 
  Array.from(this.el.querySelectorAll('li')).forEach(li => {
    li.className = li.innerHTML === tabName ? 'active' : ''
  })
  
}

export default TabView