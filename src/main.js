import Vue from 'vue';
import vmodal from 'vue-js-modal'
import InstantSearch from 'vue-instantsearch';
import App from './App.vue';

Vue.use(InstantSearch);
Vue.use(vmodal)

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
