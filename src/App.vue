<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <k-input v-model="modal.userName"/>
    {{modal.userName}}  
  </div>
</template>

<script>
import Toast from './components/Toast.vue'
import KInput from './components/KInput.vue'
import HelloWorld from './components/HelloWorld.vue'
import create from './utils/create';

export default {
  name: 'App',
  inheritAttrs: false,
  components: {
    HelloWorld,
    KInput
  },
  data() {
    return {
      modal: {
        userName: ''
      }
    }
  },

  methods: {
    showNotice() {
      const Notice = create(Toast, {
        content: '社会社会'
      })
      Notice.show()
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
