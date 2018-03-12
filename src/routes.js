/****
 * author:huangqq
 * email:1872367346@qq.com
 * version:1.00
 */


import Login from './views/Login.vue'
import NotFound from './views/404.vue'
import Layout from './views/Layout.vue'
import Dashboard from './views/Dashboard.vue'


//目录清单
import Table from './views/menu/Table.vue'
import Form from './views/menu/Form.vue'
import user from './views/menu/user.vue'
import Page4 from './views/nav2/Page4.vue'
import Page5 from './views/nav2/Page5.vue'
import echarts from './views/draft/echarts.vue'
// import Test from './views/draft/Test.vue'


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
            {path: '/test', component: Table, name: '目录清单'},
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
            {path: '/menu/page4', component: Page4, name: '审核库一'},
            {path: '/menu/page5', component: Page5, name: '审核库二'}
        ]
    },

    {
        path: '/menu',
        component: Layout,
        name: '待发布',
        iconCls: 'fa fa-bar-chart',
        children: [
            {path: '/menu/echarts', component: echarts, name: '待发布一'}
        ]
    },

    //实施清单
    {
        path: '/implement',
        component: Layout,
        name: '实施清单',
        iconCls: 'fa fa-bar-chart',
        children: [
            {path: '/implement/echarts', component: echarts, name: 'echarts'}
        ]
    },

    //责任清单
    {
        path: '/duty',
        component: Layout,
        name: '目录导入',
        iconCls: 'fa fa-bar-chart',
        children: [
            {path: '/duty/menu', component: echarts, name: '目录导入一'}
        ]
    },
    //流程管理
    {
        path: '/progress',
        component: Layout,
        name: '流程管理',
        iconCls: 'fa fa-bar-chart',
        children: [
            {path: '/progress/menu', component: echarts, name: '流程管理一'}
        ]
    },
    //统计分析
    {
        path: '/count',
        component: Layout,
        name: '发布库',
        iconCls: 'fa fa-bar-chart',
        children: [
            {path: '/count/publish', component: echarts, name: '发布库一'}
        ]
    },
    {
        path: '*',
        hidden: true,
        redirect: {path: '/404'}
    }

];

export default routes;