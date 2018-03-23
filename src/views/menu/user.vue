<template>
	<section>
		<!--工具条-->
		<el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
			<el-form :inline="true" :model="filters">
				<el-form-item>
					<el-input v-model="filters.name" placeholder="姓名"></el-input>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" v-on:click="getUser">查询</el-button>
				</el-form-item>
			</el-form>
		</el-col>
		<!--列表-->
		<template>
			<el-table :data="users" highlight-current-row v-loading="loading" style="width: 100%;">
				<el-table-column type="index" width="60">
				</el-table-column>
				<el-table-column prop="name" label="姓名" width="120" sortable>
				</el-table-column>
				<el-table-column prop="sex" label="性别" width="100" :formatter="formatSex" sortable>
				</el-table-column>
				<el-table-column prop="age" label="年龄" width="100" sortable>
				</el-table-column>
				<el-table-column prop="birth" label="生日" width="120" sortable>
				</el-table-column>
				<el-table-column prop="addr" label="地址" min-width="180" sortable>
				</el-table-column>
			</el-table>
			 <!--<h3>跟后端进行一次数据对接</h3>-->
             <!--<p>名称：{{acceptRequest}}</p>-->
             <!--<p>名称1：{{legalStandardDesc}}</p>-->
             <!--<p>出资人：{{materiarName}}</p>-->
		</template>

	</section>
</template>
<script>
	import { getUserList } from '../../api/api';
	//import NProgress from 'nprogress'
	export default {
		data() {
			return {
			    acceptRequest:'',
				legalStandardDesc:'',
				materiarName:'',
				filters: {
					// name: ''
				},
				loading: false,
				users: [ ]
			}
		},
		methods: {
			//性别显示转换
			formatSex: function (row, column) {
				return row.sex == 1 ? '男' : row.sex == 0 ? '女' : '未知';
			},
			//获取用户列表
			getUser: function () {
				let para = {
					 name: this.filters.name
				};
				this.loading = true;
				//NProgress.start();
				// var listParams = { name:'12'};
				getUserList(para).then((res) => {
					this.users = res.data.users;
					this.loading = false;
					this.acceptRequest=res.data.acceptRequest;
					// dataType:'jsonp',
					//NProgress.done();
					console.log(res)
				});
			}
		},
		mounted() {
			this.getUser();
		}
	};

</script>

<style scoped>

</style>