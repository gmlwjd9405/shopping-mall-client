export default {
    template: '#list',
    props: ['data', 'type'],
    // 변수처럼 함수 사용 가능
    computed: {
        keywordType() {
            return this.type === 'keywords'
        },
        historyType() {
            return this.type === 'history'
        }
    },
    methods: {
        onClickList(keyword) {
            this.$emit('@click', keyword)

        },
        onRemoveList(keyword) {
            this.$emit('@remove', keyword)

        }
    }
}