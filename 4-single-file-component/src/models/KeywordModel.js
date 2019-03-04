/* 추천 키워드 */
export default {
  data: [
    { keyword: '이탈리아' },
    { keyword: '셰프의 요리' },
    { keyword: '제철' },
    { keyword: '홈파티' },
  ],

  list() {
    return new Promise(res => {
      setTimeout(() => { res(this.data) }, 200)
    })
  }
}