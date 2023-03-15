import vue from 'vue'
import Vuex from 'vuex'
import user from './user'
import payload from './payload'
import getters from "./getters";

vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        user,
        payload
    },
    mutations: {
        TEST_OA (param,p){
            console.log(param);
            alert(p)
        }
    },
    getters
})
