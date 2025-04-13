<template>
  <van-row type="flex" justify="center">
    <van-col>
      <div>
        <h2 v-if="loggedIn">
        欢迎，{{ username }}
        <button @click="logout">退出登录</button>
        </h2>
        <h2 v-else>未登录</h2>
      </div>
    </van-col>
    <van-col>
      <van-row span="6">
        <h3>上传受体文件</h3>
      </van-row>
      <van-row>
        <van-uploader :after-read="afterRead" />
      </van-row>
    </van-col>

    <van-col span="6">span: 6</van-col>
  </van-row>

  </template>
<van-uploader v-model="fileList" multiple />

  <script>
  export default {
    data() {
      return {
        username: '',
        loggedIn: false,
        fileList:[
          {
            url:''
          }
        ]
      }
    },
    mounted() {
      this.$http.get('/api/user').then(res => {
        this.loggedIn = res.data.logged_in
        this.username = res.data.username
      })
    },
    methods: {
      logout() {
        this.$http.post('/api/logout').then(() => {
          this.$router.push('/login')
        })
      },
      afterRead(){
        this.$http.post('api/upload').then(()=>{

        })
      }
    }
  }
  </script>
  