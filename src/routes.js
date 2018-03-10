/****
 * author:huangqq
 * email:1872367346@qq.com
 * version:1.00
 */


import Login from './views/Login.vue'
import NotFound from './views/404.vue'
import Home from './views/Home.vue'
import Layout from './views/Layout.vue'
import Nav from './views/Nav.vue'
import Dashboard from './views/Dashboard.vue'


//目录清单
import Table from './views/menu/Table.vue'
import Form from './views/menu/Form.vue'
import user from './views/menu/user.vue'
import Page4 from './views/nav2/Page4.vue'
import Page5 from './views/nav2/Page5.vue'
import Page6 from './views/nav3/Page6.vue'
import echarts from './views/charts/echarts.vue'


//登录页
// export const loginRouter = {
//     path: '/login',
//     component: Login,
//     name: '',
//     hidden: true
// };

// const routes = new VueRouter({
//     routes: [
//         //login
//         {
//             path: '/login',
//             component: Login,
//             name: '',
//             hidden: true
//         },
//         //404
//         {
//             path: '/404',
//             component: NotFound,
//             name: '',
//             hidden: true
//         },
//         //menu
//         {
//             path: '/',
//             component: Dashboard,
//             // redirect: '/dashboard',
//             hidden: true,
//             children: [
//                 {
//                     path: 'dashboard',
//                     component: Home,
//                     name: '首页',
//                     // meta: {title: '首页',noCache: true}
//                 }]
//         },
//         // {
//         //     path: '/user/:id', component: User,
//         //     children: [
//         //         {
//         //             // 当 /user/:id/profile 匹配成功，
//         //             // UserProfile 会被渲染在 User 的 <router-view> 中
//         //             path: 'profile',
//         //             component: UserProfile
//         //         },
//         //         {
//         //             // 当 /user/:id/posts 匹配成功
//         //             // UserPosts 会被渲染在 User 的 <router-view> 中
//         //             path: 'posts',
//         //             component: UserPosts
//         //         }
//         //     ]
//         // }
//     ]
// })
//作为子路由但是不显示在左侧的侧边栏


//作为子路由写在左侧的侧边栏

let routes = [
    //login
    {
        path: '/login',
        component: Login,
        name: '',
        hidden: true
    },
    //404
    {
        path: '/404',
        component: NotFound,
        name: '',
        hidden: true
    },

    //首页路由设计
    {
        path: '/dashboard',
        component: Dashboard,
        hidden: true,
        name: ' '
    },
    //进入系统

    //目录清单
    {
        path: '/menu',
        component: Layout,
        name: '',
        iconCls: 'fa fa-address-card',
        leaf: true,//只有一个节点
        children: [
              {path: '/table', component: Table, name: '目录清单'},
        ]
    },
    {
        path: '/menu',
        component: Layout,
        name: '草稿库',
        iconCls: 'el-icon-message',//图标样式class
        children: [
            {path: '/menu/draft/draft_one', component: Table, name: '草稿库1'},
            {path: '/menu/draft/draft_two', component: Form, name: '草稿库2'},
            {path: '/menu/draft/draft_three', component: user, name: '草稿库3'},
        ]
    },

    {
        path: '/menu',
        component: Layout,
        name: '审核库',
        iconCls: 'fa fa-id-card-o',
        children: [
            {path: '/menu/page4', component: Page4, name: '页面4'},
            {path: '/menu/page5', component: Page5, name: '页面5'}
        ]
    },

    {
        path: '/menu',
        component: Layout,
        name: '待发布',
        iconCls: 'fa fa-bar-chart',
        children: [
            {path: '/menu/echarts', component: echarts, name: 'echarts'}
        ]
    },
    {
        path: '/menu',
        component: Layout,
        name: '发布库',
        iconCls: 'fa fa-bar-chart',
        children: [
            {path: '/menu/echarts', component: echarts, name: 'echarts'}
        ]
    },
    {
        path: '/menu',
        component: Layout,
        name: '目录导入',
        iconCls: 'fa fa-bar-chart',
        children: [
            {path: '/menu/echarts', component: echarts, name: 'echarts'}
        ]
    },


    //实施清单
    {
        path: '/implement',
        component: Layout,
        name: '',
        iconCls: 'fa fa-bar-chart',
        children: [
            {path: '/menu/echarts', component: echarts, name: 'echarts'}
        ]
    },

    //责任清单
    {
        path: '/duty',
        component: Layout,
        name: '目录导入',
        iconCls: 'fa fa-bar-chart',
        children: [
            {path: '/menu/echarts', component: echarts, name: 'echarts'}
        ]
    },
    {
        path: '*',
        hidden: true,
        redirect: {path: '/404'}
    }

];

export default routes;