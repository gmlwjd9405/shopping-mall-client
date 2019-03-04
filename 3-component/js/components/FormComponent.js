export default {
  template: '#search-form',

  props: ['value'], // parent(query) -> child(value)

  data() {
    return {
      inputValue: this.value, // App.js의 값(query)으로 inputValue를 세팅 

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