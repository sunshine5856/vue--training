<template>
    <el-row class="container">
        <el-col :span="24" class="header">
            <el-col :span="10" class="logo">
            </el-col>
            <el-col :span="4" style="color:rgba(0,0,0,0)"><span>hhh</span></el-col>
            <!--<el-col :span="10">-->
            <!--点击可以页面可以隐藏左侧菜单的按钮-->
            <!--横向一级菜单-->
            <el-col :span="2">
                <router-link class="inlineBlock nav-one nav-link" to="/dashboard" style="text-indent: 27px;">
                    <span class="nav-top">首页</span>
                </router-link>
            </el-col>
            <el-col :span="2">
                <!--<a id="menu">目录清单</a>-->
                <router-link class="inlineBlock nav-link nav-two" to="/menu">
                    <span class="nav-top">目录清单</span>
                </router-link>
            </el-col>
            <el-col :span="2">
                <router-link class="inlineBlock nav-link nav-three" to="/implement">
                    <span class="nav-top">实施清单</span>
                </router-link>
            </el-col>
            <el-col :span="2">
                <router-link class="inlineBlock nav-link nav-four" to="/duty">
                    <span class="nav-top">责任清单</span>
                </router-link>
            </el-col>
            <el-col :span="2">
                <router-link class="inlineBlock nav-link nav-five" to="/menu">
                    <span class="nav-top">流程管理</span>
                </router-link>
            </el-col>
            <el-col :span="2">
                <router-link class="inlineBlock nav-link nav-six" to="/menu">
                    <span class="nav-top">统计分析</span>
                </router-link>
            </el-col>
            <el-col :span="2" class="userinfo">
                <el-dropdown trigger="hover">
                    <span class="el-dropdown-link userinfo-inner"><img
                            :src="this.sysUserAvatar"/> {{sysUserName}}</span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>我的消息</el-dropdown-item>
                        <el-dropdown-item>设置</el-dropdown-item>
                        <el-dropdown-item divided @click.native="logout">退出登录</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </el-col>
        </el-col>
        <el-col :span="24" class="main">
            <aside :class="collapsed?'menu-collapsed':'menu-expanded'">
                <!--导航菜单-->
                <el-menu :default-active="$route.path" class="el-menu-vertical-demo" @open="handleopen"
                         @close="handleclose" @select="handleselect"
                         unique-opened router v-show="!collapsed">
                    <template v-for="(item,index) in $router.options.routes" v-if="!item.hidden">
                        <el-submenu :index="index+''" v-if="!item.leaf">
                            <template slot="title"><i :class="item.iconCls"></i>{{item.name}}</template>
                            <el-menu-item v-for="child in item.children" :index="child.path" :key="child.path"
                                          v-if="!child.hidden">{{child.name}}
                            </el-menu-item>
                        </el-submenu>
                        <el-menu-item v-if="item.leaf&&item.children.length>0" :index="item.children[0].path"><i
                                :class="item.iconCls"></i>{{item.children[0].name}}
                        </el-menu-item>
                    </template>
                </el-menu>
                <!--导航菜单-折叠后-->
                <ul class="el-menu el-menu-vertical-demo collapsed" v-show="collapsed" ref="menuCollapsed">
                    <li v-for="(item,index) in $router.options.routes" v-if="!item.hidden" class="el-submenu item">
                        <template v-if="!item.leaf">
                            <div class="el-submenu__title" style="padding-left: 20px;" @mouseover="showMenu(index,true)"
                                 @mouseout="showMenu(index,false)"><i :class="item.iconCls"></i></div>
                            <ul class="el-menu submenu" :class="'submenu-hook-'+index" @mouseover="showMenu(index,true)"
                                @mouseout="showMenu(index,false)">
                                <li v-for="child in item.children" v-if="!child.hidden" :key="child.path"
                                    class="el-menu-item" style="padding-left: 40px;"
                                    :class="$route.path==child.path?'is-active':''" @click="$router.push(child.path)">
                                    {{child.name}}
                                </li>
                            </ul>
                        </template>
                        <template v-else>
                    <li class="el-submenu">
                        <div class="el-submenu__title el-menu-item"
                             style="padding-left: 20px;height: 56px;line-height: 56px;padding: 0 20px;"
                             :class="$route.path==item.children[0].path?'is-active':''"
                             @click="$router.push(item.children[0].path)"><i :class="item.iconCls"></i></div>
                    </li>
</template>
</li>
</ul>
</aside>
<section class="content-container">
    <div class="grid-content bg-purple-light">
        <el-col :span="24" class="breadcrumb-container">
            <strong class="title">{{$route.name}}</strong>
            <el-breadcrumb separator="/" class="breadcrumb-inner">
                <el-breadcrumb-item v-for="item in $route.matched" :key="item.path">
                    {{ item.name }}
                </el-breadcrumb-item>
            </el-breadcrumb>
        </el-col>
        <el-col :span="24" class="content-wrapper">
            <transition name="fade" mode="out-in">
                <router-view></router-view>
            </transition>
        </el-col>
    </div>
</section>
</el-col>
</el-row>
</template>

<script>
    export default {
        data() {
            return {
                sysName: 'VUEADMIN',
                collapsed: false,
                sysUserName: '',
                sysUserAvatar: '',
                form: {
                    name: '',
                    region: '',
                    date1: '',
                    date2: '',
                    delivery: false,
                    type: [],
                    resource: '',
                    desc: ''
                }
            }
        },
        methods: {
            onSubmit() {
                console.log('submit!');
            },
            handleopen() {
                //console.log('handleopen');
            },
            handleclose() {
                //console.log('handleclose');
            },
            handleselect: function (a, b) {
            },
            //退出登录
            logout: function () {
                var _this = this;
                this.$confirm('确认退出吗?', '提示', {
                    //type: 'warning'
                }).then(() => {
                    sessionStorage.removeItem('user');
                    _this.$router.push('/login');
                }).catch(() => {

                });


            },
            //折叠导航栏
            collapse: function () {
                this.collapsed = !this.collapsed;
            },
            showMenu(i, status) {
                this.$refs.menuCollapsed.getElementsByClassName('submenu-hook-' + i)[0].style.display = status ? 'block' : 'none';
            }
        },
        mounted() {
            var user = sessionStorage.getItem('user');
            if (user) {
                user = JSON.parse(user);
                this.sysUserName = user.name || '';
                this.sysUserAvatar = user.avatar || '';
            }

        }
    }

</script>

<style scoped lang="scss">
    @import '../styles/nav.scss';
    @import '../styles/vars.scss';

</style>