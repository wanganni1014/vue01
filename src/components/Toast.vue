<template>
    <div v-if="isShow">
        {{content}}
    </div>
</template>

<script>
    export default {
        props: {
            content: {
                type: String,
                default: '老杨喊你来搬砖'
            },
        },

        data() {
            return {
                isShow: false
            }
        },

        methods: {
            show() {
                this.isShow = true;
                setTimeout(() => {
                    this.hide()
                }, 3000)
            },

            hide() {
                this.isShow = false
                this.remove()
            }
        },
    }
</script>

<style scoped>
    div {
        width: 100%;
        height: 60px;
        background-color: pink;
    }
</style>