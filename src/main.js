// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import {router} from './router';
import VueCookies from 'vue-cookies';

import 'font-awesome/css/font-awesome.min.css'
import Icon from 'vue-svg-icon/Icon.vue';

import AtComponents from 'at-ui'
import 'at-ui-style'

Vue.use(AtComponents);

Vue.use(VueCookies);
Vue.component('icon', Icon);
Vue.config.productionTip = false;

const cookies = VueCookies;

router.beforeEach((to, from, next) => {
    if (to.path === '/') {
        next('/order')
    }else{
        next()
    }
});

new Vue({
    router,
    cookies,
    render: h => h(App)
}).$mount('#app');
