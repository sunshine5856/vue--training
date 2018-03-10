// /****
//  * author:huangqq
//  * email:1872367346@qq.com
//  * version:1.00
//  */
//
//
// import Login from '../views/Login.vue'
// import NotFound from '../views/404.vue'
// import Home from '../views/Home.vue'
// import Dashboard from '../views/Dashboard.vue'
// import Main from '../views/Main.vue'
//
//
// //目录清单
// import Table from '../views/menu/Table.vue'
// import Form from '../views/menu/Form.vue'
// import user from '../views/menu/user.vue'
// import Page4 from '../views/nav2/Page4.vue'
// import Page5 from '../views/nav2/Page5.vue'
// import Page6 from '../views/nav3/Page6.vue'
// import echarts from '../views/charts/echarts.vue'
//
//
// //登录页
// export const loginRouter = {
//     path: '/login',
//     component: Login,
//     name: '',
//     hidden: true
// };
// //
// export const page404 =
//     {
//         path: '/404',
//         component: NotFound,
//         name: '',
//         hidden: true
//     };
//
//
// // 作为Main组件的子页面展示但是不在左侧菜单显示的路由写在appRouter里
// export const appRouter = [
//
//     // {
//     //     path: '/404',
//     //     component: NotFound,
//     //     name: '',
//     //     hidden: true
//     // },
//
//     //首页路由设计
//     {
//         path: '/',
//         component: Dashboard,
//         // redirect: '/dashboard',
//         hidden: true,
//         children: [
//             {
//                 path: 'dashboard',
//                 component: Home,
//                 name: '首页',
//                 // meta: {title: '首页',noCache: true}
//             }]
//
//     },
//
//     //进入系统
//
//     //目录清单
//     {
//         path: '/menu',
//         component: Dashboard,
//         //component: Home,
//         name: '目录清单',
//         iconCls: 'el-icon-message',//图标样式class
//         children: [
//             {path: '/main', component: Main, name: '主页', hidden: true},
//             {path: '/table', component: Table, name: 'Table'},
//             {path: '/form', component: Form, name: 'Form'},
//             {path: '/user', component: user, name: '列表'},
//         ]
//     },
//
//     {
//         path: '/',
//         component: Home,
//         name: '实施清单',
//         iconCls: 'fa fa-id-card-o',
//         children: [
//             {path: '/page4', component: Page4, name: '页面4'},
//             {path: '/page5', component: Page5, name: '页面5'}
//         ]
//     },
//     {
//         path: '/',
//         component: Home,
//         name: '',
//         iconCls: 'fa fa-address-card',
//         leaf: true,//只有一个节点
//         children: [
//             {path: '/page6', component: Page6, name: '责任清单'}
//         ]
//     },
//     {
//         path: '/',
//         component: Home,
//         name: 'Charts',
//         iconCls: 'fa fa-bar-chart',
//         children: [
//             {path: '/echarts', component: echarts, name: 'echarts'}
//         ]
//     },
//     {
//         path: '*',
//         hidden: true,
//         redirect: {path: '/404'}
//     }
// ];
//
//
// // 作为Main组件的子页面展示在左侧菜单显示的路由写在appRouter里
// export const otherRouter = [
//     {
//         path: '/menu',
//         component: Dashboard,
//         //component: Home,
//         name: '目录清单',
//         iconCls: 'el-icon-message',//图标样式class
//         children: [
//             {path: '/main', component: Main, name: '主页', hidden: true},
//             {path: '/table', component: Table, name: 'Table'},
//             {path: '/form', component: Form, name: 'Form'},
//             {path: '/user', component: user, name: '列表'},
//         ]
//     },
//
//     {
//         path: '/',
//         component: Home,
//         name: '实施清单',
//         iconCls: 'fa fa-id-card-o',
//         children: [
//             {path: '/page4', component: Page4, name: '页面4'},
//             {path: '/page5', component: Page5, name: '页面5'}
//         ]
//     },
// ];
//
// // 所有上面定义的路由都要写在下面的routers里
// export const routers = [
//     loginRouter,
//     otherRouter,
//     // preview,
//     // locking,
//     ...appRouter,
//     // page500,
//     // page403,
//     page404
// ];