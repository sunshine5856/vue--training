<style lang="scss">
    @import '../styles/dashboard.scss';
    @import '../styles/vars.scss';
    @import '../styles/common.scss';

</style>
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
                <router-link class="inlineBlock nav-link nav-five" to="/progress">
                    <span class="nav-top">流程管理</span>
                </router-link>
            </el-col>
            <el-col :span="2">
                <router-link class="inlineBlock nav-link nav-six" to="/count">
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
                <!--左侧导航菜单-->
                <el-menu :default-active="$route.path" class="el-menu-vertical-demo menu-box" @open="handleopen"
                         style="border-radius:0;"
                         @close="handleclose" @select="handleselect"
                         unique-opened router v-show="!collapsed">
                    <template v-for="(item,index) in $router.options.routes" v-if="!item.hidden"
                              style="border-radius:0;">
                        <!--多个节点-->
                        <el-submenu :index="index+''" v-if="!item.leaf" class="parents-title" style="border-radius:0;">
                            <template slot="title" class="child-title"><i :class="item.iconCls"></i>{{item.name}}
                            </template>
                            <el-menu-item v-for="child in item.children" :index="child.path" :key="child.path"
                                          class="child-title"
                                          v-if="!child.hidden" style="border-radius:0;">{{child.name}}
                            </el-menu-item>
                        </el-submenu>
                        <!--单个节点-->
                        <el-menu-item v-if="item.leaf&&item.children.length>0" :index="item.children[0].path">
                            <i :class="item.iconCls"></i>{{item.children[0].name}}
                        </el-menu-item>
                    </template>
                </el-menu>
            </aside>
            <!--<el-aside width="200px" style="background-color: rgb(238, 241, 246)">-->
            <!--<el-menu :default-openeds="['1', '3']">-->
            <!--<el-submenu index="1">-->
            <!--<template slot="title">-->
            <!--<i class="el-icon-message">-->

            <!--</i>草稿库-->
            <!--</template>-->
            <!--<el-menu-item-group>-->
            <!--<template slot="title">分组一</template>-->
            <!--<el-menu-item index="1-1">选项1</el-menu-item>-->
            <!--<el-menu-item index="1-2">选项2</el-menu-item>-->
            <!--</el-menu-item-group>-->
            <!--<el-menu-item-group title="分组2">-->
            <!--<el-menu-item index="1-3">选项3</el-menu-item>-->
            <!--</el-menu-item-group>-->
            <!--<el-submenu index="1-4">-->
            <!--<template slot="title">选项4</template>-->
            <!--<el-menu-item index="1-4-1">选项4-1</el-menu-item>-->
            <!--</el-submenu>-->
            <!--</el-submenu>-->
            <!--<el-submenu index="2">-->
            <!--<template slot="title"><i class="el-icon-menu"></i>导航二</template>-->
            <!--<el-menu-item-group>-->
            <!--<template slot="title">分组一</template>-->
            <!--<el-menu-item index="2-1">选项1</el-menu-item>-->
            <!--<el-menu-item index="2-2">选项2</el-menu-item>-->
            <!--</el-menu-item-group>-->
            <!--<el-menu-item-group title="分组2">-->
            <!--<el-menu-item index="2-3">选项3</el-menu-item>-->
            <!--</el-menu-item-group>-->
            <!--<el-submenu index="2-4">-->
            <!--<template slot="title">选项4</template>-->
            <!--<el-menu-item index="2-4-1">选项4-1</el-menu-item>-->
            <!--</el-submenu>-->
            <!--</el-submenu>-->
            <!--&lt;!&ndash;<el-submenu index="3">&ndash;&gt;-->
            <!--&lt;!&ndash;<template slot="title"><i class="el-icon-setting"></i>导航三</template>&ndash;&gt;-->
            <!--&lt;!&ndash;<el-menu-item-group>&ndash;&gt;-->
            <!--&lt;!&ndash;<template slot="title">分组一</template>&ndash;&gt;-->
            <!--&lt;!&ndash;<el-menu-item index="3-1">选项1</el-menu-item>&ndash;&gt;-->
            <!--&lt;!&ndash;<el-menu-item index="3-2">选项2</el-menu-item>&ndash;&gt;-->
            <!--&lt;!&ndash;</el-menu-item-group>&ndash;&gt;-->
            <!--&lt;!&ndash;<el-menu-item-group title="分组2">&ndash;&gt;-->
            <!--&lt;!&ndash;<el-menu-item index="3-3">选项3</el-menu-item>&ndash;&gt;-->
            <!--&lt;!&ndash;</el-menu-item-group>&ndash;&gt;-->
            <!--&lt;!&ndash;<el-submenu index="3-4">&ndash;&gt;-->
            <!--&lt;!&ndash;<template slot="title">选项4</template>&ndash;&gt;-->
            <!--&lt;!&ndash;<el-menu-item index="3-4-1">选项4-1</el-menu-item>&ndash;&gt;-->
            <!--&lt;!&ndash;</el-submenu>&ndash;&gt;-->
            <!--&lt;!&ndash;</el-submenu>&ndash;&gt;-->
            <!--</el-menu>-->
            <!--</el-aside>-->
            <section class="content-container">
                <div class="grid-content bg-purple-light">
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
                sysName: '',
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

