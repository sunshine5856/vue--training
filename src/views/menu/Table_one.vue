<!--实施清单-->

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
                                    :data="treeDate"
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
                                <button class="operate-btn" @click="handleEdit">
                                    <i class="el-icon-edit">&nbsp;&nbsp;修改</i>
                                </button>
                                <button class="operate-btn">
                                    <i class="el-icon-delete btn-icon" @click="batchRemove">&nbsp;&nbsp;删除</i>
                                </button>
                                <button class="operate-btn">
                                    <i class="el-icon-document btn-icon">&nbsp;&nbsp;申请审核</i>
                                </button>

                            </el-col>

                            <el-col :span="7" style="padding-right:0;">
                                <table style="float:right;" :model="filters">
                                    <tr>
                                        <td style="width:108px;">
                                            <el-select v-model="valueMater" placeholder="事项名称"
                                                       class="gms-condition-choose">
                                                <el-option
                                                        v-for="item in mater"
                                                        :key="item.valueMater"
                                                        :label="item.label"
                                                        :value="item.valueMater">
                                                </el-option>
                                            </el-select>
                                        </td>
                                        <td>
                                            <el-input class="gms-input" style="height:30px;" v-on:click="getList"
                                                      v-model="filters.transName ">

                                            </el-input>
                                        </td>
                                        <td style="text-align:right;">
                                            <el-button type="primary" class="gms-search" icon="el-icon-search"
                                                       v-on:click="getList">
                                                <i class="el-icon-search icon-search">&nbsp;查询</i>

                                            </el-button>
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
                            <el-table-column prop="transName" label="事项名称" width="120">
                            </el-table-column>
                            <el-table-column prop="transCode" label="事项编码" width="100" :formatter="formatSex">
                            </el-table-column>
                            <el-table-column prop="implementCode" label="实施编码" width="180">
                            </el-table-column>
                            <el-table-column prop="promiseDay" label="承诺时间" width="120">
                            </el-table-column>
                            <el-table-column prop="transRoom" label="所属部门" min-width="100">
                            </el-table-column>
                            <!--<el-table-column prop="legalBasis" label="法律依据" min-width="180">-->
                            <!--</el-table-column>-->
                            <!--<el-table-column label="操作" width="150">-->
                            <!--<template scope="scope">-->
                            <!--<el-button size="small" @click="handleEdit(scope.$index)">编辑</el-button>-->
                            <!--<el-button type="danger" size="small" @click="handleDel(scope.$index)">删除-->
                            <!--</el-button>-->
                            <!--</template>-->
                            <!--</el-table-column>-->
                        </el-table>
                        <!--分页-->
                        <div class="page-box" style="padding:10px 0 20px;">
                            <el-col :span="12">
                                <div>
                                    <span>一共{{total}}条数据，每页显示</span>
                                    <select v-model="selected" class="gms-choose-page-box">
                                        <option v-for="option in options" v-bind:value="option.value">
                                            {{ option.text }}
                                        </option>
                                    </select>
                                    条
                                </div>
                            </el-col>
                            <el-pagination layout="prev, pager, next" @current-change="handleCurrentChange"
                                           :page-size="20"
                                           :total="total" style="float:right;">
                            </el-pagination>
                        </div>
                    </div>

                </div>

                <!--编辑界面-->
                <el-dialog title="编辑" v-model="editFormVisible" :close-on-click-modal="false">
                    <el-form :model="editForm" label-width="80px" :rules="editFormRules" ref="editForm">
                        <el-form-item label="姓名" prop="transName">
                            <el-input v-model="editForm.transName" auto-complete="off"></el-input>
                        </el-form-item>
                        <el-form-item label="性别">
                            <el-radio-group v-model="editForm.sex">
                                <el-radio class="radio" :label="1">男</el-radio>
                                <el-radio class="radio" :label="0">女</el-radio>
                            </el-radio-group>
                        </el-form-item>
                        <el-form-item label="年龄">
                            <el-input-number v-model="editForm.age" :min="0" :max="200"></el-input-number>
                        </el-form-item>
                        <el-form-item label="生日">
                            <el-date-picker type="date" placeholder="选择日期" v-model="editForm.birth"></el-date-picker>
                        </el-form-item>
                        <el-form-item label="地址">
                            <el-input type="textarea" v-model="editForm.addr"></el-input>
                        </el-form-item>
                    </el-form>
                    <div slot="footer" class="dialog-footer">
                        <el-button @click.native="editFormVisible = false">取消</el-button>
                        <el-button type="primary" @click.native="editSubmit" :loading="editLoading">提交</el-button>
                    </div>
                </el-dialog>

                <!--新增界面,弹出层-->
                <el-dialog title="新增" v-model="addFormVisible" :close-on-click-modal="false">
                    <el-form :model="addForm" label-width="80px" :rules="addFormRules" ref="addForm">
                        <el-form-item label="事项名称" prop="transName">
                            <el-input v-model="addForm.transName" auto-complete="off"></el-input>
                        </el-form-item>
                        <el-form-item label="事项编码">
                            <el-radio-group v-model="addForm.sex">
                                <el-radio class="radio" :label="1">男</el-radio>
                                <el-radio class="radio" :label="0">女</el-radio>
                            </el-radio-group>
                        </el-form-item>
                        <el-form-item label="实施编码">
                            <el-input-number v-model="addForm.age" :min="0" :max="200"></el-input-number>
                        </el-form-item>
                        <el-form-item label="承诺时间">
                            <el-date-picker type="date" placeholder="选择日期" v-model="addForm.birth"></el-date-picker>
                        </el-form-item>
                        <el-form-item label="所属部门">
                            <el-input type="textarea" v-model="addForm.addr"></el-input>
                        </el-form-item>
                    </el-form>
                    <div slot="footer" class="dialog-footer">
                        <el-button @click.native="addFormVisible = false">取消</el-button>
                        <el-button type="primary" @click.native="addSubmit" :loading="addLoading">提交</el-button>
                    </div>
                </el-dialog>
            </el-col>
        </el-row>
    </section>
