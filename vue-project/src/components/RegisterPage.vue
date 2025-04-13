<template>
    <div>
      <h2>注册</h2>
      <input v-model="username" placeholder="用户名" />
      <input v-model="password" type="password" placeholder="密码" />
      <button @click="register">注册</button>
      <p style="color: red">{{ msg }}</p>
      <p><router-link to="/login">已有账号？点我登录</router-link></p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        username: '',
        password: '',
        msg: ''
      }
    },
    methods: {
      register() {
        this.$http.post('/api/register', {
          username: this.username,
          password: this.password
        }).then(res => {
          if (res.data.success) {
            this.msg = '注册成功，请登录'
          } else {
            this.msg = res.data.message
          }
        })
      }
    }
  }
  </script>
  