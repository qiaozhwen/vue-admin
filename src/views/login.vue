<template>
  <div class="login-container">
    <div class="login-box">
      <h1 style="text-align: center">后台管理系统</h1>
      <div class="form-horizontal">
        <div class="form-group">
          <div class="form-input">
            <input type="email" class="form-control" id="inputEmail3" placeholder="账号" v-model="username">
          </div>
        </div>
        <div class="form-group">
          <div class="form-input">
            <input type="password" class="form-control" id="inputPassword3" placeholder="密码" v-model="password">
          </div>
        </div>
        <div class="form-group">
          <div class="form-input form-button">
            <button type="button" class="btn btn-primary" @click="handleLogin">登录</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import loginApi from '../api/login'
export default {
  name: 'login',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  mounted () {
  },
  methods: {
    handleLogin () {
      var that = this
      if (this.username === '' && this.password === '') {
        this.$message({
          message: '账号密码不可为空',
          type: 'error'
        })
      } else {
        loginApi.login(this.username, this.password).then(res => {
          if (res.data.code === 200) {
            this.$message({
              message: '登录成功',
              type: 'success'
            })
            this.$store.dispatch('addRoutes', {routes: res.data.data, self: that, userName: that.username, password: that.password})
          } else {
            this.$message({
              message: '账号或密码错误',
              type: 'error'
            })
          }
        })
      }
    }
  }
}
</script>
<style scoped>
  .login-container{
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: #2d3a4b;
    z-index: -10;
  }
  .login-box{
    width: 30%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    position: absolute;
    height: 30%;
    color: #fff;
    min-width: 200px;
  }
  .form-input{
    margin: 0 auto;
    width: 70%;
  }
  .form-button{
    text-align: center;
  }
  .form-button button{
    width: 100%;
  }
</style>
