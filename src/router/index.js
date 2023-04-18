import Vue from 'vue'
import VueRouter from 'vue-router'

//使用插件
Vue.use(VueRouter)

//引入路由组件
import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Search from '@/pages/Search'
//先把VueRouter原型对象的push|replace先保存一份
let originPush = VueRouter.prototype.push;

//重写push|replace方法
//第一个参数：告诉原来push方法，你往哪里跳转(传递哪些参数)
VueRouter.prototype.push = function(location,resolve,reject){
    if(resolve && reject){
        //call与apply区别
        //相同点：都可以调用函数一次，都可以篡改函数的上下文一次
        //不同点：call与apply传递参数：call传递参数用逗号隔开，apply方法执行，传递数组
        originPush.call(this,location,resolve,reject);
    }else{
        originPush.call(this,location,()=>{},()=>{})
    }
}

//配置路由
export default new VueRouter({
    //配置路由
    routes: [
        {
            path:'/home',
            component:Home,
            meta:{
                show:true
            }
        },
        {
            path:'/Search/:keyword?',
            name:'search',
            component:Search,
            meta:{
                show:true
            }
        },
        {
            path:'/Login',
            component:Login,
            meta:{
                show:false
            }
        },
        {
            path:'/Register',
            component:Register,
            meta:{
                show:false
            }
        },
        //重定向跳转到首页
        {
            path:'*',
            redirect:'/home'
        }
    ]
})