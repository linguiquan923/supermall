import Vue from 'vue'
import Vuex, { Store } from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'


//1、安装插件
Vue.use(Vuex)

const state = {
    carList:[]
}
//2、创建Store对象
const store = new Store({
    state,
    //一般来说mutations的代码只做单一的操作
    mutations,
    actions,
    getters,
})

//3、Vue实例上
export default store