<!--目录清单-->
<template>
    <section class="main-box">
        <el-row :gutter="20">
            <!--左侧树形菜单-->
            <el-col :span="4">
                <div class="custom-tree-container">
                    <div class="tree-box">
                        <div class="title-box">
                            <!--<el-col :span="18">-->
                            <table class="department-tree">
                                <tr>
                                    <td>
                                        <h4 class="choose-department">选择部门</h4>
                                    </td>
                                    <td style="text-align: right">
                                        <i class="el-icon-edit"></i>
                                    </td>
                                </tr>
                            </table>
                        </div>
                        <el-col :span="24" style="padding:0px;">
                            <el-tree
                                    :data="treeDept"
                                    show-checkbox
                                    node-key="id"
                                    :default-expanded-keys="[2, 3]"
                                    :default-checked-keys="[5]"
                                    :props="defaultProps">

                            </el-tree>
                        </el-col>
                    </div>
                </div>
            </el-col>
            <!--右侧列表-->
            <el-col :span="20" style="background-color:#FFFFFF;padding:0;height:100%;">
                <!--列表-->
                <div class="tab-box">
                    <!--列表的标题-->
                    <div class="tab-title-box">
                        <el-col :span="1">
                            <div class="title-icon">
                            </div>
                        </el-col>
                        <el-col :span="23">
                            <h3>草稿库</h3>
                        </el-col>
                    </div>
                    <!--表格-->
                    <div class="tab-content">
                        <!--相关操作-->
                        <div class="btn-box">
                            <el-col :span="17" style="padding-left:0;">
                                <button class="operate-btn" @click="handleAdd">
                                    <i class="el-icon-plus btn-icon">&nbsp;&nbsp;新增</i>
                                </button>
                                <button class="operate-btn" @click="auditing">
                                    <i class="el-icon-document btn-icon">&nbsp;&nbsp;申请审核</i>
                                </button>
                                <button class="operate-btn" @click="handleVersion">
                                    <i class="el-icon-document btn-icon">&nbsp;&nbsp;查看版本</i>
                                </button>
                                <button class="operate-btn" @click="handleEdit(list)">
                                    <i class="el-icon-edit">&nbsp;&nbsp;修改</i>
                                </button>
                                <button class="operate-btn" @click="batchRemove">
                                    <i class="el-icon-delete btn-icon">&nbsp;&nbsp;删除</i>
                                </button>
                            </el-col>
                            <el-col :span="7" style="padding-right:0;">
                                <table style="float:right;margin-bottom:5px;">
                                    <tr>
                                        <td>
                                            <el-input v-model="keywords" :placeholder="placeholder" id="search"
                                                      style="width: 400px;color:#E5E5E5;border-radius:3px;">
                                                <el-select v-model="select" @change="searchFieldChange" slot="prepend">
                                                    <el-option label="事项名称" value="transName" selected></el-option>
                                                    <el-option label="事项类型" value="transType"></el-option>
                                                    <el-option label="基本编码" value="baseCode"></el-option>
                                                </el-select>
                                                <el-button type="button" class="gms-search" slot="append" icon="search"
                                                           @click="query">查询
                                                </el-button>
                                            </el-input>
                                        </td>
                                    </tr>
                                </table>
                            </el-col>
                        </div>
                        <!--列表内容-->
                        <el-table :data="list" highlight-current-row v-loading="listLoading"
                                  @selection-change="selsChange" border>
                            <el-table-column type="selection" width="55">
                            </el-table-column>
                            <el-table-column type="index" width="60">
                            </el-table-column>
                            <el-table-column prop="transName" label="事项名称" width="250">
                            </el-table-column>
                            <el-table-column prop="transCode" label="事项编码" width="200" :formatter="formatSex">
                            </el-table-column>
                            <el-table-column prop="baseCode" label="实施编码" width="200">
                            </el-table-column>
                            <el-table-column prop="promiseDay" label="承诺时间" width="200">
                            </el-table-column>
                            <el-table-column prop="transRoom" label="所属部门" min-width="100">
                            </el-table-column>
                            <!--<el-table-column prop="legalBasis" label="法律依据" min-width="180">-->
                            <!--</el-table-column>-->
                            <!--<el-table-column label="操作" width="150">-->
                            <!--<template scope="scope">-->
                            <!--<el-button size="small" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>-->
                            <!--<el-button type="danger" size="small" @click="handleDel(scope.$index, scope.row)">-->
                            <!--删除-->
                            <!--</el-button>-->
                            <!--</template>-->
                            <!--</el-table-column>-->
                        </el-table>
                        <!--分页-->
                        <div class="page-box">
                            <!--<el-col :span="12">-->
                            <!--<div>-->
                            <!--<span>一共{{total}}条数据，每页显示</span>-->
                            <!--<select v-model="selected" class="gms-choose-page-box">-->
                            <!--<option v-for="option in options" v-bind:value="option.value">-->
                            <!--{{ option.text }}-->
                            <!--</option>-->
                            <!--</select>-->
                            <!--条-->
                            <!--</div>-->
                            <!--</el-col>-->
                            <!--<el-pagination layout="prev, pager, next" @current-change="handleCurrentChange"-->
                            <!--:page-size="10"-->
                            <!--:total="total" style="float:right;">-->
                            <!--</el-pagination>-->
                            <el-pagination style="float:right"
                                           :current-page="filter.page"
                                           :page-sizes="[10, 20, 50, 100]"
                                           :page-size="filter.current"
                                           layout="total, sizes, prev, pager, next, jumper"
                                           :total="total"
                                           @size-change="pageSizeChange"
                                           @current-change="pageCurrentChange">
                            </el-pagination>
                        </div>
                    </div>
                </div>
                <!--编辑界面-->
                <el-dialog title="编辑" v-model="editFormVisible" :close-on-click-modal="false">
                    <el-form :model="editForm" label-width="80px" :rules="addFormRules" ref="editForm">
                        <el-form-item label="子事项名称(目录) " prop="transName">
                            <el-input v-model="editForm.transName" auto-complete="off"></el-input>
                        </el-form-item>
                        <el-form-item label="事项类型" prop="transType">
                            <el-input v-model="editForm.transType" auto-complete="off"></el-input>
                        </el-form-item>
                        <!--<el-form-item label="事项类型" prop="transType">-->
                        <!--<el-radio-group v-model="editForm.transType">-->
                        <!--<el-radio class="radio" :label="0" name="aa">行政许可</el-radio>-->
                        <!--<el-radio class="radio" :label="1">行政给付</el-radio>-->
                        <!--<el-radio class="radio" :label="2">行政检查</el-radio>-->
                        <!--<el-radio class="radio" :label="3">行政征收</el-radio>-->
                        <!--<el-radio class="radio" :label="4">行政确认</el-radio>-->
                        <!--<el-radio class="radio" :label="5">其他权值</el-radio>-->
                        <!--<el-radio class="radio" :label="6">公共服务</el-radio>-->
                        <!--</el-radio-group>-->
                        <!--</el-form-item>-->
                        <el-form-item label="基本编码" prop="baseCode">
                            <el-input-number v-model="editForm.baseCode"></el-input-number>
                        </el-form-item>
                        <el-form-item label="所属条线">
                            <el-input v-model="editForm.stripLine" auto-complete="off"></el-input>
                        </el-form-item>
                        <el-form-item label="法定时限" prop="legalDay">
                            <el-input v-model="editForm.legalDay" auto-complete="off"></el-input>
                        </el-form-item>
                        <el-form-item label="主项名称(上级目录)">
                            <el-select v-model="editForm.tid" placeholder="请选择">
                                <el-option
                                        v-for="item in options"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="应用范围">
                            <el-radio-group v-model="editForm.useScope">
                                <el-radio class="radio" :label="0">国家级</el-radio>
                                <el-radio class="radio" :label="1">省级</el-radio>
                                <el-radio class="radio" :label="2">市级</el-radio>
                            </el-radio-group>
                        </el-form-item>
                        <el-form-item label="法律依据" prop="legalBasis">
                            <el-input type="text" v-model="editForm.legalBasis"></el-input>
                        </el-form-item>
                        <el-form-item label="排序号" prop="seq">
                            <el-input type="text" v-model="editForm.seq"></el-input>
                        </el-form-item>
                        <el-form-item label="法定时限说明">
                            <el-input type="texteara" v-model="editForm.legalDayDesc"></el-input>
                        </el-form-item>
                        <el-form-item label="状态" prop="state">
                            <el-input type="text" v-model="editForm.state"></el-input>
                        </el-form-item>
                        <!--<el-form-item label="状态" prop="state">-->
                        <!--<el-radio-group v-model="addForm.state">-->
                        <!--<el-radio class="radio" :label="1">启用</el-radio>-->
                        <!--<el-radio class="radio" :label="0">禁用</el-radio>-->
                        <!--&lt;!&ndash;<el-radio class="radio" :label="0">市级</el-radio>&ndash;&gt;-->
                        <!--</el-radio-group>-->
                        <!--</el-form-item>-->
                    </el-form>
                    <div slot="footer" class="dialog-footer">
                        <el-button @click.native="editFormVisible = false">取消</el-button>
                        <el-button type="primary" @click.native="editSubmit" :loading="editLoading">提交</el-button>
                    </div>
                </el-dialog>

                <!--新增界面,弹出层-->
                <el-dialog title="新增" v-model="addFormVisible" :close-on-click-modal="false">
                    <el-form :model="addForm" label-width="80px" :rules="addFormRules" ref="addForm">
                        <el-form-item label="子事项名称(目录) " prop="transName">
                            <el-input v-model="addForm.transName" auto-complete="off"></el-input>
                        </el-form-item>
                        <el-form-item label="事项类型" prop="transType">
                            <el-input v-model="addForm.transType" auto-complete="off"></el-input>
                        </el-form-item>
                        <!--<el-form-item label="事项类型" prop="transType">-->
                        <!--<el-radio-group v-model="addForm.transType">-->
                        <!--<el-radio class="radio" :label="0" name="aa">行政许可</el-radio>-->
                        <!--<el-radio class="radio" :label="1">行政给付</el-radio>-->
                        <!--<el-radio class="radio" :label="2">行政检查</el-radio>-->
                        <!--<el-radio class="radio" :label="3">行政征收</el-radio>-->
                        <!--<el-radio class="radio" :label="4">行政确认</el-radio>-->
                        <!--<el-radio class="radio" :label="5">其他权值</el-radio>-->
                        <!--<el-radio class="radio" :label="6">公共服务</el-radio>-->
                        <!--</el-radio-group>-->
                        <!--</el-form-item>-->
                        <el-form-item label="基本编码" prop="baseCode">
                            <el-input-number v-model="addForm.baseCode"></el-input-number>
                        </el-form-item>
                        <el-form-item label="所属条线">
                            <el-input v-model="addForm.stripLine" auto-complete="off"></el-input>
                        </el-form-item>
                        <el-form-item label="法定时限" prop="legalDay">
                            <el-input v-model="addForm.legalDay" auto-complete="off"></el-input>
                        </el-form-item>
                        <el-form-item label="主项名称(上级目录)">
                            <el-select v-model="tid" placeholder="请选择">
                                <el-option
                                        v-for="item in options"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="应用范围">
                            <el-radio-group v-model="addForm.useScope">
                                <el-radio class="radio" :label="0">国家级</el-radio>
                                <el-radio class="radio" :label="1">省级</el-radio>
                                <el-radio class="radio" :label="2">市级</el-radio>
                            </el-radio-group>
                        </el-form-item>
                        <el-form-item label="法律依据" prop="legalBasis">
                            <el-input type="text" v-model="addForm.legalBasis"></el-input>
                        </el-form-item>
                        <el-form-item label="排序号" prop="seq">
                            <el-input type="text" v-model="addForm.seq"></el-input>
                        </el-form-item>
                        <el-form-item label="法定时限说明">
                            <el-input type="texteara" v-model="addForm.legalDayDesc"></el-input>
                        </el-form-item>
                        <el-form-item label="状态" prop="state">
                            <el-input type="text" v-model="addForm.state"></el-input>
                        </el-form-item>
                        <!--<el-form-item label="状态" prop="state">-->
                        <!--<el-radio-group v-model="addForm.state">-->
                        <!--<el-radio class="radio" :label="1">启用</el-radio>-->
                        <!--<el-radio class="radio" :label="0">禁用</el-radio>-->
                        <!--&lt;!&ndash;<el-radio class="radio" :label="0">市级</el-radio>&ndash;&gt;-->
                        <!--</el-radio-group>-->
                        <!--</el-form-item>-->
                    </el-form>
                    <div slot="footer" class="dialog-footer">
                        <el-button @click.native="addFormVisible = false">取消</el-button>
                        <el-button type="primary" @click.native="addSubmit" :loading="addLoading">保存
                        </el-button>
                        <el-button type="success" @click.native="auditSubmit" :loading="addLoading">提交审核</el-button>
                    </div>
                </el-dialog>
            </el-col>
        </el-row>
    </section>
