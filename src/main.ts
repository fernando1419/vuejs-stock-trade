import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

Vue.config.productionTip = false

Vue.filter('currency', (value: number) => {
    return '$ ' + value.toLocaleString();
});

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
