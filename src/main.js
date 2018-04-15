// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import  VueResource  from 'vue-resource'
import router from './router/index'
import Vuex from 'vuex';
import locale from 'element-ui/lib/locale/lang/en'

Vue.config.productionTip = false

/* eslint-disable no-new */

Vue.use(VueResource)
Vue.use(ElementUI, { locale })
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: process.env.API_HOST
  }
})

new Vue({
    el: '#app',
    router,
    render: h => h(App),
    template: '<App/>',
    components: { App }
})