</template>
<style>
    .el-input-group__prepend {
        width: 105px;
        border: none;
        border-radius: 3px;
    }

    .el-input-group__append {
        border: none;
    }

    .el-input__inner {
        border: 1px solid #e5e5e5;
        border-radius: 3px;
    }

    .main-box .tab-box .tab-content .btn-box .el-input__inner {
        border: 1px solid #e5e5e5;
        border-radius: 3px;
    }
</style>
<script>
    import util from '../../common/js/util'
    import $ from 'jquery'
    //import NProgress from 'nprogress'
    import {
        getMenuList,
        removeList,
        batchRemoveList,
        editList,
        addList,
        treeDept,
        auditList,
        versionList
    } from '../../api/implement/draft.js';

    var placeholders = {"transName": "请输入查找事项名", "transType": "请输入查找事项类型", "baseCode": "请输入查找基本编码"};
    export default {
        data() {
            return {
                filter: {
                    // transName: '',
                    // transType: '',
                    // baseCode: '',
                },
                //列表信息
                list: [
                    {"transName":"河北事项管理系统"},
                ],
                state: '',
                //分页
                total: 0,
                page: 1,
                //页面数据加载
                listLoading: false,
                //列表选中列
                sels: [],
                keywords: '', //搜索框的关键字内容
                size: 5,
                btn: '',  //btn 的内容
                placeholder: placeholders["transName"],
                select: 'transName',  //搜索框的关键字内容
                //单选---事项类型
                transType: 0,
                //新增弹出层----select多选
                options: [{
                    value: '选项1',
                    label: '事项一'
                }, {
                    value: '选项2',
                    label: '事项二'
                }, {
                    value: '选项3',
                    label: '事项三'
                }, {
                    value: '选项4',
                    label: '事项四'
                }, {
                    value: '选项5',
                    label: '事项五'
                }],
                //主项名称----多选
                //tid: [],
                tid: '',
                editFormVisible: false,//编辑界面是否显示
                editLoading: false,
                putState: '',
                //事项类型
                // addFtransType: 1,
                //定义必填项
                addFormRules: {
                    transName: [{required: true, message: '请输入事项名称', trigger: 'blur'}],
                    transType: [{required: true, message: '请输入事项类型', trigger: 'blur'}],
                    //baseCode: [{required: true, message: '请输入基础编码', trigger: 'blur'}],
                    legalDay: [{required: true, message: '请输入法定时限', trigger: 'blur'}],
                    legalBasis: [{required: true, message: '请输入法律依据', trigger: 'blur'}],
                    seq: [{required: true, message: '请输入排序号', trigger: 'blur'}],
                    state: [{required: true, message: '请选择状态', trigger: 'blur'}],

                },

                //编辑界面数据
                editForm: {
                    id: 0,
                    transName: '',     //子项名称
                    transType: '1',      //事项类型（单选）
                    baseCode: 0,        //基础编码
                    stripLine: '',      //所属条线
                    legalDay: '',       //法定时限
                    legalBasis: '',     //法律依据
                    tid: '',            //主项名称（多选）
                    useScope: '',       // 引用范围
                    seq: '',            //排序号,
                    state: '',          //状态 (单选)
                    legalDayDesc: ''    //法定时限说明
                },
                addFormVisible: false,//新增界面是否显示
                addLoading: false,
                editFormRules: {
                    transName: [{required: true, message: '请输入事项名称', trigger: 'blur'}],
                    transType: [{required: true, message: '请输入事项类型', trigger: 'blur'}],
                    baseCode: [{required: true, message: '请输入基础编码', trigger: 'blur'}],
                    legalDay: [{required: true, message: '请输入法定时限', trigger: 'blur'}],
                    legalBasis: [{required: true, message: '请输入法律依据', trigger: 'blur'}],
                    seq: [{required: true, message: '请输入排序号', trigger: 'blur'}],
                    state: [{required: true, message: '请选择状态', trigger: 'blur'}],
                },
                //目录清单新增弹窗-----新增界面数据
                // let putState=this.form.button.val;

                // let putState = this.putState,
                // let state = {
                //     1: '增加',
                //     2: '审批'
                // },
                addForm: {
                    transName: '',     //子项名称
                    transType: '1',      //事项类型（单选）
                    baseCode: 0,        //基础编码
                    stripLine: '',      //所属条线
                    legalDay: '',       //法定时限
                    legalBasis: '',     //法律依据
                    tid: '',            //主项名称（多选）
                    useScope: '',       // 引用范围
                    seq: '',            //排序号,
                    state: '',          //状态 (单选)
                    legalDayDesc: '',   //法定时限说明
                    // putState:'1'///状态为1表示增加
                },

                //目录清单审核弹窗-----界面数据

                //分页选项
                selected: '10',
                options: [
                    {text: '10', value: '10'},
                    {text: '20', value: '20'},
                    {text: '50', value: '50'}
                ],
                valuePage: '',

                //树形菜单
                treeDept: [],
                defaultProps: {
                    children: 'children',
                    label: 'name'
                },
            }
        },
        methods: {
            //性别显示转换
            formatSex: function (row, column) {
                return row.sex == 1 ? '男' : row.sex == 0 ? '女' : '未知';
            },
            //分页相关
            // handleCurrentChange(val) {
            //     this.page = val;
            //     this.getList();
            // },
            pageSizeChange(val) {
                console.log(`每页 ${val} 条`);
                this.filter.per_page = val;
                this.getUsers();
            },
            pageCurrentChange(val) {
                console.log(`当前页: ${val}`);
                this.filter.page = val;
                this.getUsers();
            },
            pageCurrentChange(val) {
                console.log(`当前页: ${val}`);
                this.filter.page = val;
                this.getUsers();
            },
            //条件查询
            query() {
                //获取选择的事项类型，并赋给input
                this.filter[this.select] = this.keywords;
                console.log(this.keywords);
                console.log(this.select);
                let params = {
                    size: 10,
                    current: 1,  //定义当前页
                    transRoom: '1',
                    key: this.select,
                    //value: 'aa',
                    value: this.keywords,
                }
                getMenuList(params).then((res) => {
                    this.total = res.data.total;
                    this.list = res.data.records;
                });
                console.log(12334243);
            },
            //搜索
            searchFieldChange(val) {
                this.placeholder = placeholders[val];
                console.log(`搜索字段： ${val} `);
            },

            //获取目录列表
            getList() {
                //左侧的菜单树
                treeDept(params).then((res) => {
                    this.treeDept = res.data;
                });
                //动态路由参数参数传递
                //通过params传递参数
                let params = {
                    size: 10,
                    current: 1,
                    transRoom: '1',
                    key: 'transName'
                }
                getMenuList(params).then((res) => {
                    this.total = res.data.total;
                    this.list = res.data.records;
                });
            },
            //单个删除
            handleDel: function (index, row) {
                this.$confirm('确认删除该记录吗?', '提示', {
                    type: 'warning'
                }).then(() => {
                    this.listLoading = true;
                    //NProgress.start();
                    let para = {id: row.id};
                    removeList(para).then((res) => {
                        this.listLoading = false;
                        //NProgress.done();
                        this.$message({
                            message: '删除成功',
                            type: 'success'
                        });
                        this.getList();
                    });
                }).catch(() => {

                });
            },

            //显示编辑界面
            handleEdit(list) {
                if (this.sels.length == 0) {
                    this.$confirm('请选择一条信息')
                } else if (this.sels.length > 1) {
                    this.$confirm('只能选择一条信息')
                } else {
                    //var id=this.sels[0].id;
                    var updateContent = this.sels[0].baseCode
                    console.log(updateContent);
                    this.editFormVisible = true;
                    this.sels[0].transName = list.transName;
                    this.sels[0].baseCode = list.baseCode;
                    // this.editForm.transName = update.transName;
                    // this.editForm.baseCode = update.baseCode;
                    // this.editForm.stripLine = update.stripLine;
                    // this.editForm.legalDay = update.legalDay;
                    // this.editForm.legalBasis = update.legalBasis;
                }

                // this.editForm = Object.assign({}, row);
            },
            //显示新增界面
            handleAdd: function () {
                this.addFormVisible = true;
                this.addForm = {
                    transName: '',     //子项名称
                    transType: '1',      //事项类型（单选）
                    baseCode: 0,        //基础编码
                    stripLine: '',      //所属条线
                    legalDay: '',       //法定时限
                    legalBasis: '',     //法律依据
                    tid: '',            //主项名称（多选）
                    useScope: '',       // 引用范围
                    seq: '',            //排序号,
                    state: '',          //状态 (单选)
                    legalDayDesc: '',   //法定时限说明
                    putState: '1'
                };
                console.log('打开新增弹窗');
            },
            //编辑
            editSubmit: function () {
                this.$refs.editForm.validate((valid) => {
                    if (valid) {
                        this.$confirm('确认修改吗？', '提示', {}).then(() => {
                            this.editLoading = true;
                            //NProgress.start();
                            // data: JSON.stringify(param)
                            let para = Object.assign({}, this.editForm);
                            editList(para).then(({msg, code}) => {
                                this.logining = false;
                                this.addLoading = false;
                                if (code !== 200) {
                                    this.$message({
                                        message: msg,
                                        type: 'error'
                                    });
                                } else {
                                    this.$refs['editForm'].resetFields();
                                    this.addFormVisible = false;
                                    this.$message({
                                        message: msg,
                                        type: 'success'
                                    });
                                    this.getList();

                                }

                            });
                        });
                    }
                });
            },


            //新增
            addSubmit: function () {
                this.$refs.addForm.validate((valid) => {
                    if (valid) {
                        this.$confirm('确认提交吗？', '提示', {}).then(() => {
                            this.addLoading = true;
                            var putState = '1';
                            let params = Object.assign(this.addForm, putState);
                            addList(params).then(({msg, code}) => {
                                this.logining = false;
                                this.addLoading = false;
                                if (code !== 200) {
                                    this.$message({
                                        message: msg,
                                        type: 'error'
                                    });
                                } else {
                                    this.$refs['addForm'].resetFields();
                                    this.addFormVisible = false;
                                    this.$message({
                                        message: msg,
                                        type: 'success'
                                    });
                                    this.getList();

                                }

                            });
                        });
                    }
                });
            },

            //弹窗事件----提交审核
            auditSubmit: function () {
                console.log(val);
                this.$refs.addForm.validate((valid) => {
                    if (valid) {
                        this.$confirm('确认提交吗？', '提示', {}).then(() => {
                            this.addLoading = true;
                            let params = Object.assign({}, this.addForm, "'putStage':'2'");
                            addList(params).then(({msg, code}) => {
                                this.logining = false;
                                this.addLoading = false;
                                if (code !== 200) {
                                    this.$message({
                                        message: msg,
                                        type: 'error'
                                    });
                                } else {
                                    this.$refs['addForm'].resetFields();
                                    this.addFormVisible = false;
                                    this.$message({
                                        message: msg,
                                        type: 'success'
                                    });
                                    this.getList();

                                }

                            });
                        });
                    }
                });
            },


            selsChange: function (sels) {
                this.sels = sels;
            },
            //批量删除
            batchRemove: function () {
                var ids = this.sels.map(item => item.id).toString();
                if (this.sels.length == 0) {
                    this.$confirm('请至少选择一条信息')
                } else {
                    this.$confirm('确认删除选中记录吗？', '提示', {
                        type: 'warning'
                    }).then(() => {
                        this.listLoading = true;
                        //NProgress.start();
                        let para = {ids: ids};
                        batchRemoveList(para).then((res) => {
                            this.listLoading = false;
                            console.log(para);
                            //NProgress.done();
                            this.$message({
                                message: '删除成功',
                                type: 'success'
                            });
                            this.getList();
                        });
                    }).catch(() => {

                    });
                }
            },


            //申请审核
            auditing: function () {
                var ids = this.sels.map(item => item.id).toString();
                if (this.sels.length == 0) {
                    this.$confirm('请至少选择一条信息')
                } else {
                    this.$confirm('确认审批选中记录吗？', '提示', {
                        type: 'warning'
                    }).then(() => {
                        this.listLoading = true;
                        //NProgress.start();
                        let para = {ids: ids};
                        auditList(para).then((res) => {
                            this.listLoading = false;
                            console.log(para);
                            //NProgress.done();
                            this.$message({
                                message: '审批成功',
                                type: 'success'
                            });
                            this.getList();
                        });
                    }).catch(() => {

                    });
                }
            },


            //查看版本
            handleVersion: function () {
                var ids = this.sels.map(item => item.id).toString();
                if (this.sels.length == 0) {
                    this.$confirm('请至少选择一条信息')
                } else {
                    this.$confirm('确认审批选中记录吗？', '提示', {
                        type: 'warning'
                    }).then(() => {
                        this.listLoading = true;
                        //NProgress.start();
                        let para = {ids: ids};
                        versionList(para).then((res) => {
                            this.listLoading = false;
                            console.log(para);
                            //NProgress.done();
                            this.$message({
                                message: '审批成功',
                                type: 'success'
                            });
                            this.getList();
                        });
                    }).catch(() => {

                    });
                }
            },

        },
        mounted() {
            this.getList();
        }
    }

</script>

<style lang="scss">
    @import '../../styles/table';
    @import '../../styles/vars';

    .custom-tree-node {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 14px;
        padding-right: 8px;
    }
</style>