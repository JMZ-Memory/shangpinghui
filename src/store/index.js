import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);
import Home from '@/store/Home'
import Search from '@/store/Search'

//对外暴露Store类的一个实例
export default new Vuex.Store({
    modules:{
        Home,Search
    }
})