<template>
  <div class="loginPage">
    <div class="loginBox">
      <el-form :rules="rules" status-icon ref="form" :model="loginData">
        <div class="title">火星</div>
        <el-form-item class="inputBox" prop="user">
          <el-input prefix-icon="el-icon-user" v-model="loginData.user" type="text"></el-input>
        </el-form-item>
        <el-form-item class="inputBox" prop='password'>
          <el-input prefix-icon="el-icon-view" v-model="loginData.password" type="password"></el-input>
        </el-form-item>
        <el-form-item class="btnBox">
          <el-button class="btn" type="primary" @click="handleLogin">登陆</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  props: {},
  data() {
    return {
      loginData:{
        user:'',
        password:""
      },
      // 表单校验规则,需要配置prop
      rules:{
        user:[
          {
            require:true,
            message:'请输入用户名',
            trigger:'blur'
          }
        ],
        password:[
          {
            require:true,
            message:'请输入密码',
            trigger:'blur'
          }
        ]
      }
    }
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {
    // 点击登陆
    handleLogin(){
      console.log(this.loginData);
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>
.loginPage {
  background: rgb(248, 252, 255);
  height: 100vh;
  .loginBox {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 600px;
    height: 400px;
    border-radius: 10px;
    background: white;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    padding: 50px 100px;
    box-sizing: border-box;
    .title{
      font-size: 40px;
      font-weight: bolder;
      text-align: center;
    }
    .inputBox{
      margin: 30px 0;
    }
    .btnBox{
      .btn{
        width: 100%;
      }
    }
  }
}
</style>
