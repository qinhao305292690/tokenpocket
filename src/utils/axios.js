import axios from 'axios'
import Vue from 'vue'
import store from '../store'
// axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['Content-Type'] = 'application/json';
const serve = axios.create({
    headers: {
        'content-type': 'application/json'
    },
    baseURL: 'http://103.145.191.150:3000'
})

// serve.interceptors.request.use(
//     config => {
//         const token = store.getters.userData.token
//         if (token) { // 判断是否存在token，如果存在的话，则每个http header都加上token
//             config.headers.token = token //请求头加上token
//         }
//         return config
//     },
//     err => {
//         return Promise.reject(err)
//     })

// http response 拦截器
serve.interceptors.response.use(
    response => {
            //拦截响应，做统一处理
        if (response.status === 200) {
            return {
                ...response.data,
                code: response.status
            }
        }
    },
    //接口错误状态处理，也就是说无响应时的处理
    error => {
        return Promise.reject(error) // 返回接口返回的错误信息
    })
Vue.prototype.$axios = serve

export default serve
