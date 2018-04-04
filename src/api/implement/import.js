/**
 * author:huangqq
 * email:1872367346@qq.com
 * version:1.00
 * **/


import axios from 'axios';
// import qs from 'qs';

let base = 'http://192.168.0.39:9201';

//export const getUserList = params => { return axios.get(`${base}/user/list`, { params: params }); };

//获取页面信息
export const getCurrent = ({size, current, transRoom, key, value}) => {
    return axios.get(`${base}/transCatalog/transCatalogByKeyValue`,
        //{params: params});
        {
            params: {
                // deptId,
                // transRoom,
                // page,
                // limit
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

//删除列表
export const removeList = params => {
    return axios.get(`${base}/user/remove`, {params: params});
};


//执行
export const executeList = params => {
    return axios.get(`${base}/transCatalog/delIDs`,
        {params: params});

};
//修改列表
export const editList = params => {
    return axios.put(`${base}/transCatalog/update`, params).then(res => res.data);
};

//增加
export const addList = params => {
    return axios.post(`${base}/transCatalog/transCatalogInsert`, params).then(res => res.data);
};

//申请审核
export const auditList = params => {
    return axios.get(`${base}/transCatalog/pltj`,
        {params: params});

};

//上传文件
export const uploadList = params => {
    return axios.post(`${base}/transCatalog/checkAndImport`, params).then(res => res.data);
};
