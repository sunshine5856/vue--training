/****
 * author:huangqq
 * email:1872367346@qq.com
 * version:1.00
 */

import {routers, otherRouter, appRouter} from './router';

Vue.use(VueRouter);


//路由配置
const RouterConfig = {
    // mode: 'history',
    routes: routers
};


export const router=new VueRouter(RouterConfig);