</template>

<script>
    import util from '../../common/js/util'
    import {
        getImplementList,
        getImplementListPage,
        removeList,
        batchRemoveList,
        editList,
        addList,
        treeDept
    } from '../../api/implement.js';

    export default {
        data() {
            return {
                filters: {
                    transName: '',
                    // transType: '',
                },
                list: [
                    // {'transSname': 'hqq', 'transType': 'lalla'},
                ],
                total: 0,
                size:'',
                page: 1,
                listLoading: false,
                sels: [],//列表选中列

                editFormVisible: false,//编辑界面是否显示
                editLoading: false,
                editFormRules: {
                    name: [
                        {required: true, message: '请输入姓名', trigger: 'blur'}
                    ]
                },
                //编辑界面数据
                editForm: {
                    id: 0,
                    transName: '',
                    transType: '',
                    baseCode: 0,
                    legalDay: '',
                    stripLine: '',
                    legalBasis: ''
                },

                addFormVisible: false,//新增界面是否显示
                addLoading: false,
                addFormRules: {
                    name: [
                        {required: true, message: '请输入姓名', trigger: 'blur'}
                    ]
                },
                //新增界面数据
                addForm: {
                    transName: '',
                    transType: '',
                    baseCode: 0,
                    legalDay: '',
                    stripLine: '',
                    legalBasis: ''
                },
                //事项选择
                mater: [{
                    valueMater: '选项1',
                    label: '已办事项'
                }, {
                    valueMater: '选项2',
                    label: '待办事项'
                }],
                valueMater: '',
                //分页选项
                selected: '10',
                options: [
                    {text: '10', value: '10'},
                    {text: '20', value: '20'},
                    {text: '50', value: '50'}
                ],
                valuePage: '',

                //树形菜单
                treeDate: [],
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
            handleCurrentChange(val) {
                this.page = val;
                this.getList();
            },

            //获取用户列表
            getList() {
                // let para = {
                //     page: this.page,
                //     transSname: this.filters.transSname
                // };
                // this.listLoading = true;
                //动态路由参数参数传递
                //通过params传递参数
                //部门树
                treeDept(params).then((res) => {
                    // /*this.total = res.data.total;
                    this.treeDate = res.data;
                    // this.listLoading = false;
                    //NProgress.done();
                });
                let params = {
                    current: 1,
                    size: 10,
                    transName: this.filters.transName
                }
                getImplementList(params).then((res) => {
                    this.total = res.data.total;
                    this.list = res.data.records;
                    // this.listLoading = false;
                    //NProgress.done();
                });
            },

            //查询
            onSubmit() {
                console.log('submit!');
            },
            //单个删除
            handleDel: function (index, row) {
                if (this.sels.length == 0) {
                    this.$confirm('请至少选择一条信息')
                }
                else {
                    this.$confirm('确认删除该记录吗?', '提示', {
                        type: 'warning'
                    }).then(() => {
                        this.listLoading = true;
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
                }

            },
            //显示编辑界面
            handleEdit: function () {
                if (this.sels.length == 0) {
                    this.$confirm('请至少选择一条信息')
                } else {
                    this.editFormVisible = true;
                    this.editForm = Object.assign({});
                }

            },
            //显示新增界面
            handleAdd: function () {
                this.addFormVisible = true;
                this.addForm = {
                    transName: '',
                    transType: '',
                    baseCode: 0,
                    legalDay: '',
                    stripLine: '',
                    legalBasis: ''
                };
            },
            //编辑
            editSubmit: function () {
                this.$refs.editForm.validate((valid) => {
                    if (valid) {
                        this.$confirm('确认提交吗？', '提示', {}).then(() => {
                            this.editLoading = true;
                            //NProgress.start();
                            let para = Object.assign({}, this.editForm);
                            para.birth = (!para.birth || para.birth == '') ? '' : util.formatDate.format(new Date(para.birth), 'yyyy-MM-dd');
                            editList(para).then((res) => {
                                this.editLoading = false;
                                //NProgress.done();
                                this.$message({
                                    message: '提交成功',
                                    type: 'success'
                                });
                                this.$refs['editForm'].resetFields();
                                this.editFormVisible = false;
                                this.getList();
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
                            //NProgress.start();
                            let para = Object.assign({}, this.addForm);
                            para.birth = (!para.birth || para.birth == '') ? '' : util.formatDate.format(new Date(para.birth), 'yyyy-MM-dd');
                            addList(para).then((res) => {
                                this.addLoading = false;
                                //NProgress.done();
                                this.$message({
                                    message: '提交成功',
                                    type: 'success'
                                });
                                this.$refs['addForm'].resetFields();
                                this.addFormVisible = false;
                                this.getList();
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

            }
        },
        mounted() {
            this.getList();
        }
    }

</script>

<style lang="scss">
    @import '../../styles/table.scss';
    @import '../../styles/vars.scss';

    .custom-tree-node {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 14px;
        padding-right: 8px;
    }
</style>