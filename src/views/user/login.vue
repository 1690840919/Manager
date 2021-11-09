<template>
  <div class="loginPage">
    <div class="loginBox">
      <el-form :rules="rules" status-icon ref="loginForm" :model="loginData">
        <div class="title">火星</div>
        <el-form-item class="inputBox" prop="user">
          <el-input
            prefix-icon="el-icon-user"
            v-model="loginData.user"
            type="text"
          ></el-input>
        </el-form-item>
        <el-form-item class="inputBox" prop="password">
          <el-input
            prefix-icon="el-icon-view"
            v-model="loginData.password"
            type="password"
          ></el-input>
        </el-form-item>
        <el-form-item class="btnBox">
          <el-button class="btn" type="primary" @click="handleLogin"
            >登陆</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { loginRequest } from '../../api/user.js'
export default {
  name: '',
  props: {},
  data() {
    return {
      loginData: {
        user: 'admin',
        password: '123456'
      },
      // 表单校验规则,需要配置prop
      rules: {
        user: [
          {
            require: true,
            message: '请输入正确用户名',
            trigger: 'blur',
            pattern: /^(\w){5,8}$/
          }
        ],
        password: [
          {
            require: true,
            message: '请输入5-8位密码',
            trigger: 'blur',
            pattern: /^(\w){5,8}$/
          }
        ]
      }
    }
  },
  methods: {
    // 点击登陆，先判断表单是否正确
    handleLogin() {
      const self = this
      this.$refs.loginForm.validate(async (valid) => {
        if (valid) {
          const { data } = await loginRequest(this.loginData)
          // 登陆成功
          if (data.code == 1000) {
            this.$message({
              showClose: true,
              message: '登陆成功',
              type: 'success'
            })
            self.$router.push('/home')
            self.$storage.setItem('userInfo',data.data)
          } else {
            this.$message({
              showClose: true,
              message: '账号或者密码错误！',
              type: 'error'
            })
          }
        } else {
          this.$message({
            showClose: true,
            message: '登陆信息填写不正确',
            type: 'error'
          })
        }
      })
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
    .title {
      font-size: 40px;
      font-weight: bolder;
      text-align: center;
    }
    .inputBox {
      margin: 30px 0;
    }
    .btnBox {
      .btn {
        width: 100%;
      }
    }
  }
}
</style>
