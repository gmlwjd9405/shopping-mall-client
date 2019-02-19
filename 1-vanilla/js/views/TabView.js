import View from './View.js'

const tag = '[TabView]'
const TabView = Object.create(View)

TabView.setup = function (el) {
  this.init(el) // 내부 속성으로 element를 가짐 
  this.bindClick()

  return this
}

// tabName에 해당하는 tab을 활성화하는 함수 
TabView.setActiveTab = function (tabName) {
  // querySelectorAll: li에 해당하는 전체 데이터 반환 
  Array.from(this.el.querySelectorAll('li')).forEach(li => {
    li.className = li.innerHTML === tabName ? 'active' : ''
  })
  this.show() // 중요!
}

// li의 각 요소에 click 이벤트를 달고, onClick 함수에 tabName을 넘긴다. 
TabView.bindClick = function () {
  Array.from(this.el.querySelectorAll('li')).forEach(li => {
    li.addEventListener('click', e => this.onClick(li.innerHTML))
  })
}

// tabName에 해당하는 tab을 활성화하고 MainController에게 알림
TabView.onClick = function (tabName) {
  this.setActiveTab(tabName)
  this.emit('@change', { tabName }) // @change event를 알림 
}

// TabView를 Controller에서 사용할 것이므로 
export default TabView