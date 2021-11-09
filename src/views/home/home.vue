<template>
  <div class="homePage">
    <!-- 左边菜单 -->
    <div class="leftMenu">
      <!-- logo -->
      <div class="titleBox">
        <img src="../../assets/logo.png" alt="" />
        <span class="text">Manager</span>
      </div>
      <!-- 菜单 -->
      <div class="menusBoxs"></div>
    </div>
    <!-- 右边内容 -->
    <div class="rightContent">
      <!-- 面包屑菜单 -->
      <div class="titleBox">
        <!-- 菜单 -->
        <div class="nav">
          <el-breadcrumb :separator-icon="ArrowRight">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>欢迎使用本系统</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <!-- 个人中心 -->
        <div class="user">
          <el-icon size='20' style="vertical-align: middle">
            <bell />
          </el-icon>
          <span class="name">{{userInfo.name}}</span>
        </div>
      </div>
      <!-- 内容 -->
      <div class="content">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: '',
  props: {},
  data() {
    return {}
  },
  computed: {
    ...mapState(['userInfo'])
  },
  created() {},
  mounted() {},
  watch: {},
  methods: {},
  components: {}
}
</script>

<style src='' lang="scss" scoped>
.homePage {
  position: relative;
  // 左边菜单
  .leftMenu {
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 250px;
    background: rgb(1, 20, 36);
    // logo
    .titleBox {
      margin-top: 20px;
      img {
        vertical-align: middle;
        width: 50px;
        height: 50px;
        margin: 0 10px 0 20px;
      }
      .text {
        vertical-align: middle;
        font-size: 32px;
        font-weight: bold;
        color: white;
      }
    }
    // 菜单
    .menusBoxs {
    }
  }
  // 右边内容
  .rightContent {
    overflow: hidden;
    margin-left: 250px;
    height: 100vh;
    background: rgb(236, 238, 242);
    .titleBox {
      height: 50px;
      background: white;
      display: flex;
      justify-content: space-between;
      // 面包屑
      .nav {
        padding-left: 20px;
        height: 50px;
        display: flex;
        align-items: center;
      }
      // 个人中心
      .user {
        cursor: pointer;
        line-height: 50px;
        .name {
          margin: 0 20px 0 10px;
        }
      }
    }
    .content {
      height: calc(100vh - 50px);
      overflow: hidden;
    }
  }
}
</style>
