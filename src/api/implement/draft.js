/**
 * author:huangqq
 * email:1872367346@qq.com
 * version:1.00
 * time:2018/3/1
 * **/


import axios from 'axios';
// import qs from 'qs';

let base = 'http://192.168.0.93:9201';


//获取列表---条件查询
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
// //分页
// export const getImplementListPage = params => {
//     return axios.get(`${base}/user/listpage`, {params: params});
// };
//
// //单个删除
// export const removeList = params => {
//     return axios.get(`${base}/user/removeList`, {params: params});
// };

//多个删除
export const batchRemoveList = params => {
    return axios.get(`${base}/trans/transSoftDel`, {params: params});
};

//修改
export const editList = params => {
    return axios.get(`${base}/user/edit`, {params: params});
};

//增加
export const addList = params => {
    return axios.get(`${base}/user/add`, {params: params});
};



//申请审核
export const auditList = params => {
    return axios.get(`${base}/transCatalog/pltj`,
        {params: params});

};

//查看版本
export const versionList = params => {
    return axios.get(`${base}/transCatalog/versition`,
        {params: params});

};
