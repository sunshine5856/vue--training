
/**
 * author:huangqq
 * email:1872367346@qq.com
 * version:1.00
 * **/


import axios from 'axios';
 // import qs from 'qs';

let base = '';


//用户登录
export const requestLogin = params => { return axios.post(`${base}/login`, params).then(res => res.data); };

//export const getUserList = params => { return axios.get(`${base}/user/list`, { params: params }); };

//获取用户
export const getUserList = params => { return axios.get(`http://192.168.0.102:9201/transCatalog/g/tree`,  { params: params }); };

//分页
export const getUserListPage = params => { return axios.get(`${base}/user/listpage`, { params: params }); };

//删除用户
export const removeUser = params => { return axios.get(`${base}/user/remove`, { params: params }); };


export const batchRemoveUser = params => { return axios.get(`${base}/user/batchremove`, { params: params }); };

//修改 用户
export const editUser = params => { return axios.get(`${base}/user/edit`, { params: params }); };

//增加用户
export const addUser = params => { return axios.get(`${base}/user/add`, { params: params }); };

//test
// export const menuTree = params => { return axios.get(`${base}/menu/tree`, { params: params }); };