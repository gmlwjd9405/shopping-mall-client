<template>
    <ul class="tabs">
        <li v-for="tab in tabs" v-bind:class="{active: tab === selectedTab}" v-on:click="onClickTab(tab)">
        {{tab}}
        </li>
    </ul>
</template>

<script>
export default {
    props: ['tabs', 'selectedTab'],
    methods: {
        onClickTab(tab) {
            // 부모에게 눌린 tab의 정보를 알린다.
            this.$emit('@change', tab) // @change 이벤트 발생 -> parent 이벤트로 전달 

        }
    }
}
</script>

