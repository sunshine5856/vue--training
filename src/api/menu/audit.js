/**
 * author:huangqq
 * email:1872367346@qq.com
 * version:1.00
 * **/


import axios from 'axios';
// import qs from 'qs';

let base = 'http://192.168.0.39:9201';


//用户登录
export const requestLogin = params => {
    return axios.post(`${base}/login`, params).then(res => res.data);
};

//export const getUserList = params => { return axios.get(`${base}/user/list`, { params: params }); };

//获取列表
export const getMenuList = ({size, current, transRoom, key, value}) => {
    return axios.get(`${base}/transCatalog/transCatalogByKeyValue`,
        //{params: params});
        {
            params: {
                size,
                current,
                transRoom,
                key,
                value
            }
        });
};


//部门树
export const treeDept = params => {
    return axios.get(`http://192.168.0.93:9101/dept/tree`, {params: params});
};
//分页
export const getMenuListPage = params => {
    return axios.get(`${base}/user/listpage`, {params: params});
};

//删除退回
export const backList = params => {
    return axios.get(`${base}/transCatalog/plth`, {params: params});
};


//批量删除
export const batchRemoveList = params => {
    return axios.get(`${base}/transCatalog/delIDs`,
        {params: params});

};



//批量审核
export const auditList = params => {
    return axios.get(`${base}/transCatalog/plsp`,
        {params: params});

};

