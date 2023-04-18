//当前这个模块：API进行统一管理
import request from "./request";
import mockRequest from "./mockAjax"

//三级联动接口
// api/product/getBaseCategoryList get 无参数

export const reqCategoryList = ()=> request.get('/product/getBaseCategoryList');

export const reqGetBannerList = ()=>mockRequest.get('/banner');