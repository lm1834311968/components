// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import fastClick from 'fastclick';
import VueAwesomeSwiper from 'vue-awesome-swiper';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import "./baseConfig/reset.less";
import "./baseConfig/base.less";
import "../static/iconfont.css";
import global from "./baseConfig/confige";
import store from './store';
import 'swiper/dist/css/swiper.css';
import VueLazyload from 'vue-lazyload';
 


Vue.config.productionTip = false;
fastClick.attach(document.body)
Vue.use(ElementUI);
Vue.use(VueAwesomeSwiper);
Vue.use(VueLazyload);
Vue.prototype.GLOBAL = global;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
