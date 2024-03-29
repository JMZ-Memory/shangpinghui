//对于axios进行二次封装
import axios from "axios";
//引入进度条
import nProgress from "nprogress";
//引入进度条样式
import "nprogress/nprogress.css"

//1.利用axios对象的方法create，去创建一个axios实例
//2.request就是axios，只不过稍微配置一下
const request = axios.create({
    //配置对象
    //基础路径，发送请求的时候，路径当中会出现api
    baseURL:'/mock',
    //代表请求时间5s
    timeout:5000
});
//请求拦截器：在发请求之前，请求拦截器可以检测到，可以在请求发出去之前做一些事情

request.interceptors.request.use((config)=>{
    //config：配置对象：对象里面又一个属性很重要，header请求头
    //进度条开始
    nProgress.start();
    return config;
})

//响应拦截器
request.interceptors.response.use((res)=>{
    //进度条结束
    nProgress.done();
    return res.data;
},()=>{
    return Promise.reject(new Error('false'))
})

export default request;