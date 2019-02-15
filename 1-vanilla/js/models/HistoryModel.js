/* 검색 기록 */
export default {
  data: [ // Collection 형태 
    {keyword: "검색기록2", date:'12.03'},
    {keyword: "검색기록1", date:'12.02'},
    {keyword: "검색기록0", date:'12.01'},
  ],

  // data를 return 
  // return this.data가 아닌 이유: 
  // 서버에서 데이터를 비동기로 가져올 수도 있고 
  // 쿠키로 데이터를 얻을 수도 있기 때문에 공통적으로 사용하기 위해서 
  // 비동기로 구현
  list() {
    return Promise.resolve(this.data)
  },
  
  // 추가될 검색어를 받아서 실제 데이터에 있는지 확인 후 
  // 있으면 삭제 후 날짜 재설정 
  // 기존 데이터와 합쳐서 
  add(keyword='') {
    keyword = keyword.trim()
    if(!keyword) return
    if(this.data.some(item => item.keyword === keyword)) {
      this.remove(keyword)
    }

    const date = '12.31'
    this.data= [{keyword, date}, ...this.data]
  },

  remove(keyword) {
    this.data = this.data.filter(item => item.keyword !== keyword)
  }
}

