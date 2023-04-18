import { reqCategoryList, reqGetBannerList } from "@/api";

//state:仓库存储数据的地方
const state = {
    categoryList:[],
    //轮播图数据
    bannerList:[]
};
//mutations：修改state的唯一手段
const mutations = {
    CATEGORYLIST(state,categoryList){
        state.categoryList = categoryList;
    },
    GETBANNERLIST(state,bannerList){
        state.bannerList = bannerList
    }
};
//actions：处理actions，可以书写自己的业务逻辑，也可以处理异步
const actions = {
    async categoryList({commit}){
        let result = await reqCategoryList();
        if(result.code == 200){
            commit('CATEGORYLIST',result.data)
        }
    },
    //获取首页轮插图的数据
    async getBannerList({commit}){
        let result = await reqGetBannerList();
        if(result.code == 200){
            commit('GETBANNERLIST',result.data)
        }
    }

};
//getters:理解为计算属性，用于简化仓库数据，让组件获取仓库的数据更加方便
const getters = {};

export default{
    state,mutations,actions,getters
}