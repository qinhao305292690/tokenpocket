// import '@babel/polyfill'
import Vue from 'vue'
import App from './App.vue'
import router from './route'
import store from './store'
import './utils/index.js'
// import './mock'
import 'lib-flexible/flexible'
Vue.config.productionTip = false

if (typeof Android == "undefined") {
    window.Android = {
        returnResult: alert.bind(window)
    }
}

export const vm = new Vue({
    router,
    store,
    render: h => h(App),
})
vm.$mount('#app')

// 添加一个注释
