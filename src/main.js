// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueLazyload from 'vue-lazyload'
import vueResource from 'vue-resource'
import directiveNav from '@/directive/directiveNav'

Vue.config.productionTip = false
Vue.use(VueLazyload,{
	error:'dist/error.png',
	try: 1//default: 1
})
Vue.directive('directiveNav',directiveNav)

Vue.use(vueResource)

// Vue.filter('uppercase',function(value){

// })
/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
