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

import App from './components/PassportAppComponent.vue';

Vue.use(VueResource);
Vue.use(Vuex);
Vue.use(Router);
Vue.use(VueLocalStorage);

// register component
Vue.component('vue-grid-component', require('./components/VueGridComponent.vue'));
Vue.component('passport-login-component', require('./components/PassportLoginComponent.vue'));
Vue.component('passport-portal-component', require('./components/PassportPortalComponent.vue'));
Vue.component('app-main-nav-component', require('./components/AppMainNavComponent.vue'));
Vue.component('app-main-footer-component', require('./components/AppMainFooterComponent.vue'));

// register form component
Vue.component('notification-component', require('./components/forms/NotificationComponent.vue'));

Vue.store = new Vuex.Store({
        state: {
            connect: false,
            message: '',
            ismainpage: true
        },
        mutations: {
            updateIsmainpage(state, payload) {
                state.ismainpage = payload;
            }
        },
        actions: {
            refreshIsmainpage(context, payload) {
                context.commit('updateIsmainpage', payload);
            }
        }
});

// vue-router components & paths
Vue.router = new Router({
    routes: [
        {
            name: 'main',
            path: '/home',
            text: 'Bing Overseas Studies Program',
            component: require('./components/MainComponent.vue'),
            hasChildren: false,
            isRoute: true,
        },
        {
            path: '/message',
            text: 'Message',
            isRoute: false,
            hasChildren: true,
            component: require('./components/MessageComponent.vue'),
            children: [
                {
                    name: 'compose',
                    component: require('./components/MessageComposeComponent.vue'),
                    path: '/message/compose',
                    text: 'Compose'
                },
                {
                    name: 'inbox',
                    component: require('./components/MessageInboxComponent.vue'),
                    path: '/message/inbox',
                    text: 'Inbox',
                    // props: {searchQuery: vueInboxData.searchQuery,gridColumns: vueInboxData.gridColumns,gridData: vueInboxData.gridData}
                },
                {
                    name: 'outbox',
                    component: require('./components/MessageOutboxComponent.vue'),
                    path: '/message/outbox',
                    text: 'Outbox',
                    // props: {searchQuery: vueOutboxData.searchQuery,gridColumns: vueOutboxData.gridColumns,gridData: vueOutboxData.gridData}
                },
            ]
        }
    ]
})




// setting authentication using Vue Auth
Vue.http.options.root = 'http://localhost:8007';
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
    loginData: {url: 'oauth/token'},
    fetchData: {url: 'api/user'},
    // refreshData: {url: 'oauth/token/refresh', method: 'POST'},
    refreshData: {enabled: false},
    authRedirect: {path: '/'},
    parseUserData(data) {
        return data;
    }
});

var component = require('./components/PassportAppComponent.vue');
component.router = Vue.router;
component.store = Vue.store;
// var vm = new Vue(component);
new Vue(component).$mount('#app');