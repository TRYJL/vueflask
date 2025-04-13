<template>
  <div>
    <h2>登录</h2>
    <input v-model="username" placeholder="用户名" />
    <input v-model="password" type="password" placeholder="密码" />
    <button @click="login">登录</button>
    <p style="color: red">{{ msg }}</p>
    <p><router-link to="/register">没有账号？点我注册</router-link></p>
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
    login() {
      this.$http.post('/api/login', {
        username: this.username,
        password: this.password
      }).then(res => {
        if (res.data.success) {
          this.$router.push('/home')
        } else {
          this.msg = res.data.message
        }
      })
    }
  }
}
</script>
