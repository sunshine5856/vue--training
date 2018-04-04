/****
 * author:huangqq
 * email:1872367346@qq.com
 * version:1.00
 * time:2018/3/1
 */


import Login from './views/Login.vue'
import NotFound from './views/404.vue'
import Layout from './views/Layout.vue'
import Dashboard from './views/Dashboard.vue'


//目录清单
// import Table from './views/menu/Table.vue'
import Menu_draft from './views/menu/Menu_draft.vue'
import Menu_audit from './views/menu/Menu_audit.vue'
import Menu_publish from './views/menu/Menu_publish.vue'
import Menu_published from './views/menu/Menu_published.vue'
import Menu_import from './views/menu/Menu_import.vue'
// import Form from './views/menu/Form.vue'
// import user from './views/menu/user.vue'
// import Page4 from './views/nav2/Page4.vue'
// import Page5 from './views/nav2/Page5.vue'
import echarts from './views/draft/echarts.vue'
import Test from './views/draft/Test.vue'


//实施清单
import Imp_draft from './views/implement/Imp_draft.vue'
import Imp_audit from './views/implement/Imp_audit.vue'
import Imp_publish from './views/implement/Imp_publish.vue'
import Imp_published from './views/implement/Imp_published.vue'
import Imp_undertake from './views/implement/Imp_undertake.vue' //承接
import Imp_delegate from './views/implement/Imp_delegate.vue'//下放
import Imp_entrust from './views/implement/Imp_entrust.vue'   //委托
import Imp_cancel from './views/implement/Imp_cancel.vue'   //取消
import Imp_query from './views/implement/Imp_query.vue'   //委托

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
        iconCls: 'fa fa-newspaper-o',
        leaf: true,//只有一个节点
        children: [
            {path: '/test', component: Test, name: '目录管理'},
        ]
    },
    //草稿库
    {
        path: '/menu',
        component: Layout,
        name: '草稿库',
        iconCls: 'fa fa-map-o',
        leaf: true,//只有一个节点
        children: [
            // {path: '/menu/draft/draft_one', component: Table_one, name: '草稿库1'},
            // {path: '/menu/draft/draft_two', component: Table_two, name: '草稿库2'},
            {path: '/menu/draft', component: Menu_draft, name: '草稿库'},
        ]
    },
    //审核库
    {
        path: '/menu',
        component: Layout,
        name: '审核库',
        iconCls: 'fa fa-address-card',
        leaf: true,//只有一个节点
        children: [
            {path: '/menu/audit', component: Menu_audit, name: '审核库'},
            // {path: '/menu/page5', component: Page5, name: '审核库二'}
        ]
    },
    //待发布
    {
        path: '/menu',
        component: Layout,
        name: '待发布',
        iconCls: 'fa fa-clock-o',
        leaf: true,//只有一个节点
        children: [
            {path: '/menu/publish', component: Menu_publish, name: '待发布'}
        ]
    },
    //发布库
    {
        path: '/menu',
        component: Layout,
        name: '发布库',
        iconCls: 'fa fa-calendar-check-o',
        leaf: true,//只有一个节点
        children: [
            {path: '/menu/published', component: Menu_published, name: '发布库'}
        ]
    },
    //目录导入
    {
        path: '/menu',
        component: Layout,
        name: '目录导入',
        iconCls: 'fa fa-address-card',
        leaf: true,//只有一个节点
        children: [
            {path: '/menu/menuImport', component: Menu_import, name: '目录导入'}
        ]
    },
    //实施清单--事项维护
    {
        path: '/implement',
        component: Layout,
        name: '事项维护',
        iconCls: 'fa fa-bar-chart',
        children: [
            //{path: '/implement/echarts', component: echarts, name: 'echarts'},
            {path: '/implement/draft', component: Imp_draft, name: '草稿库'},
            {path: '/implement/audit', component: Imp_audit, name: '审核库'},
            {path: '/implement/publish', component: Imp_publish, name: '待发布'},
            {path: '/implement/published', component: Imp_published, name: '发布库'},
            {path: '/implement/undertake', component: Imp_undertake, name: '待承接'},
            {path: '/implement/delegate', component: Imp_delegate, name: '已下放'},
            {path: '/implement/entrust', component: Imp_entrust, name: '已委托'},
            {path: '/implement/cancel', component: Imp_cancel, name: '已取消'},
            {path: '/implement/query', component: Imp_query, name: '综合查询'},
        ]
    },

    //实施清单---事项导入
    {

        leaf: true,//只有一个节点
        path: '/progress',
        component: Layout,
        name: '事项导入',
        iconCls: 'fa fa-address-card',
        children: [
            {path: '/progress/menu', component: echarts, name: '流程管理'}
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