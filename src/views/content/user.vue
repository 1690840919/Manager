<template>
  <div class="userPage">
    <!-- 查询表单 -->
    <div class="formBox">
      <el-form :inline="true" :model="queryForm" class="demo-form-inline">
        <el-form-item label="用户ID">
          <el-input
            v-model="queryForm.userId"
            placeholder="请输入用户ID"
          ></el-input>
        </el-form-item>
        <el-form-item label="用户名">
          <el-input
            v-model="queryForm.userName"
            placeholder="请输入用户名"
          ></el-input>
        </el-form-item>
        <el-form-item label="用户状态">
          <el-select
            v-model="queryForm.userStatus"
            placeholder="请输入用户状态"
          >
            <el-option label="在职" value="1"></el-option>
            <el-option label="休假" value="2"></el-option>
            <el-option label="离职" value="3"></el-option>
            <el-option label="试用期" value="4"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handleCheck">查询</el-button>
          <el-button @click="handleReset">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
    <!-- 表格内容 -->
    <div class="tableBox">
      <div class="btnBox">
        <el-button type="primary">新增</el-button>
        <el-button type="danger">批量删除</el-button>
      </div>
      <el-table
        :header-cell-style="{ textAlign: 'center' }"
        :cell-style="{ textAlign: 'center' }"
        :data="tableData"
        style="width: 100%"
      >
        <!-- 选择框 -->
        <el-table-column type="selection" width="55" />
        <!-- 表头数据 -->
        <el-table-column
          :key="item.prop"
          :prop="item.prop"
          :label="item.label"
          :width="item.width"
          :formatter="item.formatter"
          v-for="item in columns"
        >
        </el-table-column>
        <!-- 表格按钮 -->
        <el-table-column label="操作" width="200">
          <template #default="scope">
            <el-button size="small" type="primary">编辑</el-button>
            <el-button size="small" type="danger">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <!-- 分页管理 -->
      <div class="pageBox">
        <el-pagination background layout="prev, pager, next" :total="1000">
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import Utils from '../../utils/utils.js'
import { reactive } from 'vue'
export default {
  name: '',
  props: {},
  setup() {
    // 查询表单内容
    const queryForm = reactive({
      userId: '',
      userName: '',
      userStatus: ''
    })
    // 表头
    const columns = [
      {
        label: '用户ID',
        prop: 'userID'
      },
      {
        label: '用户名',
        prop: 'userName'
      },
      {
        label: '用户邮箱',
        prop: 'userEmail',
        width: 160
      },
      {
        label: '用户角色',
        prop: 'userRole',
        formatter(row, column, value) {
          return {
            0: '管理员',
            1: '普通用户'
          }[value]
        }
      },
      {
        label: '用户状态',
        prop: 'userStatus',
        formatter(row, column, value) {
          console.log(value)
          return {
            0: '试用期',
            1: '在职',
            2: '休假',
            3: '离职'
          }[value]
        }
      },
      {
        label: '注册时间',
        prop: 'registerTime',
        width: 180,
        formatter(row, column, value) {
          return Utils.formateDate(new Date(value))
        }
      },
      {
        label: '最后登陆时间',
        prop: 'lastLoginTime',
        width: 180,
        formatter(row, column, value) {
          return Utils.formateDate(new Date(value))
        }
      }
    ]
    // 表格内容
    const tableData = [
      {
        userID: '10001',
        userName: 'admin',
        userEmail: 'admin@qq.com',
        userRole: '1',
        userStatus: '1',
        registerTime: new Date(),
        lastLoginTime: new Date()
      },
      {
        userID: '10001',
        userName: 'admin',
        userEmail: 'admin@qq.com',
        userRole: '1',
        userStatus: '1',
        registerTime: new Date(),
        lastLoginTime: new Date()
      },
      {
        userID: '10001',
        userName: 'admin',
        userEmail: 'admin@qq.com',
        userRole: '1',
        userStatus: '1',
        registerTime: new Date(),
        lastLoginTime: new Date()
      },
      {
        userID: '10001',
        userName: 'admin',
        userEmail: 'admin@qq.com',
        userRole: '1',
        userStatus: '1',
        registerTime: new Date(),
        lastLoginTime: new Date()
      },
      {
        userID: '10001',
        userName: 'admin',
        userEmail: 'admin@qq.com',
        userRole: '1',
        userStatus: '1',
        registerTime: new Date(),
        lastLoginTime: new Date()
      },
      {
        userID: '10001',
        userName: 'admin',
        userEmail: 'admin@qq.com',
        userRole: '1',
        userStatus: '1',
        registerTime: new Date(),
        lastLoginTime: new Date()
      },
      {
        userID: '10001',
        userName: 'admin',
        userEmail: 'admin@qq.com',
        userRole: '1',
        userStatus: '1',
        registerTime: new Date(),
        lastLoginTime: new Date()
      }
    ]
    // 查询用户
    const handleCheck = () => {
      console.log('查询用户')
      console.log(queryForm)
    }
    // 重置表单
    const handleReset = () => {
      console.log('重置表单')
    }
    return {
      queryForm,
      handleCheck,
      handleReset,
      tableData,
      columns
    }
  }
}
</script>

<style src='' lang="scss" scoped>
.userPage {
  .formBox {
    height: 80px;
    border-radius: 5px;
    background: white;
    margin: 20px;
    display: flex;
    align-items: center;
    padding-left: 20px;
    .demo-form-inline {
      height: 45px;
    }
  }
  .tableBox {
    margin: 20px;
    background: white;
    .btnBox {
      height: 80px;
      display: flex;
      align-items: center;
      padding-left: 20px;
    }
  }
  .pageBox{
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>

