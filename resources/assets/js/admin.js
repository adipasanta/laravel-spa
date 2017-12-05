require('./bootstrap');
require('./bulma');

import Vue from 'vue';
import VueResource from 'vue-resource';
import Router from 'vue-router';
import Vuex from 'vuex';
import VueLocalStorage from 'vue-localstorage';

// Vue Auth
import VueAuth from '@websanova/vue-auth';
import VueAuthDriver from '@websanova/vue-auth/drivers/auth/bearer';
import VueAuthHttp from '@websanova/vue-auth/drivers/http/vue-resource.1.x';
import VueAuthRouter from '@websanova/vue-auth/drivers/router/vue-router.2.x';

import App from './components/DashboardComponent.vue';

Vue.use(VueResource);
Vue.use(Vuex);
Vue.use(Router);
Vue.use(VueLocalStorage);

Vue.component('passport-login-component', require('./components/PassportLoginComponent.vue'));

Vue.router = new Router({
    routes: [
        {
            name: 'dashboard',
            path: '/admin',
            text: 'Dashboard',
            component: require('./components/DashboardContentComponent.vue')
        },
        {
            name: 'message',
            path: '/admin/message',
            text: 'Message Center',
            component: require('./components/AdminMessageComponent.vue')
        }
    ]
});


// setting authentication using Vue Auth
Vue.http.options.root = process.env.MIX_REST_END_POINT;
Vue.use(VueAuth, {
    localStorage: {
        avatar: { type: String }
    },
    auth: {
        request: function (req, token) {
            this.options.http._setHeaders.call(this, req, {Authorization: 'Bearer ' + token});
        },
        
        response: function (res) {
            var body = this.options.http._httpData.call(this, res),
                token = body.access_token ;
            if (token) return token;
        }
    },
    http: VueAuthHttp,
    router: VueAuthRouter,
    tokenDefaultName: 'admin_auth_token',
    loginData: {url: 'oauth/token'},
    fetchData: {url: 'api/user'},
    // refreshData: {url: 'oauth/token/refresh', method: 'POST'},
    refreshData: {enabled: false},
    authRedirect: {path: '/'},
    parseUserData(data) {
        return data;
    }
});

var component = require('./components/DashboardComponent.vue');
component.router = Vue.router;
new Vue(component).$mount('#app');