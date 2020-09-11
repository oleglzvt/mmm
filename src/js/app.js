import Vue from 'vue';
import '../scss/style.scss';

Vue.component('header-vue', require('./components/Header').default);
Vue.component('main-vue', require('./components/Main').default);

new Vue({
  el: '#app',
});
