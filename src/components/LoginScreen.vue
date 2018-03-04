<template>
  <div id="loginScreen">
    <label class="form-label">
      Username
      <input class="form-control" v-model='user.username'>
    </label>
    <label class="form-label">
      Password
      <input type="password" v-model='user.password' class="login-input">
    </label>
    <button type="button" class="btn btn-default" @click="login()" :class="{active: show === 'all'}">
      Login
    </button>
  </div>
</template>

<script>
import Authentication from '../Authentication'
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      show: 'all',
      user: {
        username: 'bkocak@genband.com',
        password: 'pneg4200'
      }
    }
  },
  methods: {
    ...mapActions(['setLoginData']),
    login() {
      let userCredentials = {
        username: this.user.username,
        password: this.user.password,
        domainApiKey: ''
      }
      this.$kandyJS.connect(userCredentials)
      .then( res => {
        this.setLoginData({
          username: userCredentials.username,
          password: userCredentials.password,
          token: 'YOUR_JWT_TOKEN'
        })
        Authentication.setToken('YOUR_JWT_TOKEN')
        this.$router.push('/')
      })
      .catch( err => {
        console.log(err)
      })
    },
    showModal(){
      console.log('deneme')
      this.openModal = true
    }
  }
}
</script>

<style scoped>
#loginScreen{
  margin-left: 0px;
}
</style>


