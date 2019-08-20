import Vue from 'vue'
import App from './App.vue'
import '@fortawesome/fontawesome'
import '@fortawesome/fontawesome-free-solid'
import VueToasted from 'vue-toasted'
import router from './router'

Vue.config.productionTip = false

// load toasted
Vue.use(VueToasted, {
  iconPack: 'fontawesome',
  theme: 'outline',
});

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')

// use icon in vue-toasted
//https://code.luasoftware.com/tutorials/vuejs/vue-toasted-with-font-awesome-icon/