const tag = '[View]'

// 공통으로 사용되는 기능들
// ES6의 module pattern: _가 default exports를 의미 
// 해당 객체를 반환
export default {   
  init(el) { // 주입받는 element를 자신의 property로 주입
    if(!el) throw el
    this.el = el;
    return this
  },

  // 이벤트 리스너(또는 핸들러): 이벤트가 발생했을 때 그 처리를 담당하는 함수 
  on(event, handler) {
    // [방법2] 객체나 요소의 메소드에 이벤트 리스너를 전달
    // addEventListener(이벤트명, 실행할이벤트리스너, 이벤트전파방식)
    this.el.addEventListener(event, handler)
    return this
  },

  // 스스로 이벤트를 방출
  emit(event, data) {
    const evt = new CustomEvent(event, { detail: data } )
    this.el.dispatchEvent(evt);
    return this
  },

  hide() {
    this.el.style.display = 'none'
    return this
  },

  show() {
    this.el.style.display = ''
    return this
  }
  
  
  
}