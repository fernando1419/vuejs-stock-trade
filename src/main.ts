import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import VueResource from 'vue-resource';

Vue.use(VueResource); // perform HTTP requests.

(<any>Vue).http.options.root = 'https://vuejs-stock-trade-example.firebaseio.com/';

Vue.config.productionTip = false;

Vue.filter('currency', (value: number) => {
    return '$ ' + value.toLocaleString();
});

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
