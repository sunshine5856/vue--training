/**
 * author:huangqq
 * email:1872367346@qq.com
 * version:1.00
 * **/


import axios from 'axios';
// import qs from 'qs';

let base = 'http://192.168.0.93:9201';


//用户登录
export const requestLogin = params => {
    return axios.post(`${base}/login`, params).then(res => res.data);
};

//export const getUserList = params => { return axios.get(`${base}/user/list`, { params: params }); };

//获取列表
export const getImplementList = ({current, size}) => {
    return axios.get(`${base}/trans/getListTransInfoVo`,
        //{params: params});
        {
            params: {
                current,
                size
            }
        });
};


//部门树
export const treeDept = params => {
    return axios.get(`http://192.168.0.93:9101/dept/tree`, {params: params});
};

//分页
export const getImplementListPage = params => {
    return axios.get(`${base}/user/listpage`, {params: params});
};

//单个删除
export const removeList = params => {
    return axios.get(`${base}/user/removeList`, {params: params});
};

//多个删除
export const batchRemoveList = params => {
    return axios.get(`${base}/trans/transSoftDel`, {params: params});
};

//修改 用户
export const editList = params => {
    return axios.get(`${base}/user/edit`, {params: params});
};

//增加用户
export const addList = params => {
    return axios.get(`${base}/user/add`, {params: params});
};

