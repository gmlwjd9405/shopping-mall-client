export default {
    template: '#tabs',
    props: ['tabs', 'selectedTab'],
    methods: {
        onClickTab(tab) {
            // 부모에게 눌린 tab의 정보를 알린다.
            this.$emit('@change', tab) // @change 이벤트 발생 -> parent 이벤트로 전달 

        }
    }
}