export default {
  template: '#search-form',

  props: ['value'], // parent(query) -> child(value)

  data() {
    return {
      inputValue: this.value, // App.js의 값(query)으로 inputValue를 세팅 

    }
  },

  // 어떤 View 값을 감시하고 있다가 변경되면 처리하는 함수
  watch: {
    value(newVal, oldVal) {
      this.inputValue = newVal
    }
  },

  methods: {
    onSubmit() {
      this.$emit('@submit', this.inputValue) // @submit 이벤트 발생 -> parent 이벤트로 전달 

    },
    onKeyup() {
      if (!this.inputValue.length) this.onReset()
    },
    onReset() {
      this.inputValue = ''
      this.$emit('@reset')

    }
  }
}