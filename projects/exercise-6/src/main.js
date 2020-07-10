import Vue from 'vue';
import App from './App.vue';
import Header from './Header.vue';
import TableStatus from './TableStatus.vue';
import Footer from './Footer.vue';

Vue.component('home', Header);
Vue.component('tableStatus', TableStatus);
Vue.component('footer', Footer);

new Vue({
  el: '#app',
  render: h => h(App)
})
