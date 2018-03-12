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
                <router-link class="inlineBlock nav-link nav-three" to="/menu">
                    <span class="nav-top">实施清单</span>
                </router-link>
            </el-col>
            <el-col :span="2">
                <router-link class="inlineBlock nav-link nav-four" to="/menu">
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
                         @click="$router.push(item.children[0].path)">
                        <i :class="item.iconCls">
                        </i>
                    </div>
                </li>

</template>
</li>
</ul>
</aside>
<section class="content-container">
    <!--<div class="grid-content bg-purple-light">   -->
    <!--<el-col :span="24" class="content-wrapper">-->
    <!--<transition name="fade" mode="out-in">-->
    <!--<router-view></router-view>-->
    <!--</transition>-->
    <!--</el-col>-->
    <!--</div>-->
    <div class="cot_box">
        <!--左侧-->
        <div class="box_left">
            <!--第一层，部门权利事项汇总-->
            <div class="box_1">
                <div class="box1_top">
                    <h3>部门权利事项总汇</h3>
                    <p>已发布事项 <span>8755</span> 项，未发布事项 <span>124</span> 项</p>
                </div>
                <ul class="ul_1">
                    <li>
                        <img src="../images/box1_cot_ico01.png" alt="">
                        <p>行政许可</p>
                        <div class="li_box">
                            <h4>行政许可</h4>
                            <p>已发布 <span>546</span></p>
                            <p>未发布 <span>15</span></p>
                        </div>
                    </li>
                    <li>
                        <img src="../images/box1_cot_ico02.png" alt="">
                        <p>行政处罚</p>
                        <div class="li_box">
                            <h4>行政处罚</h4>
                            <p>已发布 <span>546</span></p>
                            <p>未发布 <span>15</span></p>
                        </div>
                    </li>
                    <li>
                        <img src="../images/box1_cot_ico03.png" alt="">
                        <p>行政确认</p>
                        <div class="li_box">
                            <h4>行政确认</h4>
                            <p>已发布 <span>546</span></p>
                            <p>未发布 <span>15</span></p>
                        </div>
                    </li>
                    <li>
                        <img src="../images/box1_cot_ico04.png" alt="">
                        <p>行政奖励</p>
                        <div class="li_box">
                            <h4>行政奖励</h4>
                            <p>已发布 <span>546</span></p>
                            <p>未发布 <span>15</span></p>
                        </div>
                    </li>
                    <li>
                        <img src="../images/box1_cot_ico05.png" alt="">
                        <p>行政给付</p>
                        <div class="li_box">
                            <h4>行政给付</h4>
                            <p>已发布 <span>546</span></p>
                            <p>未发布 <span>15</span></p>
                        </div>
                    </li>
                    <li>
                        <img src="../images/box1_cot_ico06.png" alt="">
                        <p>行政强制</p>
                        <div class="li_box">
                            <h4>行政强制</h4>
                            <p>已发布 <span>546</span></p>
                            <p>未发布 <span>15</span></p>
                        </div>
                    </li>
                </ul>
                <ul>
                    <li>
                        <img src="../images/box1_cot_ico07.png" alt="">
                        <p>行政裁决</p>
                        <div class="li_box">
                            <h4>行政裁决</h4>
                            <p>已发布 <span>546</span></p>
                            <p>未发布 <span>15</span></p>
                        </div>
                    </li>
                    <li>
                        <img src="../images/box1_cot_ico08.png" alt="">
                        <p>行政处罚</p>
                        <div class="li_box">
                            <h4>行政处罚</h4>
                            <p>已发布 <span>546</span></p>
                            <p>未发布 <span>15</span></p>
                        </div>
                    </li>
                    <li>
                        <img src="../images/box1_cot_ico09.png" alt="">
                        <p>行政检查</p>
                        <div class="li_box">
                            <h4>行政检查</h4>
                            <p>已发布 <span>546</span></p>
                            <p>未发布 <span>15</span></p>
                        </div>
                    </li>
                    <li>
                        <img src="../images/box1_cot_ico10.png" alt="">
                        <p>其他权利</p>
                        <div class="li_box">
                            <h4>其他权利</h4>
                            <p>已发布 <span>546</span></p>
                            <p>未发布 <span>15</span></p>
                        </div>
                    </li>
                    <li>
                        <img src="../images/box1_cot_ico11.png" alt="">
                        <p>公共服务</p>
                        <div class="li_box">
                            <h4>公共服务</h4>
                            <p>已发布 <span>546</span></p>
                            <p>未发布 <span>15</span></p>
                        </div>
                    </li>
                    <li></li>
                </ul>
            </div>
            <!--第二层，实施清单-->
            <div class="box_2">
                <div class="box2_top">
                    <ul>
                        <li class="on" id="box2_li1">实施清单
                            <i>134</i>
                        </li>
                        <li id="box2_li2" onclick="box3_tab(2)">目录清单
                            <i>56</i>
                        </li>
                    </ul>
                    <a href="javascript:" class="more">更多 >></a>
                </div>
                <div id="box2_tab1">
                    <table cellspacing="0" cellpadding="0">
                        <thead>
                        <tr>
                            <td style="width: 10%;">序号</td>
                            <td style="width: 23%; padding-right: 2%">事项名称</td>
                            <td style="width: 23%; padding-right: 2%">基本编码</td>
                            <td style="width: 10%">法定时限</td>
                            <td style="width: 15%">所属条线</td>
                            <td style="width: 13%">法律依据</td>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td></td>
                            <td>经营生活必需品的大型批发</td>
                            <td>130803JC09278001</td>
                            <td>10</td>
                            <td>行政许可</td>
                            <td>有</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>经营生活必需品的大型批发</td>
                            <td>130803JC09278001</td>
                            <td>10</td>
                            <td>行政许可</td>
                            <td>有</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>经营生活必需品的大型批发</td>
                            <td>130803JC09278001</td>
                            <td>10</td>
                            <td>行政许可</td>
                            <td>有</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>经营生活必需品的大型批发</td>
                            <td>130803JC09278001</td>
                            <td>10</td>
                            <td>行政许可</td>
                            <td>有</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>经营生活必需品的大型批发</td>
                            <td>130803JC09278001</td>
                            <td>10</td>
                            <td>行政许可</td>
                            <td>有</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div id="box2_tab2">
                    <table cellspacing="0" cellpadding="0">
                        <thead>
                        <tr>
                            <td style="width: 10%;">序号</td>
                            <td style="width: 23%; padding-right: 2%">事项名称</td>
                            <td style="width: 23%; padding-right: 2%">基本编码</td>
                            <td style="width: 10%">法定时限</td>
                            <td style="width: 15%">所属条线</td>
                            <td style="width: 13%">法律依据</td>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td></td>
                            <td>经营生活必需品的大型批发</td>
                            <td>130803JC09278001</td>
                            <td>9</td>
                            <td>行政许可</td>
                            <td>有</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>经营生活必需品的大型批发</td>
                            <td>130803JC09278001</td>
                            <td>10</td>
                            <td>行政许可</td>
                            <td>有</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>经营生活必需品的大型批发</td>
                            <td>130803JC09278001</td>
                            <td>10</td>
                            <td>行政许可</td>
                            <td>有</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>经营生活必需品的大型批发</td>
                            <td>130803JC09278001</td>
                            <td>10</td>
                            <td>行政许可</td>
                            <td>有</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>经营生活必需品的大型批发</td>
                            <td>130803JC09278001</td>
                            <td>10</td>
                            <td>行政许可</td>
                            <td>有</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <!--快捷菜单-->
            <div class="box_3">
                <h4>快捷菜单
                    <i title="修改"></i>
                </h4>
                <ul>
                    <li>
                        <div class="box3_ico"></div>
                        <input type="text" value="事项审核" disabled="disabled">
                        <i></i>
                    </li>
                    <li>
                        <div class="box3_ico"></div>
                        <input type="text" value="事项导入" disabled="disabled">
                        <i></i>
                    </li>
                    <li>
                        <div class="box3_ico"></div>
                        <input type="text" value="材料管理" disabled="disabled">
                        <i></i>
                    </li>
                    <li>
                        <div class="box3_ico"></div>
                        <input type="text" value="文书管理" disabled="disabled">
                        <i></i>
                    </li>
                    <li>
                        <div class="box3_ico"></div>
                        <input type="text" value="新建菜单" disabled="disabled">
                    </li>
                </ul>
            </div>
        </div>
        <!--右侧-->
        <div class="box_right">
            <!--轮播图-->
            <div class="banner_slide slide" v-on:mouseover="stop()" v-on:mouseout="move()">
                <div class="slide-show">
                    <transition-group tag="ul" name="image">
                        <li v-for="(img, index) in imgArray" v-show="index===mark" :key="index">
                            <a href="#">
                                <img :src='img'>
                            </a>
                        </li>
                    </transition-group>
                </div>
                <div class="bullet">
                    <span v-for="(item, index) in imgArray" :class="{ 'active':index===mark }"
                          @click="change(index)" :key="index">

                    </span>
                </div>
                <!--<div class="hd">-->
                <!--<ul>-->
                <!--<li></li>-->
                <!--<li></li>-->
                <!--<li></li>-->
                <!--</ul>-->
                <!--</div>-->
                <!--<div class="bd">-->
                <!--<ul>-->
                <!--<li>-->
                <!--<a href="javascript:">-->
                <!--<img src="../images/banner_1.png" alt="">-->
                <!--</a>-->
                <!--</li>-->
                <!--<li>-->
                <!--<a href="javascript:">-->
                <!--<img src="../images/banner_1.png" alt="">-->
                <!--</a>-->
                <!--</li>-->
                <!--<li>-->
                <!--<a href="javascript:">-->
                <!--<img src="../images/banner_1.png" alt="">-->
                <!--</a>-->
                <!--</li>-->
                <!--</ul>-->
                <!--</div>-->
            </div>
            <!--右侧的选项卡-->
            <div class="right_cot">
                <h4><span>Admin</span>，欢迎登录事项管理系统！</h4>
                <!--右侧事项-->
                <div class="cot_top">
                    <ul>
                        <li class="on" id="right_li1" onclick="right_tab(1)">
                            <span>46</span>
                            <p>待发布事项</p>
                            <i></i>
                        </li>
                        <li id="right_li2" onclick="right_tab(2)">
                            <span>3</span>
                            <p>异常待处理事项</p>
                            <i></i>
                        </li>
                    </ul>
                </div>
                <div id="right_tab1">
                    <h5>待发布事项</h5>
                    <ul>
                        <li>
                            <i class="disc"></i>
                            <h6>洗染业经营备案</h6>
                            <p>
                                <span>行政许可：</span>
                                <i class="star on"></i>
                                <i class="star on"></i>
                                <i class="star"></i>
                                <i class="star"></i>
                                <i class="star"></i>
                            </p>
                            <p><span>实施编码：</span><span>130803JC09278001</span></p>
                        </li>
                        <li>
                            <i class="disc"></i>
                            <h6>洗染业经营备案</h6>
                            <p>
                                <span>行政许可：</span>
                                <i class="star on"></i>
                                <i class="star on"></i>
                                <i class="star"></i>
                                <i class="star"></i>
                                <i class="star"></i>
                            </p>
                            <p><span>实施编码：</span><span>130803JC09278001</span></p>
                        </li>
                        <li>
                            <i class="disc"></i>
                            <h6>洗染业经营备案</h6>
                            <p>
                                <span>行政许可：</span>
                                <i class="star on"></i>
                                <i class="star on"></i>
                                <i class="star"></i>
                                <i class="star"></i>
                                <i class="star"></i>
                            </p>
                            <p><span>实施编码：</span><span>130803JC09278001</span></p>
                        </li>
                        <li>
                            <i class="disc"></i>
                            <h6>洗染业经营备案</h6>
                            <p>
                                <span>行政许可：</span>
                                <i class="star on"></i>
                                <i class="star on"></i>
                                <i class="star"></i>
                                <i class="star"></i>
                                <i class="star"></i>
                            </p>
                            <p><span>实施编码：</span><span>130803JC09278001</span></p>
                        </li>
                    </ul>
                    <!-- <div class="time_line">

                     </div>-->
                </div>
                <div id="right_tab2">
                    <h5>异常待处理事项</h5>
                    <ul>
                        <li>
                            <i class="disc"></i>
                            <h6>洗染业经营备案</h6>
                            <p>
                                <span>行政许可：</span>
                                <i class="star on"></i>
                                <i class="star on"></i>
                                <i class="star"></i>
                                <i class="star"></i>
                                <i class="star"></i>
                            </p>
                            <p><span>实施编码：</span><span>130803JC09278001</span></p>
                        </li>
                        <li>
                            <i class="disc"></i>
                            <h6>洗染业经营备案</h6>
                            <p>
                                <span>行政许可：</span>
                                <i class="star on"></i>
                                <i class="star on"></i>
                                <i class="star"></i>
                                <i class="star"></i>
                                <i class="star"></i>
                            </p>
                            <p><span>实施编码：</span><span>130803JC09278001</span></p>
                        </li>
                        <li>
                            <i class="disc"></i>
                            <h6>洗染业经营备案</h6>
                            <p>
                                <span>行政许可：</span>
                                <i class="star on"></i>
                                <i class="star on"></i>
                                <i class="star"></i>
                                <i class="star"></i>
                                <i class="star"></i>
                            </p>
                            <p><span>实施编码：</span><span>130803JC09278001</span></p>
                        </li>
                        <li>
                            <i class="disc"></i>
                            <h6>洗染业经营备案</h6>
                            <p>
                                <span>行政许可：</span>
                                <i class="star on"></i>
                                <i class="star on"></i>
                                <i class="star"></i>
                                <i class="star"></i>
                                <i class="star"></i>
                            </p>
                            <p><span>实施编码：</span><span>130803JC09278001</span></p>
                        </li>
                    </ul>
                    <!-- <div class="time_line">

                     </div>-->
                </div>
            </div>
        </div>
    </div>
</section>
</el-col>
</el-row>
</template>

<script>

    //页面相关动效
    // import $ from 'jquery'
    // import index_cot from '../common/js/index_cot.js';
    export default {
        data() {
            return {
                sysName: '河北政务事项管理系统',
                collapsed: false,
                sysUserName: '',
                sysUserAvatar: '',
                //轮播图特效
                timer: null,  //定时器
                mark: 0,  //比对图片的索引的变量
                 imgArray: [
                     require('../images/banner_1.png'),
                     require('../images/banner_1.png'),
                     require('../images/banner_1.png'),
                    // '../images/banner_1.png',
                    // '../images/banner_1.png'
                ],
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
            //轮播图
            autoPlay() {
                this.mark++;
                if (this.mark === 4) { //当遍历到最后一张图片置零
                    this.mark = 0
                }
            },
            stop() {
                clearInterval(this.timer)
            },
            move() {
                this.timer = setInterval(this.autoPlay, 3000)
            },
            play() {
                setInterval(this.autoPlay, 3000)
            },
            change(i) {
                this.mark = i
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
        created() {
            this.play()
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
    @import '../styles/reset.scss';
    @import '../styles/page_1.scss';

</style>