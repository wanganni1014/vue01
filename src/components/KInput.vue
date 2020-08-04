<template>
    <div>
        <div class="my-input">
            <!-- v-bind相当于 运算展开符号 -->
            <input :value="value" @input="onInput" v-bind="$attrs">
        </div>
        <div>message is: {{info.message}}</div>
        <input type="text" v-model="info.message">
        <button @click="change">clike Me!</button>
    </div>
</template>

<script>
    export default {
        props: {
            value: {
                type: String,
                default: ''
            },
        },
        data() {
            return {
                info: {},
            }
        },

        methods: {
            /**
             * 我们得知vue在初始化的时候会对data中所有已经定义的对象及其子属性进行遍历，给他们添加getter和setter，
             * 使得他们变成响应式的，但是vue不能检测对象属性的添加或删除。
             * 但是，可以使用 Vue.set(object, propertyName, value)方法向嵌套对象添加响应式属性
             */
            change() {
                this.info.message = 'haha'
                // this.$set(this.info, this.info.message)
            },

            onInput(e) {
                this.$emit('input', e.target.value)
            }
        },
    }
</script>

<style scoped>
    .my-input{
        background: plum;
        margin-bottom: 20px;
    }
</style>