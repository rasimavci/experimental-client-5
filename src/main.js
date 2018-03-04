// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue"
import App from "./App"
import CallApp from "./CallApp"
import router from "./router"
import Authentication from "./Authentication"
import store from "./store"
import style from "./assets/css/style.css"
// This line import ALL kandy functions from kandy/index.js
import KandyJS from './kandy'
// Add KandyJS to vue prototype
Vue.prototype.$kandyJS = KandyJS
Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  console.log(store.getters.loginData)
  if (to.path !== "/login") {
    if (Authentication.checkToken()) {
      console.log("There is a token, resume. (" + to.path + ")")
      next()
    } else {
      console.log("There is no token, redirect to login. (" + to.path + ")")
      Authentication.closeSession()
      next("login")
    }
  } else {
    console.log("You're on the login page")
    next()
  }
})

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  store,
  components: { App },
  template: "<App/>"
})

/* eslint-disable no-new */
// new Vue({
//   el: "#callApp",
//   components: { CallApp },
//   template: "<callApp/>"
// })
